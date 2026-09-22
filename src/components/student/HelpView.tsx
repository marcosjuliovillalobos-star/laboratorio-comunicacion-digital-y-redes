import React from 'react';
import { HelpCircle, BookOpen, Sparkles, CheckCircle2, ShieldCheck, Compass } from 'lucide-react';
import { INSTITUTION_INFO } from '../../constants/auth';

export const HelpView: React.FC = () => {
  const glossary = [
    { termino: 'Prosumidor', def: 'Persona que no solo consume información pasivamente, sino que produce activamente contenidos digitales con propósito y responsabilidad.' },
    { termino: 'Algoritmo de recomendación', def: 'Conjunto de instrucciones matemáticas automatizadas que deciden qué publicaciones mostrarte según tus gustos, interacciones y tiempo de permanencia.' },
    { termino: 'Burbuja de filtro', def: 'Aislamiento intelectual involuntario donde los algoritmos solo te muestran opiniones idénticas a las tuyas, ocultando miradas divergentes.' },
    { termino: 'Desinformación', def: 'Información falsa o engañosa difundida deliberadamente para engañar, polarizar o generar beneficios económicos.' },
    { termino: 'Clickbait', def: 'Titulares sensacionalistas o engañosos diseñados para forzar el clic rápido apelando al morbo o la sorpresa.' },
    { termino: 'Netiqueta', def: 'Conjunto de pautas de convivencia, respeto y cortesía aplicadas a la interacción en espacios digitales.' },
    { termino: 'Creative Commons', def: 'Licencias legales que permiten compartir y reutilizar creaciones respetando las condiciones del autor original.' },
    { termino: 'Prompt', def: 'Instrucción o comando estructurado que se le da a una Inteligencia Artificial para obtener una respuesta útil.' },
    { termino: 'CTA (Llamada a la acción)', def: 'Frase o botón claro que orienta a la audiencia hacia el siguiente paso concreto que esperamos que dé.' }
  ];

  const faqs = [
    {
      q: '¿Cómo se guardan mis actividades y puntos?',
      a: 'Toda tu actividad se guarda automáticamente en la memoria local (localStorage) de tu navegador. Podés cerrar la pestaña y continuar exactamente donde lo dejaste.'
    },
    {
      q: '¿Qué pasa si me equivoco en una actividad interactiva?',
      a: 'El laboratorio fomenta el aprendizaje por ensayo y reflexión. Cada actividad te brinda retroalimentación explicativa y podés presionar "Intentar nuevamente" o "Reiniciar Actividad" tantas veces como necesites.'
    },
    {
      q: '¿Qué es la sección "Mi Campaña"?',
      a: 'Es el Proyecto Final Integrador del Eje 5 (Clases 23 a 26). Allí aplicarás todo lo aprendido para diseñar una campaña real sobre una problemática escolar o comunitaria.'
    },
    {
      q: '¿Cómo acceden los profesores al panel docente?',
      a: 'En la esquina superior derecha se encuentra el botón "MODO DOCENTE". Requiere la contraseña institucional "docente2026" para consultar el tablero de las 26 clases, evaluar producciones y gestionar reinicios pedagógicos.'
    }
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8 animate-in fade-in duration-200">
      <div>
        <div className="flex items-center gap-2 text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
          <HelpCircle className="w-4 h-4" />
          <span>Orientación y Soporte Didáctico</span>
        </div>
        <h2 className="text-2xl font-extrabold text-white">
          Guía del Laboratorio y Glosario
        </h2>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Conocé cómo funciona la plataforma, los conceptos clave del taller y las respuestas a dudas habituales.
        </p>
      </div>

      {/* Pregunta Orientadora y Propósito */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-3">
        <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block">
          Brújula Pedagógica del Taller
        </span>
        <h3 className="text-lg font-bold text-white">
          “{INSTITUTION_INFO.preguntaCentral}”
        </h3>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
          {INSTITUTION_INFO.lemaMetas}
        </p>
      </div>

      {/* Las 10 Etapas de Cada Clase */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <Compass className="w-5 h-5 text-emerald-400" />
          La Estructura de las 10 Etapas de Cada Clase
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 text-xs">
          <div className="bg-slate-800 p-3 rounded-xl border border-slate-700">
            <span className="font-bold text-emerald-400 block">1. Presentación</span>
            <span className="text-slate-400 text-[11px]">Fecha, eje, título y objetivo.</span>
          </div>
          <div className="bg-slate-800 p-3 rounded-xl border border-slate-700">
            <span className="font-bold text-emerald-400 block">2. ¿Qué aprender?</span>
            <span className="text-slate-400 text-[11px]">Motivación y sentido práctico.</span>
          </div>
          <div className="bg-slate-800 p-3 rounded-xl border border-slate-700">
            <span className="font-bold text-emerald-400 block">3. Explorar</span>
            <span className="text-slate-400 text-[11px]">Teoría clara y glosario.</span>
          </div>
          <div className="bg-slate-800 p-3 rounded-xl border border-slate-700">
            <span className="font-bold text-emerald-400 block">4. Ejemplos</span>
            <span className="text-slate-400 text-[11px]">Casos reales contextualizados.</span>
          </div>
          <div className="bg-slate-800 p-3 rounded-xl border border-slate-700">
            <span className="font-bold text-emerald-400 block">5. Analizar</span>
            <span className="text-slate-400 text-[11px]">Actividad interactiva con feedback.</span>
          </div>
          <div className="bg-slate-800 p-3 rounded-xl border border-slate-700">
            <span className="font-bold text-emerald-400 block">6. Practicar</span>
            <span className="text-slate-400 text-[11px]">Ejercitación guiada.</span>
          </div>
          <div className="bg-slate-800 p-3 rounded-xl border border-slate-700">
            <span className="font-bold text-amber-400 block">7. Desafío</span>
            <span className="text-slate-400 text-[11px]">Mayor dificultad y reflexión.</span>
          </div>
          <div className="bg-slate-800 p-3 rounded-xl border border-slate-700">
            <span className="font-bold text-rose-400 block">8. Producir</span>
            <span className="text-slate-400 text-[11px]">Ficha para el portafolio.</span>
          </div>
          <div className="bg-slate-800 p-3 rounded-xl border border-slate-700">
            <span className="font-bold text-violet-400 block">9. Autoevaluación</span>
            <span className="text-slate-400 text-[11px]">Reflexión del propio avance.</span>
          </div>
          <div className="bg-slate-800 p-3 rounded-xl border border-slate-700">
            <span className="font-bold text-emerald-400 block">10. Resultado</span>
            <span className="text-slate-400 text-[11px]">Puntaje y pase a siguiente clase.</span>
          </div>
        </div>
      </div>

      {/* Glosario */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-emerald-400" />
          Glosario de Términos Clave
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {glossary.map((item, i) => (
            <div key={i} className="bg-slate-800 p-4 rounded-xl border border-slate-700 space-y-1">
              <span className="text-xs font-bold text-emerald-400 block">
                {item.termino}
              </span>
              <p className="text-[11px] text-slate-300 leading-relaxed">
                {item.def}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Preguntas Frecuentes */}
      <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 space-y-4">
        <h3 className="text-base font-bold text-white flex items-center gap-2">
          <HelpCircle className="w-5 h-5 text-emerald-400" />
          Preguntas Frecuentes
        </h3>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="bg-slate-800 p-4 rounded-xl border border-slate-700 space-y-1 text-xs">
              <h4 className="font-bold text-white flex items-center gap-2">
                <span className="text-emerald-400">•</span>
                {f.q}
              </h4>
              <p className="text-slate-300 pl-4 leading-relaxed">
                {f.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
