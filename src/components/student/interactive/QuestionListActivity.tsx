import React, { useState } from 'react';
import { CheckCircle2, AlertCircle, RotateCcw, Sparkles } from 'lucide-react';
import { BaseActivity } from '../../../types';

export const QuestionListActivity: React.FC<{activity: BaseActivity; isCompleted:boolean; savedAnswer?: Record<string,string>; onComplete:(score:number,answer:any)=>void; onReset:()=>void}> = ({activity,isCompleted,savedAnswer,onComplete,onReset}) => {
  const questions = activity.data?.preguntas || [];
  const [answers,setAnswers] = useState<Record<string,string>>(savedAnswer || {});
  const [checked,setChecked] = useState(isCompleted);
  const complete = questions.length>0 && questions.every((q:any)=>answers[q.id] !== undefined);
  const correct = complete && questions.every((q:any)=>Number(answers[q.id]) === Number(q.correctaIndex));
  const verify=()=>{if(!complete)return;setChecked(true);if(correct)onComplete(activity.puntaje,answers)};
  const reset=()=>{setAnswers({});setChecked(false);onReset()};
  return <div className="space-y-4">
    <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700"><p className="text-sm text-slate-200">{activity.consigna}</p></div>
    {questions.map((q:any,i:number)=><div key={q.id} className="bg-slate-900 border border-slate-700 rounded-xl p-4 space-y-3"><p className="text-sm font-semibold text-white">{i+1}. {q.etiqueta}</p><div className="grid gap-2">{q.opciones.map((o:string,j:number)=><button key={j} disabled={checked&&isCompleted} onClick={()=>setAnswers(a=>({...a,[q.id]:String(j)}))} className={`text-left p-3 rounded-lg border text-xs ${checked && j===q.correctaIndex?'border-emerald-500 bg-emerald-950/40 text-emerald-200':checked&&answers[q.id]===String(j)?'border-rose-500 bg-rose-950/40 text-rose-200':answers[q.id]===String(j)?'border-emerald-500 bg-emerald-950/20 text-white':'border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700'}`}>{o}</button>)}</div>{checked&&<p className="text-xs text-slate-300">{answers[q.id]===String(q.correctaIndex)?'✓ Correcto.':'✗ Revisá la respuesta.'} {q.retroalimentacion}</p>}</div>)}
    <div className="flex justify-between"><button onClick={reset} className="px-3 py-2 rounded-lg text-xs text-slate-400 hover:bg-slate-800"><RotateCcw className="inline w-3.5 h-3.5 mr-1"/>Reiniciar</button>{!checked?<button disabled={!complete} onClick={verify} className="px-5 py-2 rounded-xl bg-emerald-600 text-white text-xs font-bold disabled:opacity-40"><Sparkles className="inline w-3.5 h-3.5 mr-1"/>Comprobar</button>:correct?<span className="text-emerald-300 text-sm font-bold"><CheckCircle2 className="inline w-4 h-4 mr-1"/>+{activity.puntaje} puntos</span>:<button onClick={()=>setChecked(false)} className="px-4 py-2 rounded-xl bg-amber-600 text-slate-950 text-xs font-bold"><AlertCircle className="inline w-4 h-4 mr-1"/>Intentar nuevamente</button>}</div>
  </div>;
};
