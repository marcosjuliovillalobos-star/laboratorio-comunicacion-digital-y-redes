import React from 'react';
import { 
  Rocket, 
  BookOpen, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Layers, 
  Sparkles, 
  Target,
  FileCheck,
  Compass
} from 'lucide-react';
import { UserProgressState } from '../../types';
import { ALL_CLASSES } from '../../data/classes';
import { AXES_DATA } from '../../data/axesData';
import { ACHIEVEMENTS } from '../../data/achievementsData';
import { getLevelForPoints, INSTITUTION_INFO } from '../../constants/auth';
import { calculateProgress } from '../../services/storage';

interface StudentDashboardProps {
  progressState: UserProgressState;
  onNavigateClass: (classId: number) => void;
  onNavigateTab: (tab: string) => void;
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({
  progressState,
  onNavigateClass,
  onNavigateTab
}) => {
  const stats = calculateProgress(progressState);
  const currentLevel = getLevelForPoints(progressState.puntosTotales);

  // Determinar la clase activa o siguiente pendiente
  const nextPendingClass = ALL_CLASSES.find((c) => !progressState.clasesProgreso[c.id]?.completada) || ALL_CLASSES[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-200">
      {/* BANNER PRINCIPAL / HERO CON PROPÓSITO PEDAGÓGICO */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 border border-emerald-500/30 p-6 sm:p-8 shadow-2xl">
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Taller de Comunicación Digital y Redes • 2º Cuatrimestre 2026</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
              De Consumidores Pasivos a Prosumidores Críticos
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
              Aprenderás a construir mensajes con propósito, descifrar los algoritmos, verificar información y producir contenidos digitales responsables para tu escuela y comunidad.
            </p>
            <div className="pt-1 flex flex-wrap items-center gap-4 text-xs text-emerald-400 font-medium">
              <span className="flex items-center gap-1.5">
                <Target className="w-4 h-4" /> 26 Clases Prácticas
              </span>
              <span className="flex items-center gap-1.5">
                <Layers className="w-4 h-4" /> 5 Ejes Formativos
              </span>
              <span className="flex items-center gap-1.5">
                <FileCheck className="w-4 h-4" /> 1 Campaña Final Integral
              </span>
            </div>
          </div>

          {/* Tarjeta de Acción Rápida: Continuar Clase */}
          <div className="bg-slate-800/80 backdrop-blur-md border border-slate-700/80 p-5 rounded-2xl lg:max-w-sm w-full shadow-lg flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                <span className="uppercase font-bold tracking-wider text-emerald-400">
                  {progressState.clasesProgreso[nextPendingClass.id]?.enProgreso ? 'En Curso' : 'Siguiente Clase'}
                </span>
                <span>Clase {nextPendingClass.numero} de 26</span>
              </div>
              <h3 className="text-base font-bold text-white line-clamp-1">
                {nextPendingClass.titulo}
              </h3>
              <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                {nextPendingClass.objetivo}
              </p>
            </div>

            <button
              onClick={() => onNavigateClass(nextPendingClass.id)}
              className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold transition-all shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>Continuar en el Laboratorio</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Cita orientadora */}
        <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-slate-400">
          <div className="italic">
            “{INSTITUTION_INFO.preguntaCentral}”
          </div>
          <div className="text-slate-500 font-semibold">
            {INSTITUTION_INFO.nombre}
          </div>
        </div>
      </div>

      {/* MÉTRICAS Y ESTADO DEL ESTUDIANTE */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Nivel y Rango */}
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-2xl">
            {currentLevel.icono}
          </div>
          <div>
            <span className="text-xs text-slate-400 block font-medium">Nivel de Prosumidor</span>
            <span className="text-sm font-bold text-white block">{currentLevel.nombre}</span>
            <span className="text-xs text-amber-400 font-mono font-bold mt-0.5 block">
              {progressState.puntosTotales} puntos acumulados
            </span>
          </div>
        </div>

        {/* Avance en Clases */}
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <BookOpen className="w-6 h-6" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>Clases completadas</span>
              <span className="font-bold text-white">{stats.clasesCompletadas} / 26</span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mt-2">
              <div 
                className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${stats.porcentaje}%` }}
              />
            </div>
            <span className="text-[11px] text-emerald-400 font-medium block mt-1">
              {stats.porcentaje}% del recorrido finalizado
            </span>
          </div>
        </div>

        {/* Logros */}
        <div 
          onClick={() => onNavigateTab('logros')}
          className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex items-center gap-4 cursor-pointer hover:border-violet-500/40 transition-colors"
        >
          <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-slate-400 block font-medium">Logros Desbloqueados</span>
            <span className="text-sm font-bold text-white block">
              {progressState.logrosDesbloqueados.length} de {ACHIEVEMENTS.length}
            </span>
            <span className="text-xs text-violet-400 hover:underline mt-0.5 block">
              Ver vitrina de insignias →
            </span>
          </div>
        </div>

        {/* Mi Campaña Final */}
        <div 
          onClick={() => onNavigateTab('campana')}
          className="bg-slate-900 border border-slate-800 p-5 rounded-2xl flex items-center gap-4 cursor-pointer hover:border-rose-500/40 transition-colors"
        >
          <div className="w-12 h-12 rounded-xl bg-rose-500/10 border border-rose-500/30 flex items-center justify-center text-rose-400">
            <Rocket className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs text-slate-400 block font-medium">Proyecto Integrador</span>
            <span className="text-sm font-bold text-white block capitalize">
              {progressState.campanaFinal.estado.replace('_', ' ')}
            </span>
            <span className="text-xs text-rose-400 hover:underline mt-0.5 block">
              Abrir ficha de campaña →
            </span>
          </div>
        </div>
      </div>

      {/* LOS 5 EJES FORMATIVOS */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-white">Los 5 Ejes Temáticos del Taller</h2>
            <p className="text-xs text-slate-400">
              Un recorrido secuencial que va desde los fundamentos teóricos hasta la producción y defensa final.
            </p>
          </div>
          <button
            onClick={() => onNavigateTab('ejes')}
            className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
          >
            Ver detalle de ejes →
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {AXES_DATA.map((axis) => {
            const axisClasses = ALL_CLASSES.filter((c) => c.ejeId === axis.id);
            const completedCount = axisClasses.filter((c) => progressState.clasesProgreso[c.id]?.completada).length;
            const progressPercent = Math.round((completedCount / axis.clasesCount) * 100);

            return (
              <div
                key={axis.id}
                className="bg-slate-900 border border-slate-800 hover:border-slate-700 p-5 rounded-2xl transition-all flex flex-col justify-between space-y-4"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-800 text-emerald-400 border border-emerald-500/20">
                      {axis.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {completedCount}/{axis.clasesCount} clases
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white">
                    {axis.nombre}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1 line-clamp-2">
                    {axis.descripcion}
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-[11px] text-slate-400">
                      {progressPercent === 100 ? 'Eje completado' : `${progressPercent}% realizado`}
                    </span>
                    <button
                      onClick={() => onNavigateClass(axisClasses[0].id)}
                      className="text-xs font-semibold text-emerald-400 hover:text-emerald-300 flex items-center gap-1"
                    >
                      Ir a clases →
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
