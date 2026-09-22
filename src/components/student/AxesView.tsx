import React from 'react';
import { Layers, CheckCircle2, CircleDot, ArrowRight, RotateCcw } from 'lucide-react';
import { UserProgressState } from '../../types';
import { AXES_DATA } from '../../data/axesData';
import { ALL_CLASSES } from '../../data/classes';
import { resetAxis } from '../../services/storage';

interface AxesViewProps {
  progressState: UserProgressState;
  onNavigateClass: (classId: number) => void;
  onUpdateState: (newState: UserProgressState) => void;
}

export const AxesView: React.FC<AxesViewProps> = ({
  progressState,
  onNavigateClass,
  onUpdateState
}) => {
  const handleResetAxis = (axisId: string, axisName: string) => {
    if (window.confirm(`¿Desea restablecer todas las clases y actividades del ${axisName}?`)) {
      const updated = resetAxis(progressState, axisId);
      onUpdateState(updated);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-200">
      <div>
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
          <Layers className="w-4 h-4" />
          <span>Estructura Curricular del Taller</span>
        </div>
        <h2 className="text-2xl font-extrabold text-white">
          Los 5 Ejes Formativos de Comunicación Digital
        </h2>
        <p className="text-sm text-slate-400 mt-1 max-w-3xl">
          El trayecto formativo está organizado en 5 ejes pedagógicos progresivos que transforman a los estudiantes de consumidores pasivos de redes sociales en prosumidores conscientes, creativos y críticos.
        </p>
      </div>

      <div className="space-y-6">
        {AXES_DATA.map((axis) => {
          const axisClasses = ALL_CLASSES.filter((c) => c.ejeId === axis.id);
          const completedClasses = axisClasses.filter((c) => progressState.clasesProgreso[c.id]?.completada);
          const percent = Math.round((completedClasses.length / axis.clasesCount) * 100);

          return (
            <div
              key={axis.id}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-6 lg:p-8 space-y-6 shadow-xl"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-800 pb-5">
                <div className="space-y-1">
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      {axis.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {axis.clasesRango} • {axis.clasesCount} Clases
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {axis.nombre}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
                    {axis.descripcion}
                  </p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-right">
                    <span className="text-xs text-slate-400 block font-medium">Progreso del Eje</span>
                    <span className="text-lg font-bold text-emerald-400 font-mono">
                      {completedClasses.length} / {axis.clasesCount} ({percent}%)
                    </span>
                  </div>
                  <button
                    onClick={() => handleResetAxis(axis.id, axis.nombre)}
                    className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-rose-400 border border-slate-700 transition-colors"
                    title="Reiniciar este eje"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Objetivos de aprendizaje del eje */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Objetivos formativos del eje
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {axis.objetivos.map((obj, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-300 bg-slate-800/40 p-2.5 rounded-xl border border-slate-700/40">
                      <span className="text-emerald-400 font-bold">•</span>
                      <span>{obj}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Clases del eje */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Clases interactivas del eje
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
                  {axisClasses.map((clase) => {
                    const isCompleted = progressState.clasesProgreso[clase.id]?.completada;
                    const isInProgress = progressState.clasesProgreso[clase.id]?.enProgreso;

                    return (
                      <div
                        key={clase.id}
                        onClick={() => onNavigateClass(clase.id)}
                        className={`p-3.5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                          isCompleted
                            ? 'bg-slate-800/60 border-emerald-500/40 hover:border-emerald-500'
                            : isInProgress
                            ? 'bg-slate-800/40 border-amber-500/40 hover:border-amber-500'
                            : 'bg-slate-800/20 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
                        }`}
                      >
                        <div>
                          <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1">
                            <span className="font-semibold text-slate-300">Clase {clase.numero}</span>
                            <span>{clase.fecha}</span>
                          </div>
                          <h5 className="text-xs font-bold text-white line-clamp-1">
                            {clase.titulo}
                          </h5>
                          <p className="text-[11px] text-slate-400 mt-1 line-clamp-2">
                            {clase.objetivo}
                          </p>
                        </div>

                        <div className="flex items-center justify-between pt-2 border-t border-slate-800 text-[11px]">
                          {isCompleted ? (
                            <span className="text-emerald-400 flex items-center gap-1 font-semibold">
                              <CheckCircle2 className="w-3.5 h-3.5" /> Completada
                            </span>
                          ) : isInProgress ? (
                            <span className="text-amber-400 flex items-center gap-1 font-semibold">
                              <CircleDot className="w-3.5 h-3.5" /> En curso
                            </span>
                          ) : (
                            <span className="text-slate-500">Pendiente</span>
                          )}

                          <span className="text-slate-400 hover:text-white flex items-center gap-0.5 font-medium">
                            Entrar <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
