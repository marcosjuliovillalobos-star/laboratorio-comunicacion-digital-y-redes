import React, { useState } from 'react';
import { 
  Rocket, 
  CheckCircle2, 
  FileText, 
  Sliders, 
  Layers, 
  Sparkles, 
  Printer, 
  Download, 
  Save, 
  AlertCircle,
  HelpCircle,
  ShieldCheck
} from 'lucide-react';
import { UserProgressState, CampanaFinalState } from '../../types';
import { updateCampaignBrief, updateCampaignPieces, updateCampaignOptimization, updateCampaignPresentation } from '../../services/storage';

interface CampaignProjectViewProps {
  progressState: UserProgressState;
  onUpdateState: (newState: UserProgressState) => void;
  onNavigateClass?: (classId: number) => void;
}

export const CampaignProjectView: React.FC<CampaignProjectViewProps> = ({
  progressState,
  onUpdateState,
  onNavigateClass
}) => {
  const [activeTab, setActiveTab] = useState<'brief' | 'piezas' | 'optimizacion' | 'presentacion'>('brief');
  const [saveToast, setSaveToast] = useState(false);

  const campaign = progressState.campanaFinal;

  // Estados locales de los formularios
  const [briefForm, setBriefForm] = useState(campaign.brief);
  const [piezasForm, setPiezasForm] = useState(campaign.piezas);
  const [optimizacionForm, setOptimizacionForm] = useState(campaign.optimizacion);
  const [presentacionForm, setPresentacionForm] = useState(campaign.presentacion);

  const triggerToast = () => {
    setSaveToast(true);
    setTimeout(() => setSaveToast(false), 3000);
  };

  const handleSaveBrief = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = updateCampaignBrief(progressState, briefForm);
    onUpdateState(updated);
    triggerToast();
  };

  const handleSavePiezas = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = updateCampaignPieces(progressState, piezasForm);
    onUpdateState(updated);
    triggerToast();
  };

  const handleSaveOptimizacion = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = updateCampaignOptimization(progressState, optimizacionForm);
    onUpdateState(updated);
    triggerToast();
  };

  const handleSavePresentacion = (e: React.FormEvent) => {
    e.preventDefault();
    const updated = updateCampaignPresentation(progressState, presentacionForm);
    onUpdateState(updated);
    triggerToast();
  };

  const handlePrintDossier = () => {
    window.print();
  };

  // Cálculo de completitud de la campaña
  const isBriefDone = Boolean(briefForm.tema && briefForm.proposito && briefForm.audiencia && briefForm.mensajeParaguas);
  const isPiezasDone = Boolean(piezasForm.publicacionFeed && piezasForm.historia && piezasForm.videoGuion);
  const isOptimizacionDone = Boolean(optimizacionForm.checklistEtica && optimizacionForm.checklistAccesibilidad);
  const isPresentacionDone = Boolean(presentacionForm.queComunica && presentacionForm.justificacionMedio);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-200">
      {saveToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 text-sm font-medium border border-emerald-400">
          <CheckCircle2 className="w-5 h-5" />
          <span>¡Avance de la campaña guardado con éxito!</span>
        </div>
      )}

      {/* Hero Banner de Campaña */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-rose-950 border border-rose-500/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-rose-500/10 text-rose-300 border border-rose-500/30">
              <Rocket className="w-3.5 h-3.5" />
              <span>Proyecto Final Integrador • Eje 5 (Clases 23 a 26)</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Mi Campaña de Comunicación Digital Integral
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              El espacio interactivo donde unís todo lo aprendido: definís el brief estratégico, producís las piezas comunicacionales, optimizás cada detalle con ética y defendés tu propuesta como prosumidor consciente.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrintDossier}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-colors shadow-md"
              title="Imprimir o guardar como PDF el dossier de campaña"
            >
              <Printer className="w-4 h-4" />
              Imprimir Dossier
            </button>
          </div>
        </div>

        {/* Barra de progreso de la campaña */}
        <div className="pt-2 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div className={`p-3 rounded-xl border flex items-center gap-2.5 ${
            isBriefDone ? 'bg-emerald-950/40 border-emerald-500/60 text-emerald-300' : 'bg-slate-800 border-slate-800 text-slate-400'
          }`}>
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span className="font-semibold">1. Brief Estratégico</span>
          </div>

          <div className={`p-3 rounded-xl border flex items-center gap-2.5 ${
            isPiezasDone ? 'bg-emerald-950/40 border-emerald-500/60 text-emerald-300' : 'bg-slate-800 border-slate-800 text-slate-400'
          }`}>
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span className="font-semibold">2. Producción de Piezas</span>
          </div>

          <div className={`p-3 rounded-xl border flex items-center gap-2.5 ${
            isOptimizacionDone ? 'bg-emerald-950/40 border-emerald-500/60 text-emerald-300' : 'bg-slate-800 border-slate-800 text-slate-400'
          }`}>
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span className="font-semibold">3. Optimización</span>
          </div>

          <div className={`p-3 rounded-xl border flex items-center gap-2.5 ${
            isPresentacionDone ? 'bg-emerald-950/40 border-emerald-500/60 text-emerald-300' : 'bg-slate-800 border-slate-800 text-slate-400'
          }`}>
            <CheckCircle2 className="w-4 h-4 shrink-0" />
            <span className="font-semibold">4. Defensa Final</span>
          </div>
        </div>
      </div>

      {/* Selector de Pestañas de la Campaña */}
      <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 p-2 rounded-2xl overflow-x-auto shadow-md">
        <button
          onClick={() => setActiveTab('brief')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            activeTab === 'brief'
              ? 'bg-rose-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <FileText className="w-4 h-4" />
          Fase 1: Brief de Campaña
        </button>

        <button
          onClick={() => setActiveTab('piezas')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            activeTab === 'piezas'
              ? 'bg-rose-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Layers className="w-4 h-4" />
          Fase 2: Piezas Comunicacionales
        </button>

        <button
          onClick={() => setActiveTab('optimizacion')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            activeTab === 'optimizacion'
              ? 'bg-rose-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <Sliders className="w-4 h-4" />
          Fase 3: Optimización Antes/Después
        </button>

        <button
          onClick={() => setActiveTab('presentacion')}
          className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
            activeTab === 'presentacion'
              ? 'bg-rose-600 text-white shadow-md'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <ShieldCheck className="w-4 h-4" />
          Fase 4: Defensa y Presentación Final
        </button>
      </div>

      {/* CONTENIDO DE CADA FASE */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
        {/* FASE 1: BRIEF */}
        {activeTab === 'brief' && (
          <form onSubmit={handleSaveBrief} className="space-y-6 animate-in fade-in duration-150">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-400 block mb-1">
                Fundamentos Estratégicos (Clase 23)
              </span>
              <h3 className="text-xl font-bold text-white">
                Brief de Campaña
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Definí con precisión los cimientos conceptuales antes de producir las piezas gráficas o audiovisuales.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-200">
                  Tema o Problemática Elegida:
                </label>
                <input
                  type="text"
                  value={briefForm.tema}
                  onChange={(e) => setBriefForm({ ...briefForm, tema: e.target.value })}
                  placeholder="Ej: Convivencia y buen trato en grupos de WhatsApp escolares"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 outline-none focus:border-rose-500"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-200">
                  Audiencia Destinataria:
                </label>
                <input
                  type="text"
                  value={briefForm.audiencia}
                  onChange={(e) => setBriefForm({ ...briefForm, audiencia: e.target.value })}
                  placeholder="Ej: Estudiantes de 1º a 3º año de la Escuela 787"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 outline-none focus:border-rose-500"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-200">
                Propósito u Objetivo Concreto:
              </label>
              <textarea
                rows={3}
                value={briefForm.proposito}
                onChange={(e) => setBriefForm({ ...briefForm, proposito: e.target.value })}
                placeholder="¿Qué cambio de actitud, conducta o reflexión queremos generar en la audiencia?"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 outline-none focus:border-rose-500"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-200">
                  Mensaje Paraguas (Lema o Claim Central):
                </label>
                <input
                  type="text"
                  value={briefForm.mensajeParaguas}
                  onChange={(e) => setBriefForm({ ...briefForm, mensajeParaguas: e.target.value })}
                  placeholder='Ej: "Detrás de cada pantalla hay alguien como vos: conectá con respeto."'
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 outline-none focus:border-rose-500"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-200">
                  Plataformas y Medios Seleccionados:
                </label>
                <input
                  type="text"
                  value={briefForm.plataforma}
                  onChange={(e) => setBriefForm({ ...briefForm, plataforma: e.target.value })}
                  placeholder="Ej: Instagram (Feed + Historias) y carteleras del patio escolar"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 outline-none focus:border-rose-500"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-200">
                Tono Comunicacional y Estilo Visual:
              </label>
              <input
                type="text"
                value={briefForm.tono}
                onChange={(e) => setBriefForm({ ...briefForm, tono: e.target.value })}
                placeholder="Ej: Empático, fresco, directo y constructivo; sin juzgar ni sermonear."
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 outline-none focus:border-rose-500"
                required
              />
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <span className="text-xs text-slate-400">
                Los datos se guardan de forma permanente en este dispositivo.
              </span>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shadow-lg shadow-rose-950/40 transition-all cursor-pointer"
              >
                <Save className="w-4 h-4" />
                Guardar Brief de Campaña
              </button>
            </div>
          </form>
        )}

        {/* FASE 2: PIEZAS */}
        {activeTab === 'piezas' && (
          <form onSubmit={handleSavePiezas} className="space-y-6 animate-in fade-in duration-150">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-400 block mb-1">
                Desarrollo Creativo Multimodal (Clase 24)
              </span>
              <h3 className="text-xl font-bold text-white">
                Piezas Comunicacionales del Sistema
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Escribí y planificá las tres piezas coordinadas que componen tu campaña escolar.
              </p>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-200 flex items-center justify-between">
                <span>Pieza 1: Publicación para Feed (Imagen / Carrusel + Texto + CTA)</span>
                <span className="text-[10px] text-slate-500 font-normal">Formato cuadrado o 4:5</span>
              </label>
              <textarea
                rows={4}
                value={piezasForm.publicacionFeed}
                onChange={(e) => setPiezasForm({ ...piezasForm, publicacionFeed: e.target.value })}
                placeholder="Describí la imagen visual y pegá el texto (copy) completo con emojis y llamada a la acción..."
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 outline-none focus:border-rose-500"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-200 flex items-center justify-between">
                <span>Pieza 2: Secuencia de Historia Vertical (Sticker interactivo o votación)</span>
                <span className="text-[10px] text-slate-500 font-normal">Formato 9:16</span>
              </label>
              <textarea
                rows={4}
                value={piezasForm.historia}
                onChange={(e) => setPiezasForm({ ...piezasForm, historia: e.target.value })}
                placeholder="Describí qué se muestra en pantalla y qué pregunta, encuesta o sticker interactivo incluye..."
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 outline-none focus:border-rose-500"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-200 flex items-center justify-between">
                <span>Pieza 3: Guion para Video Corto (Reel / TikTok de 30-45 segundos)</span>
                <span className="text-[10px] text-slate-500 font-normal">Gancho inicial + Desarrollo + Cierre</span>
              </label>
              <textarea
                rows={5}
                value={piezasForm.videoGuion}
                onChange={(e) => setPiezasForm({ ...piezasForm, videoGuion: e.target.value })}
                placeholder="0-3 seg (Gancho visual): ... / 4-20 seg (Mensaje principal): ... / 21-30 seg (Cierre y llamado a la acción): ..."
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 outline-none focus:border-rose-500 font-mono"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-200">
                  Hashtags Oficiales del Proyecto:
                </label>
                <input
                  type="text"
                  value={piezasForm.hashtags}
                  onChange={(e) => setPiezasForm({ ...piezasForm, hashtags: e.target.value })}
                  placeholder="#Escuela787Conecta #BuenaConvivenciaDigital #PadreSabatti"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 outline-none focus:border-rose-500"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-200">
                  Llamada a la Acción Transversal (CTA):
                </label>
                <input
                  type="text"
                  value={piezasForm.cta}
                  onChange={(e) => setPiezasForm({ ...piezasForm, cta: e.target.value })}
                  placeholder="¡Comentá abajo con tu curso y sumate a la campaña!"
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 outline-none focus:border-rose-500"
                  required
                />
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <span className="text-xs text-slate-400">
                Podés editar este contenido las veces que necesites.
              </span>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shadow-lg shadow-rose-950/40 transition-all cursor-pointer"
              >
                <Save className="w-4 h-4" />
                Guardar Piezas de la Campaña
              </button>
            </div>
          </form>
        )}

        {/* FASE 3: OPTIMIZACIÓN */}
        {activeTab === 'optimizacion' && (
          <form onSubmit={handleSaveOptimizacion} className="space-y-6 animate-in fade-in duration-150">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-400 block mb-1">
                Auditoría y Perfeccionamiento (Clase 25)
              </span>
              <h3 className="text-xl font-bold text-white">
                Matriz de Optimización Antes / Después
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Compará tu primer borrador con la versión pulida definitiva y verificá el checklist ético y de accesibilidad.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-slate-300">
                  Versión Previa (Primer borrador o punto débil):
                </label>
                <textarea
                  rows={4}
                  value={optimizacionForm.versionPrevia}
                  onChange={(e) => setOptimizacionForm({ ...optimizacionForm, versionPrevia: e.target.value })}
                  placeholder="Texto o idea original antes de ser corregida..."
                  className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 outline-none focus:border-rose-500"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-bold text-emerald-400">
                  Versión Optimizada Definitiva:
                </label>
                <textarea
                  rows={4}
                  value={optimizacionForm.versionOptimizada}
                  onChange={(e) => setOptimizacionForm({ ...optimizacionForm, versionOptimizada: e.target.value })}
                  placeholder="Texto pulido con datos precisos, mejor redacción y claridad visual..."
                  className="w-full bg-slate-800 border border-emerald-500/50 rounded-xl p-3 text-xs text-white placeholder-slate-500 outline-none focus:border-emerald-500"
                  required
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-200">
                Justificación Pedagógica de las Mejoras Realizadas:
              </label>
              <textarea
                rows={3}
                value={optimizacionForm.justificacionMejoras}
                onChange={(e) => setOptimizacionForm({ ...optimizacionForm, justificacionMejoras: e.target.value })}
                placeholder="¿Por qué la nueva versión comunica mejor y elimina posibles confusiones en la audiencia?"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 outline-none focus:border-rose-500"
                required
              />
            </div>

            {/* Checklist de Control de Calidad */}
            <div className="bg-slate-800 p-4 rounded-2xl border border-slate-700 space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Lista de Cotejo Ética y de Accesibilidad (Marcá los cumplidos):
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <label className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800 border border-slate-700 text-xs text-slate-200 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={optimizacionForm.checklistEtica}
                    onChange={(e) => setOptimizacionForm({ ...optimizacionForm, checklistEtica: e.target.checked })}
                    className="rounded text-emerald-500 focus:ring-0 w-4 h-4"
                  />
                  <span>Ética y Consentimiento</span>
                </label>

                <label className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800 border border-slate-700 text-xs text-slate-200 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={optimizacionForm.checklistAccesibilidad}
                    onChange={(e) => setOptimizacionForm({ ...optimizacionForm, checklistAccesibilidad: e.target.checked })}
                    className="rounded text-emerald-500 focus:ring-0 w-4 h-4"
                  />
                  <span>Accesibilidad y Contraste</span>
                </label>

                <label className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-800 border border-slate-700 text-xs text-slate-200 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={optimizacionForm.checklistCoherencia}
                    onChange={(e) => setOptimizacionForm({ ...optimizacionForm, checklistCoherencia: e.target.checked })}
                    className="rounded text-emerald-500 focus:ring-0 w-4 h-4"
                  />
                  <span>Coherencia Estética y Tonal</span>
                </label>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <span className="text-xs text-slate-400">
                La iteración y edición es el secreto de los grandes comunicadores.
              </span>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-xs shadow-lg shadow-rose-950/40 transition-all cursor-pointer"
              >
                <Save className="w-4 h-4" />
                Guardar Optimización
              </button>
            </div>
          </form>
        )}

        {/* FASE 4: PRESENTACIÓN Y DEFENSA FINAL */}
        {activeTab === 'presentacion' && (
          <form onSubmit={handleSavePresentacion} className="space-y-6 animate-in fade-in duration-150">
            <div className="border-b border-slate-800 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-rose-400 block mb-1">
                Consolidación del Prosumidor Crítico (Clase 26)
              </span>
              <h3 className="text-xl font-bold text-white">
                Ficha de Defensa y Graduación del Taller
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Respondé a las preguntas fundamentales que justifican tu autoría responsable.
              </p>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-200">
                1. ¿Qué comunica exactamente la campaña y con qué propósito central?
              </label>
              <textarea
                rows={3}
                value={presentacionForm.queComunica}
                onChange={(e) => setPresentacionForm({ ...presentacionForm, queComunica: e.target.value })}
                placeholder="Síntesis argumentativa en 2 o 3 oraciones contundentes..."
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 outline-none focus:border-rose-500"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-200">
                2. ¿Para quién fue diseñada y por qué elegiste esos medios y formatos?
              </label>
              <textarea
                rows={3}
                value={presentacionForm.justificacionMedio}
                onChange={(e) => setPresentacionForm({ ...presentacionForm, justificacionMedio: e.target.value })}
                placeholder="Explicá cómo la edad y hábitos de tu audiencia justifican haber elegido Instagram, videos cortos o carteleras..."
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 outline-none focus:border-rose-500"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-200">
                3. Verificación de Fuentes y Licencias de Recursos:
              </label>
              <textarea
                rows={2}
                value={presentacionForm.verificacionFuentes}
                onChange={(e) => setPresentacionForm({ ...presentacionForm, verificacionFuentes: e.target.value })}
                placeholder="¿Cómo corroboraste que los datos son verídicos? ¿De dónde provienen las fotos y música (Creative Commons / producción propia)?"
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 outline-none focus:border-rose-500"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-slate-200">
                4. Declaración Transparente sobre el uso de Inteligencia Artificial:
              </label>
              <textarea
                rows={2}
                value={presentacionForm.usoIA}
                onChange={(e) => setPresentacionForm({ ...presentacionForm, usoIA: e.target.value })}
                placeholder="¿Utilizaste IA como asistente creativo? Si la usaste, explicá qué le pediste y cómo corregiste sus errores como autor humano."
                className="w-full bg-slate-800 border border-slate-700 rounded-xl p-3 text-xs text-white placeholder-slate-500 outline-none focus:border-rose-500"
                required
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-emerald-400">
                5. Tu Mayor Aprendizaje en el Laboratorio:
              </label>
              <textarea
                rows={2}
                value={presentacionForm.aprendizajes}
                onChange={(e) => setPresentacionForm({ ...presentacionForm, aprendizajes: e.target.value })}
                placeholder="¿En qué cambió tu mirada sobre las redes sociales y tu responsabilidad como creador?"
                className="w-full bg-slate-800 border border-emerald-500/50 rounded-xl p-3 text-xs text-white placeholder-slate-500 outline-none focus:border-emerald-500"
                required
              />
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800">
              <span className="text-xs text-slate-400">
                Esta ficha completa tu acreditación del taller en la Escuela Nº 787.
              </span>
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-950/40 transition-all cursor-pointer"
              >
                <Save className="w-4 h-4" />
                Completar y Guardar Defensa Final (+50 pts)
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
