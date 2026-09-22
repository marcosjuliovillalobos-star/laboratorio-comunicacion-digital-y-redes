import { UserProgressState, ClassProgress, FinalCampaignData } from '../types';
import { ACHIEVEMENTS } from '../data/achievementsData';
import { AXES_DATA } from '../data/axesData';

const STORAGE_KEY = 'lab_comunicacion_redes_787_progress_v2';

export const INITIAL_CAMPAIGN_STATE: FinalCampaignData = {
  brief: {
    tema: '',
    problema: '',
    proposito: '',
    audiencia: '',
    mensaje: '',
    mensajeParaguas: '',
    plataforma: '',
    tono: ''
  },
  piezas: {
    publicacionFeed: '',
    historia: '',
    videoGuion: '',
    hashtags: '',
    cta: ''
  },
  optimizacion: {
    versionPrevia: '',
    versionOptimizada: '',
    justificacionMejoras: '',
    checklistEtica: false,
    checklistAccesibilidad: false,
    checklistCoherencia: false
  },
  presentacion: {
    queComunica: '',
    justificacionMedio: '',
    verificacionFuentes: '',
    usoIA: '',
    aprendizajes: ''
  },
  estado: 'no_iniciado'
};

export const createEmptyClassProgress = (classId: number): ClassProgress => ({
  classId,
  completada: false,
  enProgreso: false,
  actividadAnalizarRealizada: false,
  actividadAnalizarPuntaje: 0,
  actividadPracticarRealizada: false,
  actividadPracticarPuntaje: 0,
  actividadDesafioRealizada: false,
  actividadDesafioPuntaje: 0,
  produccionRealizada: false,
  autoevaluacionRealizada: false,
  autoevaluacionPuntaje: 0,
  puntajeObtenido: 0
});

export function getInitialState(): UserProgressState {
  const clasesProgreso: Record<number, ClassProgress> = {};
  for (let i = 1; i <= 26; i++) {
    clasesProgreso[i] = createEmptyClassProgress(i);
  }
  return {
    version: '1.0',
    puntosTotales: 0,
    clasesProgreso,
    logrosDesbloqueados: [],
    campanaFinal: { ...INITIAL_CAMPAIGN_STATE },
    ultimaClaseVisitada: 1,
    fechaUltimoAcceso: new Date().toISOString()
  };
}

/**
 * Carga el estado actual desde localStorage o inicializa uno nuevo
 */
export function loadProgress(): UserProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      const initial = getInitialState();
      saveProgress(initial);
      return initial;
    }

    const parsed = JSON.parse(raw) as Partial<UserProgressState>;
    const initial = getInitialState();

    const clasesProgreso: Record<number, ClassProgress> = { ...initial.clasesProgreso };
    for (let i = 1; i <= 26; i++) {
      const saved = parsed.clasesProgreso?.[i];
      if (saved) {
        clasesProgreso[i] = {
          ...createEmptyClassProgress(i),
          ...saved,
          classId: i
        };
      }
    }

    const state: UserProgressState = {
      ...initial,
      ...parsed,
      version: '2.0',
      clasesProgreso,
      campanaFinal: parsed.campanaFinal
        ? {
            ...INITIAL_CAMPAIGN_STATE,
            ...parsed.campanaFinal,
            brief: { ...INITIAL_CAMPAIGN_STATE.brief, ...parsed.campanaFinal.brief },
            piezas: { ...INITIAL_CAMPAIGN_STATE.piezas, ...parsed.campanaFinal.piezas },
            optimizacion: { ...INITIAL_CAMPAIGN_STATE.optimizacion, ...parsed.campanaFinal.optimizacion },
            presentacion: { ...INITIAL_CAMPAIGN_STATE.presentacion, ...parsed.campanaFinal.presentacion }
          }
        : { ...INITIAL_CAMPAIGN_STATE }
    };

    state.puntosTotales = calculateScore(state);
    const checked = checkAchievements(state);
    checked.state.puntosTotales = calculateScore(checked.state);
    saveProgress(checked.state);
    return checked.state;
  } catch (err) {
    console.error('Error al cargar progreso de localStorage:', err);
    const initial = getInitialState();
    saveProgress(initial);
    return initial;
  }
}

/**
 * Guarda el estado en localStorage
 */
