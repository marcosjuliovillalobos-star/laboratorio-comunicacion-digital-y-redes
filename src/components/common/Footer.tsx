import React from 'react';
import { INSTITUTION_INFO } from '../../constants/auth';
import { HelpCircle, Sparkles, BookOpen } from 'lucide-react';

export const Footer: React.FC<{ onNavigateHelp?: () => void }> = ({ onNavigateHelp }) => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 text-slate-400 text-xs py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        {/* Pregunta orientadora destacada */}
        <div className="bg-slate-800/60 rounded-xl p-4 border border-slate-700/60 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mt-0.5">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
                Pregunta Orientadora del Taller
              </span>
              <p className="text-slate-200 text-sm font-medium italic">
                “{INSTITUTION_INFO.preguntaCentral}”
              </p>
            </div>
          </div>

          <div className="text-xs text-slate-400 md:text-right border-t md:border-t-0 border-slate-700/50 pt-2 md:pt-0 w-full md:w-auto">
            <span className="font-semibold text-slate-300 block">Enfoque Pedagógico:</span>
            <span>De consumidores pasivos a prosumidores críticos</span>
          </div>
        </div>

        {/* Metadatos institucionales */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div>
            <h4 className="text-slate-200 font-semibold mb-2 flex items-center gap-1.5 text-xs">
              <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
              Institución Educativa
            </h4>
            <p className="text-slate-400">{INSTITUTION_INFO.nombre}</p>
            <p className="text-slate-500 mt-1">{INSTITUTION_INFO.nivel} • {INSTITUTION_INFO.modalidad}</p>
          </div>

          <div>
            <h4 className="text-slate-200 font-semibold mb-2 text-xs">
              Calendario del Taller
            </h4>
            <p className="text-slate-400">{INSTITUTION_INFO.periodo}</p>
            <p className="text-slate-500 mt-1">{INSTITUTION_INFO.fechas} ({INSTITUTION_INFO.dias}, {INSTITUTION_INFO.duracion})</p>
          </div>

          <div className="md:text-right space-y-2">
            <h4 className="text-slate-200 font-semibold text-xs">
              Meta de Demostración
            </h4>
            <p className="text-slate-300 italic text-xs leading-relaxed">
              “{INSTITUTION_INFO.lemaMetas}”
            </p>
            {onNavigateHelp && (
              <button
                onClick={onNavigateHelp}
                className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium text-xs mt-1"
              >
                <HelpCircle className="w-3.5 h-3.5" />
                Guía del Laboratorio y Glosario
              </button>
            )}
          </div>
        </div>

        <div className="border-t border-slate-800/80 pt-4 text-center text-slate-500 text-[11px]">
          Laboratorio Virtual de Comunicación Digital y Redes • 26 Clases Interactivas • Almacenamiento Local Offline
        </div>
      </div>
    </footer>
  );
};
