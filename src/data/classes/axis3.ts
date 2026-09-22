import { ClassData } from '../../types';

export const AXIS_3_CLASSES: ClassData[] = [
  {
    id: 10,
    numero: 10,
    fecha: '01/10/2026',
    ejeId: 'eje-3',
    ejeNombre: 'PRODUCCIÓN PARA REDES',
    titulo: 'Imagen y comunicación',
    objetivo: 'Comprender la composición visual, la jerarquía de lectura y la relación entre texto e imagen para crear piezas gráficas con intención comunicativa clara.',
    contenidos: [
      'Elementos de la imagen: punto, línea, color y encuadre',
      'Jerarquía visual: dónde se posa el ojo primero',
      'Contraste y legibilidad en pantallas móviles',
      'Relación de anclaje y relevo entre texto e imagen'
    ],
    queVamosAAprender: 'Una imagen en redes tiene menos de 2 segundos para capturar la mirada. Aprenderemos cómo organizar los elementos, colores y textos para que el diseño comunique el mensaje exacto sin saturar.',
    explicacionTeorica: {
      seccion: 'Composición y jerarquía visual',
      texto: 'En el diseño para redes sociales rige el principio de jerarquía: el elemento más importante debe tener mayor peso visual (por tamaño, color o contraste). Si todo está en negrita o con colores estridentes, nada destaca. La imagen debe complementar al texto, no competir contra él.',
      conceptosClave: [
        { concepto: 'Jerarquía visual', definicion: 'Disposición de los elementos gráficos según su orden de importancia comunicativa.' },
        { concepto: 'Contraste cromático', definicion: 'Diferencia luminosa entre el fondo y los textos que asegura lectura nítida.' },
        { concepto: 'Aire / Espacio negativo', definicion: 'Zonas despejadas alrededor del contenido que permiten que la mirada descanse.' }
      ]
    },
    ejemplos: [
      {
        id: 'ej-10-1',
        titulo: 'Pieza saturada vs Pieza equilibrada',
        tipo: 'comparacion',
        contenido: 'Diseño A: 7 tipografías distintas, fondo de arcoíris y texto pegado a los bordes. Diseño B: Fondo neutro, foto representativa con buen foco, título grande legible y un botón de acción contrastante.',
        analisis: 'El diseño B comunica con serenidad y profesionalismo; el diseño A genera fatiga visual inmediata.',
        metadatos: { 'Criterio': 'Economía de recursos y contraste' }
      }
    ],
    actividadAnalizar: {
      id: 'act-10-analizar',
      tipo: 'multiple_choice',
      titulo: 'Analizar la jerarquía visual de un flyer escolar',
      consigna: 'En un afiche digital para una kermesse escolar, ¿cuál debe ser el elemento de mayor tamaño y peso visual?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'El número de CUIT de la cooperadora escolar en tipografía gigante.', esCorrecta: false, retroalimentacion: 'Es un dato administrativo secundario que no convoca a la fiesta.' },
          { id: 'o2', texto: 'El nombre del evento y la fecha/hora con tipografía clara y destacada.', esCorrecta: true, retroalimentacion: '¡Exacto! Es la información central que define el interés de la audiencia.' },
          { id: 'o3', texto: 'Un dibujo decorativo que tape todo el texto.', esCorrecta: false, retroalimentacion: 'Dificulta la lectura y rompe la función comunicativa.' }
        ]
      }
    },
    actividadPracticar: {
      id: 'act-10-practicar',
      tipo: 'multiple_choice',
      titulo: 'Regla de contraste para accesibilidad móvil',
      consigna: '¿Cuál combinación de color garantiza la mejor legibilidad para personas que leen la pantalla al aire libre?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Texto gris claro sobre fondo blanco.', esCorrecta: false, retroalimentacion: 'Falta de contraste evidente: casi invisible a la luz del sol.' },
          { id: 'o2', texto: 'Texto oscuro de alto contraste sobre fondo claro y limpio.', esCorrecta: true, retroalimentacion: '¡Excelente! Cumple con las pautas de accesibilidad visual universal.' },
          { id: 'o3', texto: 'Texto rojo chillón sobre fondo verde flúo.', esCorrecta: false, retroalimentacion: 'Produce vibración óptica molesta e inaccesible para daltónicos.' }
        ]
      }
    },
    actividadDesafio: {
      id: 'act-10-desafio',
      tipo: 'multiple_choice',
      titulo: 'Seleccionar la imagen con intención didáctica',
      consigna: 'Para un posteo sobre el cuidado de las plantas nativas del patio escolar, ¿qué imagen tiene mayor valor didáctico?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Una foto desenfocada de una zapatilla de un alumno.', esCorrecta: false, retroalimentacion: 'Sin relación temática.' },
          { id: 'o2', texto: 'Una foto nítida de primer plano de la flor nativa del patio con un cartel hecho por los estudiantes indicando su especie.', esCorrecta: true, retroalimentacion: '¡Brillante! Conecta la realidad de la escuela con el contenido botánico y la acción comunitaria.' }
        ]
      }
    },
    produccion: {
      id: 'prod-10',
      titulo: 'Diseño conceptual de una pieza visual comunicacional',
      consigna: 'Definí la estructura visual de un posteo para la red social escolar.',
      formato: 'Brief Visual',
      campos: [
        { id: 'titulo_grafico', label: 'Texto del título principal en la imagen', placeholder: 'Ej: ¡Cuidemos la huerta escolar!', tipo: 'input' },
        { id: 'descripcion_foto', label: 'Descripción de la fotografía central', placeholder: 'Encuadre, qué muestra, qué emoción transmite...', tipo: 'textarea' },
        { id: 'paleta_colores', label: 'Paleta cromática seleccionada (2 a 3 colores)', placeholder: 'Ej: Verde bosque, blanco cálido y detalle en naranja...', tipo: 'input' },
        { id: 'jerarquia_datos', label: 'Datos complementarios (lugar, horario o redes)', placeholder: 'Dónde se ubicarán los datos secundarios...', tipo: 'textarea' }
      ],
      criterioEvaluacion: ['Claridad en la jerarquía visual', 'Coherencia entre colores y tema']
    },
    autoevaluacion: [
      {
        id: 'auto-10-1',
        pregunta: '¿Comprendo que el diseño no es solo decoración, sino una herramienta para hacer comprensible una idea?',
        opciones: [
          { id: 'a1', texto: 'Sí, cada color, tipografía y espacio vacío cumple una función pedagógica.', valor: 4, esCorrecta: true, retroalimentacion: '¡Exacto! La forma sigue a la función comunicativa.' },
          { id: 'a2', texto: 'A veces sigo agregando adornos solo porque me sobran lugares.', valor: 2, retroalimentacion: 'Menos es más: dejá respirar a tus textos.' }
        ]
      }
    ],
    puntajeMaximo: 129,
    logroIdAsociado: 'logro-9'
  },
  {
    id: 11,
    numero: 11,
    fecha: '06/10/2026',
    ejeId: 'eje-3',
    ejeNombre: 'PRODUCCIÓN PARA REDES',
    titulo: 'Publicaciones',
    objetivo: 'Estructurar una publicación digital integrando armónicamente imagen, texto (copy), público destinatario, propósito y llamada a la acción (CTA).',
    contenidos: [
      'Estructura anatómica de un post (gancho, cuerpo, remate, CTA)',
      'La primera línea: el desafío de captar la atención en el scroll',
      'Párrafos breves y legibilidad en pantalla chica',
      'Llamada a la acción (CTA): invitar a la participación'
    ],
    queVamosAAprender: 'Un post exitoso no es casualidad: tiene una arquitectura calculada. Veremos cómo se complementan la imagen con el texto del epígrafe para que quien lo lea sepa qué hacer inmediatamente.',
    explicacionTeorica: {
      seccion: 'La anatomía de una publicación eficaz',
      texto: 'Una publicación consta de cuatro bloques: 1) El gancho (primera línea visible antes del botón "ver más"), 2) El desarrollo (dos o tres oraciones claras con valor o información), 3) La llamada a la acción o CTA (qué queremos que haga el usuario: comentar, inscribirse, compartir), y 4) Elementos de cierre (etiquetas y hashtags temáticos).',
      conceptosClave: [
        { concepto: 'Gancho (Hook)', definicion: 'Frase inicial impactante o pregunta que detiene el deslizamiento de pantalla.' },
        { concepto: 'Llamada a la acción (CTA)', definicion: 'Indicación directa al usuario sobre la acción siguiente que se espera que realice.' },
        { concepto: 'Escaneabilidad', definicion: 'Capacidad de un texto de ser comprendido en una lectura rápida por bloques.' }
      ]
    },
    ejemplos: [
      {
        id: 'ej-11-1',
        titulo: 'Publicación mal diseñada vs Optimizada',
        tipo: 'comparacion',
        contenido: 'Mal diseñada: "Hola a todos hoy les queríamos decir que estamos haciendo cosas en la escuela gracias chau". Optimizada: "¿Sabías que en el laboratorio reciclamos plásticos para armar piezas robóticas? 🤖♻️ Este jueves te mostramos cómo. Comentá abajo qué te gustaría inventar."',
        analisis: 'La versión optimizada plantea una pregunta interesante, ofrece datos concretos y remata con una invitación amigable a comentar.',
        metadatos: { 'Técnica': 'Estructura Gancho + Valor + CTA' }
      }
    ],
    actividadAnalizar: {
      id: 'act-11-analizar',
      tipo: 'multiple_choice',
      titulo: 'Detectar la debilidad de una publicación',
      consigna: 'Leés este post escolar: "¡El viernes hay torneo de ajedrez en la biblioteca! No te lo pierdas." ¿Qué elemento clave le falta?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Falta la hora exacta, cómo anotarse y quiénes pueden participar.', esCorrecta: true, retroalimentacion: '¡Exacto! Deja al interesado sin saber cómo concretar su participación.' },
          { id: 'o2', texto: 'Le faltan 50 emojis de fuego.', esCorrecta: false, retroalimentacion: 'Los emojis excesivos no reemplazan la información de base.' },
          { id: 'o3', texto: 'Está perfecto, no le falta nada.', esCorrecta: false, retroalimentacion: 'Sin datos prácticos, la convocatoria fracasa.' }
        ]
      }
    },
    actividadPracticar: {
      id: 'act-11-practicar',
      tipo: 'multiple_choice',
      titulo: 'Elegir el mejor gancho para un post de concientización',
      consigna: 'Queremos concientizar sobre el cuidado del agua en la escuela. ¿Cuál de estas primeras líneas genera mayor curiosidad?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Tema: el agua es inodora, incolora e insípida.', esCorrecta: false, retroalimentacion: 'Tono enciclopédico plano que no conecta con el día a día.' },
          { id: 'o2', texto: '¿Sabías que una canilla goteando en el patio pierde 30 litros de agua por día sin que nos demos cuenta? 💧', esCorrecta: true, retroalimentacion: '¡Excelente! Dato concreto, cercano y con fuerte impacto reflexivo.' },
          { id: 'o3', texto: 'Por favor lean este texto largo sobre el agua.', esCorrecta: false, retroalimentacion: 'Poco atractivo.' }
        ]
      }
    },
    actividadDesafio: {
      id: 'act-11-desafio',
      tipo: 'multiple_choice',
      titulo: 'Mejorar una llamada a la acción (CTA)',
      consigna: 'Al final de un post sobre un concurso fotográfico escolar, ¿cuál CTA resulta más claro y motivador?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Subí tu foto a tus historias etiquetando a @escuela787 con el hashtag #Miradas787 antes del 20 de octubre para participar 📸', esCorrecta: true, retroalimentacion: '¡Impecable! Indica qué hacer, dónde, cómo y la fecha límite.' },
          { id: 'o2', texto: 'Hacé lo que quieras.', esCorrecta: false, retroalimentacion: 'No orienta la acción.' }
        ]
      }
    },
    produccion: {
      id: 'prod-11',
      titulo: 'Construcción de una publicación digital completa',
      consigna: 'Redactá un posteo completo para la cuenta escolar promocionando la feria comunitaria.',
      formato: 'Publicación Estructurada',
      campos: [
        { id: 'gancho', label: 'Línea de gancho inicial', placeholder: 'Pregunta o dato impactante...', tipo: 'input' },
        { id: 'cuerpo', label: 'Cuerpo del mensaje (información central en 2 o 3 oraciones)', placeholder: 'Qué, cuándo, dónde y por qué...', tipo: 'textarea' },
        { id: 'cta', label: 'Llamada a la acción (CTA)', placeholder: '¿Qué querés que haga el lector?...', tipo: 'input' },
        { id: 'hashtags', label: 'Hashtags temáticos (2 o 3)', placeholder: '#Comunidad787 #FeriaEscolar...', tipo: 'input' }
      ],
      criterioEvaluacion: ['Presencia de las 4 partes estructurales', 'Adecuación de registro']
    },
    autoevaluacion: [
      {
        id: 'auto-11-1',
        pregunta: '¿Comprendo la importancia de estructurar un posteo pensando en la atención dispersa del lector de redes?',
        opciones: [
          { id: 'a1', texto: 'Sí, sé cómo ordenar los elementos para guiar la lectura y la acción.', valor: 4, esCorrecta: true, retroalimentacion: '¡Excelente criterio de producción!' },
          { id: 'a2', texto: 'A veces sigo escribiendo párrafos gigantescos sin pausas.', valor: 2, retroalimentacion: 'Recordá usar saltos de línea y frases directas.' }
        ]
      }
    ],
    puntajeMaximo: 129,
    logroIdAsociado: 'logro-11'
  },
  {
    id: 12,
    numero: 12,
    fecha: '08/10/2026',
    ejeId: 'eje-3',
    ejeNombre: 'PRODUCCIÓN PARA REDES',
    titulo: 'Historias',
    objetivo: 'Diseñar secuencias narrativas para formatos verticales efímeros (Stories), comprendiendo la brevedad, el ritmo visual y la continuidad temporal.',
    contenidos: [
      'El formato vertical 9:16 y el consumo con una sola mano',
      'Ritmo narrativo en secuencias de 3 a 5 historias',
      'Interacciones nativas: encuestas, preguntas, stickers interactivos',
      'Continuidad: cómo mantener enganchado al usuario de una historia a la siguiente'
    ],
    queVamosAAprender: 'Las historias duran pocos segundos y se pasan con un toque del pulgar. Aprenderemos a planificar secuencias que cuenten un proceso completo sin aburrir.',
    explicacionTeorica: {
      seccion: 'La narrativa en formato vertical efímero',
      texto: 'Las historias (Instagram, WhatsApp Estados, Facebook) ofrecen intimidad y espontaneidad. Funcionan como viñetas de una historieta moderna: la primera plantea la intriga o tema, las intermedias desarrollan el momento o testimonio, y la última cierra con una pregunta interactiva o llamado concreto.',
      conceptosClave: [
        { concepto: 'Formato vertical 9:16', definicion: 'Proporción de pantalla completa pensada para teléfonos inteligentes.' },
        { concepto: 'Sticker interactivo', definicion: 'Elemento nativo (encuesta, barra de emojis, caja de preguntas) que invita a participar.' },
        { concepto: 'Continuidad visual', definicion: 'Mantener colores o tipografías constantes para que se entienda que es una misma secuencia.' }
      ]
    },
    ejemplos: [
      {
        id: 'ej-12-1',
        titulo: 'Secuencia de 3 historias para el taller',
        tipo: 'storyboard',
        contenido: 'Historia 1: Foto del pizarrón con la pregunta del día: "¿Alguna vez te creíste una fake news?". Encuesta Sí / No. Historia 2: Video de 10 segundos de dos estudiantes mostrando cómo chequearon un rumor. Historia 3: Placa de cierre con el link al manual de verificación escolar.',
        analisis: 'La secuencia engancha con una encuesta personal, muestra la práctica y ofrece la solución.'
      }
    ],
    actividadAnalizar: {
      id: 'act-12-analizar',
      tipo: 'ordenar',
      titulo: 'Ordenar una secuencia lógica de historias',
      consigna: 'Ordená las 3 historias para que construyan una narrativa coherente sobre un evento escolar.',
      puntaje: 25,
      data: {
        pasos: [
          { orden: 1, texto: 'Historia 1: Gancho e intriga ("¿Están listos para lo que se viene este viernes en el patio?") con sticker de cuenta regresiva' },
          { orden: 2, texto: 'Historia 2: Video breve de backstage mostrando el armado del escenario y los ensayos musicales' },
          { orden: 3, texto: 'Historia 3: Placa final con horario de apertura y sticker de pregunta "¿Quién es tu invitado especial?"' }
        ]
      }
    },
    actividadPracticar: {
      id: 'act-12-practicar',
      tipo: 'multiple_choice',
      titulo: 'Uso de texto en historias verticales',
      consigna: '¿Cuál es la mejor práctica para poner texto sobre una historia en video?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Un bloque de 50 líneas de texto pequeño que tape toda la pantalla.', esCorrecta: false, retroalimentacion: 'Inlegible en los 5 segundos que dura la historia.' },
          { id: 'o2', texto: 'Frases cortas, palabras clave destacadas y ubicación centrada (lejos de los bordes donde van los botones de la app).', esCorrecta: true, retroalimentacion: '¡Excelente! Respeta las zonas seguras de la interfaz móvil.' }
        ]
      }
    },
    actividadDesafio: {
      id: 'act-12-desafio',
      tipo: 'multiple_choice',
      titulo: 'Estimular la participación comunitaria',
      consigna: '¿Qué herramienta de las historias genera mayor retroalimentación directa de los seguidores?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Una caja de preguntas abierta o una encuesta de opciones sencillas.', esCorrecta: true, retroalimentacion: '¡Correcto! Reduce la fricción y estimula la respuesta instantánea.' },
          { id: 'o2', texto: 'No poner ningún elemento interactivo.', esCorrecta: false, retroalimentacion: 'Desaprovecha la naturaleza interactiva del canal.' }
        ]
      }
    },
    produccion: {
      id: 'prod-12',
      titulo: 'Serie de historias digitales (Storyboard de 3 historias)',
      consigna: 'Diseñá el guion de una serie de 3 historias para invitar a participar en el proyecto final del taller.',
      formato: 'Storyboard en 3 Placas',
      campos: [
        { id: 'historia_1', label: 'Historia 1: Apertura (Imagen/Video + Texto + Sticker)', placeholder: 'Ej: Foto de la compu + "¿Sabías comunicar en redes?" + Encuesta...', tipo: 'textarea' },
        { id: 'historia_2', label: 'Historia 2: Desarrollo (Qué mostramos de valor)', placeholder: 'Ej: Muestra del laboratorio en plena producción...', tipo: 'textarea' },
        { id: 'historia_3', label: 'Historia 3: Cierre (Llamado a la acción + enlace o caja)', placeholder: 'Ej: Placa con fecha del evento y botón para inscribirse...', tipo: 'textarea' }
      ],
      criterioEvaluacion: ['Continuidad de la historia', 'Aprovechamiento del formato vertical']
    },
    autoevaluacion: [
      {
        id: 'auto-12-1',
        pregunta: '¿Comprendo cómo secuenciar ideas en formato efímero para mantener la atención?',
        opciones: [
          { id: 'a1', texto: 'Sí, diseño pensando en el ritmo de pantalla y en la participación activa.', valor: 4, esCorrecta: true, retroalimentacion: '¡Gran visión audiovisual moderna!' },
          { id: 'a2', texto: 'A veces publico historias sueltas sin conexión entre sí.', valor: 2, retroalimentacion: 'Pensar en series de 3 placas potencia el mensaje.' }
        ]
      }
    ],
    puntajeMaximo: 129,
    logroIdAsociado: 'logro-9'
  },
  {
    id: 13,
    numero: 13,
    fecha: '13/10/2026',
    ejeId: 'eje-3',
    ejeNombre: 'PRODUCCIÓN PARA REDES',
    titulo: 'Video corto',
    objetivo: 'Planificar videos verticales breves (Reels, TikTok, Shorts) dominando la estructura de gancho inicial, desarrollo sintético, remate y ritmo audiovisual.',
    contenidos: [
      'La regla de los primeros 3 segundos',
      'Estructura de tres actos condensada (Gancho, Conflicto/Desarrollo, Conclusión)',
      'Subtítulos automáticos: el 70% mira sin sonido',
      'Ritmo, cambios de plano y dinamismo'
    ],
    queVamosAAprender: 'El video corto es el formato rey de la atención actual. Aprenderemos a armar un guion de 30 a 45 segundos donde cada segundo cuenta, garantizando que el mensaje educativo llegue con impacto.',
    explicacionTeorica: {
      seccion: 'La ingeniería del video vertical breve',
      texto: 'Un video corto no es un documental largo acelerado: es una pieza concentrada. Si en los primeros 3 segundos no atrapás la curiosidad del espectador (con una pregunta, un movimiento visual o un objeto curioso), deslizará hacia arriba. Además, dado que gran parte de los usuarios navega en el transporte o escuela sin auriculares, los subtítulos en pantalla son obligatorios para la accesibilidad.',
      conceptosClave: [
        { concepto: 'Gancho visual/sonoro', definicion: 'Disparador inicial que retiene la atención durante los primeros 3 segundos.' },
        { concepto: 'Subtitulado accesible', definicion: 'Texto sincronizado que permite comprender el video sin necesidad de activar el audio.' },
        { concepto: 'Llamada al bucle (Loop)', definicion: 'Conectar el final del video con el inicio para estimular una segunda visualización.' }
      ]
    },
    ejemplos: [
      {
        id: 'ej-13-1',
        titulo: 'Guion técnico de 30 segundos',
        tipo: 'storyboard',
        contenido: '0-3s: Plano detalle de un celular hackeado con humo digital ficticio. Texto: "3 cosas que NUNCA debés guardar en notas". 4-20s: El estudiante enumera: 1. Contraseñas de correo, 2. PIN de la tarjeta, 3. Datos médicos. 21-30s: "¿Vos tenías alguna anotada? Guardá este video para cambiarlas ya".',
        analisis: 'Estructura matemática: gancho de alerta, 3 consejos rápidos y CTA de guardado.'
      }
    ],
    actividadAnalizar: {
      id: 'act-13-analizar',
      tipo: 'multiple_choice',
      titulo: 'Analizar el fracaso de un video corto',
      consigna: 'Un video educativo empieza con 15 segundos de una pantalla negra con música lenta y un logo estático de la escuela. ¿Qué sucede con la audiencia?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'El 90% de los espectadores deslizó la pantalla antes de que comience el tema.', esCorrecta: true, retroalimentacion: '¡Exacto! El inicio lento destruye la retención en plataformas de video corto.' },
          { id: 'o2', texto: 'Todos esperan pacientemente porque les encanta el logo.', esCorrecta: false, retroalimentacion: 'En internet el tiempo de atención inicial es de 3 segundos.' }
        ]
      }
    },
    actividadPracticar: {
      id: 'act-13-practicar',
      tipo: 'multiple_choice',
      titulo: 'La importancia crítica de los subtítulos',
      consigna: '¿Por qué es indispensable subtitular los videos cortos en redes sociales?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Porque la mayoría de los usuarios navega sin sonido y por accesibilidad para personas con dificultades auditivas.', esCorrecta: true, retroalimentacion: '¡Brillante! Aumenta la comprensión y garantiza inclusión comunicacional.' },
          { id: 'o2', texto: 'Porque queda más colorido.', esCorrecta: false, retroalimentacion: 'La accesibilidad y retención son los motivos de fondo.' }
        ]
      }
    },
    actividadDesafio: {
      id: 'act-13-desafio',
      tipo: 'multiple_choice',
      titulo: 'Diseñar el remate del video',
      consigna: 'Para que el video educativo escolar logre difusión, ¿cuál es el mejor llamado de cierre?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: '"Compartíselo a ese amigo que siempre se olvida la contraseña para salvarlo hoy 🛡️"', esCorrecta: true, retroalimentacion: '¡Excelente! Apela a una persona concreta ("ese amigo") fomentando el reenviado comunitario.' },
          { id: 'o2', texto: '"Chau."', esCorrecta: false, retroalimentacion: 'No invita a ninguna acción.' }
        ]
      }
    },
    produccion: {
      id: 'prod-13',
      titulo: 'Guion breve para video corto (30 segundos)',
      consigna: 'Escribí el guion técnico de un video corto para concientizar sobre el ciberacoso o la desinformación.',
      formato: 'Guion a 3 Columnas',
      campos: [
        { id: 'segundos_0_3', label: '0 a 3 seg: Gancho (Audio + Video + Texto en pantalla)', placeholder: 'Lo que se ve y escucha al abrir el video...', tipo: 'textarea' },
        { id: 'segundos_4_20', label: '4 a 20 seg: Desarrollo (Contenido central en 3 oraciones)', placeholder: 'Los datos o consejos clave...', tipo: 'textarea' },
        { id: 'segundos_21_30', label: '21 a 30 seg: Remate y CTA de cierre', placeholder: 'Frase final e invitación a compartir...', tipo: 'textarea' }
      ],
      criterioEvaluacion: ['Manejo de los tiempos cortos', 'Precisión de las indicaciones visuales y sonoras']
    },
    autoevaluacion: [
      {
        id: 'auto-13-1',
        pregunta: '¿Entiendo cómo sintetizar una idea compleja en un video de menos de un minuto sin perder profundidad?',
        opciones: [
          { id: 'a1', texto: 'Sí, aprendí a priorizar lo esencial y usar recursos visuales complementarios.', valor: 4, esCorrecta: true, retroalimentacion: '¡Gran capacidad de síntesis audiovisual!' },
          { id: 'a2', texto: 'Todavía me cuesta recortar información.', valor: 2, retroalimentacion: 'Escribir el guion con cronómetro ayuda a medir los tiempos reales.' }
        ]
      }
    ],
    puntajeMaximo: 129,
    logroIdAsociado: 'logro-9'
  },
  {
    id: 14,
    numero: 14,
    fecha: '15/10/2026',
    ejeId: 'eje-3',
    ejeNombre: 'PRODUCCIÓN PARA REDES',
    titulo: 'Producción audiovisual',
    objetivo: 'Organizar las etapas de preproducción, rodaje y edición audiovisual con recursos accesibles (teléfono celular, luz natural y audio limpio).',
    contenidos: [
      'Las 3 etapas: preproducción (plan), producción (grabación) y postproducción (edición)',
      'Escala de planos (general, medio, primer plano, plano detalle)',
      'El sonido: el 50% del video es cómo se escucha',
      'Iluminación casera y encuadre limpio'
    ],
    queVamosAAprender: 'No necesitás una cámara de cine para hacer un buen video: necesitás buena luz, audio nítido y un plan claro. Veremos cómo grabar entrevistas y tomas escolares con calidad profesional utilizando teléfonos móviles.',
    explicacionTeorica: {
      seccion: 'Técnicas de rodaje escolar con smartphones',
      texto: 'Un video con imagen excelente pero audio ininteligible o con eco es abandonado al instante. Por el contrario, un video con audio limpio se tolera aunque la cámara no sea perfecta. En la etapa de rodaje, cuidar la fuente de luz (que dé al rostro de frente y no a contraluz) y acercar el micrófono al orador marca la diferencia.',
      conceptosClave: [
        { concepto: 'Preproducción', definicion: 'Etapa previa de escritura, búsqueda de locaciones y checklist de materiales.' },
        { concepto: 'Plano Medio', definicion: 'Corte a la altura de la cintura, ideal para explicaciones frente a cámara.' },
        { concepto: 'Contraluz', definicion: 'Error común donde la ventana o foco está detrás del personaje, oscureciendo su cara.' }
      ]
    },
    ejemplos: [
      {
        id: 'ej-14-1',
        titulo: 'Entrevista escolar: Solución al ruido del recreo',
        tipo: 'caso',
        contenido: 'Grababan una entrevista en el pasillo durante el timbre. La voz no se entendía. Solución: Se movieron a la biblioteca vacía y usaron los auriculares del teléfono como micrófono de solapa.',
        analisis: 'La resolución de problemas en rodaje prioriza siempre la inteligibilidad sonora.',
        metadatos: { 'Técnica': 'Microfonía de cercanía y locación silenciosa' }
      }
    ],
    actividadAnalizar: {
      id: 'act-14-analizar',
      tipo: 'multiple_choice',
      titulo: 'Resolver un problema de iluminación',
      consigna: 'Vas a grabar a tu compañero explicando un experimento pero la cara se ve completamente oscura porque está parado delante de una ventana soleada. ¿Qué hacés?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Girar 180 grados para que la luz de la ventana ilumine su rostro de frente y no desde atrás.', esCorrecta: true, retroalimentacion: '¡Exacto! Corregir la posición respecto a la fuente de luz soluciona el contraluz sin gastar dinero.' },
          { id: 'o2', texto: 'Poner un filtro de colores en la app de edición.', esCorrecta: false, retroalimentacion: 'Los filtros no recuperan información quemada o en sombras totales.' }
        ]
      }
    },
    actividadPracticar: {
      id: 'act-14-practicar',
      tipo: 'multiple_choice',
      titulo: 'Elección de planos para dinamismo',
      consigna: 'Para mostrar a un estudiante armando un circuito de robótica, ¿qué combinación de planos resulta más pedagógica?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Plano medio de él explicando + Plano detalle de sus manos conectando los cables con precisión.', esCorrecta: true, retroalimentacion: '¡Excelente combinación! Conecta con la persona y muestra claramente el procedimiento.' },
          { id: 'o2', texto: 'Dejar la cámara fija a 10 metros de distancia durante 20 minutos.', esCorrecta: false, retroalimentacion: 'Resulta aburrido y no se aprecian los detalles.' }
        ]
      }
    },
    actividadDesafio: {
      id: 'act-14-desafio',
      tipo: 'multiple_choice',
      titulo: 'Checklist de preproducción',
      consigna: 'Antes de salir a grabar en la escuela, ¿qué elemento NO puede faltar en la mochila del equipo?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Batería cargada, memoria disponible en el celular y el guion impreso o anotado.', esCorrecta: true, retroalimentacion: '¡Fundamental! Sin batería ni memoria no hay rodaje posible.' },
          { id: 'o2', texto: 'Un megáfono gigante.', esCorrecta: false, retroalimentacion: 'Innecesario y genera contaminación sonora.' }
        ]
      }
    },
    produccion: {
      id: 'prod-14',
      titulo: 'Plan de producción audiovisual (Hoja de Rodaje)',
      consigna: 'Completá la hoja de rodaje para la grabación de un microvideo escolar.',
      formato: 'Hoja de Rodaje Técnica',
      campos: [
        { id: 'locacion', label: 'Locación elegida (lugar escolar y por qué)', placeholder: 'Ej: Laboratorio de ciencias, por la buena luz natural...', tipo: 'input' },
        { id: 'roles_equipo', label: 'Roles de los integrantes (orador, cámara, sonido)', placeholder: 'Quién hace qué...', tipo: 'textarea' },
        { id: 'equipamiento', label: 'Equipamiento necesario (teléfonos, micrófonos, trípode o apoyo)', placeholder: 'Celular con cámara limpia, soporte casero...', tipo: 'textarea' },
        { id: 'planos_clave', label: 'Lista de 3 planos indispensables que se grabarán', placeholder: '1. Plano medio presentación, 2. Plano detalle material, 3. Cierre...', tipo: 'textarea' }
      ],
      criterioEvaluacion: ['Viabilidad técnica escolar', 'Organización cooperativa del equipo']
    },
    autoevaluacion: [
      {
        id: 'auto-14-1',
        pregunta: '¿Comprendo la importancia de planificar antes de apretar el botón de grabar?',
        opciones: [
          { id: 'a1', texto: 'Sí, la preproducción ahorra tiempo, frustraciones y mejora el resultado final.', valor: 4, esCorrecta: true, retroalimentacion: '¡Pensamiento de verdadero realizador audiovisual!' },
          { id: 'a2', texto: 'Suelo improvisar todo en el momento.', valor: 2, retroalimentacion: 'Un buen plan da libertad para crear con seguridad.' }
        ]
      }
    ],
    puntajeMaximo: 129,
    logroIdAsociado: 'logro-9'
  },
  {
    id: 15,
    numero: 15,
    fecha: '20/10/2026',
    ejeId: 'eje-3',
    ejeNombre: 'PRODUCCIÓN PARA REDES',
    titulo: 'Storytelling',
    objetivo: 'Aplicar la estructura del relato narrativo (personaje, contexto, conflicto, transformación y resolución) para comunicar causas, proyectos o ideas con emoción y empatía.',
    contenidos: [
      'El poder de las historias: por qué recordamos relatos y no listas de datos',
      'El arco narrativo: situación inicial, detonante, clímax y desenlace',
      'El personaje empático con el que la audiencia se identifica',
      'Storytelling con propósito comunitario educativo'
    ],
    queVamosAAprender: 'Los seres humanos estamos cableados para las historias. Si solo presentás números o estadísticas, la gente se olvida. Si contás la historia de una persona que superó un desafío, la gente se emociona y actúa.',
    explicacionTeorica: {
      seccion: 'El viaje del héroe aplicado a las redes',
      texto: 'El Storytelling es el arte de conectar mediante relatos. No se trata de inventar cuentos de fantasía, sino de encontrar la historia humana detrás de un proyecto. Todo buen relato digital presenta: 1) Un protagonista cercano, 2) Un obstáculo real que enfrenta, 3) La lucha o aprendizaje para superarlo, y 4) Una transformación que inspira a la audiencia.',
      conceptosClave: [
        { concepto: 'Arco narrativo', definicion: 'Progresión dramática que va desde la calma inicial hasta el clímax y la resolución.' },
        { concepto: 'Conflicto', definicion: 'El problema o desafío que impulsa al personaje a salir de su zona de confort.' },
        { concepto: 'Transformación', definicion: 'El cambio positivo que experimenta el protagonista tras resolver el conflicto.' }
      ]
    },
    ejemplos: [
      {
        id: 'ej-15-1',
        titulo: 'Dato frío vs Storytelling',
        tipo: 'comparacion',
        contenido: 'Dato frío: "En el colegio se recolectaron 50 kilos de tapitas". Storytelling: "A Mateo se le rompió su silla de ruedas. Sus compañeros del curso se propusieron una meta titánica: juntar 50 kilos de tapitas para costear el repuesto. Hoy Mateo volvió a jugar al básquet en el patio gracias a que nadie bajó los brazos".',
        analisis: 'La historia humaniza el dato y moviliza la empatía colectiva.',
        metadatos: { 'Emoción': 'Superación y solidaridad comunitaria' }
      }
    ],
    actividadAnalizar: {
      id: 'act-15-analizar',
      tipo: 'ordenar',
      titulo: 'Estructurar los momentos de una historia',
      consigna: 'Ordená los 4 momentos del relato para construir un arco narrativo clásico de superación escolar.',
      puntaje: 25,
      data: {
        pasos: [
          { orden: 1, texto: '1. Situación inicial: Sofía sentía vergüenza de hablar en público y no participaba en debates.' },
          { orden: 2, texto: '2. Conflicto / Detonante: Su curso fue seleccionado para presentar el proyecto ambiental en la feria regional.' },
          { orden: 3, texto: '3. Desarrollo / Clímax: Con apoyo de sus compañeros y ensayos en el taller, preparó un video de apoyo que le dio seguridad.' },
          { orden: 4, texto: '4. Transformación / Cierre: Sofía expuso con claridad y ahora ayuda a los chicos de 1º año a perder el miedo escénico.' }
        ]
      }
    },
    actividadPracticar: {
      id: 'act-15-practicar',
      tipo: 'multiple_choice',
      titulo: 'Identificar al protagonista empático',
      consigna: 'Para una campaña escolar contra el desperdicio de comida en el comedor, ¿quién es el protagonista más empático para el relato?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Las cocineras que con amor preparan cada ración y un grupo de alumnos que aprendió a servir la porción justa.', esCorrecta: true, retroalimentacion: '¡Excelente! Protagonistas reales con quienes convivimos todos los días en la escuela.' },
          { id: 'o2', texto: 'Un extraterrestre millonario que compra platos de oro.', esCorrecta: false, retroalimentacion: 'Desconectado totalmente de la realidad de la institución.' }
        ]
      }
    },
    actividadDesafio: {
      id: 'act-15-desafio',
      tipo: 'multiple_choice',
      titulo: 'El propósito del relato',
      consigna: '¿Qué diferencia a un chisme de pasillo de una pieza de storytelling comunicacional?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'El storytelling tiene un propósito constructivo, respeta la dignidad de las personas y busca transmitir un aprendizaje valioso.', esCorrecta: true, retroalimentacion: '¡Brillante distinción ética y conceptual!' },
          { id: 'o2', texto: 'Que el chisme es más divertido.', esCorrecta: false, retroalimentacion: 'El chisme suele dañar reputaciones y carece de ética pedagógica.' }
        ]
      }
    },
    produccion: {
      id: 'prod-15',
      titulo: 'Guion de storytelling con propósito escolar',
      consigna: 'Escribí un relato breve (15 a 20 líneas) para comunicar una experiencia o aprendizaje significativo de la escuela.',
      formato: 'Estructura Narrativa',
      campos: [
        { id: 'personaje', label: 'Protagonista y su contexto', placeholder: 'Quién es y qué hacía al inicio...', tipo: 'input' },
        { id: 'obstaculo', label: 'El conflicto u obstáculo a enfrentar', placeholder: 'Qué problema surgió...', tipo: 'textarea' },
        { id: 'resolucion', label: 'Resolución y transformación', placeholder: 'Cómo lo resolvió y qué aprendió...', tipo: 'textarea' },
        { id: 'mensaje_final', label: 'Moraleja o llamado a la acción final', placeholder: 'La idea con la que se queda el lector...', tipo: 'input' }
      ],
      criterioEvaluacion: ['Presencia de los momentos narrativos', 'Fuerza emotiva y constructiva']
    },
    autoevaluacion: [
      {
        id: 'auto-15-1',
        pregunta: '¿Reconozco el poder de las historias humanas para movilizar a una audiencia más que los datos fríos?',
        opciones: [
          { id: 'a1', texto: 'Sí, aprendí a buscar relatos que conecten con las emociones de mi público.', valor: 4, esCorrecta: true, retroalimentacion: '¡Esa es el alma del buen comunicador!' },
          { id: 'a2', texto: 'Aún prefiero mostrar solo listas de viñetas.', valor: 2, retroalimentacion: 'Probá combinar ambas cosas: una historia que ilustre los datos.' }
        ]
      }
    ],
    puntajeMaximo: 129,
    logroIdAsociado: 'logro-10'
  },
  {
    id: 16,
    numero: 16,
    fecha: '22/10/2026',
    ejeId: 'eje-3',
    ejeNombre: 'PRODUCCIÓN PARA REDES',
    titulo: 'Copywriting',
    objetivo: 'Redactar textos digitales persuasivos, concisos y claros aplicando fórmulas de redacción (AIDA, PAS), tono adecuado y llamadas a la acción.',
    contenidos: [
      'Qué es el copywriting: escribir para orientar a la acción',
      'Fórmulas clásicas: AIDA (Atención, Interés, Deseo, Acción) y PAS (Problema, Agitación, Solución)',
      'Economía del lenguaje: eliminar palabras vacías y rodeos',
      'El tono de voz: empático, fresco y profesional'
    ],
    queVamosAAprender: 'Escribir para redes no es rellenar espacio: es elegir cada palabra con bisturí. Aprenderemos a podar textos interminables y transformarlos en copies ágiles que la gente disfrute leer hasta el final.',
    explicacionTeorica: {
      seccion: 'Escribir para mentes ocupadas en pantallas móviles',
      texto: 'El copywriter digital sabe que el lector tiene el dedo listo para deslizar. Por eso escribe con frases cortas, verbos activos en lugar de pasivos y evitando la jerga burocrática. Una fórmula muy efectiva es PAS: 1) Nombrás el Problema ("¿Te quedás sin batería a mitad del día?"), 2) Agitás la incomodidad ("Justo cuando necesitás mandar la tarea"), 3) Planteás la Solución ("En este taller armamos un cargador solar escolar").',
      conceptosClave: [
        { concepto: 'Copywriting', definicion: 'Técnica de redacción publicitaria y digital orientada a lograr una respuesta concreta.' },
        { concepto: 'Fórmula PAS', definicion: 'Problema → Agitación → Solución.' },
        { concepto: 'Voz activa', definicion: 'Estructura gramatical directa que dinamiza la lectura (ej. "Cuidemos el aula" en vez de "El aula debe ser cuidada").' }
      ]
    },
    ejemplos: [
      {
        id: 'ej-16-1',
        titulo: 'Transformación de texto burocrático a copy ágil',
        tipo: 'comparacion',
        contenido: 'Burocrático: "Se lleva a conocimiento de los educandos que con motivo de la prosecución de las festividades primaverales se arbitrarán los medios para un convite culinario". Copy ágil: "¡Festejamos la primavera este viernes a la tarde! 🌸 Traé algo rico para compartir en el picnic escolar. ¿Qué vas a llevar?."',
        analisis: 'La versión ágil transmite la misma información con calidez, entusiasmo y brevedad.',
        metadatos: { 'Mejora': 'Claridad, cercanía y economía verbal' }
      }
    ],
    actividadAnalizar: {
      id: 'act-16-analizar',
      tipo: 'multiple_choice',
      titulo: 'Identificar la fórmula PAS en acción',
      consigna: 'Leé este texto: "1. ¿Cansado de perder tus apuntes? 2. Llega fin de año y no sabés qué materias rendís. 3. Descargá gratis el organizador digital del taller escolar." ¿Qué estructura utiliza?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Fórmula PAS: Problema (perder apuntes) → Agitación (angustia de fin de año) → Solución (organizador digital).', esCorrecta: true, retroalimentacion: '¡Exacto! Plantea el dolor del usuario y ofrece la herramienta que lo resuelve.' },
          { id: 'o2', texto: 'Un poema de literatura barroca.', esCorrecta: false, retroalimentacion: 'Es una estructura clásica de redacción persuasiva digital.' }
        ]
      }
    },
    actividadPracticar: {
      id: 'act-16-practicar',
      tipo: 'multiple_choice',
      titulo: 'Poda de palabras innecesarias',
      consigna: '¿Cuál es la versión más limpia y concisa de: "Con el objetivo primordial de poder lograr recolectar botellas plásticas que sean de desecho"?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Juntamos botellas de plástico para reciclar.', esCorrecta: true, retroalimentacion: '¡Impecable poda de palabras de relleno! Directo al grano.' },
          { id: 'o2', texto: 'En cumplimiento de la intención de poder llevar a cabo la juntada...', esCorrecta: false, retroalimentacion: 'Sigue conteniendo excesivo relleno burocrático.' }
        ]
      }
    },
    actividadDesafio: {
      id: 'act-16-desafio',
      tipo: 'multiple_choice',
      titulo: 'Elegir el verbo de acción más convocante',
      consigna: 'Para un botón de inscripción al torneo escolar de ajedrez, ¿cuál frase genera mayor decisión inmediata?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Anotarme en el torneo', esCorrecta: true, retroalimentacion: '¡Excelente! En primera persona y con verbo de acción claro.' },
          { id: 'o2', texto: 'Procedimiento de remisión de solicitud informativa.', esCorrecta: false, retroalimentacion: 'Frío, confuso y desmotivador.' }
        ]
      }
    },
    produccion: {
      id: 'prod-16',
      titulo: 'Transformación de texto extenso en copy digital persuasivo',
      consigna: 'Tomá un texto escolar informativo largo y transformalo en un copy ágil de no más de 4 renglones aplicando la fórmula PAS.',
      formato: 'Ejercicio de Redacción Publicitaria',
      campos: [
        { id: 'problema', label: '1. Planteo del problema (Pregunta gancho)', placeholder: '¿Te cuesta encontrar información de los exámenes?...', tipo: 'input' },
        { id: 'agitacion', label: '2. Agitación (Por qué importa resolverlo)', placeholder: 'Estudiar a último momento genera estrés innecesario...', tipo: 'textarea' },
        { id: 'solucion', label: '3. Solución concreta', placeholder: 'En el enlace de nuestra bio tenés el cronograma completo...', tipo: 'textarea' },
        { id: 'cta_boton', label: '4. Texto del llamado a la acción (CTA)', placeholder: '¡Revisalo ahora y organizá tu semana!...', tipo: 'input' }
      ],
      criterioEvaluacion: ['Economía de palabras', 'Aplicación estricta de la estructura persuasiva']
    },
    autoevaluacion: [
      {
        id: 'auto-16-1',
        pregunta: '¿Comprendo que escribir bien para redes implica podar lo innecesario y respetar el tiempo del lector?',
        opciones: [
          { id: 'a1', texto: 'Sí, busco que cada palabra tenga peso propio y motive a una acción.', valor: 4, esCorrecta: true, retroalimentacion: '¡Mente de auténtico copywriter!' },
          { id: 'a2', texto: 'A veces creo que si escribo mucho parezco más inteligente.', valor: 2, retroalimentacion: 'En digital, la claridad y síntesis son la verdadera muestra de maestría.' }
        ]
      }
    ],
    puntajeMaximo: 129,
    logroIdAsociado: 'logro-11'
  },
  {
    id: 17,
    numero: 17,
    fecha: '27/10/2026',
    ejeId: 'eje-3',
    ejeNombre: 'PRODUCCIÓN PARA REDES',
    titulo: 'Títulos, hashtags y CTA',
    objetivo: 'Articular los tres amplificadores del contenido digital: titulares magnéticos sin caer en clickbait, hashtags temáticos y de alcance, y llamadas a la acción (CTA) orientadas a la conversión.',
    contenidos: [
      'Titulares atractivos: curiosidad, beneficio y especificidad sin engañar',
      'Hashtags: cómo funcionan los motores de indexación por etiquetas',
      'Tipos de hashtags: de nicho, comunitarios y de tendencia',
      'Tipos de CTA: interactuar, compartir, suscribirse, reflexionar'
    ],
    queVamosAAprender: 'Un gran contenido puede pasar desapercibido si tiene un título aburrido, hashtags desubicados o no le dice al usuario qué hacer. Armaremos kits completos de publicación para que tus proyectos se destaquen.',
    explicacionTeorica: {
      seccion: 'Los tres catalizadores de una publicación',
      texto: 'El título es la promesa; el hashtag es la brújula que ayuda a otros a encontrar el tema; el CTA es el puente hacia la acción. Los hashtags no deben ser frases enteras interminables (#mirencomomequedoeltrabajopractico) sino palabras clave indexables (#EducacionDigital #Escuela787). Y el CTA debe ser específico: "Decinos en comentarios cuál es tu consejo favorito".',
      conceptosClave: [
        { concepto: 'Titular ético', definicion: 'Frase que genera genuina curiosidad sin prometer cosas falsas ni engañar al lector.' },
        { concepto: 'Hashtag de comunidad', definicion: 'Etiqueta propia que agrupa todas las publicaciones de un proyecto o escuela.' },
        { concepto: 'CTA de conversión', definicion: 'Llamado que transforma al lector pasivo en participante activo.' }
      ]
    },
    ejemplos: [
      {
        id: 'ej-17-1',
        titulo: 'Kit de publicación balanceado',
        tipo: 'publicacion',
        contenido: 'Título: "3 tips que nos salvaron en el taller de redes". Copy: desarrollo breve. Hashtags: #ComunicacionDigital #Secundaria787 #AprenderHaciendo. CTA: "Guardá este posteo para cuando armes tu campaña final 📌".',
        analisis: 'Combina un título que anticipa valor, etiquetas institucionales e instruccionales y un CTA orientado a guardar.',
        metadatos: { 'Kit': 'Título + Copy + Tags + CTA' }
      }
    ],
    actividadAnalizar: {
      id: 'act-17-analizar',
      tipo: 'multiple_choice',
      titulo: 'Elegir el título adecuado sin caer en clickbait',
      consigna: 'Queremos titular una nota escolar sobre la instalación de paneles solares en el techo del colegio. ¿Cuál es el título ético y atractivo?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: '¡NO VAS A CREER LO QUE PASÓ EN EL TECHO! ¡CASI EXPLOTA TODO!', esCorrecta: false, retroalimentacion: 'Clickbait sensacionalista y falso que genera pánico innecesario.' },
          { id: 'o2', texto: 'Energía limpia en la Escuela 787: Conocé cómo funcionan los nuevos paneles solares', esCorrecta: true, retroalimentacion: '¡Excelente! Preciso, positivo y con alto interés comunitario.' },
          { id: 'o3', texto: 'Cosas de electricidad en el techo.', esCorrecta: false, retroalimentacion: 'Desganado y poco informativo.' }
        ]
      }
    },
    actividadPracticar: {
      id: 'act-17-practicar',
      tipo: 'multiple_choice',
      titulo: 'Uso estratégico de hashtags',
      consigna: '¿Cuál es la mejor combinación de hashtags para una muestra escolar de cortometrajes?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: '#CineEscolar #Cortos787 #EducacionAudiovisual #JovenesCreadores', esCorrecta: true, retroalimentacion: '¡Perfecto! Mezcla la temática general con la identidad de la escuela y la comunidad de creadores.' },
          { id: 'o2', texto: '#hola #chau #perro #futbol #comida #navidad', esCorrecta: false, retroalimentacion: 'Etiquetas sin relación que ensucian la publicación y confunden al algoritmo.' }
        ]
      }
    },
    actividadDesafio: {
      id: 'act-17-desafio',
      tipo: 'multiple_choice',
      titulo: 'Adecuar el CTA al objetivo',
      consigna: 'Si tu objetivo es conocer la opinión de los estudiantes sobre el menú escolar, ¿cuál es el CTA adecuado?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: '"Dejanos tu propuesta de almuerzo saludable en los comentarios y votá con un like a las mejores ideas 🥗"', esCorrecta: true, retroalimentacion: '¡Exacto! Pide una opinión específica y motiva a interactuar constructivamente.' },
          { id: 'o2', texto: '"Seguime y te sigo."', esCorrecta: false, retroalimentacion: 'Métrica vacía que no aporta al objetivo participativo.' }
        ]
      }
    },
    produccion: {
      id: 'prod-17',
      titulo: 'Kit de publicación: título + texto + hashtags + CTA',
      consigna: 'Diseñá el kit de publicación completo para anunciar una campaña de donación de libros para la biblioteca escolar.',
      formato: 'Kit de Redes Sociales',
      campos: [
        { id: 'titulo_gancho', label: '1. Título con impacto ético', placeholder: 'Ej: Ese libro que ya leíste puede abrirle un mundo a otro compañero...', tipo: 'input' },
        { id: 'copy_central', label: '2. Texto central (en 3 oraciones claras)', placeholder: 'De qué trata la campaña, qué libros se reciben y dónde dejarlos...', tipo: 'textarea' },
        { id: 'hashtags_seleccionados', label: '3. Tres hashtags estratégicos', placeholder: '#Biblioteca787 #DonáUnLibro #ComunidadLectora...', tipo: 'input' },
        { id: 'cta_final', label: '4. Llamada a la acción (CTA)', placeholder: 'Traé tu libro este jueves y llevate un señalador artesanal...', tipo: 'input' }
      ],
      criterioEvaluacion: ['Coherencia entre las 4 partes', 'Uso correcto de palabras clave']
    },
    autoevaluacion: [
      {
        id: 'auto-17-1',
        pregunta: '¿Distingo un título atractivo y veraz de un titular clickbait que engaña?',
        opciones: [
          { id: 'a1', texto: 'Sí, sé cómo despertar interés honesto sin prometer falsedades.', valor: 4, esCorrecta: true, retroalimentacion: '¡Esa es la ética del comunicador responsable!' },
          { id: 'a2', texto: 'A veces caigo en exagerar demasiado.', valor: 2, retroalimentacion: 'La credibilidad se construye con honestidad constante.' }
        ]
      }
    ],
    puntajeMaximo: 129,
    logroIdAsociado: 'logro-12'
  },
  {
    id: 18,
    numero: 18,
    fecha: '29/10/2026',
    ejeId: 'eje-3',
    ejeNombre: 'PRODUCCIÓN PARA REDES',
    titulo: 'Campañas digitales',
    objetivo: 'Integrar los componentes de una campaña digital (objetivo SMART, público, mensaje paraguas, canales, calendario de publicaciones e indicadores de éxito) en un plan estratégico.',
    contenidos: [
      'Qué es una campaña digital: más que posteos sueltos, una estrategia coordinada',
      'Definición de objetivos: sensibilizar, informar, convocar, transformar hábitos',
      'El mensaje paraguas (claim o lema central)',
      'Matriz de piezas y calendario de publicación'
    ],
    queVamosAAprender: 'Hasta aquí aprendimos a crear fotos, historias, videos y textos. Hoy aprenderemos a unirlos en una orquesta: una campaña digital con un objetivo común que movilice a toda la escuela.',
    explicacionTeorica: {
      seccion: 'Estructura de una campaña de comunicación',
      texto: 'Una campaña digital es una serie planificada de comunicaciones que persiguen un objetivo claro en un plazo determinado. No se publica al azar: cada pieza tiene un rol. Por ejemplo: una historia para generar expectativa, un video para explicar el problema, un posteo en carrusel con datos útiles y un streaming en vivo para celebrar los logros.',
      conceptosClave: [
        { concepto: 'Campaña digital', definicion: 'Estrategia coordinada de mensajes en múltiples canales con un objetivo específico.' },
        { concepto: 'Mensaje paraguas (Claim)', definicion: 'Lema central memorable que sintetiza el espíritu de toda la campaña.' },
        { concepto: 'Calendario editorial', definicion: 'Cronograma que detalla qué se publica, en qué canal, qué día y quién es el responsable.' }
      ]
    },
    ejemplos: [
      {
        id: 'ej-18-1',
        titulo: 'Campaña escolar: "Menos plástico, más futuro"',
        tipo: 'caso',
        contenido: 'Objetivo: Reducir las botellas descartables en el colegio en un 50% durante octubre. Lema: "Traé tu botella recargable". Piezas: 1 afiche en pasillos, 3 reels de alumnos mostrando bebederos limpios y un concurso de diseño de termos.',
        analisis: 'Todas las acciones empujan hacia el mismo cambio de hábito comunitario.',
        metadatos: { 'Alcance': 'Institucional continuo' }
      }
    ],
    actividadAnalizar: {
      id: 'act-18-analizar',
      tipo: 'multiple_choice',
      titulo: 'Identificar un objetivo de campaña bien planteado',
      consigna: '¿Cuál de estos objetivos está formulado con claridad para una campaña digital escolar?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Lograr que 50 estudiantes del ciclo básico se inscriban al club de lectura antes del 15 de noviembre.', esCorrecta: true, retroalimentacion: '¡Excelente! Es medible, específico, relevante y con fecha límite clara.' },
          { id: 'o2', texto: 'Hacer cosas buenas en internet para ser famosos.', esCorrecta: false, retroalimentacion: 'Vago, inmedible y carente de propósito pedagógico.' }
        ]
      }
    },
    actividadPracticar: {
      id: 'act-18-practicar',
      tipo: 'multiple_choice',
      titulo: 'Distribución de piezas en el calendario',
      consigna: 'Para una campaña de una semana sobre seguridad en internet, ¿cómo conviene escalonar las publicaciones?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Lanzar los 10 posteos juntos en un solo minuto un domingo a la madrugada.', esCorrecta: false, retroalimentacion: 'Satura a la audiencia y se canibalizan entre sí.' },
          { id: 'o2', texto: 'Lunes: video disparador. Miércoles: carrusel con tips prácticos. Viernes: encuesta interactiva y balance en historias.', esCorrecta: true, retroalimentacion: '¡Exacto! Da tiempo a procesar cada contenido y sostiene el interés toda la semana.' }
        ]
      }
    },
    actividadDesafio: {
      id: 'act-18-desafio',
      tipo: 'multiple_choice',
      titulo: 'Evaluar el éxito de una campaña',
      consigna: 'Si la campaña buscaba que los alumnos usen los tachos de reciclaje y al cabo de un mes los tachos están llenos de botellas separadas correctamente, ¿qué demostró?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Eficacia comunicativa real: el mensaje modificó una conducta en el mundo físico escolar.', esCorrecta: true, retroalimentacion: '¡Brillante! El mayor logro de la comunicación es transformar realidades.' },
          { id: 'o2', texto: 'Que hubo suerte.', esCorrecta: false, retroalimentacion: 'Fue el resultado de un plan estratégico coordinado.' }
        ]
      }
    },
    produccion: {
      id: 'prod-18',
      titulo: 'Plan básico de campaña digital (Matriz Estratégica)',
      consigna: 'Esbozá el esquema de una campaña para tu escuela que servirá de ensayo para el proyecto final.',
      formato: 'Matriz de Campaña',
      campos: [
        { id: 'tema_campana', label: 'Tema y problemática a abordar', placeholder: 'Ej: Cuidado de las computadoras del laboratorio...', tipo: 'input' },
        { id: 'lema_central', label: 'Lema central memorable (Mensaje paraguas)', placeholder: 'Ej: Una pantalla cuidada es una ventana al mundo...', tipo: 'input' },
        { id: 'publico_objetivo', label: 'Público objetivo específico', placeholder: 'Estudiantes del turno tarde...', tipo: 'input' },
        { id: 'tres_piezas', label: 'Tres piezas planificadas (formato y canal)', placeholder: '1. Reel tutorial en Instagram, 2. Infografía impresa, 3. Encuesta en historias...', tipo: 'textarea' }
      ],
      criterioEvaluacion: ['Coherencia entre objetivo y piezas', 'Viabilidad de ejecución']
    },
    autoevaluacion: [
      {
        id: 'auto-18-1',
        pregunta: '¿Comprendo la diferencia entre publicar posteos aislados y coordinar una campaña estratégica?',
        opciones: [
          { id: 'a1', texto: 'Sí, una campaña tiene un rumbo definido y cada pieza suma a la meta colectiva.', valor: 4, esCorrecta: true, retroalimentacion: '¡Visión de estratega consumado!' },
          { id: 'a2', texto: 'Todavía suelo pensar en posteos individuales sueltos.', valor: 2, retroalimentacion: 'Pensar en serie amplifica el impacto.' }
        ]
      }
    ],
    puntajeMaximo: 129,
    logroIdAsociado: 'logro-12'
  }
];
