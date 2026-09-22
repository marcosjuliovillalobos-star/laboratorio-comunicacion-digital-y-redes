import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  CheckCircle2, 
  Clock, 
  CircleDot, 
  ArrowRight, 
  RotateCcw,
  Sparkles
} from 'lucide-react';
import { UserProgressState } from '../../types';
import { ALL_CLASSES } from '../../data/classes';
import { AXES_DATA } from '../../data/axesData';
import { resetClass } from '../../services/storage';

interface ClassesListViewProps {
  progressState: UserProgressState;
  onNavigateClass: (classId: number) => void;
  onUpdateState: (newState: UserProgressState) => void;
}

export const ClassesListView: React.FC<ClassesListViewProps> = ({
  progressState,
  onNavigateClass,
  onUpdateState
}) => {
  const [axisFilter, setAxisFilter] = useState<string>('todos');
  const [statusFilter, setStatusFilter] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState('');

  const handleResetClass = (e: React.MouseEvent, classId: number, classTitle: string) => {
    e.stopPropagation();
    if (window.confirm(`¿Desea reiniciar la Clase Nº ${classId} (${classTitle})? Se borrarán sus actividades y respuestas guardadas.`)) {
      const updated = resetClass(progressState, classId);
      onUpdateState(updated);
    }
  };

  const filteredClasses = ALL_CLASSES.filter((c) => {
    const cp = progressState.clasesProgreso[c.id];
    const status = cp?.completada ? 'completada' : (cp?.enProgreso ? 'en_progreso' : 'pendiente');

    const matchesAxis = axisFilter === 'todos' || c.ejeId === axisFilter;
    const matchesStatus = statusFilter === 'todos' || status === statusFilter;
    const matchesSearch = c.titulo.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.objetivo.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          c.numero.toString() === searchQuery ||
                          c.fecha.includes(searchQuery);

    return matchesAxis && matchesStatus && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-200">
      {/* Encabezado */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
            <BookOpen className="w-4 h-4" />
            <span>Itinerario Completo del Taller</span>
          </div>
          <h2 className="text-2xl font-extrabold text-white">
            Las 26 Clases del Laboratorio Virtual
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Cada clase es un laboratorio práctico de 10 etapas con teoría contextualizada, ejemplos, actividades interactivas, producción y autoevaluación.
          </p>
        </div>
      </div>

      {/* Barra de Filtros y Búsqueda */}
      <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-3 shadow-lg">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por clase, tema o fecha..."
            className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-emerald-500 transition-colors"
          />
        </div>

        <div className="flex items-center gap-2 flex-wrap w-full md:w-auto">
          {/* Selector de Eje */}
          <select
            value={axisFilter}
            onChange={(e) => setAxisFilter(e.target.value)}
            className="bg-slate-800 border border-slate-700 text-xs rounded-xl px-3 py-2 text-slate-200 outline-none focus:border-emerald-500"
          >
            <option value="todos">Todos los Ejes (1 al 5)</option>
            {AXES_DATA.map((a) => (
              <option key={a.id} value={a.id}>
                Eje {a.numero}: {a.nombre}
              </option>
            ))}
          </select>

          {/* Selector de Estado */}
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="bg-slate-800 border border-slate-700 text-xs rounded-xl px-3 py-2 text-slate-200 outline-none focus:border-emerald-500"
          >
            <option value="todos">Todos los Estados</option>
            <option value="completada">Completadas</option>
            <option value="en_progreso">En progreso</option>
            <option value="pendiente">Pendientes</option>
          </select>
        </div>
      </div>

      {/* Grid de Clases */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredClasses.map((clase) => {
          const cp = progressState.clasesProgreso[clase.id];
          const isCompleted = cp?.completada;
          const isInProgress = cp?.enProgreso;

          return (
            <div
              key={clase.id}
              onClick={() => onNavigateClass(clase.id)}
              className={`group bg-slate-900 border rounded-3xl p-5 sm:p-6 transition-all cursor-pointer flex flex-col justify-between space-y-4 hover:shadow-xl ${
                isCompleted
                  ? 'border-emerald-500/40 hover:border-emerald-400 bg-gradient-to-b from-slate-900 to-emerald-950/20'
                  : isInProgress
                  ? 'border-amber-500/40 hover:border-amber-400 bg-gradient-to-b from-slate-900 to-amber-950/20'
                  : 'border-slate-800 hover:border-slate-700 hover:bg-slate-800'
              }`}
            >
              <div>
                {/* Metadatos superiores */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2.5">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-800 text-slate-300 border border-slate-700 group-hover:border-emerald-500/40">
                      Clase {clase.numero}
                    </span>
                    <span className="text-slate-500">•</span>
                    <span className="font-mono text-slate-400">{clase.fecha}</span>
                  </div>
                  <button
                    onClick={(e) => handleResetClass(e, clase.id, clase.titulo)}
                    className="p-1 rounded-lg text-slate-500 hover:text-rose-400 hover:bg-slate-800 transition-colors"
                    title="Reiniciar esta clase"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                  </button>
                </div>

                <span className="text-[11px] uppercase tracking-wider text-emerald-400 font-bold block mb-1">
                  {clase.ejeNombre}
                </span>

                <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors line-clamp-1">
                  {clase.titulo}
                </h3>

                <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                  {clase.objetivo}
                </p>
              </div>

              {/* Pie de tarjeta */}
              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <div>
                  {isCompleted ? (
                    <span className="inline-flex items-center gap-1.5 text-emerald-400 font-semibold bg-emerald-950/60 border border-emerald-800 px-2.5 py-1 rounded-full text-[11px]">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Completada ({cp.puntajeObtenido} pts)
                    </span>
                  ) : isInProgress ? (
                    <span className="inline-flex items-center gap-1.5 text-amber-400 font-semibold bg-amber-950/60 border border-amber-800 px-2.5 py-1 rounded-full text-[11px]">
                      <Clock className="w-3.5 h-3.5" />
                      En progreso
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 text-slate-400 bg-slate-800 px-2.5 py-1 rounded-full text-[11px]">
                      <CircleDot className="w-3.5 h-3.5" />
                      Pendiente
                    </span>
                  )}
                </div>

                <div className="inline-flex items-center gap-1 text-emerald-400 font-bold group-hover:translate-x-1 transition-transform">
                  <span>Ingresar</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {filteredClasses.length === 0 && (
        <div className="text-center py-16 bg-slate-900 border border-slate-800 rounded-3xl p-8">
          <BookOpen className="w-10 h-10 text-slate-600 mx-auto mb-3" />
          <h3 className="text-base font-bold text-white">No se encontraron clases con los filtros seleccionados</h3>
          <p className="text-xs text-slate-400 mt-1">Probá restablecer la búsqueda o seleccionar otro eje temático.</p>
        </div>
      )}
    </div>
  );
};
