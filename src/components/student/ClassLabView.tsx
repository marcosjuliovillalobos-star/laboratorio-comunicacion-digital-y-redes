import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  RotateCcw, 
  BookOpen, 
  HelpCircle, 
  Sparkles, 
  Layers, 
  Target, 
  Send, 
  Save, 
  Award,
  ChevronRight,
  Flame,
  FileText
} from 'lucide-react';
import { ClassData, UserProgressState } from '../../types';
import { ALL_CLASSES } from '../../data/classes';
import { ActivityDispatcher } from './interactive/ActivityDispatcher';
import { 
  recordActivityCompletion, 
  saveProduction, 
  saveAutoevaluation, 
  resetClass, 
  resetActivity 
} from '../../services/storage';

interface ClassLabViewProps {
  classData: ClassData;
  progressState: UserProgressState;
  onUpdateState: (newState: UserProgressState) => void;
  onNavigateClass: (classId: number) => void;
  onBackToList: () => void;
}

export const ClassLabView: React.FC<ClassLabViewProps> = ({
  classData,
  progressState,
  onUpdateState,
  onNavigateClass,
  onBackToList
}) => {
  // 10 Etapas Pedagógicas Estrictas
  const stages = [
    { id: 1, name: 'Presentación', group: 'Exploración' },
    { id: 2, name: '¿Qué aprenderemos?', group: 'Exploración' },
    { id: 3, name: 'Explorar', group: 'Exploración' },
    { id: 4, name: 'Ejemplos', group: 'Exploración' },
    { id: 5, name: 'Analizar', group: 'Práctica' },
    { id: 6, name: 'Practicar', group: 'Práctica' },
    { id: 7, name: 'Desafío', group: 'Práctica' },
    { id: 8, name: 'Producir', group: 'Producción' },
    { id: 9, name: 'Autoevaluación', group: 'Cierre' },
    { id: 10, name: 'Resultado', group: 'Cierre' }
  ];

  const [currentStep, setCurrentStep] = useState<number>(1);
  const classProgress = progressState.clasesProgreso[classData.id];

  // Estado del formulario de Producción
  const [productionForm, setProductionForm] = useState<Record<string, string>>(
    classProgress?.produccionContenido || {}
  );
  const [productionSaved, setProductionSaved] = useState<boolean>(
    Boolean(classProgress?.produccionRealizada)
  );

  // Estado de la Autoevaluación
  const [selectedAutoOption, setSelectedAutoOption] = useState<string | null>(null);

  // Sincronizar formulario si cambia la clase
  useEffect(() => {
    setProductionForm(classProgress?.produccionContenido || {});
    setProductionSaved(Boolean(classProgress?.produccionRealizada));
    setCurrentStep(1);
  }, [classData.id]);

  // Si la clase se acaba de completar, disparar confetti
  useEffect(() => {
    if (classProgress?.completada && currentStep === 10) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } catch (e) {
        // Ignorar si confetti falla
      }
    }
  }, [currentStep, classProgress?.completada]);

  // Manejadores de Actividades
  const handleCompleteActivity = (
    tipo: 'analizar' | 'practicar' | 'desafio',
    score: number,
    answerData: any
  ) => {
    const updated = recordActivityCompletion(progressState, classData.id, tipo, score, answerData);
    onUpdateState(updated);
  };

  const handleResetSingleActivity = (tipo: 'analizar' | 'practicar' | 'desafio') => {
    const updated = resetActivity(progressState, classData.id, tipo);
    onUpdateState(updated);
  };

  const handleSaveProduction = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = saveProduction(progressState, classData.id, productionForm);
    onUpdateState(updated);
    setProductionSaved(true);
  };

  const handleCompleteAutoevaluation = (optionId: string, valor: number) => {
    setSelectedAutoOption(optionId);
    const updated = saveAutoevaluation(progressState, classData.id, [optionId], valor);
    onUpdateState(updated);
  };

  const handleResetEntireClass = () => {
    if (window.confirm(`¿Desea reiniciar completamente la Clase ${classData.numero}? Se perderá el progreso de esta clase.`)) {
      const updated = resetClass(progressState, classData.id);
      onUpdateState(updated);
      setProductionForm({});
      setProductionSaved(false);
      setSelectedAutoOption(null);
      setCurrentStep(1);
    }
  };

  // Navegación entre clases anterior / siguiente
  const prevClass = ALL_CLASSES.find((c) => c.id === classData.id - 1);
  const nextClass = ALL_CLASSES.find((c) => c.id === classData.id + 1);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6 animate-in fade-in duration-200">
      {/* Barra de Control Superior */}
      <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900 border border-slate-800 p-4 rounded-2xl shadow-md">
        <button
          onClick={onBackToList}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          Volver al Listado de Clases
        </button>

        <div className="flex items-center gap-3">
          <span className="text-xs font-medium text-slate-400">
            Puntaje de Clase: <strong className="text-amber-400 font-mono">{classProgress?.puntajeObtenido || 0}</strong> / {classData.puntajeMaximo} pts
          </span>
          <button
            onClick={handleResetEntireClass}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-rose-400 hover:text-rose-300 hover:bg-rose-950/40 border border-rose-900/40 transition-colors"
            title="Reiniciar todas las actividades y producciones de esta clase"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            Reiniciar Clase
          </button>
        </div>
      </div>

      {/* BARRA DE NAVEGACIÓN EN 10 ETAPAS (PASO A PASO) */}
      <div className="bg-slate-900 border border-slate-800 p-3 rounded-2xl overflow-x-auto scrollbar-none shadow-md">
        <div className="flex items-center justify-between min-w-[700px] gap-1 text-[11px]">
          {stages.map((st) => {
            const isCurrent = currentStep === st.id;
            const isPassed = currentStep > st.id;

            return (
              <button
                key={st.id}
                onClick={() => setCurrentStep(st.id)}
                className={`flex-1 py-2 px-1 rounded-xl transition-all font-semibold flex flex-col items-center gap-1 relative ${
                  isCurrent
                    ? 'bg-emerald-600 text-white shadow-md'
                    : isPassed
                    ? 'bg-slate-800/80 text-emerald-400 hover:bg-slate-800'
                    : 'bg-slate-800 text-slate-400 hover:text-slate-200'
                }`}
              >
                <div className="flex items-center gap-1">
                  <span className="text-[10px] opacity-75">{st.id}.</span>
                  <span className="truncate">{st.name}</span>
                </div>
                <span className="text-[9px] uppercase tracking-wider opacity-60 font-normal">
                  {st.group}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* CONTENEDOR PRINCIPAL DE LA ETAPA ACTIVA */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl min-h-[460px] flex flex-col justify-between">
        {/* ETAPA 1: PRESENTACIÓN */}
        {currentStep === 1 && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-emerald-400 border border-emerald-500/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Etapa 1 de 10: Presentación del Laboratorio</span>
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                <span className="font-semibold text-slate-300">Clase Nº {classData.numero}</span>
                <span>•</span>
                <span className="font-mono">{classData.fecha}</span>
                <span>•</span>
                <span className="text-emerald-400 font-medium">{classData.ejeNombre}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {classData.titulo}
              </h2>
            </div>

            <div className="bg-slate-800/60 p-5 rounded-2xl border border-slate-700/60 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                <Target className="w-4 h-4" />
                <span>Objetivo Formativo de la Clase</span>
              </div>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {classData.objetivo}
              </p>
            </div>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Contenidos clave que abordaremos hoy:
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {classData.contenidos.map((c, i) => (
                  <div key={i} className="flex items-start gap-2 bg-slate-800 p-3 rounded-xl border border-slate-700 text-xs text-slate-300">
                    <span className="text-emerald-400 font-bold">•</span>
                    <span>{c}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ETAPA 2: ¿QUÉ VAMOS A APRENDER? */}
        {currentStep === 2 && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-emerald-400 border border-emerald-500/30">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Etapa 2 de 10: Propósito y Motivación</span>
            </div>

            <h3 className="text-xl font-bold text-white">
              ¿Por qué es importante aprender esto hoy?
            </h3>

            <div className="bg-gradient-to-br from-slate-800/80 to-slate-900 p-6 rounded-2xl border border-emerald-500/30 shadow-inner">
              <p className="text-base text-slate-200 leading-relaxed font-normal">
                {classData.queVamosAAprender}
              </p>
            </div>

            <div className="bg-slate-800 p-4 rounded-xl border border-slate-700 text-xs text-slate-400 flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <p>
                Este aprendizaje te aportará herramientas prácticas para diseñar tu <strong>Campaña Final</strong> y construir mensajes con mayor impacto, estética y solidez ética.
              </p>
            </div>
          </div>
        )}

        {/* ETAPA 3: EXPLORAR (CONTENIDO TEÓRICO DIDÁCTICO) */}
        {currentStep === 3 && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-emerald-400 border border-emerald-500/30">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Etapa 3 de 10: Explorar el Conocimiento</span>
            </div>

            <div>
              <span className="text-xs uppercase tracking-wider text-emerald-400 font-bold block mb-1">
                {classData.explicacionTeorica.seccion}
              </span>
              <h3 className="text-xl font-bold text-white">
                Marco Conceptual y Herramientas Analíticas
              </h3>
            </div>

            <div className="bg-slate-800/60 p-5 rounded-2xl border border-slate-700/60 leading-relaxed text-sm text-slate-200 space-y-4">
              <p>{classData.explicacionTeorica.texto}</p>
            </div>

            {/* Conceptos Clave */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Glosario de Conceptos Clave
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {classData.explicacionTeorica.conceptosClave.map((c, i) => (
                  <div key={i} className="bg-slate-800 p-4 rounded-xl border border-slate-700 space-y-1">
                    <span className="text-xs font-bold text-emerald-300 block">
                      {c.concepto}
                    </span>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      {c.definicion}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ETAPA 4: EJEMPLOS */}
        {currentStep === 4 && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-emerald-400 border border-emerald-500/30">
              <Layers className="w-3.5 h-3.5" />
              <span>Etapa 4 de 10: Ejemplos Didácticos Contextualizados</span>
            </div>

            <h3 className="text-xl font-bold text-white">
              Casos Reales y Análisis Situacionales
            </h3>

            <div className="space-y-4">
              {classData.ejemplos.map((ej) => (
                <div key={ej.id} className="bg-slate-800 border border-slate-700 rounded-2xl p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      {ej.titulo}
                    </h4>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-800 text-slate-300 uppercase">
                      {ej.tipo}
                    </span>
                  </div>

                  <div className="bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 text-xs text-slate-200 font-mono leading-relaxed">
                    {ej.contenido}
                  </div>

                  <div className="text-xs text-slate-300 bg-emerald-950/20 border border-emerald-800/30 p-3 rounded-xl flex items-start gap-2">
                    <strong className="text-emerald-400 shrink-0">Análisis:</strong>
                    <span>{ej.analisis}</span>
                  </div>

                  {ej.metadatos && (
                    <div className="flex flex-wrap gap-2 pt-1">
                      {Object.entries(ej.metadatos).map(([k, v]) => (
                        <span key={k} className="text-[10px] bg-slate-800 text-slate-400 px-2 py-0.5 rounded">
                          {k}: <span className="text-slate-200 font-medium">{v}</span>
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ETAPA 5: ANALIZAR */}
        {currentStep === 5 && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-emerald-400 border border-emerald-500/30">
                <Target className="w-3.5 h-3.5" />
                <span>Etapa 5 de 10: Actividad de Análisis (+{classData.actividadAnalizar.puntaje} pts)</span>
              </div>
              {classProgress?.actividadAnalizarRealizada && (
                <span className="inline-flex items-center gap-1 text-emerald-400 text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4" /> Completada
                </span>
              )}
            </div>

            <h3 className="text-xl font-bold text-white">
              {classData.actividadAnalizar.titulo}
            </h3>

            <ActivityDispatcher
              activity={classData.actividadAnalizar}
              isCompleted={Boolean(classProgress?.actividadAnalizarRealizada)}
              savedAnswer={classProgress?.actividadAnalizarRespuesta}
              onComplete={(score, answer) => handleCompleteActivity('analizar', score, answer)}
              onReset={() => handleResetSingleActivity('analizar')}
            />
          </div>
        )}

        {/* ETAPA 6: PRACTICAR */}
        {currentStep === 6 && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-emerald-400 border border-emerald-500/30">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Etapa 6 de 10: Práctica Interactiva (+{classData.actividadPracticar.puntaje} pts)</span>
              </div>
              {classProgress?.actividadPracticarRealizada && (
                <span className="inline-flex items-center gap-1 text-emerald-400 text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4" /> Completada
                </span>
              )}
            </div>

            <h3 className="text-xl font-bold text-white">
              {classData.actividadPracticar.titulo}
            </h3>

            <ActivityDispatcher
              activity={classData.actividadPracticar}
              isCompleted={Boolean(classProgress?.actividadPracticarRealizada)}
              savedAnswer={classProgress?.actividadPracticarRespuesta}
              onComplete={(score, answer) => handleCompleteActivity('practicar', score, answer)}
              onReset={() => handleResetSingleActivity('practicar')}
            />
          </div>
        )}

        {/* ETAPA 7: DESAFÍO */}
        {currentStep === 7 && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-amber-400 border border-amber-500/30">
                <Flame className="w-3.5 h-3.5" />
                <span>Etapa 7 de 10: Desafío de Mayor Complejidad (+{classData.actividadDesafio.puntaje} pts)</span>
              </div>
              {classProgress?.actividadDesafioRealizada && (
                <span className="inline-flex items-center gap-1 text-emerald-400 text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4" /> Superado
                </span>
              )}
            </div>

            <h3 className="text-xl font-bold text-white">
              {classData.actividadDesafio.titulo}
            </h3>

            <ActivityDispatcher
              activity={classData.actividadDesafio}
              isCompleted={Boolean(classProgress?.actividadDesafioRealizada)}
              savedAnswer={classProgress?.actividadDesafioRespuesta}
              onComplete={(score, answer) => handleCompleteActivity('desafio', score, answer)}
              onReset={() => handleResetSingleActivity('desafio')}
            />
          </div>
        )}

        {/* ETAPA 8: PRODUCIR (FORMULARIO CONCRETO PARA EL PORTAFOLIO) */}
        {currentStep === 8 && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-rose-400 border border-rose-500/30">
                <FileText className="w-3.5 h-3.5" />
                <span>Etapa 8 de 10: Producción para tu Portafolio Digital</span>
              </div>
              {productionSaved && (
                <span className="inline-flex items-center gap-1 text-emerald-400 text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4" /> Guardada en Portafolio
                </span>
              )}
            </div>

            <div>
              <h3 className="text-xl font-bold text-white">
                {classData.produccion.titulo}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                {classData.produccion.consigna}
              </p>
            </div>

            <form onSubmit={handleSaveProduction} className="space-y-4">
              {classData.produccion.campos.map((campo) => (
                <div key={campo.id} className="space-y-1.5">
                  <label className="block text-xs font-bold text-slate-200">
                    {campo.label}
                  </label>
                  {campo.tipo === 'textarea' ? (
                    <textarea
                      rows={3}
                      value={productionForm[campo.id] || ''}
                      onChange={(e) => setProductionForm({
                        ...productionForm,
                        [campo.id]: e.target.value
                      })}
                      placeholder={campo.placeholder}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 outline-none focus:border-emerald-500 transition-colors"
                      required
                    />
                  ) : (
                    <input
                      type="text"
                      value={productionForm[campo.id] || ''}
                      onChange={(e) => setProductionForm({
                        ...productionForm,
                        [campo.id]: e.target.value
                      })}
                      placeholder={campo.placeholder}
                      className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 outline-none focus:border-emerald-500 transition-colors"
                      required
                    />
                  )}
                </div>
              ))}

              <div className="bg-slate-800 p-3 rounded-xl border border-slate-700 text-xs text-slate-400">
                <strong className="text-slate-300">Criterio de Evaluación: </strong>
                {classData.produccion.criterioEvaluacion.join(' • ')}
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md shadow-emerald-950/40 cursor-pointer"
                >
                  <Save className="w-4 h-4" />
                  {productionSaved ? 'Actualizar y Guardar en Portafolio' : 'Guardar Producción en Portafolio (+15 pts)'}
                </button>
              </div>
            </form>
          </div>
        )}

        {/* ETAPA 9: AUTOEVALUACIÓN */}
        {currentStep === 9 && (
          <div className="space-y-6 animate-in fade-in duration-150">
            <div className="flex items-center justify-between">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-violet-400 border border-violet-500/30">
                <HelpCircle className="w-3.5 h-3.5" />
                <span>Etapa 9 de 10: Autoevaluación Reflexiva</span>
              </div>
              {classProgress?.autoevaluacionRealizada && (
                <span className="inline-flex items-center gap-1 text-emerald-400 text-xs font-bold">
                  <CheckCircle2 className="w-4 h-4" /> Registrada
                </span>
              )}
            </div>

            <h3 className="text-xl font-bold text-white">
              Reflexión sobre tu Propio Aprendizaje
            </h3>

            <div className="space-y-4">
              {classData.autoevaluacion.map((item) => (
                <div key={item.id} className="bg-slate-800 p-5 rounded-2xl border border-slate-700/80 space-y-3">
                  <p className="text-sm font-semibold text-white">
                    {item.pregunta}
                  </p>

                  <div className="space-y-2">
                    {item.opciones.map((op) => {
                      const isSelected = selectedAutoOption === op.id || classProgress?.autoevaluacionRespuestas?.includes(op.id);
                      return (
                        <button
                          key={op.id}
                          type="button"
                          onClick={() => handleCompleteAutoevaluation(op.id, op.valor)}
                          className={`w-full text-left p-3 rounded-xl border text-xs transition-all flex items-start gap-3 ${
                            isSelected
                              ? 'bg-violet-950/50 border-violet-500 text-white font-semibold'
                              : 'bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-750'
                          }`}
                        >
                          <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                            isSelected ? 'border-violet-400 bg-violet-500 text-white' : 'border-slate-600'
                          }`}>
                            {isSelected && <span className="text-[10px]">✓</span>}
                          </div>
                          <div>
                            <span>{op.texto}</span>
                            {isSelected && op.retroalimentacion && (
                              <p className="text-[11px] text-violet-300 mt-1 font-normal">
                                {op.retroalimentacion}
                              </p>
                            )}
                          </div>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ETAPA 10: RESULTADO DE LA CLASE */}
        {currentStep === 10 && (
          <div className="space-y-6 animate-in fade-in duration-150 text-center py-4">
            <div className="w-16 h-16 rounded-3xl bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-xl">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-emerald-400 border border-emerald-500/30 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Etapa 10 de 10: Resumen y Cierre de Clase</span>
              </div>
              <h3 className="text-2xl font-extrabold text-white">
                {classProgress?.completada ? '¡Clase Completada con Éxito!' : 'Resumen del Recorrido de la Clase'}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-md mx-auto">
                Completaste las actividades formativas, desafiaste tus conocimientos y dejaste tu producción guardada en el portafolio.
              </p>
            </div>

            {/* Tarjeta de Puntaje y Progreso */}
            <div className="bg-slate-800 p-6 rounded-3xl border border-slate-700 max-w-md mx-auto space-y-4 shadow-lg text-left">
              <div className="flex items-center justify-between border-b border-slate-700 pb-3">
                <span className="text-xs text-slate-400">Puntaje obtenido en esta clase:</span>
                <span className="text-lg font-bold font-mono text-amber-400">
                  {classProgress?.puntajeObtenido || 0} / {classData.puntajeMaximo} pts
                </span>
              </div>

              <div className="space-y-2 text-xs">
                <div className="flex items-center justify-between text-slate-300">
                  <span>Actividad de Análisis:</span>
                  <span className={classProgress?.actividadAnalizarRealizada ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                    {classProgress?.actividadAnalizarRealizada ? '✓ Realizada' : 'Pendiente'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Actividad de Práctica:</span>
                  <span className={classProgress?.actividadPracticarRealizada ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                    {classProgress?.actividadPracticarRealizada ? '✓ Realizada' : 'Pendiente'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Desafío de Complejidad:</span>
                  <span className={classProgress?.actividadDesafioRealizada ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                    {classProgress?.actividadDesafioRealizada ? '✓ Superado' : 'Pendiente'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Producción para Portafolio:</span>
                  <span className={classProgress?.produccionRealizada ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                    {classProgress?.produccionRealizada ? '✓ Guardada' : 'Pendiente'}
                  </span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span>Autoevaluación:</span>
                  <span className={classProgress?.autoevaluacionRealizada ? 'text-emerald-400 font-bold' : 'text-slate-500'}>
                    {classProgress?.autoevaluacionRealizada ? '✓ Registrada' : 'Pendiente'}
                  </span>
                </div>
              </div>
            </div>

            {/* Botón para continuar a la siguiente clase */}
            <div className="pt-2">
              {nextClass ? (
                <button
                  onClick={() => onNavigateClass(nextClass.id)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-950/40 transition-all cursor-pointer"
                >
                  <span>Continuar a la Clase {nextClass.numero}: {nextClass.titulo}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              ) : (
                <div className="p-4 rounded-2xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs font-bold max-w-md mx-auto">
                  🎉 ¡Felicitaciones! Has llegado a la última clase del laboratorio. Abrí la sección "MI CAMPAÑA" para la defensa final.
                </div>
              )}
            </div>
          </div>
        )}

        {/* BOTONES DE NAVEGACIÓN PASO PREVIO / SIGUIENTE PASO */}
        <div className="flex items-center justify-between pt-6 border-t border-slate-800 mt-6">
          <button
            type="button"
            disabled={currentStep === 1}
            onClick={() => setCurrentStep((prev) => Math.max(1, prev - 1))}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-slate-400 hover:text-white disabled:opacity-30 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Etapa Anterior
          </button>

          <span className="text-xs text-slate-500 font-medium">
            Paso {currentStep} de 10
          </span>

          <button
            type="button"
            disabled={currentStep === 10}
            onClick={() => setCurrentStep((prev) => Math.min(10, prev + 1))}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white disabled:opacity-30 transition-colors shadow-sm"
          >
            Siguiente Etapa
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Navegación rápida entre clases (Pie) */}
      <div className="flex items-center justify-between text-xs text-slate-400 pt-2">
        {prevClass ? (
          <button
            onClick={() => onNavigateClass(prevClass.id)}
            className="inline-flex items-center gap-1 text-slate-300 hover:text-white"
          >
            ← Clase Anterior: {prevClass.numero}. {prevClass.titulo}
          </button>
        ) : <div />}

        {nextClass && (
          <button
            onClick={() => onNavigateClass(nextClass.id)}
            className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-medium"
          >
            Siguiente Clase: {nextClass.numero}. {nextClass.titulo} →
          </button>
        )}
      </div>
    </div>
  );
};
