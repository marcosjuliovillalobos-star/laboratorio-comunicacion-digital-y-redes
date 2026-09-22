import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, RotateCcw, HelpCircle, Sparkles } from 'lucide-react';
import { BaseActivity } from '../../../types';

interface MultipleChoiceActivityProps {
  activity: BaseActivity;
  isCompleted: boolean;
  savedAnswer?: string;
  onComplete: (score: number, answer: string) => void;
  onReset: () => void;
}

export const MultipleChoiceActivity: React.FC<MultipleChoiceActivityProps> = ({
  activity,
  isCompleted,
  savedAnswer,
  onComplete,
  onReset
}) => {
  const opciones = activity.data?.opciones || [];
  const [selectedId, setSelectedId] = useState<string | null>(savedAnswer || null);
  const [showFeedback, setShowFeedback] = useState<boolean>(isCompleted);

  const selectedOption = opciones.find((o) => o.id === (selectedId || savedAnswer));
  const isCorrect = selectedOption?.esCorrecta;

  const handleSelect = (opcionId: string) => {
    if (isCompleted && showFeedback) return;
    setSelectedId(opcionId);
  };

  const handleVerify = () => {
    if (!selectedId) return;
    const opcion = opciones.find((o) => o.id === selectedId);
    setShowFeedback(true);
    if (opcion?.esCorrecta) {
      onComplete(activity.puntaje, selectedId);
    }
  };

  const handleRetry = () => {
    setSelectedId(null);
    setShowFeedback(false);
    onReset();
  };

  return (
    <div className="space-y-4">
      <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700/60">
        <p className="text-sm font-medium text-slate-200 leading-relaxed">
          {activity.consigna}
        </p>
      </div>

      {/* Lista de Opciones */}
      <div className="space-y-2.5">
        {opciones.map((opcion) => {
          const isSelected = selectedId === opcion.id;
          let borderClass = 'border-slate-700 hover:border-slate-600 bg-slate-800/60 text-slate-200';

          if (showFeedback) {
            if (opcion.esCorrecta) {
              borderClass = 'border-emerald-500 bg-emerald-950/40 text-emerald-200';
            } else if (isSelected && !opcion.esCorrecta) {
              borderClass = 'border-rose-500 bg-rose-950/40 text-rose-200';
            } else {
              borderClass = 'border-slate-800 bg-slate-900/40 text-slate-400 opacity-60';
            }
          } else if (isSelected) {
            borderClass = 'border-emerald-500 bg-emerald-950/20 text-white font-semibold ring-1 ring-emerald-500/40';
          }

          return (
            <button
              key={opcion.id}
              type="button"
              disabled={showFeedback && isCompleted}
              onClick={() => handleSelect(opcion.id)}
              className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 text-xs leading-relaxed ${borderClass}`}
            >
              <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                showFeedback && opcion.esCorrecta
                  ? 'border-emerald-400 bg-emerald-500 text-white'
                  : showFeedback && isSelected && !opcion.esCorrecta
                  ? 'border-rose-400 bg-rose-500 text-white'
                  : isSelected
                  ? 'border-emerald-500 bg-emerald-600 text-white'
                  : 'border-slate-600 bg-slate-800'
              }`}>
                {showFeedback && opcion.esCorrecta ? (
                  <CheckCircle2 className="w-3.5 h-3.5" />
                ) : showFeedback && isSelected && !opcion.esCorrecta ? (
                  <AlertCircle className="w-3.5 h-3.5" />
                ) : (
                  <span className="text-[10px] font-bold">{isSelected ? '✓' : ''}</span>
                )}
              </div>
              <span className="flex-1">{opcion.texto}</span>
            </button>
          );
        })}
      </div>

      {/* Retroalimentación Formativa Inmediata */}
      {showFeedback && selectedOption && (
        <div className={`p-4 rounded-xl border text-xs leading-relaxed animate-in fade-in duration-200 ${
          isCorrect
            ? 'bg-emerald-950/60 border-emerald-500/60 text-emerald-200'
            : 'bg-rose-950/60 border-rose-500/60 text-rose-200'
        }`}>
          <div className="flex items-center gap-2 font-bold mb-1">
            {isCorrect ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>✓ ¡Correcto! +{activity.puntaje} puntos</span>
              </>
            ) : (
              <>
                <AlertCircle className="w-4 h-4 text-rose-400" />
                <span>✗ Revisá el concepto</span>
              </>
            )}
          </div>
          <p className="mt-1 text-slate-200">{selectedOption.retroalimentacion}</p>
        </div>
      )}

      {/* Botones de Acción */}
      <div className="flex items-center justify-between pt-2">
        <button
          type="button"
          onClick={handleRetry}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          Reiniciar Actividad
        </button>

        {!showFeedback ? (
          <button
            type="button"
            disabled={!selectedId}
            onClick={handleVerify}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white transition-all shadow-md shadow-emerald-950/40"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Comprobar Respuesta
          </button>
        ) : !isCorrect ? (
          <button
            type="button"
            onClick={() => setShowFeedback(false)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold bg-amber-600 hover:bg-amber-500 text-slate-950 transition-all"
          >
            Intentar nuevamente
          </button>
        ) : null}
      </div>
    </div>
  );
};
