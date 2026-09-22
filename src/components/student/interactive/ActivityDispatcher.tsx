import React from 'react';
import { BaseActivity } from '../../../types';
import { MultipleChoiceActivity } from './MultipleChoiceActivity';
import { ClasificacionActivity } from './ClasificacionActivity';
import { QuestionListActivity } from './QuestionListActivity';
import { RelacionarActivity } from './RelacionarActivity';

interface Props { activity: BaseActivity; isCompleted:boolean; savedAnswer?:any; onComplete:(score:number,answer:any)=>void; onReset:()=>void; }
export const ActivityDispatcher:React.FC<Props>=({activity,isCompleted,savedAnswer,onComplete,onReset})=>{
 switch(activity.tipo){
  case 'clasificacion':
  case 'detector_desinformacion':
    if(activity.tipo==='detector_desinformacion'){
      const casos=activity.data?.casos||[];
      const adapted={...activity,tipo:'clasificacion' as const,data:{items:casos.map((c:any)=>({id:c.id,text:o(c.texto),categoriaCorrecta:c.esFalsa?'DESINFORMACIÓN':'INFORMACIÓN'})),categorias:['INFORMACIÓN','DESINFORMACIÓN'],casos:casos.map((c:any)=>({...c,correcta:c.esFalsa?'DESINFORMACIÓN':'INFORMACIÓN',opciones:['INFORMACIÓN','DESINFORMACIÓN']}))}};
      return <ClasificacionActivity activity={adapted} isCompleted={isCompleted} savedAnswer={savedAnswer} onComplete={onComplete} onReset={onReset}/>;
    }
    return <ClasificacionActivity activity={activity} isCompleted={isCompleted} savedAnswer={savedAnswer} onComplete={onComplete} onReset={onReset}/>;
  case 'analisis_mensaje': return <QuestionListActivity activity={activity} isCompleted={isCompleted} savedAnswer={savedAnswer} onComplete={onComplete} onReset={onReset}/>;
  case 'relacionar': return <RelacionarActivity activity={activity} isCompleted={isCompleted} savedAnswer={savedAnswer} onComplete={onComplete} onReset={onReset}/>;
  default: return <MultipleChoiceActivity activity={activity} isCompleted={isCompleted} savedAnswer={savedAnswer} onComplete={onComplete} onReset={onReset}/>;
 }
};
const o=(v:any)=>String(v??'');
