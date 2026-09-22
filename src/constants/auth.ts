import { LevelInfo } from '../types';

/**
 * Contraseña local para acceso al Panel Docente
 * Modificar aquí si la institución requiere cambiar la clave.
 */
export const TEACHER_ACCESS_PASSWORD = 'docente2026';

export const INSTITUTION_INFO = {
  nombre: 'Escuela Secundaria de Tiempo Completo Nº 787 “Padre Lucio Sabatti”',
  espacio: 'Comunicación Digital y Redes',
  nivel: 'Ciclo Básico',
  modalidad: 'Taller optativo / Formación Complementaria',
  periodo: 'Segundo cuatrimestre de 2026',
  fechas: '1 de septiembre al 26 de noviembre de 2026',
  dias: 'Martes y Jueves',
  duracion: '1 hora reloj por encuentro',
  enfoque: 'Aprendizaje basado en la práctica, producción, análisis de situaciones y resolución de problemas reales (de consumidores a prosumidores críticos).',
  preguntaCentral: '¿Cómo puedo utilizar los medios digitales para comunicar eficazmente una idea a una determinada audiencia?',
  lemaMetas: 'Puedo construir un mensaje, identificar una audiencia, elegir un medio y producir una comunicación digital eficaz y responsable.'
};

export const LEVELS: LevelInfo[] = [
  {
    nivel: 1,
    nombre: 'Explorador Digital',
    puntosMin: 0,
    puntosMax: 499,
    icono: '🧭',
    descripcion: 'Inicias el reconocimiento de los medios y lenguajes digitales.'
  },
  {
    nivel: 2,
    nombre: 'Comunicador Digital',
    puntosMin: 500,
    puntosMax: 999,
    icono: '📡',
    descripcion: 'Comprendes a tus audiencias y los elementos del mensaje.'
  },
  {
    nivel: 3,
    nombre: 'Creador de Contenidos',
    puntosMin: 1000,
    puntosMax: 1699,
    icono: '🎨',
    descripcion: 'Dominas publicaciones, historias, copywriting y formatos audiovisuales.'
  },
  {
    nivel: 4,
    nombre: 'Estratega Digital',
    puntosMin: 1700,
    puntosMax: 2499,
    icono: '📊',
    descripcion: 'Diseñas campañas con objetivos claros y segmentación precisa.'
  },
  {
    nivel: 5,
    nombre: 'Ciudadano Digital Responsable',
    puntosMin: 2500,
    puntosMax: 3299,
    icono: '🛡️',
    descripcion: 'Verificas información, aplicas netiqueta y ética digital proactiva.'
  },
  {
    nivel: 6,
    nombre: 'Especialista en Comunicación Digital',
    puntosMin: 3300,
    puntosMax: 3954,
    icono: '🌟',
    descripcion: 'Has completado el laboratorio y dominas la comunicación integral.'
  }
];

export const USER_LEVELS = LEVELS;

export function getLevelForPoints(points: number): LevelInfo {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (points >= LEVELS[i].puntosMin) {
      return LEVELS[i];
    }
  }
  return LEVELS[0];
}
