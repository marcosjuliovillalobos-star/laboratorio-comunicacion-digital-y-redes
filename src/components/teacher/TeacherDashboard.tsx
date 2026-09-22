import React, { useState } from 'react';
import { 
  BarChart3, 
  RotateCcw, 
  CheckCircle2, 
  Clock, 
  CircleDot, 
  Search, 
  ExternalLink, 
  ShieldCheck, 
  Award, 
  FileText, 
  Layers, 
  HelpCircle,
  Download,
  Upload,
  AlertTriangle
} from 'lucide-react';
import { UserProgressState } from '../../types';
import { ALL_CLASSES } from '../../data/classes';
import { AXES_DATA } from '../../data/axesData';
import { ACHIEVEMENTS } from '../../data/achievementsData';
import { calculateProgress, resetActivity, resetClass, resetAxis, saveProgress } from '../../services/storage';

interface TeacherDashboardProps {
  progressState: UserProgressState;
  onUpdateState: (newState: UserProgressState) => void;
  onSelectClassToInspect: (classId: number) => void;
  onExitTeacherMode: () => void;
  onRequestResetAll: () => void;
}

export const TeacherDashboard: React.FC<TeacherDashboardProps> = ({
  progressState,
  onUpdateState,
  onSelectClassToInspect,
  onExitTeacherMode,
  onRequestResetAll
}) => {
  const [selectedAxisFilter, setSelectedAxisFilter] = useState<string>('todos');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSubTab, setActiveSubTab] = useState<'clases' | 'actividades' | 'resets' | 'rubrica'>('clases');
  const [inspectClassId, setInspectClassId] = useState<number>(1);
  const [axisToReset, setAxisToReset] = useState<string>('eje-1');
  const [notification, setNotification] = useState<string | null>(null);

  const stats = calculateProgress(progressState);

  // Generador de barra visual textual según requerimiento estricto:
  // PROGRESO GENERAL
  // ██████████░░░░░░░░░░ 50 %
  const totalBlocks = 20;
  const filledBlocks = Math.round((stats.porcentaje / 100) * totalBlocks);
  const asciiProgressBar = '█'.repeat(filledBlocks) + '░'.repeat(totalBlocks - filledBlocks);

  const showNotification = (msg: string) => {
    setNotification(msg);
    setTimeout(() => setNotification(null), 3500);
  };

  const handleResetSingleClass = (classId: number) => {
    if (!window.confirm(`¿Desea reiniciar completamente la Clase Nº ${classId}? Se perderán sus actividades, respuestas y producción guardada.`)) return;
    const updated = resetClass(progressState, classId);
    onUpdateState(updated);
    showNotification(`Clase Nº ${classId} restablecida correctamente.`);
  };

  const handleResetAxis = () => {
    const axisName = AXES_DATA.find((a) => a.id === axisToReset)?.nombre || axisToReset;
    if (!window.confirm(`¿Desea reiniciar completamente el ${axisName}? Se perderá el progreso de todas sus clases.`)) return;
    const updated = resetAxis(progressState, axisToReset);
    onUpdateState(updated);
    showNotification(`Eje "${axisName}" restablecido correctamente.`);
  };

  const handleResetActivity = (
    classId: number, 
    tipo: 'analizar' | 'practicar' | 'desafio' | 'produccion' | 'autoevaluacion'
  ) => {
    if (!window.confirm(`¿Desea reiniciar la actividad de ${tipo} de la Clase ${classId}? Se borrará su respuesta y puntaje guardados.`)) return;
    const updated = resetActivity(progressState, classId, tipo);
    onUpdateState(updated);
    showNotification(`Actividad de ${tipo} de la Clase ${classId} restablecida.`);
  };

  const handleExportData = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(progressState, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `laboratorio_comunicacion_787_${new Date().toISOString().slice(0,10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    showNotification('Progreso exportado en archivo JSON.');
  };

  const handleImportData = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed && parsed.clasesProgreso) {
          saveProgress(parsed);
          onUpdateState(parsed);
          showNotification('Progreso importado con éxito desde el archivo.');
        } else {
          alert('El archivo no contiene un formato de progreso válido.');
        }
      } catch (err) {
        alert('Error al leer el archivo JSON.');
      }
    };
    reader.readAsText(file);
  };

  // Filtrado de las 26 clases
  const filteredClasses = ALL_CLASSES.filter((c) => {
    const cp = progressState.clasesProgreso[c.id];
    const status = cp?.completada ? 'completada' : (cp?.enProgreso ? 'en_progreso' : 'pendiente');

    const matchesAxis = selectedAxisFilter === 'todos' || c.ejeId === selectedAxisFilter;
    const matchesStatus = selectedStatusFilter === 'todos' || status === selectedStatusFilter;
    const matchesSearch = c.titulo.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          c.numero.toString() === searchQuery ||
                          c.fecha.includes(searchQuery);

    return matchesAxis && matchesStatus && matchesSearch;
  });

  const inspectedClassData = ALL_CLASSES.find((c) => c.id === inspectClassId) || ALL_CLASSES[0];
  const inspectedClassProgress = progressState.clasesProgreso[inspectClassId];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-slate-100 animate-in fade-in duration-200">
      {/* Toast de Notificación */}
      {notification && (
        <div className="fixed bottom-6 right-6 z-50 bg-emerald-600 text-white px-4 py-3 rounded-xl shadow-2xl flex items-center gap-2 text-sm font-medium border border-emerald-400">
          <CheckCircle2 className="w-5 h-5" />
          <span>{notification}</span>
        </div>
      )}

      {/* Header del Panel Docente */}
      <div className="bg-slate-900 border border-amber-500/40 rounded-2xl p-6 shadow-xl mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-800 pb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 uppercase">
                  Gestión Pedagógica
                </span>
                <span className="text-xs text-slate-400">Escuela Nº 787 Padre Lucio Sabatti</span>
              </div>
              <h2 className="text-xl font-bold text-white mt-1">
                Panel Docente de Control y Seguimiento
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={handleExportData}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors"
              title="Descargar copia del progreso en JSON"
            >
              <Download className="w-3.5 h-3.5" />
              Exportar
            </button>

            <label className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-colors cursor-pointer">
              <Upload className="w-3.5 h-3.5" />
              Importar
              <input type="file" accept=".json" onChange={handleImportData} className="hidden" />
            </label>

            <button
              onClick={onExitTeacherMode}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-semibold bg-slate-700 hover:bg-slate-600 text-white transition-colors"
            >
              Volver a Modo Alumno
            </button>
          </div>
        </div>

        {/* DASHBOARD PRINCIPAL DE MÉTRICAS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 mt-6">
          <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
            <span className="text-[11px] text-slate-400 block">Total Clases</span>
            <span className="text-xl font-bold text-white">26</span>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-xl border border-emerald-900/40">
            <span className="text-[11px] text-emerald-400 block">Completadas</span>
            <span className="text-xl font-bold text-emerald-400">{stats.clasesCompletadas}</span>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-xl border border-amber-900/40">
            <span className="text-[11px] text-amber-400 block">En Progreso</span>
            <span className="text-xl font-bold text-amber-400">{stats.clasesEnProgreso}</span>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/50">
            <span className="text-[11px] text-slate-400 block">Pendientes</span>
            <span className="text-xl font-bold text-slate-300">{stats.clasesPendientes}</span>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-xl border border-sky-900/40">
            <span className="text-[11px] text-sky-400 block">Actividades</span>
            <span className="text-xl font-bold text-sky-400">{stats.actividadesTotalesRealizadas}</span>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-xl border border-amber-900/40">
            <span className="text-[11px] text-amber-400 block">Puntuación</span>
            <span className="text-xl font-bold text-amber-400">{progressState.puntosTotales}</span>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-xl border border-violet-900/40">
            <span className="text-[11px] text-violet-400 block">Logros</span>
            <span className="text-xl font-bold text-violet-400">{progressState.logrosDesbloqueados.length}/18</span>
          </div>

          <div className="bg-slate-800/60 p-3 rounded-xl border border-rose-900/40">
            <span className="text-[11px] text-rose-400 block">Campaña Final</span>
            <span className="text-xs font-bold text-rose-300 uppercase block truncate mt-1.5">
              {progressState.campanaFinal.estado.replace('_', ' ')}
            </span>
          </div>
        </div>

        {/* VISUALIZACIÓN EXPLICITA DE PROGRESO GENERAL SEGÚN REQUISITO */}
        <div className="mt-6 bg-slate-950/80 p-4 rounded-xl border border-slate-800 font-mono text-xs">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <span className="text-emerald-400 font-bold uppercase tracking-wider">
              PROGRESO GENERAL
            </span>
            <span className="text-amber-400 font-bold text-sm">
              {stats.porcentaje} %
            </span>
          </div>
          <div className="text-emerald-300 text-sm tracking-widest overflow-x-auto select-all">
            {asciiProgressBar} {stats.porcentaje} %
          </div>
          <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden mt-3">
            <div 
              className="bg-gradient-to-r from-emerald-500 to-teal-400 h-full transition-all duration-500"
              style={{ width: `${stats.porcentaje}%` }}
            />
          </div>
        </div>
      </div>

      {/* Pestañas del Panel Docente */}
      <div className="flex items-center gap-2 border-b border-slate-800 pb-3 mb-6 overflow-x-auto">
        <button
          onClick={() => setActiveSubTab('clases')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
            activeSubTab === 'clases'
              ? 'bg-amber-500 text-slate-950'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <BarChart3 className="w-4 h-4" />
          Control de las 26 Clases
        </button>

        <button
          onClick={() => setActiveSubTab('actividades')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
            activeSubTab === 'actividades'
              ? 'bg-amber-500 text-slate-950'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <FileText className="w-4 h-4" />
          Control de Actividades y Respuestas
        </button>

        <button
          onClick={() => setActiveSubTab('resets')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
            activeSubTab === 'resets'
              ? 'bg-amber-500 text-slate-950'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <RotateCcw className="w-4 h-4" />
          Panel de Resets (Obligatorio)
        </button>

        <button
          onClick={() => setActiveSubTab('rubrica')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
            activeSubTab === 'rubrica'
              ? 'bg-amber-500 text-slate-950'
              : 'text-slate-400 hover:text-white hover:bg-slate-800'
          }`}
        >
          <HelpCircle className="w-4 h-4" />
          Criterios y Rúbrica Formativa
        </button>
      </div>

      {/* SUB-PESTAÑA 1: CONTROL DE LAS 26 CLASES */}
      {activeSubTab === 'clases' && (
        <div className="space-y-6">
          {/* Filtros */}
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-xl flex flex-col md:flex-row items-center justify-between gap-3">
            <div className="relative w-full md:w-72">
              <Search className="w-4 h-4 text-slate-500 absolute left-3 top-2.5" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar por clase, tema o fecha..."
                className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-9 pr-3 py-1.5 text-xs text-white placeholder-slate-500 outline-none focus:border-amber-500"
              />
            </div>

            <div className="flex items-center gap-2 flex-wrap w-full md:w-auto">
              <select
                value={selectedAxisFilter}
                onChange={(e) => setSelectedAxisFilter(e.target.value)}
                className="bg-slate-800 border border-slate-700 text-xs rounded-lg px-2.5 py-1.5 text-slate-300 outline-none"
              >
                <option value="todos">Todos los Ejes (1 al 5)</option>
                {AXES_DATA.map((a) => (
                  <option key={a.id} value={a.id}>
                    Eje {a.numero}: {a.nombre}
                  </option>
                ))}
              </select>

              <select
                value={selectedStatusFilter}
                onChange={(e) => setSelectedStatusFilter(e.target.value)}
                className="bg-slate-800 border border-slate-700 text-xs rounded-lg px-2.5 py-1.5 text-slate-300 outline-none"
              >
                <option value="todos">Todos los Estados</option>
                <option value="completada">Solo Completadas</option>
                <option value="en_progreso">Solo En Progreso</option>
                <option value="pendiente">Solo Pendientes</option>
              </select>
            </div>
          </div>

          {/* Tabla / Lista de 26 clases */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-lg">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs text-slate-300">
                <thead className="bg-slate-950 text-slate-400 uppercase text-[11px] font-semibold border-b border-slate-800">
                  <tr>
                    <th className="px-4 py-3">Clase</th>
                    <th className="px-4 py-3">Fecha</th>
                    <th className="px-4 py-3">Eje</th>
                    <th className="px-4 py-3">Título y Objetivo</th>
                    <th className="px-4 py-3">Estado</th>
                    <th className="px-4 py-3 text-right">Puntaje</th>
                    <th className="px-4 py-3 text-right">Acciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {filteredClasses.map((clase) => {
                    const cp = progressState.clasesProgreso[clase.id];
                    const isCompleted = cp?.completada;
                    const isInProgress = cp?.enProgreso;

                    return (
                      <tr key={clase.id} className="hover:bg-slate-800/40 transition-colors">
                        <td className="px-4 py-3 font-bold text-white whitespace-nowrap">
                          Clase {clase.numero}
                        </td>
                        <td className="px-4 py-3 text-slate-400 whitespace-nowrap">
                          {clase.fecha}
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-800 text-slate-300 border border-slate-700">
                            {clase.ejeNombre}
                          </span>
                        </td>
                        <td className="px-4 py-3 max-w-xs">
                          <span className="font-semibold text-white block truncate">
                            {clase.titulo}
                          </span>
                          <span className="text-slate-400 text-[11px] block truncate">
                            {clase.objetivo}
                          </span>
                        </td>
                        <td className="px-4 py-3 whitespace-nowrap">
                          {isCompleted ? (
                            <span className="inline-flex items-center gap-1 text-emerald-400 bg-emerald-950/60 border border-emerald-800 px-2 py-0.5 rounded-full font-semibold text-[11px]">
                              <CheckCircle2 className="w-3 h-3" />
                              Completada
                            </span>
                          ) : isInProgress ? (
                            <span className="inline-flex items-center gap-1 text-amber-400 bg-amber-950/60 border border-amber-800 px-2 py-0.5 rounded-full font-semibold text-[11px]">
                              <Clock className="w-3 h-3" />
                              En progreso
                            </span>
                          ) : (
                            <span className="inline-flex items-center gap-1 text-slate-400 bg-slate-800 border border-slate-700 px-2 py-0.5 rounded-full text-[11px]">
                              <CircleDot className="w-3 h-3" />
                              Pendiente
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-3 text-right font-mono font-bold text-amber-400">
                          {cp?.puntajeObtenido || 0} / {clase.puntajeMaximo}
                        </td>
                        <td className="px-4 py-3 text-right whitespace-nowrap space-x-2">
                          <button
                            onClick={() => onSelectClassToInspect(clase.id)}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-[11px] font-medium transition-colors"
                            title="Abrir esta clase en el laboratorio"
                          >
                            <ExternalLink className="w-3 h-3" />
                            Inspeccionar
                          </button>
                          <button
                            onClick={() => handleResetSingleClass(clase.id)}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-rose-950/40 hover:bg-rose-900/60 text-rose-300 border border-rose-800/40 text-[11px] font-medium transition-colors"
                            title="Reiniciar esta clase"
                          >
                            <RotateCcw className="w-3 h-3" />
                            Reset
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* SUB-PESTAÑA 2: CONTROL DE ACTIVIDADES Y RESPUESTAS GUARDADAS */}
      {activeSubTab === 'actividades' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Selector de clase a inspeccionar */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-4 h-[600px] flex flex-col">
            <h3 className="text-sm font-bold text-white mb-3 flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-400" />
              Seleccionar Clase ({ALL_CLASSES.length})
            </h3>
            <div className="overflow-y-auto space-y-1.5 flex-1 pr-1">
              {ALL_CLASSES.map((c) => {
                const cp = progressState.clasesProgreso[c.id];
                const isSelected = c.id === inspectClassId;
                return (
                  <button
                    key={c.id}
                    onClick={() => setInspectClassId(c.id)}
                    className={`w-full text-left p-2.5 rounded-xl text-xs transition-all flex items-center justify-between border ${
                      isSelected
                        ? 'bg-amber-500/10 border-amber-500/50 text-white font-semibold'
                        : 'bg-slate-800/50 border-slate-700/40 text-slate-300 hover:bg-slate-800'
                    }`}
                  >
                    <div>
                      <span className="text-[10px] text-slate-400 block">Clase {c.numero} • {c.fecha}</span>
                      <span className="truncate block max-w-[200px]">{c.titulo}</span>
                    </div>
                    {cp?.completada && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Detalle de actividades y producciones de la clase seleccionada */}
          <div className="lg:col-span-2 bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
            <div className="border-b border-slate-800 pb-4 flex items-center justify-between">
              <div>
                <span className="text-xs text-amber-400 font-bold uppercase tracking-wider">
                  Inspección de Clase {inspectedClassData.numero} • {inspectedClassData.fecha}
                </span>
                <h3 className="text-lg font-bold text-white mt-0.5">
                  {inspectedClassData.titulo}
                </h3>
              </div>
              <button
                onClick={() => onSelectClassToInspect(inspectedClassData.id)}
                className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold flex items-center gap-1.5"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Abrir en Laboratorio
              </button>
            </div>

            {/* Actividad Analizar */}
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-200">
                  1. Actividad de Análisis: {inspectedClassData.actividadAnalizar.titulo}
                </span>
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2 py-0.5 rounded font-bold ${
                    inspectedClassProgress?.actividadAnalizarRealizada ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-slate-700 text-slate-400'
                  }`}>
                    {inspectedClassProgress?.actividadAnalizarRealizada ? 'Realizada' : 'Pendiente'}
                  </span>
                  <button
                    onClick={() => handleResetActivity(inspectedClassData.id, 'analizar')}
                    className="text-[11px] text-rose-400 hover:text-rose-300 font-medium"
                  >
                    Resetear
                  </button>
                </div>
              </div>
              <p className="text-xs text-slate-400">{inspectedClassData.actividadAnalizar.consigna}</p>
            </div>

            {/* Actividad Practicar */}
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-200">
                  2. Actividad de Práctica: {inspectedClassData.actividadPracticar.titulo}
                </span>
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2 py-0.5 rounded font-bold ${
                    inspectedClassProgress?.actividadPracticarRealizada ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-slate-700 text-slate-400'
                  }`}>
                    {inspectedClassProgress?.actividadPracticarRealizada ? 'Realizada' : 'Pendiente'}
                  </span>
                  <button
                    onClick={() => handleResetActivity(inspectedClassData.id, 'practicar')}
                    className="text-[11px] text-rose-400 hover:text-rose-300 font-medium"
                  >
                    Resetear
                  </button>
                </div>
              </div>
              <p className="text-xs text-slate-400">{inspectedClassData.actividadPracticar.consigna}</p>
            </div>

            {/* Desafío */}
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-slate-200">
                  3. Desafío de Profundización: {inspectedClassData.actividadDesafio.titulo}
                </span>
                <div className="flex items-center gap-2">
                  <span className={`text-xs px-2 py-0.5 rounded font-bold ${
                    inspectedClassProgress?.actividadDesafioRealizada ? 'bg-emerald-950 text-emerald-400 border border-emerald-800' : 'bg-slate-700 text-slate-400'
                  }`}>
                    {inspectedClassProgress?.actividadDesafioRealizada ? 'Realizada' : 'Pendiente'}
                  </span>
                  <button
                    onClick={() => handleResetActivity(inspectedClassData.id, 'desafio')}
                    className="text-[11px] text-rose-400 hover:text-rose-300 font-medium"
                  >
                    Resetear
                  </button>
                </div>
              </div>
              <p className="text-xs text-slate-400">{inspectedClassData.actividadDesafio.consigna}</p>
            </div>

            {/* Producción Concreta Guardada */}
            <div className="bg-slate-950/80 p-4 rounded-xl border border-amber-500/30">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold text-amber-300 flex items-center gap-1.5">
                  <FileText className="w-3.5 h-3.5" />
                  Producción Escolar del Estudiante ({inspectedClassData.produccion.titulo})
                </span>
                <button
                  onClick={() => handleResetActivity(inspectedClassData.id, 'produccion')}
                  className="text-[11px] text-rose-400 hover:text-rose-300 font-medium"
                >
                  Resetear Producción
                </button>
              </div>

              {inspectedClassProgress?.produccionRealizada && inspectedClassProgress.produccionContenido ? (
                <div className="space-y-3 mt-3 bg-slate-900 p-3 rounded-lg border border-slate-800">
                  {Object.entries(inspectedClassProgress.produccionContenido).map(([key, val]) => {
                    const campoDef = inspectedClassData.produccion.campos.find((f) => f.id === key);
                    return (
                      <div key={key} className="border-b border-slate-800/80 pb-2 last:border-b-0">
                        <span className="text-[11px] font-semibold text-slate-400 block">
                          {campoDef?.label || key}:
                        </span>
                        <p className="text-xs text-slate-200 mt-0.5 whitespace-pre-wrap">
                          {val || <span className="text-slate-500 italic">(Campo vacío)</span>}
                        </p>
                      </div>
                    );
                  })}
                  {inspectedClassProgress.produccionFecha && (
                    <span className="text-[10px] text-slate-500 block text-right">
                      Guardado: {new Date(inspectedClassProgress.produccionFecha).toLocaleString()}
                    </span>
                  )}
                </div>
              ) : (
                <div className="text-xs text-slate-500 italic py-3 text-center bg-slate-900/50 rounded-lg">
                  El estudiante aún no ha completado la producción de esta clase.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* SUB-PESTAÑA 3: PANEL DE RESETS OBLIGATORIO */}
      {activeSubTab === 'resets' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <RotateCcw className="w-5 h-5 text-rose-400" />
              Gestión de Reinicios y Restablecimientos del Laboratorio
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Las funciones de reset permiten al docente o estudiante rehacer actividades, clases completas, ejes o el ciclo total.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            {/* 1. Reiniciar Clase Específica */}
            <div className="bg-slate-800/60 p-5 rounded-xl border border-slate-700/60 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-slate-200 uppercase tracking-wider block mb-2">
                  🔄 Reiniciar Clase
                </span>
                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  Restablece las actividades, producciones y autoevaluación de una clase en particular.
                </p>
                <select
                  value={inspectClassId}
                  onChange={(e) => setInspectClassId(Number(e.target.value))}
                  className="w-full bg-slate-900 border border-slate-700 text-xs rounded-lg p-2 text-white outline-none mb-4"
                >
                  {ALL_CLASSES.map((c) => (
                    <option key={c.id} value={c.id}>
                      Clase {c.numero}: {c.titulo}
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={() => handleResetSingleClass(inspectClassId)}
                className="w-full py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reiniciar Clase {inspectClassId}
              </button>
            </div>

            {/* 2. Reiniciar Eje Temático */}
            <div className="bg-slate-800/60 p-5 rounded-xl border border-slate-700/60 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-2">
                  🔄 Reiniciar Eje
                </span>
                <p className="text-xs text-slate-400 mb-4 leading-relaxed">
                  Restablece todas las clases y actividades del eje temático seleccionado.
                </p>
                <select
                  value={axisToReset}
                  onChange={(e) => setAxisToReset(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 text-xs rounded-lg p-2 text-white outline-none mb-4"
                >
                  {AXES_DATA.map((a) => (
                    <option key={a.id} value={a.id}>
                      Eje {a.numero}: {a.nombre} ({a.clasesCount} clases)
                    </option>
                  ))}
                </select>
              </div>
              <button
                onClick={handleResetAxis}
                className="w-full py-2 bg-amber-600 hover:bg-amber-500 text-slate-950 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                Reiniciar Eje Seleccionado
              </button>
            </div>

            {/* 3. Restablecer Todo el Laboratorio */}
            <div className="bg-rose-950/20 p-5 rounded-xl border border-rose-800/40 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-rose-400 uppercase tracking-wider block mb-2 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4" />
                  Restablecer Todo
                </span>
                <p className="text-xs text-rose-200/90 mb-4 leading-relaxed">
                  Borra completamente: progreso, puntos, logros, actividades completadas, respuestas guardadas y avance del proyecto integrador. Requiere confirmación.
                </p>
              </div>
              <button
                onClick={onRequestResetAll}
                className="w-full py-2.5 bg-rose-600 hover:bg-rose-500 text-white rounded-lg text-xs font-bold transition-colors shadow-lg shadow-rose-950/40 flex items-center justify-center gap-1.5"
              >
                <RotateCcw className="w-4 h-4" />
                Restablecer Todo el Laboratorio
              </button>
            </div>
          </div>
        </div>
      )}

      {/* SUB-PESTAÑA 4: RÚBRICA Y CRITERIOS PEDAGÓGICOS */}
      {activeSubTab === 'rubrica' && (
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-6">
          <div>
            <h3 className="text-lg font-bold text-white">
              Criterios de Evaluación y Enfoque Pedagógico
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Guía para la observación formativa y seguimiento en el aula de la Escuela Nº 787.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 space-y-3">
              <h4 className="text-xs font-bold text-emerald-400 uppercase">
                Instrumentos de Evaluación Continua
              </h4>
              <ul className="text-xs text-slate-300 space-y-2 list-disc pl-4 leading-relaxed">
                <li><strong>Observación directa:</strong> Participación, curiosidad analítica y autonomía en el aula.</li>
                <li><strong>Desafíos interactivos:</strong> Capacidad de resolución de problemas sin apuros mecánicos.</li>
                <li><strong>Producciones digitales:</strong> Fichas de análisis, guiones de video, piezas visuales y manuales de netiqueta.</li>
                <li><strong>Autoevaluaciones reflexivas:</strong> Reconocimiento de los propios avances y dificultades.</li>
                <li><strong>Proyecto Integrador:</strong> Diseño, producción, optimización y defensa de la campaña integral.</li>
              </ul>
            </div>

            <div className="bg-slate-800/60 p-4 rounded-xl border border-slate-700/60 space-y-3">
              <h4 className="text-xs font-bold text-amber-400 uppercase">
                Criterio Final del Prosumidor Crítico
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Toda producción realizada por el estudiante en el laboratorio debe poder responder:
              </p>
              <div className="bg-slate-900 p-3 rounded-lg border border-slate-800 text-xs text-slate-200 space-y-1.5 font-medium">
                <div>• ¿Qué comunica?</div>
                <div>• ¿Para quién? (audiencia)</div>
                <div>• ¿Con qué propósito?</div>
                <div>• ¿La información es correcta y verificada?</div>
                <div>• ¿Se utilizaron recursos legalmente (licencias/ética)?</div>
                <div>• ¿El estudiante puede justificar cómo y por qué utilizó la Inteligencia Artificial?</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
