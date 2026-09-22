export type AxisId = 'eje-1' | 'eje-2' | 'eje-3' | 'eje-4' | 'eje-5';

export interface Axis {
  id: AxisId;
  numero: number;
  nombre: string;
  subtitulo: string;
  descripcion: string;
  clasesCount: number;
  clasesIds: number[];
  icono: string;
  color: string;
  badge?: string;
  clasesRango?: string;
  objetivos?: string[];
}

export type ActivityType = 
  | 'analisis_mensaje'
  | 'clasificacion'
  | 'multiple_choice'
  | 'verdadero_falso'
  | 'completar'
  | 'ordenar'
  | 'relacionar'
  | 'caso_estudio'
  | 'caso'
  | 'simulacion_red'
  | 'simulacion_algoritmo'
  | 'simulacion_ia'
  | 'toma_decisiones'
  | 'detector_desinformacion';

export interface BaseActivity {
  id: string;
  tipo: ActivityType;
  titulo: string;
  consigna: string;
  puntaje: number;
  explicacionDidactica?: string;
  data: any; // Type-specific payload
}

export interface QuestionOption {
  id: string;
  texto: string;
  esCorrecta: boolean;
  retroalimentacion: string;
}

export interface DidacticExample {
  id: string;
  titulo: string;
  tipo: 'publicacion' | 'mensaje' | 'caso' | 'comparacion' | 'storyboard' | 'esquema';
  contenido: string;
  analisis: string;
  imagenOEsquema?: string;
  metadatos?: Record<string, string>;
}

export interface ProductionTask {
  id: string;
  titulo: string;
  consigna: string;
  formato: string;
  campos: {
    id: string;
    label: string;
    placeholder: string;
    tipo: 'input' | 'textarea' | 'select';
    opciones?: string[];
    ayuda?: string;
  }[];
  criterioEvaluacion: string[];
}

export interface SelfAssessmentQuestion {
  id: string;
  pregunta: string;
  opciones: {
    id: string;
    texto: string;
    valor: number; // 1 to 4 or correct indicator
    esCorrecta?: boolean;
    retroalimentacion: string;
  }[];
}

export interface ClassData {
  id: number;
  numero: number;
  fecha: string;
  ejeId: AxisId;
  ejeNombre: string;
  titulo: string;
  objetivo: string;
  contenidos: string[];
  queVamosAAprender: string;
  explicacionTeorica: {
    seccion: string;
    texto: string;
    conceptosClave: { concepto: string; definicion: string }[];
    esquema?: string;
  };
  ejemplos: DidacticExample[];
  actividadAnalizar: BaseActivity;
  actividadPracticar: BaseActivity;
  actividadDesafio: BaseActivity;
  produccion: ProductionTask;
  autoevaluacion: SelfAssessmentQuestion[];
  puntajeMaximo: number;
  logroIdAsociado?: string;
}

export interface Achievement {
  id: string;
  titulo: string;
  descripcion: string;
  icono: string;
  puntos?: number;
  claseIdRequerida?: number;
  puntosMinimos?: number;
  desbloqueado?: boolean;
  categoria: 'comunicacion' | 'redes' | 'produccion' | 'critica' | 'campana' | 'especial';
}

export interface ClassProgress {
  classId: number;
  completada: boolean;
  enProgreso: boolean;
  actividadAnalizarRealizada: boolean;
  actividadAnalizarRespuesta?: any;
  actividadAnalizarPuntaje: number;
  
  actividadPracticarRealizada: boolean;
  actividadPracticarRespuesta?: any;
  actividadPracticarPuntaje: number;
  
  actividadDesafioRealizada: boolean;
  actividadDesafioRespuesta?: any;
  actividadDesafioPuntaje: number;
  
  produccionRealizada: boolean;
  produccionContenido?: Record<string, string>;
  produccionFecha?: string;
  
  autoevaluacionRealizada: boolean;
  autoevaluacionRespuestas?: any;
  autoevaluacionPuntaje: number;
  
  puntajeObtenido: number;
  fechaCompletada?: string;
}

export interface FinalCampaignData {
  brief: {
    tema: string;
    problema?: string;
    proposito: string;
    audiencia: string;
    mensaje?: string;
    mensajeParaguas?: string;
    plataforma: string;
    tono: string;
  };
  piezas: {
    publicacionFeed: string;
    historia: string;
    videoGuion: string;
    hashtags: string;
    cta: string;
  };
  optimizacion: {
    versionPrevia: string;
    versionOptimizada: string;
    justificacionMejoras: string;
    checklistEtica: boolean;
    checklistAccesibilidad: boolean;
    checklistCoherencia: boolean;
  };
  presentacion: {
    queComunica: string;
    justificacionMedio: string;
    verificacionFuentes: string;
    usoIA: string;
    aprendizajes: string;
    fechaFinalizacion?: string;
  };
  estado?: 'no_iniciado' | 'en_progreso' | 'completada';
}

export type CampanaFinalState = FinalCampaignData;

export interface UserProgressState {
  version: string;
  puntosTotales: number;
  clasesProgreso: Record<number, ClassProgress>;
  logrosDesbloqueados: string[]; // ids
  campanaFinal: FinalCampaignData;
  ultimaClaseVisitada: number;
  fechaUltimoAcceso: string;
}

export interface LevelInfo {
  nivel: number;
  nombre: string;
  puntosMin: number;
  puntosMax: number;
  icono: string;
  descripcion: string;
}