export function saveProgress(state: UserProgressState): void {
  try {
    state.fechaUltimoAcceso = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (err) {
    console.error('Error al guardar progreso en localStorage:', err);
  }
}

/**
 * Recalcula los puntos totales acumulados
 */
export function calculateScore(state: UserProgressState): number {
  let total = 0;
  Object.values(state.clasesProgreso).forEach((cp) => {
    total += (cp.actividadAnalizarPuntaje || 0) +
             (cp.actividadPracticarPuntaje || 0) +
             (cp.actividadDesafioPuntaje || 0) +
             (cp.autoevaluacionPuntaje || 0) +
             (cp.produccionRealizada ? 50 : 0);
  });
  if (state.campanaFinal.estado === 'completada') {
    total += 300;
  } else if (state.campanaFinal.estado === 'en_progreso') {
    total += 100;
  }
  return total;
}

/**
 * Calcula el porcentaje general de avance (sobre 26 clases)
 */
export function calculateProgress(state: UserProgressState): {
  clasesCompletadas: number;
  clasesEnProgreso: number;
  clasesPendientes: number;
  porcentaje: number;
  actividadesTotalesRealizadas: number;
  produccionesRealizadas: number;
  produccionesCompletadas: number;
} {
  let completadas = 0;
  let enProgreso = 0;
  let actividadesRealizadas = 0;
  let produccionesRealizadas = 0;

  for (let i = 1; i <= 26; i++) {
    const cp = state.clasesProgreso[i];
    if (cp) {
      if (cp.completada) {
        completadas++;
      } else if (cp.enProgreso || cp.actividadAnalizarRealizada || cp.actividadPracticarRealizada || cp.actividadDesafioRealizada) {
        enProgreso++;
      }
      if (cp.actividadAnalizarRealizada) actividadesRealizadas++;
      if (cp.actividadPracticarRealizada) actividadesRealizadas++;
      if (cp.actividadDesafioRealizada) actividadesRealizadas++;
      if (cp.autoevaluacionRealizada) actividadesRealizadas++;
      if (cp.produccionRealizada) produccionesRealizadas++;
    }
  }

  const porcentaje = Math.round((completadas / 26) * 100);
  const pendientes = 26 - completadas - enProgreso;

  return {
    clasesCompletadas: completadas,
    clasesEnProgreso: enProgreso,
    clasesPendientes: pendientes,
    porcentaje,
    actividadesTotalesRealizadas: actividadesRealizadas,
    produccionesRealizadas,
    produccionesCompletadas: produccionesRealizadas
  };
}

/**
 * Comprueba y actualiza los logros conseguidos
 */
export function checkAchievements(state: UserProgressState): { state: UserProgressState; nuevosLogros: string[] } {
  const nuevos: string[] = [];
  const actuales = new Set(state.logrosDesbloqueados);

  ACHIEVEMENTS.forEach((ach) => {
    if (!actuales.has(ach.id)) {
      let desbloquear = false;
      if (ach.claseIdRequerida) {
        const cp = state.clasesProgreso[ach.claseIdRequerida];
        if (cp && cp.completada) {
          desbloquear = true;
        }
      }
      if (ach.id === 'logro-18' && state.campanaFinal.estado === 'completada' && state.clasesProgreso[26]?.completada) {
        desbloquear = true;
      }
      if (desbloquear) {
        actuales.add(ach.id);
        nuevos.push(ach.id);
      }
    }
  });

  state.logrosDesbloqueados = Array.from(actuales);
  state.puntosTotales = calculateScore(state);
  return { state, nuevosLogros: nuevos };
}

/**
 * Registra la resolución de una actividad (analizar, practicar, desafío)
 */
export function recordActivityCompletion(
  state: UserProgressState,
  classId: number,
  tipo: 'analizar' | 'practicar' | 'desafio',
  score: number,
  answerData: any
): UserProgressState {
  const next = { ...state };
  const cp = { ...next.clasesProgreso[classId] };

  if (tipo === 'analizar') {
    cp.actividadAnalizarRealizada = true;
    cp.actividadAnalizarPuntaje = score;
    cp.actividadAnalizarRespuesta = answerData;
  } else if (tipo === 'practicar') {
    cp.actividadPracticarRealizada = true;
    cp.actividadPracticarPuntaje = score;
    cp.actividadPracticarRespuesta = answerData;
  } else if (tipo === 'desafio') {
    cp.actividadDesafioRealizada = true;
    cp.actividadDesafioPuntaje = score;
    cp.actividadDesafioRespuesta = answerData;
  }

  // Verificar si la clase se completa
  const todasRealizadas =
    cp.actividadAnalizarRealizada &&
    cp.actividadPracticarRealizada &&
    cp.actividadDesafioRealizada &&
    cp.produccionRealizada &&
    cp.autoevaluacionRealizada;

  cp.completada = todasRealizadas;
  cp.enProgreso = !todasRealizadas;
  if (todasRealizadas && !cp.fechaCompletada) {
    cp.fechaCompletada = new Date().toISOString();
  }

  cp.puntajeObtenido =
    (cp.actividadAnalizarPuntaje || 0) +
    (cp.actividadPracticarPuntaje || 0) +
    (cp.actividadDesafioPuntaje || 0) +
    (cp.autoevaluacionPuntaje || 0) +
    (cp.produccionRealizada ? 50 : 0);

  next.clasesProgreso[classId] = cp;
  next.puntosTotales = calculateScore(next);
  checkAchievements(next);
  saveProgress(next);
  return next;
}

/**
 * Guarda la producción concreta del estudiante para el portafolio digital
 */
export function saveProduction(
  state: UserProgressState,
  classId: number,
  contenido: Record<string, string>
): UserProgressState {
  const next = { ...state };
  const cp = { ...next.clasesProgreso[classId] };

  cp.produccionRealizada = true;
  cp.produccionContenido = contenido;
  cp.produccionFecha = new Date().toISOString();

  const todasRealizadas =
    cp.actividadAnalizarRealizada &&
    cp.actividadPracticarRealizada &&
    cp.actividadDesafioRealizada &&
    cp.produccionRealizada &&
    cp.autoevaluacionRealizada;

  cp.completada = todasRealizadas;
  cp.enProgreso = !todasRealizadas;
  if (todasRealizadas && !cp.fechaCompletada) {
    cp.fechaCompletada = new Date().toISOString();
  }

  cp.puntajeObtenido =
    (cp.actividadAnalizarPuntaje || 0) +
    (cp.actividadPracticarPuntaje || 0) +
    (cp.actividadDesafioPuntaje || 0) +
    (cp.autoevaluacionPuntaje || 0) +
    50;

  next.clasesProgreso[classId] = cp;
  next.puntosTotales = calculateScore(next);
  checkAchievements(next);
  saveProgress(next);
  return next;
}

/**
 * Guarda la autoevaluación reflexiva del estudiante
 */
export function saveAutoevaluation(
  state: UserProgressState,
  classId: number,
  respuestas: any,
  puntaje: number
): UserProgressState {
  const next = { ...state };
  const cp = { ...next.clasesProgreso[classId] };

  cp.autoevaluacionRealizada = true;
  cp.autoevaluacionRespuestas = respuestas;
  cp.autoevaluacionPuntaje = puntaje;

  const todasRealizadas =
    cp.actividadAnalizarRealizada &&
    cp.actividadPracticarRealizada &&
    cp.actividadDesafioRealizada &&
    cp.produccionRealizada &&
    cp.autoevaluacionRealizada;

  cp.completada = todasRealizadas;
  cp.enProgreso = !todasRealizadas;
  if (todasRealizadas && !cp.fechaCompletada) {
    cp.fechaCompletada = new Date().toISOString();
  }

  cp.puntajeObtenido =
    (cp.actividadAnalizarPuntaje || 0) +
    (cp.actividadPracticarPuntaje || 0) +
    (cp.actividadDesafioPuntaje || 0) +
    cp.autoevaluacionPuntaje +
    (cp.produccionRealizada ? 50 : 0);

  next.clasesProgreso[classId] = cp;
  next.puntosTotales = calculateScore(next);
  checkAchievements(next);
  saveProgress(next);
  return next;
}

/**
 * Actualiza el brief de la campaña final
 */
export function updateCampaignBrief(
  state: UserProgressState,
  brief: FinalCampaignData['brief']
): UserProgressState {
  const next = { ...state };
  next.campanaFinal = {
    ...next.campanaFinal,
    brief,
    estado: 'en_progreso'
  };
  next.puntosTotales = calculateScore(next);
  saveProgress(next);
  return next;
}

/**
 * Actualiza las piezas de la campaña final
 */
export function updateCampaignPieces(
  state: UserProgressState,
  piezas: FinalCampaignData['piezas']
): UserProgressState {
  const next = { ...state };
  next.campanaFinal = {
    ...next.campanaFinal,
    piezas,
    estado: 'en_progreso'
  };
  next.puntosTotales = calculateScore(next);
  saveProgress(next);
  return next;
}

/**
 * Actualiza la optimización de la campaña final
 */
export function updateCampaignOptimization(
  state: UserProgressState,
  optimizacion: FinalCampaignData['optimizacion']
): UserProgressState {
  const next = { ...state };
  next.campanaFinal = {
    ...next.campanaFinal,
    optimizacion,
    estado: 'en_progreso'
  };
  next.puntosTotales = calculateScore(next);
  saveProgress(next);
  return next;
}

/**
 * Actualiza la presentación / defensa final de la campaña
 */
export function updateCampaignPresentation(
  state: UserProgressState,
  presentacion: FinalCampaignData['presentacion']
): UserProgressState {
  const next = { ...state };
  next.campanaFinal = {
    ...next.campanaFinal,
    presentacion,
    estado: 'completada'
  };
  next.puntosTotales = calculateScore(next);
  checkAchievements(next);
  saveProgress(next);
  return next;
}

/**
 * REINICIAR ACTIVIDAD
 */
export function resetActivity(
  state: UserProgressState,
  classId: number,
  tipoActividad: 'analizar' | 'practicar' | 'desafio' | 'produccion' | 'autoevaluacion'
): UserProgressState {
  const next = { ...state };
  const cp = { ...next.clasesProgreso[classId] };

  if (tipoActividad === 'analizar') {
    cp.actividadAnalizarRealizada = false;
    cp.actividadAnalizarPuntaje = 0;
    delete cp.actividadAnalizarRespuesta;
  } else if (tipoActividad === 'practicar') {
    cp.actividadPracticarRealizada = false;
    cp.actividadPracticarPuntaje = 0;
    delete cp.actividadPracticarRespuesta;
  } else if (tipoActividad === 'desafio') {
    cp.actividadDesafioRealizada = false;
    cp.actividadDesafioPuntaje = 0;
    delete cp.actividadDesafioRespuesta;
  } else if (tipoActividad === 'produccion') {
    cp.produccionRealizada = false;
    delete cp.produccionContenido;
    delete cp.produccionFecha;
  } else if (tipoActividad === 'autoevaluacion') {
    cp.autoevaluacionRealizada = false;
    cp.autoevaluacionPuntaje = 0;
    delete cp.autoevaluacionRespuestas;
  }

  const todasRealizadas =
    cp.actividadAnalizarRealizada &&
    cp.actividadPracticarRealizada &&
    cp.actividadDesafioRealizada &&
    cp.produccionRealizada &&
    cp.autoevaluacionRealizada;

  cp.completada = todasRealizadas;
  cp.enProgreso = (
    cp.actividadAnalizarRealizada ||
    cp.actividadPracticarRealizada ||
    cp.actividadDesafioRealizada ||
    cp.produccionRealizada ||
    cp.autoevaluacionRealizada
  ) && !todasRealizadas;

  cp.puntajeObtenido =
    (cp.actividadAnalizarPuntaje || 0) +
    (cp.actividadPracticarPuntaje || 0) +
    (cp.actividadDesafioPuntaje || 0) +
    (cp.autoevaluacionPuntaje || 0) +
    (cp.produccionRealizada ? 50 : 0);

  next.clasesProgreso[classId] = cp;
  next.puntosTotales = calculateScore(next);
  saveProgress(next);
  return next;
}

/**
 * REINICIAR CLASE
 */
export function resetClass(state: UserProgressState, classId: number): UserProgressState {
  const next = { ...state };
  next.clasesProgreso[classId] = createEmptyClassProgress(classId);
  next.puntosTotales = calculateScore(next);
  saveProgress(next);
  return next;
}

/**
 * REINICIAR EJE
 */
export function resetAxis(state: UserProgressState, axisId: string): UserProgressState {
  const next = { ...state };
  const axis = AXES_DATA.find((a) => a.id === axisId);
  if (axis) {
    axis.clasesIds.forEach((cId) => {
      next.clasesProgreso[cId] = createEmptyClassProgress(cId);
    });
  }
  if (axisId === 'eje-5') {
    next.campanaFinal = { ...INITIAL_CAMPAIGN_STATE };
  }
  next.puntosTotales = calculateScore(next);
  saveProgress(next);
  return next;
}

/**
 * RESTABLECER TODO EL LABORATORIO
 */
export function resetAll(): UserProgressState {
  const freshState = getInitialState();
  saveProgress(freshState);
  return freshState;
}

export const resetEntireLab = resetAll;
