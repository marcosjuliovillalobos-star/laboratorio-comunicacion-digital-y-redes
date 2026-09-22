import React from 'react';
import { 
  BarChart3, 
  Award, 
  CheckCircle2, 
  Clock, 
  Target, 
  Layers, 
  Sparkles,
  Rocket
} from 'lucide-react';
import { UserProgressState } from '../../types';
import { ALL_CLASSES } from '../../data/classes';
import { AXES_DATA } from '../../data/axesData';
import { getLevelForPoints, USER_LEVELS } from '../../constants/auth';
import { calculateProgress } from '../../services/storage';

interface ProgressViewProps {
  progressState: UserProgressState;
  onNavigateClass: (classId: number) => void;
}

export const ProgressView: React.FC<ProgressViewProps> = ({
  progressState,
  onNavigateClass
}) => {
  const stats = calculateProgress(progressState);
  const currentLevel = getLevelForPoints(progressState.puntosTotales);

  // Determinar siguiente nivel
  const currentLevelIndex = USER_LEVELS.findIndex((l) => l.nombre === currentLevel.nombre);
  const nextLevel = USER_LEVELS[currentLevelIndex + 1];

  let pointsToNext = 0;
  let levelPercent = 100;
  if (nextLevel) {
    const range = nextLevel.puntosMin - currentLevel.puntosMin;
    const currentPointsInRange = progressState.puntosTotales - currentLevel.puntosMin;
    levelPercent = Math.min(100, Math.round((currentPointsInRange / range) * 100));
    pointsToNext = Math.max(0, nextLevel.puntosMin - progressState.puntosTotales);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-200">
      <div>
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
          <BarChart3 className="w-4 h-4" />
          <span>Métricas de Aprendizaje</span>
        </div>
        <h2 className="text-2xl font-extrabold text-white">
          Tu Progreso en el Laboratorio Virtual
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Seguí de cerca tu evolución como prosumidor crítico, tus puntos acumulados y el estado de cada uno de los 5 ejes formativos.
        </p>
      </div>

      {/* Tarjeta de Nivel y Puntos */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950 border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/40 text-3xl flex items-center justify-center">
              {currentLevel.icono}
            </div>
            <div>
              <span className="text-xs text-amber-400 uppercase font-bold tracking-wider block">
                Nivel Actual
              </span>
              <h3 className="text-xl font-bold text-white">
                {currentLevel.nombre}
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                {currentLevel.descripcion}
              </p>
            </div>
          </div>

          <div className="text-right">
            <span className="text-xs text-slate-400 block">Puntos Acumulados</span>
            <span className="text-3xl font-extrabold text-amber-400 font-mono">
              {progressState.puntosTotales} pts
            </span>
          </div>
        </div>

        {/* Barra hacia el próximo nivel */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs">
            <span className="text-slate-300">
              Progreso de nivel: <strong className="text-amber-400">{levelPercent}%</strong>
            </span>
            <span className="text-slate-400">
              {nextLevel ? `Faltan ${pointsToNext} pts para "${nextLevel.nombre}"` : '¡Alcanzaste el rango máximo!'}
            </span>
          </div>
          <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
            <div 
              className="bg-gradient-to-r from-amber-500 to-yellow-400 h-full rounded-full transition-all duration-500"
              style={{ width: `${levelPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Estadísticas Detalladas de Actividades */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-1">
          <span className="text-xs text-slate-400 block font-medium">Clases Finalizadas</span>
          <span className="text-2xl font-bold text-white font-mono">{stats.clasesCompletadas} / 26</span>
          <span className="text-[11px] text-emerald-400 block">{stats.porcentaje}% del total</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-1">
          <span className="text-xs text-slate-400 block font-medium">Actividades Resueltas</span>
          <span className="text-2xl font-bold text-sky-400 font-mono">{stats.actividadesTotalesRealizadas}</span>
          <span className="text-[11px] text-slate-500 block">Análisis, prácticas y desafíos</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-1">
          <span className="text-xs text-slate-400 block font-medium">Logros Desbloqueados</span>
          <span className="text-2xl font-bold text-violet-400 font-mono">{progressState.logrosDesbloqueados.length} / 18</span>
          <span className="text-[11px] text-violet-300 block">Insignias obtenidas</span>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-1">
          <span className="text-xs text-slate-400 block font-medium">Producciones Guardadas</span>
          <span className="text-2xl font-bold text-rose-400 font-mono">{stats.produccionesCompletadas} / 26</span>
          <span className="text-[11px] text-slate-500 block">En tu portafolio digital</span>
        </div>
      </div>

      {/* Desglose por Eje Formativo */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-6">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <Layers className="w-5 h-5 text-emerald-400" />
          Avance Detallado por Eje Curricular
        </h3>

        <div className="space-y-5">
          {AXES_DATA.map((axis) => {
            const axisClasses = ALL_CLASSES.filter((c) => c.ejeId === axis.id);
            const completedInAxis = axisClasses.filter((c) => progressState.clasesProgreso[c.id]?.completada).length;
            const percentAxis = Math.round((completedInAxis / axis.clasesCount) * 100);

            return (
              <div key={axis.id} className="bg-slate-800 p-4 rounded-2xl border border-slate-700 space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 block">
                      {axis.badge} • {axis.clasesRango}
                    </span>
                    <h4 className="text-sm font-bold text-white">
                      {axis.nombre}
                    </h4>
                  </div>
                  <div className="text-right font-mono text-xs">
                    <span className="text-emerald-400 font-bold">{completedInAxis}/{axis.clasesCount} clases</span>
                    <span className="text-slate-500 ml-2">({percentAxis}%)</span>
                  </div>
                </div>

                <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                    style={{ width: `${percentAxis}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
