import React from 'react';
import { 
  Compass, 
  Layers, 
  BookOpen, 
  Rocket, 
  BarChart3, 
  Award, 
  FolderArchive, 
  HelpCircle, 
  Lock, 
  RotateCcw,
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { UserProgressState } from '../../types';
import { getLevelForPoints, INSTITUTION_INFO } from '../../constants/auth';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  progressState: UserProgressState;
  onOpenTeacherMode: () => void;
  onRequestResetAll: () => void;
  isTeacherMode: boolean;
  onExitTeacherMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  setActiveTab,
  progressState,
  onOpenTeacherMode,
  onRequestResetAll,
  isTeacherMode,
  onExitTeacherMode
}) => {
  const currentLevel = getLevelForPoints(progressState.puntosTotales);
  const unlockedAchievementsCount = progressState.logrosDesbloqueados.length;

  const navItems = [
    { id: 'inicio', label: 'INICIO', icon: Compass },
    { id: 'ejes', label: 'EJES', icon: Layers },
    { id: 'clases', label: 'CLASES', icon: BookOpen },
    { id: 'campana', label: 'MI CAMPAÑA', icon: Rocket, highlight: true },
    { id: 'progreso', label: 'PROGRESO', icon: BarChart3 },
    { id: 'logros', label: 'LOGROS', icon: Award, badge: unlockedAchievementsCount },
    { id: 'portafolio', label: 'PORTAFOLIO', icon: FolderArchive },
    { id: 'ayuda', label: 'AYUDA', icon: HelpCircle }
  ];

  return (
    <header className="sticky top-0 z-40 bg-slate-900/95 backdrop-blur-md border-b border-slate-800 text-slate-100 shadow-md">
      {/* Barra superior de identificación institucional */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-950 text-emerald-300 border border-emerald-800/60">
            Escuela Nº 787
          </span>
          <span className="hidden sm:inline font-medium text-slate-300">
            {INSTITUTION_INFO.nombre}
          </span>
          <span className="text-slate-600 hidden md:inline">|</span>
          <span className="hidden md:inline text-slate-400">
            {INSTITUTION_INFO.periodo} • {INSTITUTION_INFO.dias}
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-slate-800/80 px-2.5 py-1 rounded-full border border-slate-700/60">
            <span className="text-sm">{currentLevel.icono}</span>
            <span className="font-semibold text-slate-200">{currentLevel.nombre}</span>
            <span className="text-slate-500">•</span>
            <span className="text-amber-400 font-bold">{progressState.puntosTotales} pts</span>
          </div>

          {isTeacherMode ? (
            <button
              onClick={onExitTeacherMode}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-rose-600 hover:bg-rose-500 text-white transition-colors shadow-sm"
              title="Volver al Modo Alumno"
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Salir de Panel Docente
            </button>
          ) : (
            <button
              onClick={onOpenTeacherMode}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-amber-300 border border-amber-500/40 hover:border-amber-400 transition-all shadow-sm"
              title="Acceder con contraseña al Panel Docente"
            >
              <Lock className="w-3.5 h-3.5" />
              MODO DOCENTE
            </button>
          )}

          <button
            onClick={onRequestResetAll}
            className="text-slate-400 hover:text-rose-400 transition-colors p-1"
            title="Restablecer todo el laboratorio"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Titular del Laboratorio y Navegación Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 flex items-center justify-center text-white shadow-lg shadow-emerald-950/40">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-wider text-emerald-400 font-semibold">
              Laboratorio Virtual Educativo
            </div>
            <h1 className="text-base sm:text-lg font-bold text-white tracking-tight">
              COMUNICACIÓN DIGITAL Y REDES
            </h1>
          </div>
        </div>

        {/* Pestañas de Navegación del Modo Alumno */}
        {!isTeacherMode && (
          <nav className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`relative flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                    isActive
                      ? item.highlight
                        ? 'bg-rose-600 text-white shadow-sm'
                        : 'bg-emerald-600 text-white shadow-sm'
                      : item.highlight
                      ? 'text-rose-400 hover:bg-rose-950/40 hover:text-rose-300'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.label}</span>
                  {item.badge !== undefined && item.badge > 0 && (
                    <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] bg-amber-400/20 text-amber-300 border border-amber-400/40 font-bold">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
};
