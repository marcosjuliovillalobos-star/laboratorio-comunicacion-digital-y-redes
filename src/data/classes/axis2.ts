import { ClassData } from '../../types';

export const AXIS_2_CLASSES: ClassData[] = [
  {
    id: 5,
    numero: 5,
    fecha: '15/09/2026',
    ejeId: 'eje-2',
    ejeNombre: 'REDES SOCIALES',
    titulo: 'Funcionamiento de las redes',
    objetivo: 'Comprender la arquitectura social y técnica de las redes digitales: usuarios, perfiles, comunidades, flujos de interacción y métricas de alcance.',
    contenidos: [
      'De la web estática a las plataformas interactivas',
      'Nodos y lazos: cómo se conectan las comunidades',
      'Interacciones: me gusta, comentarios, compartidos y guardados',
      'Alcance orgánico vs alcance viral'
    ],
    queVamosAAprender: 'Las redes sociales no son una televisión: son un ecosistema vivo donde cada clic, cada me gusta y cada compartido empuja un contenido hacia otras personas. Analizaremos cómo se propaga una publicación y qué factores la impulsan.',
    explicacionTeorica: {
      seccion: 'Ecosistema de grafos y circulación',
      texto: 'Una red social es una estructura compuesta por nodos (perfiles de usuarios) conectados por lazos (amistad, seguimiento, mensajes). Cuando un usuario interactúa con un contenido, el sistema propaga esa señal a sus contactos. Las interacciones con mayor compromiso (como compartir o comentar largamente) generan un efecto multiplicador exponencial en el alcance.',
      conceptosClave: [
        { concepto: 'Alcance', definicion: 'Cantidad de personas o cuentas únicas que vieron una publicación.' },
        { concepto: 'Engagement / Compromiso', definicion: 'Porcentaje de interacciones activas (likes, comentarios, compartidos) en relación al alcance.' },
        { concepto: 'Comunidad digital', definicion: 'Grupo de personas unidas por afinidad, objetivos o temáticas compartidas en la red.' }
      ]
    },
    ejemplos: [
      {
        id: 'ej-5-1',
        titulo: 'Simulación de propagación comunitaria',
        tipo: 'esquema',
        contenido: 'Un estudiante publica una foto del proyecto de robótica escolar. Si 5 compañeros solo ponen "like", el alcance sube un 10%. Si 3 compañeros la comparten en sus historias, el alcance se multiplica por 5 porque llega a las redes de esos 3 contactos.',
        analisis: 'Compartir es la acción más potente de propagación en la arquitectura de redes.'
      }
    ],
    actividadAnalizar: {
      id: 'act-5-analizar',
      tipo: 'simulacion_red',
      titulo: 'Simulación de circulación de una publicación',
      consigna: 'Identificá qué acción genera el mayor impacto de difusión en una red comunitaria.',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Visualizar la publicación durante 2 segundos sin reaccionar', esCorrecta: false, retroalimentacion: 'Genera una señal muy débil de retención.' },
          { id: 'o2', texto: 'Compartir el posteo agregando un comentario y citando a otra persona interesada', esCorrecta: true, retroalimentacion: '¡Excelente! Activa un nuevo nodo en la red y transfiere credibilidad al mensaje.' },
          { id: 'o3', texto: 'Darle like silencioso', esCorrecta: false, retroalimentacion: 'Es una interacción básica pero con menor peso de amplificación que compartir.' }
        ]
      }
    },
    actividadPracticar: {
      id: 'act-5-practicar',
      tipo: 'multiple_choice',
      titulo: 'Factores que favorecen la difusión comunitaria',
      consigna: '¿Qué característica de un mensaje favorece que las personas de una escuela decidan compartirlo voluntariamente?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Que sea útil, resuelva un problema real de la comunidad o despierte orgullo colectivo.', esCorrecta: true, retroalimentacion: '¡Exacto! El contenido de valor compartido fortalece los lazos de la comunidad.' },
          { id: 'o2', texto: 'Que tenga muchas palabras complicadas y formato confuso.', esCorrecta: false, retroalimentacion: 'La confusión detiene la circulación.' }
        ]
      }
    },
    actividadDesafio: {
      id: 'act-5-desafio',
      tipo: 'multiple_choice',
      titulo: 'Métricas de vanidad vs métricas de valor',
      consigna: 'Un video tiene 100.000 visualizaciones pero nadie se inscribió al taller anunciado. ¿Cómo se califica comunicacionalmente?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Un éxito total porque las visualizaciones son lo único que importa.', esCorrecta: false, retroalimentacion: 'Esa es una métrica de vanidad: no logró el objetivo real.' },
          { id: 'o2', texto: 'Falla estratégica: tuvo visualización efímera pero no generó la acción esperada (conversión/participación).', esCorrecta: true, retroalimentacion: '¡Brillante análisis! Comunicar con propósito es lograr el objetivo, no solo acumular vistas pasivas.' }
        ]
      }
    },
    produccion: {
      id: 'prod-5',
      titulo: 'Mapa de funcionamiento de una red social',
      consigna: 'Describí cómo circularía una publicación que difunde una campaña de reciclaje en tu escuela.',
      formato: 'Esquema de Flujo de Red',
      campos: [
        { id: 'punto_partida', label: 'Punto de partida (quién publica y en qué red)', placeholder: 'Ej: Cuenta del taller en Instagram...', tipo: 'input' },
        { id: 'primeros_nodos', label: 'Primeros nodos activadores (quiénes interactúan primero)', placeholder: 'Ej: Estudiantes del taller comentan y comparten...', tipo: 'textarea' },
        { id: 'amplificacion', label: 'Estrategia de amplificación comunitaria', placeholder: 'Ej: Se pide a los preceptores y profesores que compartan en grupos de familias...', tipo: 'textarea' }
      ],
      criterioEvaluacion: ['Comprensión de la red de contactos', 'Estrategia realista de difusión']
    },
    autoevaluacion: [
      {
        id: 'auto-5-1',
        pregunta: '¿Comprendo la diferencia entre solo mirar contenido y participar activamente como prosumidor en una red?',
        opciones: [
          { id: 'a1', texto: 'Sí, entiendo cómo mis acciones influyen en qué contenidos circulan.', valor: 4, esCorrecta: true, retroalimentacion: '¡Excelente toma de conciencia!' },
          { id: 'a2', texto: 'Todavía me considero un usuario que solo scrollea sin impacto.', valor: 2, retroalimentacion: 'Cada interacción tuya deja una huella y entrena al sistema.' }
        ]
      }
    ],
    puntajeMaximo: 129,
    logroIdAsociado: 'logro-4'
  },
  {
    id: 6,
    numero: 6,
    fecha: '17/09/2026',
    ejeId: 'eje-2',
    ejeNombre: 'REDES SOCIALES',
    titulo: 'Algoritmos',
    objetivo: 'Comprender qué es un algoritmo desmitificando su naturaleza (procedimientos sistemáticos y reglas automatizadas, no magia), analizando cómo personaliza los feeds según patrones de interacción.',
    contenidos: [
      'Definición de algoritmo: secuencias lógicas de instrucciones',
      'Factores de ordenamiento: tiempo de permanencia, historial, relevancia',
      'Burbujas de filtro y cámaras de eco',
      'Cómo entrenar y reiniciar conscientemente el feed propio'
    ],
    queVamosAAprender: 'El algoritmo no es una persona ni magia misteriosa. Es código de programación creado para clasificar qué contenido mostrarte primero según tu comportamiento. Descubriremos cómo funciona para no quedar atrapados en burbujas de información.',
    explicacionTeorica: {
      seccion: '¿Qué es realmente un algoritmo en redes?',
      texto: 'Un algoritmo es un conjunto de reglas matemáticas y lógicas que procesa millones de datos por segundo. En plataformas como TikTok o YouTube, evalúa variables como: ¿cuántos segundos miraste el video? ¿lo volviste a ver? ¿le diste like? ¿leíste los comentarios? Con esos datos calcula una "probabilidad de interés" y ordena tu pantalla para maximizar el tiempo que pasás en la plataforma.',
      conceptosClave: [
        { concepto: 'Algoritmo de recomendación', definicion: 'Sistema automatizado que selecciona y clasifica contenidos para cada usuario específico.' },
        { concepto: 'Burbuja de filtro', definicion: 'Aislamiento informativo donde solo recibís contenido que coincide con tus creencias previas.' },
        { concepto: 'Tiempo de retención', definicion: 'Los segundos que permanecés mirando un contenido sin deslizar la pantalla.' }
      ]
    },
    ejemplos: [
      {
        id: 'ej-6-1',
        titulo: 'Experimento del feed condicionado',
        tipo: 'caso',
        contenido: 'Si durante 3 días solo te detenés a mirar videos de bromas pesadas o discusiones violentas, el algoritmo asumirá que ese contenido te retiene y llenará tu feed de ese tipo de videos, ocultando contenidos científicos, artísticos o escolares.',
        analisis: 'El algoritmo no juzga si el contenido te hace bien o mal: optimiza la retención de tu atención.'
      }
    ],
    actividadAnalizar: {
      id: 'act-6-analizar',
      tipo: 'simulacion_algoritmo',
      titulo: 'Simular un sistema de recomendaciones',
      consigna: 'Observá la simulación algorítmica: Si un usuario mira 5 videos de conspiraciones hasta el final y le da like a 3 de ellos, ¿qué decidirá el algoritmo en el siguiente refresco del feed?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Mostrarle documentales académicos con fuentes científicas para corregirlo.', esCorrecta: false, retroalimentacion: 'El algoritmo no actúa como docente corrector; prioriza lo que retuvo al usuario.' },
          { id: 'o2', texto: 'Priorizar más contenidos similares de teorías conspirativas y alta carga emocional.', esCorrecta: true, retroalimentacion: '¡Exacto! El sistema premia el patrón de retención e interacción aumentando la burbuja temática.' },
          { id: 'o3', texto: 'Bloquearle la cuenta por mirar conspiraciones.', esCorrecta: false, retroalimentacion: 'No es motivo de bloqueo, sino de categorización de perfil.' }
        ]
      }
    },
    actividadPracticar: {
      id: 'act-6-practicar',
      tipo: 'multiple_choice',
      titulo: 'Desarmando el mito de la entidad mágica',
      consigna: '¿Cuál de las siguientes afirmaciones describe de manera científicamente correcta al algoritmo de una red social?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Es un ser todopoderoso con conciencia propia que decide el destino de las personas.', esCorrecta: false, retroalimentacion: 'Pensamiento mágico: es software creado por seres humanos e ingenieros.' },
          { id: 'o2', texto: 'Es un conjunto de procedimientos matemáticos y estadísticos programados para procesar datos y predecir qué contenido mantendrá al usuario conectado.', esCorrecta: true, retroalimentacion: '¡Brillante! Definición precisa, desmitificadora y rigurosa.' }
        ]
      }
    },
    actividadDesafio: {
      id: 'act-6-desafio',
      tipo: 'multiple_choice',
      titulo: 'Estrategia para salir de una burbuja de filtro',
      consigna: '¿Cómo puede un usuario entrenar activamente su algoritmo para recibir contenido más diverso y educativo?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Usar la opción "no me interesa", buscar intencionalmente divulgadores científicos y no quedarse mirando videos que le generan enojo.', esCorrecta: true, retroalimentacion: '¡Excelente! Enviar señales conscientes de interacción reentrena los filtros de personalización.' },
          { id: 'o2', texto: 'Comentar enfurecido en todos los videos que no le gustan.', esCorrecta: false, retroalimentacion: '¡Grave error! El algoritmo interpreta el comentario como interés ("engagement") y le enviará más de lo mismo.' }
        ]
      }
    },
    produccion: {
      id: 'prod-6',
      titulo: 'Ficha de análisis algorítmico personal',
      consigna: 'Analizá tu propia experiencia en tu red social principal y completá la ficha de diagnóstico.',
      formato: 'Diagnóstico Algorítmico',
      campos: [
        { id: 'red_analizada', label: 'Red social analizada', placeholder: 'Ej: TikTok / Instagram Reels / YouTube...', tipo: 'input' },
        { id: 'temas_dominantes', label: '¿Qué tres temas dominan tus primeras 10 publicaciones recomendadas?', placeholder: 'Ej: 1. Gaming, 2. Memes de fútbol, 3. Recetas...', tipo: 'textarea' },
        { id: 'patron_usuario', label: '¿Qué acciones tuyas creés que llevaron al algoritmo a mostrarte eso?', placeholder: 'Ej: Me quedo mirando partidas de streamers hasta tarde...', tipo: 'textarea' },
        { id: 'plan_reentrenamiento', label: 'Acción concreta para diversificar tu feed', placeholder: 'Ej: Seguir 3 cuentas de ciencia e historia y marcar "no me interesa" en videos polémicos...', tipo: 'textarea' }
      ],
      criterioEvaluacion: ['Capacidad de autoobservación crítica', 'Comprensión de las señales de interacción']
    },
    autoevaluacion: [
      {
        id: 'auto-6-1',
        pregunta: '¿Comprendo que el algoritmo responde a mis acciones y que puedo tomar control consciente sobre lo que consumo?',
        opciones: [
          { id: 'a1', texto: 'Sí, entiendo que cada clic entrena a la máquina y soy prosumidor responsable.', valor: 4, esCorrecta: true, retroalimentacion: '¡Excelente pensamiento crítico!' },
          { id: 'a2', texto: 'A veces siento que la red decide todo por mí.', valor: 2, retroalimentacion: 'Recordá que tus pausas y clics son la materia prima del algoritmo.' }
        ]
      }
    ],
    puntajeMaximo: 129,
    logroIdAsociado: 'logro-5'
  },
  {
    id: 7,
    numero: 7,
    fecha: '22/09/2026',
    ejeId: 'eje-2',
    ejeNombre: 'REDES SOCIALES',
    titulo: 'Identidad digital',
    objetivo: 'Mapear la huella digital y la reputación en línea, analizando cómo las publicaciones, fotos y comentarios construyen la imagen pública de una persona o institución.',
    contenidos: [
      'Huella digital activa vs huella digital pasiva',
      'Reputación en línea y permanencia de los datos en la red',
      'Privacidad: qué datos compartir y cuáles resguardar',
      'Coherencia entre la identidad analógica y la digital'
    ],
    queVamosAAprender: 'Todo lo que hacemos en internet deja un rastro. Aprenderemos a gestionar nuestra identidad digital para proteger nuestra privacidad y construir una presencia digital positiva y respetuosa.',
    explicacionTeorica: {
      seccion: 'La construcción de la identidad en entornos conectados',
      texto: 'La identidad digital es el conjunto de rasgos, datos, imágenes y testimonios que configuran la percepción que otros tienen de nosotros en la red. A diferencia de una conversación efímera en el patio escolar, en el entorno digital los textos e imágenes pueden ser capturados, archivados y compartidos indefinidamente.',
      conceptosClave: [
        { concepto: 'Huella digital', definicion: 'Rastro de datos e interacciones que dejamos al navegar, comentar y publicar.' },
        { concepto: 'Reputación digital', definicion: 'La opinión o valoración colectiva construida a partir de la huella digital.' },
        { concepto: 'Privacidad por diseño', definicion: 'Configurar perfiles y hábitos para que solo accedan a nuestra información quienes nosotros decidamos.' }
      ]
    },
    ejemplos: [
      {
        id: 'ej-7-1',
        titulo: 'Análisis de perfiles ficticios',
        tipo: 'caso',
        contenido: 'Perfil A: Usuario anónimo con foto de dibujo, publica insultos en debates y comparte rumores sin verificar. Perfil B: Perfil con biografía clara, comparte proyectos de programación y comenta constructivamente en foros comunitarios.',
        analisis: 'La identidad no depende solo de la foto, sino de la calidad de las interacciones y el valor aportado a la comunidad.',
        metadatos: { 'Impacto': 'Construcción de reputación y confianza' }
      }
    ],
    actividadAnalizar: {
      id: 'act-7-analizar',
      tipo: 'multiple_choice',
      titulo: 'Identificar riesgos en una publicación personal',
      consigna: 'Un estudiante sube una foto con el uniforme del colegio donde se ve la dirección de su casa y el documento de identidad en una mesa. ¿Qué problema principal presenta?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Mala iluminación en la fotografía.', esCorrecta: false, retroalimentacion: 'El problema técnico es secundario frente al riesgo de seguridad.' },
          { id: 'o2', texto: 'Vulneración crítica de la privacidad y exposición de datos personales sensibles que facilitan la suplantación o riesgos físicos.', esCorrecta: true, retroalimentacion: '¡Exacto! Los datos sensibles nunca deben exponerse públicamente.' },
          { id: 'o3', texto: 'Ninguno, internet es completamente seguro.', esCorrecta: false, retroalimentacion: 'Toda publicación pública puede ser utilizada por terceros.' }
        ]
      }
    },
    actividadPracticar: {
      id: 'act-7-practicar',
      tipo: 'multiple_choice',
      titulo: 'Huella digital permanente',
      consigna: '¿Por qué borrar una historia o publicación conflictiva a los 5 minutos no garantiza que haya desaparecido?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Cualquier usuario pudo haber realizado una captura de pantalla ("screenshot") o el servidor guarda copias temporales.', esCorrecta: true, retroalimentacion: '¡Muy bien! Lo publicado en digital pierde el control exclusivo de su autor.' },
          { id: 'o2', texto: 'Porque el teléfono se rompe al borrar.', esCorrecta: false, retroalimentacion: 'Explicación sin sentido técnico.' }
        ]
      }
    },
    actividadDesafio: {
      id: 'act-7-desafio',
      tipo: 'multiple_choice',
      titulo: 'Construir una presencia digital constructiva',
      consigna: '¿Qué acción fortalece positivamente la identidad digital de un estudiante secundario?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Compartir los proyectos, aprendizajes y trabajos creativos realizados en el taller escolar con respeto y orgullo.', esCorrecta: true, retroalimentacion: '¡Excelente! Crea un portafolio de valor que demuestra habilidades y compromiso ciudadano.' },
          { id: 'o2', texto: 'Pelearse con usuarios desconocidos en foros públicos.', esCorrecta: false, retroalimentacion: 'Daña la reputación y genera desgaste emocional.' }
        ]
      }
    },
    produccion: {
      id: 'prod-7',
      titulo: 'Mapa de identidad digital personal',
      consigna: 'Elaborá una guía de principios para tu propia identidad digital como estudiante y futuro profesional.',
      formato: 'Decálogo de Identidad',
      campos: [
        { id: 'biografia_ideal', label: 'Biografía ideal (en 150 caracteres)', placeholder: 'Cómo te gustaría presentarte ante la comunidad educativa...', tipo: 'input' },
        { id: 'datos_prohibidos', label: 'Tres datos personales que NUNCA compartirás públicamente', placeholder: 'Ej: 1. Dirección particular, 2. Contraseñas, 3. Documento...', tipo: 'textarea' },
        { id: 'valores_interaccion', label: 'Tres valores que guiarán tus comentarios y contenidos', placeholder: 'Ej: Respeto, verificación de fuentes, empatía...', tipo: 'textarea' }
      ],
      criterioEvaluacion: ['Conciencia de protección de datos', 'Presentación constructiva']
    },
    autoevaluacion: [
      {
        id: 'auto-7-1',
        pregunta: '¿Reconozco que mis publicaciones pasadas, presentes y futuras forman parte de mi identidad en el mundo real?',
        opciones: [
          { id: 'a1', texto: 'Sí, cuido mi reputación digital con la misma seriedad que en el aula.', valor: 4, esCorrecta: true, retroalimentacion: '¡Madurez y responsabilidad digital!' },
          { id: 'a2', texto: 'A veces publico cosas impulsivamente sin pensar en las consecuencias.', valor: 2, retroalimentacion: 'Una buena pausa antes de publicar previene problemas futuros.' }
        ]
      }
    ],
    puntajeMaximo: 129,
    logroIdAsociado: 'logro-6'
  },
  {
    id: 8,
    numero: 8,
    fecha: '24/09/2026',
    ejeId: 'eje-2',
    ejeNombre: 'REDES SOCIALES',
    titulo: 'Netiqueta',
    objetivo: 'Aplicar pautas de convivencia, respeto y resolución pacífica de conflictos en entornos virtuales comunitarios.',
    contenidos: [
      'Origen y fundamentos de la Netiqueta',
      'El respeto en las comunicaciones asincrónicas',
      'Uso de mayúsculas (gritar en internet) y signos de puntuación',
      'Ciberacoso (grooming, ciberbullying): detección y actuación',
      'Resolución dialogada de malentendidos en grupos de mensajería'
    ],
    queVamosAAprender: 'Detrás de cada pantalla hay una persona real con sentimientos y derechos. La netiqueta no son reglas aburridas: son los acuerdos indispensables para convivir con tranquilidad y sin violencia en los espacios virtuales.',
    explicacionTeorica: {
      seccion: 'Pautas de convivencia en el ciberespacio',
      texto: 'El término "Netiqueta" proviene de net (red) + etiqueta (buenas maneras). En la comunicación mediada por computadoras falta el lenguaje corporal, la mirada y el tono de voz. Por eso, un comentario sin contexto o escrito en MAYÚSCULAS SOSTENIDAS puede ser percibido como un grito o agresión. La empatía digital es la clave para una comunidad saludable.',
      conceptosClave: [
        { concepto: 'Netiqueta', definicion: 'Normas de cortesía y respeto mutuo adaptadas al ámbito de internet.' },
        { concepto: 'Desinhibición en línea', definicion: 'Efecto psicológico donde las personas dicen cosas más agresivas detrás de una pantalla que cara a cara.' },
        { concepto: 'Mediación de conflictos', definicion: 'Capacidad de calmar una discusión virtual promoviendo el diálogo privado y constructivo.' }
      ]
    },
    ejemplos: [
      {
        id: 'ej-8-1',
        titulo: 'El conflicto en el grupo de WhatsApp del curso',
        tipo: 'caso',
        contenido: 'Un compañero envió la foto de la tarea tarde. Otro le responde: "¿SOS CIEGO? ¿NO VISTE QUE YA LA ENTREGAMOS TODOS? 🤬". El grupo se llena de respuestas agresivas.',
        analisis: 'El uso de mayúsculas, adjetivos descalificativos y emojis agresivos escala el conflicto innecesariamente.',
        metadatos: { 'Falta de netiqueta': 'Agresión verbal e intolerancia ante un error involuntario' }
      }
    ],
    actividadAnalizar: {
      id: 'act-8-analizar',
      tipo: 'toma_decisiones',
      titulo: 'Resolución de un conflicto digital escolar',
      consigna: 'Frente a una discusión acalorada en el grupo escolar por un trabajo grupal, ¿cuál es la mejor intervención para un mediador estudiantil?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Tomar partido por uno de los amigos e insultar al otro para que se calle.', esCorrecta: false, retroalimentacion: 'Aumenta la violencia y fractura la convivencia grupal.' },
          { id: 'o2', texto: 'Escribir: "Chicos, pausemos el chat un momento. Estamos trabajando en equipo; hablemos mañana en el aula con calma o llamemos al delegado para ordenar las tareas con respeto".', esCorrecta: true, retroalimentacion: '¡Excelente! Pone un límite sereno, rescata el objetivo común y traslada la resolución al espacio adecuado.' },
          { id: 'o3', texto: 'Reenviar capturas de la discusión a otros cursos para que se burlen.', esCorrecta: false, retroalimentacion: 'Agrava la situación y vulnera la privacidad grupal.' }
        ]
      }
    },
    actividadPracticar: {
      id: 'act-8-practicar',
      tipo: 'multiple_choice',
      titulo: 'Uso tipográfico de mayúsculas sostenidas',
      consigna: 'En la convención de la netiqueta internacional, ¿qué significa escribir un párrafo entero en LETRAS MAYÚSCULAS?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Que es muy importante y elegante.', esCorrecta: false, retroalimentacion: 'No es considerado elegante en entornos digitales.' },
          { id: 'o2', texto: 'Equivale a GRITAR y suele percibirse como agresivo o autoritario.', esCorrecta: true, retroalimentacion: '¡Correcto! En internet, las mayúsculas continuas equivalen al tono de voz elevado.' },
          { id: 'o3', texto: 'Que el teclado se quedó sin batería.', esCorrecta: false, retroalimentacion: 'No tiene relación con la batería.' }
        ]
      }
    },
    actividadDesafio: {
      id: 'act-8-desafio',
      tipo: 'multiple_choice',
      titulo: 'Derecho a la privacidad de terceros',
      consigna: 'Filmás un video gracioso en el recreo donde aparece un compañero tropezando sin querer. Antes de subirlo a TikTok, ¿qué deberías hacer?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Subirlo rápido para conseguir likes antes de que otros lo graben.', esCorrecta: false, retroalimentacion: 'Vulnera el consentimiento y puede causar burlas humillantes.' },
          { id: 'o2', texto: 'Pedirle permiso explícito y respetar si prefiere que no sea publicado.', esCorrecta: true, retroalimentacion: '¡Excelente! El consentimiento y el respeto a la dignidad del otro están siempre antes que cualquier métrica.' }
        ]
      }
    },
    produccion: {
      id: 'prod-8',
      titulo: 'Manual de Netiqueta para el aula y grupos escolares',
      consigna: 'Redactá 4 reglas de convivencia para los grupos digitales de la Escuela Nº 787.',
      formato: 'Acuerdo de Convivencia',
      campos: [
        { id: 'regla_1', label: 'Regla 1: Sobre el horario y tipo de mensajes', placeholder: 'Ej: Respetar los horarios de descanso...', tipo: 'input' },
        { id: 'regla_2', label: 'Regla 2: Sobre el trato y lenguaje', placeholder: 'Ej: No utilizar apodos hirientes ni mayúsculas agresivas...', tipo: 'input' },
        { id: 'regla_3', label: 'Regla 3: Sobre la privacidad y fotos', placeholder: 'Ej: No compartir fotos de otros sin consentimiento previo...', tipo: 'input' },
        { id: 'regla_4', label: 'Regla 4: Ante un malentendido o desacuerdo', placeholder: 'Ej: Resolver los desacuerdos personalmente o con la mediación docente...', tipo: 'input' }
      ],
      criterioEvaluacion: ['Claridad de las pautas', 'Enfoque restaurativo y preventivo']
    },
    autoevaluacion: [
      {
        id: 'auto-8-1',
        pregunta: '¿Soy capaz de frenar mis respuestas cuando siento enojo en una discusión digital para evitar responder con agresividad?',
        opciones: [
          { id: 'a1', texto: 'Sí, prefiero esperar, calmarme y responder de forma constructiva.', valor: 4, esCorrecta: true, retroalimentacion: '¡Esa es una de las virtudes clave de la madurez digital!' },
          { id: 'a2', texto: 'A veces respondo rápido con enojo y después me arrepiento.', valor: 2, retroalimentacion: 'Respirar y releer antes de enviar es el mejor ejercicio.' }
        ]
      }
    ],
    puntajeMaximo: 129,
    logroIdAsociado: 'logro-7'
  },
  {
    id: 9,
    numero: 9,
    fecha: '29/09/2026',
    ejeId: 'eje-2',
    ejeNombre: 'REDES SOCIALES',
    titulo: 'Desinformación',
    objetivo: 'Identificar señales de alerta ante contenidos potencialmente engañosos, verificando fuentes, autores y contextos para combatir la manipulación informativa.',
    contenidos: [
      'Información vs Desinformación (fake news) vs Información errónea',
      'Clickbait y titulares sensacionalistas diseñados para captar clics',
      'Métodos de verificación: búsqueda inversa, cotejo de fuentes, fecha original',
      'La responsabilidad de NO compartir contenido no verificado'
    ],
    queVamosAAprender: 'En internet circulan miles de noticias falsas que buscan asustar, vender o manipular opiniones. Aprenderemos a ponernos el delantal de detectives digitales para chequear datos antes de creer o viralizar.',
    explicacionTeorica: {
      seccion: 'El desafío de la verdad en la era de la infoxicación',
      texto: 'La desinformación no suele ser un error inocente: muchas veces es creada deliberadamente con fines económicos (ganar dinero con visitas morbosas) o políticos (sembrar odio o polarización). Como ciudadanos prosumidores, nuestra primera obligación ética es frenar la cadena de contagio informativo: si dudás, no compartas.',
      conceptosClave: [
        { concepto: 'Desinformación', definicion: 'Información falsa creada y difundida intencionalmente para engañar o perjudicar.' },
        { concepto: 'Clickbait', definicion: 'Titular exagerado o engañoso cuyo único objetivo es forzar al usuario a hacer clic.' },
        { concepto: 'Verificación lateral (Fact-checking)', definicion: 'Técnica de abrir nuevas pestañas para consultar qué dicen fuentes confiables sobre el tema.' }
      ]
    },
    ejemplos: [
      {
        id: 'ej-9-1',
        titulo: 'Titular engañoso ficticio',
        tipo: 'caso',
        contenido: '"¡Científicos descubren que comer tiza triplica la inteligencia humana! Enterate antes de que lo borren las farmacéuticas."',
        analisis: 'Señales de alerta evidentes: afirmación médica disparatada sin respaldo, apelación a conspiraciones ("antes de que lo borren") y ausencia total de autores o universidades citadas.',
        metadatos: { 'Alerta': 'Sensacionalismo, fuente anónima y llamado urgente' }
      }
    ],
    actividadAnalizar: {
      id: 'act-9-analizar',
      tipo: 'detector_desinformacion',
      titulo: '¿Información o desinformación?',
      consigna: 'Analizá las tres publicaciones ficticias y marcá cuál de ellas es un ejemplo claro de DESINFORMACIÓN con intención engañosa.',
      puntaje: 25,
      data: {
        casos: [
          {
            id: 'c1',
            texto: '"El Servicio Meteorológico Nacional emitió alerta amarilla por ráfagas de viento en la provincia para este martes."',
            tipo: 'INFORMACIÓN VERIFICADA',
            esFalsa: false,
            justificacion: 'Cita al organismo oficial, precisa el fenómeno y no usa lenguaje sensacionalista.'
          },
          {
            id: 'c2',
            texto: '"¡ALERTA MÁXIMA! El Ministerio prohibió los celulares para siempre en todo el país y van a revisar mochilas con drones. ¡Reenviá a 20 grupos ya mismo!"',
            tipo: 'DESINFORMACIÓN MANIPULADORA',
            esFalsa: true,
            justificacion: 'Usa mayúsculas, afirma medidas extremas inverosímiles, no cita decreto oficial y pide reenviar con urgencia artificial.'
          },
          {
            id: 'c3',
            texto: '"La biblioteca escolar suma 40 nuevos títulos de literatura juvenil disponibles para préstamo semanal."',
            tipo: 'INFORMACIÓN INSTITUCIONAL',
            esFalsa: false,
            justificacion: 'Noticia institucional concreta y verificable en el establecimiento.'
          }
        ]
      }
    },
    actividadPracticar: {
      id: 'act-9-practicar',
      tipo: 'multiple_choice',
      titulo: 'Procedimiento de verificación rápida',
      consigna: 'Cuando recibís una noticia impactante en un grupo familiar, ¿cuál es el primer paso antes de reenviarla?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Reenviarla de inmediato con la leyenda "por las dudas les aviso".', esCorrecta: false, retroalimentacion: 'Reenviar "por las dudas" es el principal combustible de la desinformación viral.' },
          { id: 'o2', texto: 'Buscar el titular en Google junto a palabras como "chequeado", "sitio oficial" o medios reconocidos para confirmar si es real.', esCorrecta: true, retroalimentacion: '¡Excelente! La verificación lateral en 30 segundos evita engaños.' },
          { id: 'o3', texto: 'Creerla ciegamente si viene acompañada de un audio anónimo.', esCorrecta: false, retroalimentacion: 'Los audios anónimos son los formatos más comunes de bulos.' }
        ]
      }
    },
    actividadDesafio: {
      id: 'act-9-desafio',
      tipo: 'multiple_choice',
      titulo: 'Detectar señales de alerta en imágenes manipuladas',
      consigna: 'Ves una foto de una inundación catastrófica supuestamente ocurrida ayer en tu ciudad, pero los autos tienen patentes de otro país y los carteles están en otro idioma. ¿Qué ocurrió?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Es una descontextualización: utilizaron una foto real de otro lugar y otra fecha para generar pánico local.', esCorrecta: true, retroalimentacion: '¡Brillante ojo crítico! La descontextualización es una de las trampas más frecuentes en redes.' },
          { id: 'o2', texto: 'Que la ciudad cambió sus patentes de un día para el otro.', esCorrecta: false, retroalimentacion: 'Respuesta absurda frente a una evidente manipulación de contexto.' }
        ]
      }
    },
    produccion: {
      id: 'prod-9',
      titulo: 'Ficha de verificación de desinformación',
      consigna: 'Elegí un rumor digital o noticia sospechosa ficticia y completá la lista de chequeo para desarmarla.',
      formato: 'Ficha de Verificación Forense',
      campos: [
        { id: 'titular_sospechoso', label: 'Titular o mensaje sospechoso ficticio', placeholder: 'Ej: Van a suspender las clases 3 meses por una plaga de marcianos...', tipo: 'input' },
        { id: 'senales_alerta', label: 'Señales de alerta detectadas (al menos dos)', placeholder: 'Ej: Falta de fuentes, urgencia emocional exagerada...', tipo: 'textarea' },
        { id: 'como_verificarlo', label: '¿Cómo demostrarías que es falso?', placeholder: 'Ej: Consultando el boletín oficial de educación y comunicados directivos...', tipo: 'textarea' },
        { id: 'mensaje_aclaratorio', label: 'Mensaje de respuesta para frenar el rumor en el grupo', placeholder: 'Ej: Chicos, no reenvíen esto, es falso porque el ministerio no emitió ningún aviso...', tipo: 'textarea' }
      ],
      criterioEvaluacion: ['Identificación de elementos engañosos', 'Eficacia del mensaje desmentidor']
    },
    autoevaluacion: [
      {
        id: 'auto-9-1',
        pregunta: '¿Aplico el filtro de la duda metódica antes de compartir cualquier noticia sorprendente?',
        opciones: [
          { id: 'a1', texto: 'Sí, siempre busco verificar fuentes y jamás comparto si no estoy seguro.', valor: 4, esCorrecta: true, retroalimentacion: '¡Sos un auténtico defensor de la verdad digital!' },
          { id: 'a2', texto: 'A veces la emoción me gana y comparto antes de chequear.', valor: 2, retroalimentacion: 'Recordá: la emoción rápida suele ser la trampa del clickbait.' }
        ]
      }
    ],
    puntajeMaximo: 129,
    logroIdAsociado: 'logro-8'
  }
];
