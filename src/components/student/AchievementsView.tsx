import React from 'react';
import { Award, CheckCircle2, Lock, Sparkles } from 'lucide-react';
import { UserProgressState } from '../../types';
import { ACHIEVEMENTS } from '../../data/achievementsData';

interface AchievementsViewProps {
  progressState: UserProgressState;
}

export const AchievementsView: React.FC<AchievementsViewProps> = ({
  progressState
}) => {
  const unlockedIds = new Set(progressState.logrosDesbloqueados);
  const unlockedCount = progressState.logrosDesbloqueados.length;
  const percent = Math.round((unlockedCount / ACHIEVEMENTS.length) * 100);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-200">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-violet-400 uppercase tracking-wider mb-1">
            <Award className="w-4 h-4" />
            <span>Gamificación y Reconocimiento</span>
          </div>
          <h2 className="text-2xl font-extrabold text-white">
            Vitrina de Logros e Insignias del Taller
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Desbloqueá las 18 insignias completando las clases, superando desafíos interactivos y produciendo tu campaña final.
          </p>
        </div>

        <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl flex items-center gap-4">
          <div className="text-right">
            <span className="text-xs text-slate-400 block font-medium">Insignias Desbloqueadas</span>
            <span className="text-xl font-bold font-mono text-violet-400">
              {unlockedCount} / {ACHIEVEMENTS.length} ({percent}%)
            </span>
          </div>
          <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 font-bold">
            🏆
          </div>
        </div>
      </div>

      {/* Grid de 18 Logros */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {ACHIEVEMENTS.map((ach) => {
          const isUnlocked = unlockedIds.has(ach.id);

          return (
            <div
              key={ach.id}
              className={`p-5 rounded-3xl border transition-all flex items-start gap-4 ${
                isUnlocked
                  ? 'bg-slate-900 border-violet-500/40 shadow-lg shadow-violet-950/20'
                  : 'bg-slate-900/60 border-slate-800 opacity-60'
              }`}
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shrink-0 border ${
                isUnlocked
                  ? 'bg-violet-500/10 border-violet-500/40 text-violet-300'
                  : 'bg-slate-800 border-slate-700 text-slate-500 grayscale'
              }`}>
                {isUnlocked ? ach.icono : '🔒'}
              </div>

              <div className="space-y-1 flex-1">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-bold uppercase tracking-wider ${
                    isUnlocked ? 'text-violet-400' : 'text-slate-500'
                  }`}>
                    {ach.categoria}
                  </span>
                  <span className="text-[11px] font-mono font-bold text-amber-400">
                    +{ach.puntos} pts
                  </span>
                </div>

                <h3 className="text-sm font-bold text-white">
                  {ach.titulo}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {ach.descripcion}
                </p>

                <div className="pt-2">
                  {isUnlocked ? (
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400">
                      <CheckCircle2 className="w-3.5 h-3.5" /> Desbloqueado
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-[11px] text-slate-500">
                      <Lock className="w-3 h-3" /> Bloqueado
                    </span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
