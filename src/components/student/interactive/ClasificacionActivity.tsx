import React, { useMemo, useState } from 'react';
import { CheckCircle2, AlertCircle, RotateCcw, Sparkles } from 'lucide-react';
import { BaseActivity } from '../../../types';

interface ClasificacionActivityProps {
  activity: BaseActivity;
  isCompleted: boolean;
  savedAnswer?: Record<string, string>;
  onComplete: (score: number, answer: Record<string, string>) => void;
  onReset: () => void;
}

export const ClasificacionActivity: React.FC<ClasificacionActivityProps> = ({ activity, isCompleted, savedAnswer, onComplete, onReset }) => {
  const data = activity.data || {};
  const normalized = useMemo(() => {
    if (Array.isArray(data.items) && Array.isArray(data.categorias)) {
      return { items: data.items, categorias: data.categorias };
    }
    if (Array.isArray(data.casos)) {
      const categories = Array.from(new Set(data.casos.flatMap((c: any) => Array.isArray(c.opciones) ? c.opciones : []).filter(Boolean)));
      return {
        items: data.casos.map((c: any) => ({ id: c.id, texto: c.texto, categoriaCorrecta: c.correcta })),
        categorias: categories
      };
    }
    return { items: [], categorias: [] };
  }, [data]);

  const { items, categorias } = normalized;
  const [asignaciones, setAsignaciones] = useState<Record<string, string>>(savedAnswer || {});
  const [showFeedback, setShowFeedback] = useState<boolean>(isCompleted);
  const allAssigned = items.length > 0 && items.every((it: any) => asignaciones[it.id]);
  const allCorrect = items.length > 0 && items.every((it: any) => asignaciones[it.id] === it.categoriaCorrecta);

  const handleAssign = (itemId: string, categoria: string) => {
    if (showFeedback && isCompleted) return;
    setAsignaciones(prev => ({ ...prev, [itemId]: categoria }));
  };

  const handleVerify = () => {
    if (!allAssigned) return;
    setShowFeedback(true);
    if (allCorrect) onComplete(activity.puntaje, asignaciones);
  };

  const handleRetry = () => {
    setAsignaciones({});
    setShowFeedback(false);
    onReset();
  };

  return (
    <div className="space-y-5">
      <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700/60">
        <p className="text-sm font-medium text-slate-200 leading-relaxed">{activity.consigna}</p>
      </div>

      {items.length === 0 ? (
        <div className="p-4 rounded-xl border border-rose-500/50 bg-rose-950/30 text-rose-200 text-sm">
          No se pudieron cargar los elementos de esta clasificación. Reiniciá la actividad o recargá la clase.
        </div>
      ) : (
        <div className="bg-slate-900/80 p-4 rounded-2xl border border-slate-800 space-y-3">
          <span className="text-xs font-bold text-slate-300 block">Elegí la categoría para cada elemento:</span>
          <div className="space-y-3">
            {items.map((item: any, index: number) => (
              <div key={item.id} className="bg-slate-800 p-4 rounded-xl border border-slate-700">
                <div className="flex gap-3 items-start">
                  <span className="w-6 h-6 rounded-full bg-slate-700 text-emerald-300 flex items-center justify-center text-xs font-bold shrink-0">{index + 1}</span>
                  <p className="text-sm text-white font-medium leading-relaxed">{item.texto}</p>
                </div>
                <div className="flex flex-wrap gap-2 mt-3 pl-9">
                  {categorias.map((cat: string) => {
                    const selected = asignaciones[item.id] === cat;
                    const correct = showFeedback && item.categoriaCorrecta === cat;
                    const wrong = showFeedback && selected && !correct;
                    return (
                      <button key={cat} type="button" onClick={() => handleAssign(item.id, cat)} disabled={showFeedback && isCompleted}
                        className={`px-3 py-2 rounded-lg text-xs font-semibold border transition-colors ${correct ? 'bg-emerald-600 border-emerald-400 text-white' : wrong ? 'bg-rose-700 border-rose-400 text-white' : selected ? 'bg-emerald-600/80 border-emerald-400 text-white' : 'bg-slate-900 border-slate-600 text-slate-300 hover:bg-slate-700'}`}>
                        {cat}
                      </button>
                    );
                  })}
                </div>
                {showFeedback && (
                  <div className={`mt-3 ml-9 text-xs ${asignaciones[item.id] === item.categoriaCorrecta ? 'text-emerald-300' : 'text-rose-300'}`}>
                    {asignaciones[item.id] === item.categoriaCorrecta ? '✓ Correcto.' : `✗ Categoría correcta: ${item.categoriaCorrecta}.`}
                    {data.casos?.find((c: any) => c.id === item.id)?.explicacion && <span> {data.casos.find((c: any) => c.id === item.id).explicacion}</span>}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {showFeedback && items.length > 0 && (
        <div className={`p-4 rounded-xl border text-sm ${allCorrect ? 'bg-emerald-950/60 border-emerald-500/60 text-emerald-200' : 'bg-rose-950/60 border-rose-500/60 text-rose-200'}`}>
          {allCorrect ? <><CheckCircle2 className="inline w-4 h-4 mr-2" />¡Excelente clasificación! +{activity.puntaje} puntos</> : <><AlertCircle className="inline w-4 h-4 mr-2" />Hay elementos para revisar. Volvé a intentarlo.</>}
        </div>
      )}

      <div className="flex items-center justify-between pt-2">
        <button type="button" onClick={handleRetry} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-400 hover:text-slate-200 hover:bg-slate-800"><RotateCcw className="w-3.5 h-3.5" />Reiniciar Actividad</button>
        {!showFeedback ? <button type="button" disabled={!allAssigned} onClick={handleVerify} className="inline-flex items-center gap-2 px-5 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 disabled:opacity-40 text-white"><Sparkles className="w-3.5 h-3.5" />Comprobar Clasificación</button> : !allCorrect ? <button type="button" onClick={() => setShowFeedback(false)} className="px-4 py-2 rounded-xl text-xs font-bold bg-amber-600 text-slate-950">Intentar nuevamente</button> : null}
      </div>
    </div>
  );
};
