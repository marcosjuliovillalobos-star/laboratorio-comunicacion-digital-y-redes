import React, { useState } from 'react';
import { 
  FolderArchive, 
  CheckCircle2, 
  Clock, 
  Layers, 
  ExternalLink, 
  Download, 
  Printer, 
  Search,
  FileText
} from 'lucide-react';
import { UserProgressState } from '../../types';
import { ALL_CLASSES } from '../../data/classes';
import { AXES_DATA } from '../../data/axesData';

interface PortfolioViewProps {
  progressState: UserProgressState;
  onNavigateClass: (classId: number) => void;
}

export const PortfolioView: React.FC<PortfolioViewProps> = ({
  progressState,
  onNavigateClass
}) => {
  const [selectedAxis, setSelectedAxis] = useState<string>('todos');
  const [search, setSearch] = useState<string>('');

  const completedProductions = ALL_CLASSES.filter(
    (c) => progressState.clasesProgreso[c.id]?.produccionRealizada
  );

  const filteredClasses = ALL_CLASSES.filter((c) => {
    const matchesAxis = selectedAxis === 'todos' || c.ejeId === selectedAxis;
    const matchesSearch = c.titulo.toLowerCase().includes(search.toLowerCase()) ||
                          c.produccion.titulo.toLowerCase().includes(search.toLowerCase()) ||
                          c.numero.toString() === search;
    return matchesAxis && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-200">
      {/* Encabezado */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
            <FolderArchive className="w-4 h-4" />
            <span>Evidencias de Aprendizaje</span>
          </div>
          <h2 className="text-2xl font-extrabold text-white">
            Portafolio Digital del Estudiante
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Colección de las 26 producciones concretas creadas a lo largo del taller, organizadas por eje temático.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-xs text-slate-300">
            Producciones Guardadas: <strong className="text-emerald-400 font-mono text-sm">{completedProductions.length}</strong> / 26
          </div>
          <button
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold border border-slate-700"
          >
            <Printer className="w-3.5 h-3.5" />
            Imprimir
          </button>
        </div>
      </div>

      {/* Filtros */}
      <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="relative w-full sm:w-80">
          <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por producción o clase..."
            className="w-full bg-slate-800 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 outline-none focus:border-emerald-500"
          />
        </div>

        <div className="flex items-center gap-2 w-full sm:w-auto overflow-x-auto">
          <button
            onClick={() => setSelectedAxis('todos')}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
              selectedAxis === 'todos' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
            }`}
          >
            Todos los Ejes
          </button>
          {AXES_DATA.map((a) => (
            <button
              key={a.id}
              onClick={() => setSelectedAxis(a.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
                selectedAxis === a.id ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {a.badge}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de Producciones */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClasses.map((clase) => {
          const cp = progressState.clasesProgreso[clase.id];
          const hasProduction = Boolean(cp?.produccionRealizada);
          const content = cp?.produccionContenido || {};

          return (
            <div
              key={clase.id}
              className={`bg-slate-900 border rounded-3xl p-6 transition-all flex flex-col justify-between space-y-4 ${
                hasProduction ? 'border-emerald-500/40 shadow-lg' : 'border-slate-800 opacity-80'
              }`}
            >
              <div>
                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                  <span className="font-bold text-slate-300">Clase {clase.numero}</span>
                  <span className="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-slate-300 border border-slate-700">
                    {clase.ejeNombre}
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white mb-1">
                  {clase.produccion.titulo}
                </h3>
                <span className="text-[11px] text-emerald-400 block mb-3 font-mono">
                  Formato: {clase.produccion.formato}
                </span>

                {/* Contenido guardado */}
                {hasProduction ? (
                  <div className="bg-slate-950/70 p-3.5 rounded-2xl border border-slate-800 space-y-2 text-xs">
                    {Object.entries(content).slice(0, 3).map(([k, val]) => {
                      const campoDef = clase.produccion.campos.find((f) => f.id === k);
                      return (
                        <div key={k} className="border-b border-slate-800/80 pb-1.5 last:border-b-0">
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">
                            {campoDef?.label || k}:
                          </span>
                          <p className="text-slate-200 mt-0.5 line-clamp-2">
                            {val}
                          </p>
                        </div>
                      );
                    })}
                    {cp?.produccionFecha && (
                      <span className="text-[9px] text-slate-500 block text-right">
                        Actualizado: {new Date(cp.produccionFecha).toLocaleDateString()}
                      </span>
                    )}
                  </div>
                ) : (
                  <div className="bg-slate-800/50 p-4 rounded-2xl border border-dashed border-slate-800 text-center text-xs text-slate-500 italic">
                    Producción aún pendiente de realización.
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-800">
                {hasProduction ? (
                  <span className="inline-flex items-center gap-1.5 text-emerald-400 text-xs font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Guardada
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 text-slate-500 text-xs">
                    <Clock className="w-3.5 h-3.5" /> Pendiente
                  </span>
                )}

                <button
                  onClick={() => onNavigateClass(clase.id)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
                >
                  <span>{hasProduction ? 'Editar en Clase' : 'Completar'}</span>
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
