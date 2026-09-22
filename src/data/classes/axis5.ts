import { ClassData } from '../../types';

export const AXIS_5_CLASSES: ClassData[] = [
  {
    id: 23,
    numero: 23,
    fecha: '17/11/2026',
    ejeId: 'eje-5',
    ejeNombre: 'PROYECTO INTEGRADOR',
    titulo: 'Diseño de campaña',
    objetivo: 'Iniciar el Proyecto Final Integrador formulando el Brief Estratégico de la Campaña de Comunicación Digital Integral: problema, propósito, audiencia, mensaje paraguas, tono y plataformas.',
    contenidos: [
      'Puntapié inicial del Proyecto Integrador del cuatrimestre',
      'El Brief de Campaña como documento rector',
      'Diagnóstico de problemas comunitarios escolares reales',
      'Definición de la propuesta de valor y del tono comunicacional'
    ],
    queVamosAAprender: '¡Llegó el momento cumbre del laboratorio! A partir de hoy uniremos todo lo aprendido para dar vida a tu propia Campaña de Comunicación Digital Integral. Comenzaremos diseñando los cimientos estratégicos en el Brief.',
    explicacionTeorica: {
      seccion: 'El Brief estratégico: el mapa del éxito',
      texto: 'Un brief es el documento donde se definen las coordenadas de la campaña antes de gastar energía en diseñar piezas. Debe responder con total precisión: ¿qué problema queremos resolver? ¿a quién le hablamos? ¿qué queremos que sientan o hagan? ¿cuál es el mensaje paraguas que recordarán siempre? Con un brief sólido, la producción fluye sin tropiezos.',
      conceptosClave: [
        { concepto: 'Brief de campaña', definicion: 'Guía estratégica concisa que fija objetivos, público, mensaje y límites del proyecto.' },
        { concepto: 'Mensaje paraguas', definicion: 'Frase memorable que resume el corazón conceptual de la campaña.' },
        { concepto: 'Propuesta de valor comunitaria', definicion: 'El beneficio concreto y tangible que la campaña aporta a la escuela o barrio.' }
      ]
    },
    ejemplos: [
      {
        id: 'ej-23-1',
        titulo: 'Ejemplo de Brief Escolar: "Escuela Limpia, Escuela Nuestra"',
        tipo: 'caso',
        contenido: 'Problema: Papeles tirados en el patio tras los recreos. Propósito: Fomentar el sentido de pertenencia y orgullo por el espacio compartido. Audiencia: Estudiantes de 1º a 3º año. Tono: Positivo, cómplice y enérgico, sin sermones culpabilizadores. Plataformas: Instagram Reels y afiches en pasillos.',
        analisis: 'Estructura clara y alcanzable para la realidad de la Escuela Nº 787.',
        metadatos: { 'Foco': 'Cambio de hábito con tono constructivo' }
      }
    ],
    actividadAnalizar: {
      id: 'act-23-analizar',
      tipo: 'multiple_choice',
      titulo: 'Evaluar la viabilidad de un problema para la campaña escolar',
      consigna: '¿Cuál de los siguientes desafíos es el más adecuado y realista para abordar en una campaña de comunicación digital escolar en el ciclo básico?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Promover la convivencia armónica y el buen trato en los grupos de WhatsApp del curso.', esCorrecta: true, retroalimentacion: '¡Excelente elección! Es cercano, relevante, afecta la vida diaria y puede transformarse con buena comunicación.' },
          { id: 'o2', texto: 'Colonizar el planeta Marte antes del viernes.', esCorrecta: false, retroalimentacion: 'Inviable y desconectado de los objetivos del taller.' }
        ]
      }
    },
    actividadPracticar: {
      id: 'act-23-practicar',
      tipo: 'multiple_choice',
      titulo: 'Definición del tono comunicacional',
      consigna: 'Si tu campaña busca que tus compañeros participen en un torneo de videojuegos escolares, ¿qué tono debe dominar?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Lúdico, entusiasta, desafiante y cercano.', esCorrecta: true, retroalimentacion: '¡Exacto! El tono debe vibrar en sintonía con la actividad propuesta.' },
          { id: 'o2', texto: 'Fúnebre y burocrático.', esCorrecta: false, retroalimentacion: 'Apagaría el entusiasmo de los jugadores.' }
        ]
      }
    },
    actividadDesafio: {
      id: 'act-23-desafio',
      tipo: 'multiple_choice',
      titulo: 'El mensaje paraguas memorable',
      consigna: '¿Cuál de estas opciones funciona mejor como lema central para una campaña contra el ciberacoso?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: '"Detrás de cada pantalla hay alguien como vos: conectá con respeto."', esCorrecta: true, retroalimentacion: '¡Brillante! Empático, conciso, fácil de recordar y con llamada ética directa.' },
          { id: 'o2', texto: '"Tratado sobre las implicancias psicológicas de la interacción en interfaces telemáticas."', esCorrecta: false, retroalimentacion: 'Incomprensible para una campaña de redes.' }
        ]
      }
    },
    produccion: {
      id: 'prod-23',
      titulo: 'El Brief Oficial de tu Campaña Integral',
      consigna: 'Completá el brief estratégico fundacional de tu proyecto. Esta información se integrará automáticamente en la sección "MI CAMPAÑA".',
      formato: 'Brief Estratégico Completo',
      campos: [
        { id: 'tema_problema', label: '1. Problemática escolar o comunitaria elegida', placeholder: 'Ej: Ciberconvivencia, reciclaje, lectura, cuidado de equipos...', tipo: 'input' },
        { id: 'proposito_objetivo', label: '2. Propósito u objetivo transformador', placeholder: 'Qué cambio concreto buscamos lograr...', tipo: 'textarea' },
        { id: 'audiencia_especifica', label: '3. Audiencia destinataria y sus características', placeholder: 'Quiénes son, qué edades tienen, qué les interesa...', tipo: 'textarea' },
        { id: 'mensaje_central_lema', label: '4. Mensaje paraguas (Lema o Claim)', placeholder: 'La frase memorable central...', tipo: 'input' },
        { id: 'tono_y_plataforma', label: '5. Tono de comunicación y plataformas elegidas', placeholder: 'Ej: Tono empático y fresco; Instagram, carteleras y WhatsApp...', tipo: 'input' }
      ],
      criterioEvaluacion: ['Claridad y coherencia entre problema y público', 'Fuerza del mensaje paraguas']
    },
    autoevaluacion: [
      {
        id: 'auto-23-1',
        pregunta: '¿Tengo absoluta claridad sobre a quién le voy a hablar y qué pretendo lograr con mi campaña?',
        opciones: [
          { id: 'a1', texto: 'Sí, mi brief tiene un rumbo claro y objetivos realistas.', valor: 4, esCorrecta: true, retroalimentacion: '¡Excelente punto de partida para la victoria!' },
          { id: 'a2', texto: 'Aún siento dudas sobre qué tema elegir.', valor: 2, retroalimentacion: 'Consultá al docente en el aula para definir un tema apasionante.' }
        ]
      }
    ],
    puntajeMaximo: 129,
    logroIdAsociado: 'logro-17'
  },
  {
    id: 24,
    numero: 24,
    fecha: '19/11/2026',
    ejeId: 'eje-5',
    ejeNombre: 'PROYECTO INTEGRADOR',
    titulo: 'Producción',
    objetivo: 'Desarrollar y ensamblar las piezas clave de la campaña integral (publicación en feed, historia vertical interactiva, guion para video corto, hashtags y CTA).',
    contenidos: [
      'De la estrategia a la materia prima: ejecución de piezas',
      'Coherencia visual y tonal en todas las piezas',
      'Articulación de formatos: qué cuenta cada pieza',
      'Revisión de la primera versión integral'
    ],
    queVamosAAprender: 'Es momento de poner las manos en la masa digital. Redactarás y planificarás las piezas de tu campaña garantizando que todas compartan la misma identidad visual, los mismos colores y el mismo mensaje paraguas.',
    explicacionTeorica: {
      seccion: 'La producción integral de piezas coordinadas',
      texto: 'Una campaña no es un solo post: es un sistema. El posteo en feed profundiza y se puede guardar; la historia interactiva invita a votar o responder; y el video corto viraliza y atrapa la atención inicial. En esta clase produciremos el primer prototipo integral de cada pieza.',
      conceptosClave: [
        { concepto: 'Sistema de campaña', definicion: 'Conjunto de piezas diversas que se complementan sin repetirse exactamente igual.' },
        { concepto: 'Cross-media educativo', definicion: 'Contar distintos fragmentos de la campaña a través de distintos formatos.' },
        { concepto: 'Prototipo de primera versión', definicion: 'Borrador completo funcional listo para ser testeado y optimizado.' }
      ]
    },
    ejemplos: [
      {
        id: 'ej-24-1',
        titulo: 'Articulación de 3 piezas del proyecto',
        tipo: 'comparacion',
        contenido: 'Pieza 1 (Video): Muestra el problema con humor en 30 seg. Pieza 2 (Post): Presenta una infografía con 3 soluciones prácticas. Pieza 3 (Historia): Encuesta que pregunta "¿Cuál vas a aplicar hoy en la escuela?".',
        analisis: 'Cada formato cumple un rol específico en el viaje del receptor.',
        metadatos: { 'Estrategia': 'Complementariedad de formatos' }
      }
    ],
    actividadAnalizar: {
      id: 'act-24-analizar',
      tipo: 'multiple_choice',
      titulo: 'Verificar la coherencia de las piezas producidas',
      consigna: 'En una campaña sobre alimentación saludable, el video usa música divertida y colores frescos, pero el posteo de feed usa un lenguaje médico agresivo culpando a quienes comen galletitas. ¿Qué error se cometió?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Incoherencia tonal: se rompió la empatía y la unidad de estilo de la campaña.', esCorrecta: true, retroalimentacion: '¡Exacto! Todas las piezas deben hablar con la misma voz y respetar el brief.' },
          { id: 'o2', texto: 'Ninguno, está perfecto asustar a la gente.', esCorrecta: false, retroalimentacion: 'El miedo o la culpa alejan al público objetivo.' }
        ]
      }
    },
    actividadPracticar: {
      id: 'act-24-practicar',
      tipo: 'multiple_choice',
      titulo: 'Alineación de hashtags y CTA en el sistema',
      consigna: '¿Cómo deben articularse los hashtags en todas las piezas de la campaña?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Mantener un hashtag oficial propio de la campaña en todas las piezas para que la gente pueda encontrar todo el contenido agrupado.', esCorrecta: true, retroalimentacion: '¡Excelente! Centraliza la conversación y refuerza la identidad.' },
          { id: 'o2', texto: 'Inventar 20 hashtags distintos y raros en cada publicación.', esCorrecta: false, retroalimentacion: 'Dispersa y dificulta el seguimiento.' }
        ]
      }
    },
    actividadDesafio: {
      id: 'act-24-desafio',
      tipo: 'multiple_choice',
      titulo: 'Asegurar la accesibilidad de las piezas',
      consigna: '¿Qué detalle técnico no puede faltar en la producción de tus piezas gráficas y audiovisuales?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Texto alternativo (Alt text) descriptivo en imágenes y subtítulos completos en videos.', esCorrecta: true, retroalimentacion: '¡Impecable compromiso con la accesibilidad e inclusión!' },
          { id: 'o2', texto: 'Tipografías diminutas sin contraste.', esCorrecta: false, retroalimentacion: 'Genera barreras de lectura.' }
        ]
      }
    },
    produccion: {
      id: 'prod-24',
      titulo: 'Primera versión de las piezas de la campaña',
      consigna: 'Redactá y describí las tres piezas fundamentales de tu campaña final.',
      formato: 'Kit de Producción de Campaña',
      campos: [
        { id: 'pieza_post_feed', label: 'Pieza 1: Publicación para Feed (Imagen sugerida + Copy + CTA)', placeholder: 'Texto completo del posteo principal...', tipo: 'textarea' },
        { id: 'pieza_historia', label: 'Pieza 2: Secuencia de Historia (Placa vertical + Sticker interactivo)', placeholder: 'Qué muestra la historia y qué encuesta o caja incluye...', tipo: 'textarea' },
        { id: 'pieza_video_guion', label: 'Pieza 3: Guion de Video Corto (Gancho de 3s + Mensaje central + Cierre)', placeholder: 'Texto y descripción visual del video...', tipo: 'textarea' },
        { id: 'kit_hashtags_cta', label: 'Hashtag oficial y llamada a la acción transversal', placeholder: 'Ej: #CuidemosElPati787 - ¡Sumate con tu curso!...', tipo: 'input' }
      ],
      criterioEvaluacion: ['Calidad y riqueza de las piezas', 'Unidad temática y tonal']
    },
    autoevaluacion: [
      {
        id: 'auto-24-1',
        pregunta: '¿Mis piezas producidas reflejan fielmente el objetivo y el mensaje paraguas fijados en el brief?',
        opciones: [
          { id: 'a1', texto: 'Sí, hay una coherencia total entre lo planificado y lo producido.', valor: 4, esCorrecta: true, retroalimentacion: '¡Excelente capacidad de realización!' },
          { id: 'a2', texto: 'Siento que alguna pieza se desvió un poco del tema.', valor: 3, retroalimentacion: 'En la próxima clase de optimización puliremos cada desvío.' }
        ]
      }
    ],
    puntajeMaximo: 129,
    logroIdAsociado: 'logro-17'
  },
  {
    id: 25,
    numero: 25,
    fecha: '24/11/2026',
    ejeId: 'eje-5',
    ejeNombre: 'PROYECTO INTEGRADOR',
    titulo: 'Optimización',
    objetivo: 'Auditar, revisar y perfeccionar la campaña integral aplicando una matriz de Antes / Después: corrección de textos, accesibilidad, ética, coherencia estética y potencia del CTA.',
    contenidos: [
      'La primera versión nunca es la definitiva: la cultura de la iteración',
      'Matriz de Antes y Después: detectar debilidades y elevar la calidad',
      'Lista de cotejo de ética, accesibilidad y derechos de autor',
      'Pulido final de diseño y copywriting'
    ],
    queVamosAAprender: 'Los grandes comunicadores no escriben mejor: editan y pulen mejor. Hoy seremos nuestros propios editores críticos para comparar la primera versión con la versión optimizada definitiva.',
    explicacionTeorica: {
      seccion: 'El arte de la optimización y la iteración crítica',
      texto: 'Optimizar es ajustar cada tuerca. Revisar la ortografía y puntuación, comprobar que los colores tengan suficiente contraste, verificar que no haya datos dudosos y corroborar que el llamado a la acción sea imposible de malinterpretar. Este proceso distingue a una tarea improvisada de una campaña profesional.',
      conceptosClave: [
        { concepto: 'Iteración', definicion: 'Proceso de revisar, corregir y perfeccionar un producto a través de sucesivas pruebas.' },
        { concepto: 'Control de calidad ético', definicion: 'Chequeo exhaustivo de fuentes, consentimiento y licencias de recursos.' },
        { concepto: 'Accesibilidad comunicacional', definicion: 'Garantizar que cualquier persona, sin importar su condición o dispositivo, pueda comprender el mensaje.' }
      ]
    },
    ejemplos: [
      {
        id: 'ej-25-1',
        titulo: 'Matriz de optimización de un titular escolar',
        tipo: 'comparacion',
        contenido: 'Antes: "Vengan todos al festival que va a estar re bueno el sábado creo que a las 3". Después: "¡Llega el Festival de Primavera de la Escuela 787! 🌸 Este sábado 26 de noviembre desde las 15:00 hs en el patio central. Entrada libre. ¡Te esperamos!".',
        analisis: 'La versión optimizada ganó precisión de datos, dinamismo visual y eliminó dudas.',
        metadatos: { 'Impacto': 'Mayor certidumbre y convocatoria' }
      }
    ],
    actividadAnalizar: {
      id: 'act-25-analizar',
      tipo: 'multiple_choice',
      titulo: 'Detectar qué aspecto requiere optimización urgente',
      consigna: 'En la versión preliminar de una pieza, el texto dice: "Científicos de Harvard aseguran que si no reciclás este año el mundo se termina mañana". ¿Qué corrección inmediata debe aplicarse?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Reemplazar esa afirmación sensacionalista y falsa por datos de concientización ambiental reales y verificables.', esCorrecta: true, retroalimentacion: '¡Exacto! El rigor y la honestidad son innegociables en una campaña escolar.' },
          { id: 'o2', texto: 'Ponerlo en mayúsculas para que asuste más.', esCorrecta: false, retroalimentacion: 'Agravaría la falta ética.' }
        ]
      }
    },
    actividadPracticar: {
      id: 'act-25-practicar',
      tipo: 'multiple_choice',
      titulo: 'Checklist de accesibilidad y contraste',
      consigna: 'Al probar la imagen en una pantalla con bajo brillo, el texto secundario desaparece. ¿Cómo se optimiza?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Aumentando el contraste cromático y el tamaño de la tipografía para asegurar que se lea en cualquier condición.', esCorrecta: true, retroalimentacion: '¡Excelente! El diseño accesible piensa en todas las realidades de pantalla.' },
          { id: 'o2', texto: 'Pedirle a los usuarios que compren celulares más caros.', esCorrecta: false, retroalimentacion: 'Respuesta absurda y excluyente.' }
        ]
      }
    },
    actividadDesafio: {
      id: 'act-25-desafio',
      tipo: 'multiple_choice',
      titulo: 'El valor de la coevaluación entre pares',
      consigna: 'Le mostrás tu campaña a un compañero de otro curso y te dice: "No me queda claro qué día hay que llevar los libros". ¿Cómo tomás esa devolución?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Como una oportunidad de oro para agregar la fecha con mayor claridad antes de la presentación final.', esCorrecta: true, retroalimentacion: '¡Brillante madurez profesional! La mirada externa revela puntos ciegos.' },
          { id: 'o2', texto: 'Ofenderse y no cambiar nada.', esCorrecta: false, retroalimentacion: 'Bloquea el aprendizaje y la mejora del producto.' }
        ]
      }
    },
    produccion: {
      id: 'prod-25',
      titulo: 'Ficha de Optimización Antes / Después',
      consigna: 'Documentá las mejoras realizadas entre la primera versión y la versión final de tu campaña.',
      formato: 'Matriz Comparativa de Optimización',
      campos: [
        { id: 'elemento_a_mejorar', label: '1. ¿Qué aspecto de tu campaña necesitaba mayor claridad o fuerza?', placeholder: 'Ej: El titular del video inicial era muy vago y faltaba la hora exacta...', tipo: 'textarea' },
        { id: 'version_previa', label: '2. Versión anterior (tal como estaba en la clase 24)', placeholder: 'Copia del texto o idea previa...', tipo: 'textarea' },
        { id: 'version_optimizada', label: '3. Versión final corregida y pulida', placeholder: 'La versión definitiva lista para brillar...', tipo: 'textarea' },
        { id: 'checklist_verificacion', label: '4. Justificación de los cambios realizados', placeholder: 'Por qué esta versión es más clara, ética y eficaz...', tipo: 'textarea' }
      ],
      criterioEvaluacion: ['Capacidad autocrítica de corrección', 'Evidencia clara de superación']
    },
    autoevaluacion: [
      {
        id: 'auto-25-1',
        pregunta: '¿Comprendo que el proceso de revisión y edición es lo que transforma una buena idea en un mensaje verdaderamente eficaz?',
        opciones: [
          { id: 'a1', texto: 'Sí, disfruto pulir los detalles para que la comunicación sea impecable.', valor: 4, esCorrecta: true, retroalimentacion: '¡Esa es la firma de los grandes realizadores!' },
          { id: 'a2', texto: 'A veces me cansa volver a leer lo que ya escribí.', valor: 2, retroalimentacion: 'La paciencia en la edición es la mitad del éxito.' }
        ]
      }
    ],
    puntajeMaximo: 129,
    logroIdAsociado: 'logro-17'
  },
  {
    id: 26,
    numero: 26,
    fecha: '26/11/2026',
    ejeId: 'eje-5',
    ejeNombre: 'PROYECTO INTEGRADOR',
    titulo: 'Presentación final',
    objetivo: 'Presentar y fundamentar la Campaña de Comunicación Digital Integral respondiendo a las preguntas estratégicas del comunicador prosumidor y celebrando el cierre del Laboratorio.',
    contenidos: [
      'Defensa y argumentación pública de la campaña',
      '¿Qué comunica? ¿Para quién? ¿Con qué propósito? ¿Por qué ese medio y formato?',
      'Verificación ética de fuentes y transparencia en el uso de IA',
      'Balance del aprendizaje: de consumidores a prosumidores críticos'
    ],
    queVamosAAprender: '¡Llegamos a la meta final! Hoy presentás tu Campaña de Comunicación Digital Integral ante la comunidad del laboratorio. Demostrarás con argumentos sólidos por qué tomaste cada decisión comunicacional.',
    explicacionTeorica: {
      seccion: 'La consolidación del prosumidor crítico',
      texto: 'Haber completado este taller significa que ya no mirás las redes sociales de la misma manera. Sabés cómo viaja un mensaje, cómo operan los algoritmos, cómo detectar noticias engañosas, cómo usar la IA con responsabilidad y cómo construir mensajes multimodales que transformen tu comunidad escolar. Tu campaña final es la prueba viva de tu autonomía.',
      conceptosClave: [
        { concepto: 'Defensa estratégica', definicion: 'Capacidad de justificar con solvencia técnica y ética cada decisión de diseño y redacción.' },
        { concepto: 'Prosumidor crítico', definicion: 'Ciudadano que consume selectivamente y produce contenidos con ética, veracidad y propósito social.' },
        { concepto: 'Campaña integral', definicion: 'Obra colectiva e individual que articula investigación, diseño, redacción y evaluación.' }
      ]
    },
    ejemplos: [
      {
        id: 'ej-26-1',
        titulo: 'Ficha de defensa final',
        tipo: 'caso',
        contenido: '"Elegí Instagram porque el 90% de mi curso está allí. Elegí video corto porque capta la atención inmediata. Verifiqué cada dato con el centro de estudiantes y usé IA solo para una lluvia de ideas inicial que luego reescribí totalmente con mis palabras".',
        analisis: 'Demuestra control reflexivo sobre todo el proceso de comunicación digital.',
        metadatos: { 'Criterio': 'Autonomía y solvencia comunicativa' }
      }
    ],
    actividadAnalizar: {
      id: 'act-26-analizar',
      tipo: 'multiple_choice',
      titulo: 'Evaluar la solidez de una argumentación',
      consigna: 'Cuando te preguntan: "¿Por qué elegiste un formato de historia con encuesta interactiva para abrir tu campaña?", ¿cuál es la mejor justificación pedagógica?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: '"Porque la historia vertical con sticker reduce la fricción de respuesta y genera un primer contacto de participación que predispone a la audiencia a ver el video principal".', esCorrecta: true, retroalimentacion: '¡Brillante fundamentación profesional y estratégica!' },
          { id: 'o2', texto: '"Porque sí, porque pintó poner una historia".', esCorrecta: false, retroalimentacion: 'Carente de fundamento técnico.' }
        ]
      }
    },
    actividadPracticar: {
      id: 'act-26-practicar',
      tipo: 'multiple_choice',
      titulo: 'Transparencia sobre recursos e IA',
      consigna: 'Durante la presentación de tu campaña, el docente te pregunta si utilizaste Inteligencia Artificial. ¿Cuál es tu respuesta ejemplar?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: '"Sí, utilicé IA para explorar opciones de títulos; luego verifiqué la información con fuentes reales, descarté dos propuestas erróneas y adapté el copy final a mi propio estilo y a la voz de la escuela".', esCorrecta: true, retroalimentacion: '¡Excelente honestidad y madurez intelectual! Eso define a un verdadero autor.' },
          { id: 'o2', texto: '"No sé, apreté botones y salió eso solo".', esCorrecta: false, retroalimentacion: 'Demuestra falta de autoría y control.' }
        ]
      }
    },
    actividadDesafio: {
      id: 'act-26-desafio',
      tipo: 'multiple_choice',
      titulo: 'Demostrar la meta del taller',
      consigna: 'Completá la afirmación fundacional del comunicador digital responsable de la Escuela Nº 787: "Al finalizar este laboratorio puedo demostrar que..."',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: '"Puedo construir un mensaje, identificar una audiencia, elegir un medio y producir una comunicación digital eficaz y responsable."', esCorrecta: true, retroalimentacion: '¡Meta alcanzada con honores! Felicitaciones por tu recorrido.' },
          { id: 'o2', texto: '"Puedo scrollear 12 horas seguidas sin pestañear."', esCorrecta: false, retroalimentacion: 'Esa es una conducta de consumo pasivo que este taller transformó.' }
        ]
      }
    },
    produccion: {
      id: 'prod-26',
      titulo: 'Ficha de Presentación y Defensa Final de Campaña',
      consigna: 'Completá la ficha de presentación final que quedará registrada en tu Portafolio Digital de egreso del Laboratorio.',
      formato: 'Ficha de Defensa y Graduación',
      campos: [
        { id: 'sintesis_campana', label: '1. ¿Qué comunica tu campaña y con qué propósito central?', placeholder: 'Resumen sintético en 2 oraciones...', tipo: 'textarea' },
        { id: 'justificacion_audiencia_medio', label: '2. ¿Para quién fue pensada y por qué elegiste esos canales?', placeholder: 'Justificación de los medios seleccionados...', tipo: 'textarea' },
        { id: 'verificacion_fuentes', label: '3. ¿Cómo verificaste la información y qué recursos utilizaste éticamente?', placeholder: 'Fuentes consultadas, licencias de imágenes...', tipo: 'textarea' },
        { id: 'uso_ia_declaracion', label: '4. ¿Utilizaste Inteligencia Artificial? Si la usaste, explicá cómo y qué decisiones tomaste', placeholder: 'Declaración transparente y autoría...', tipo: 'textarea' },
        { id: 'aprendizaje_personal', label: '5. Tu mayor aprendizaje en este laboratorio', placeholder: 'En qué cambió tu forma de ver y producir en los medios digitales...', tipo: 'textarea' }
      ],
      criterioEvaluacion: ['Solvencia reflexiva integral', 'Autonomía de pensamiento crítico']
    },
    autoevaluacion: [
      {
        id: 'auto-26-1',
        pregunta: '¿Me reconozco hoy como un prosumidor crítico capaz de crear contenidos éticos y defender mis ideas?',
        opciones: [
          { id: 'a1', texto: '¡Sí, totalmente! Transformé mi manera de comunicar y participar en el mundo digital.', valor: 4, esCorrecta: true, retroalimentacion: '¡Felicidades, Especialista en Comunicación Digital! Tu voz tiene valor.' },
          { id: 'a2', texto: 'Siento que aprendí muchísimo y seguiré practicando.', valor: 3, retroalimentacion: 'El camino de la comunicación digital continúa todos los días.' }
        ]
      }
    ],
    puntajeMaximo: 129,
    logroIdAsociado: 'logro-18'
  }
];
