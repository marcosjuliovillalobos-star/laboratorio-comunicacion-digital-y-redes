import { ClassData } from '../../types';

export const AXIS_4_CLASSES: ClassData[] = [
  {
    id: 19,
    numero: 19,
    fecha: '03/11/2026',
    ejeId: 'eje-4',
    ejeNombre: 'COMUNICACIÓN CRÍTICA',
    titulo: 'Publicidad digital',
    objetivo: 'Desarmar críticamente las estrategias persuasivas, la segmentación algorítmica y los recursos retóricos de la publicidad en redes sociales y buscadores.',
    contenidos: [
      'De la publicidad masiva a la microsegmentación publicitaria',
      'Estrategias persuasivas: escasez, autoridad, pertenencia y estatus',
      'Publicidad nativa: anuncios camuflados como contenido ordinario',
      'El rol del consumidor consciente: detectar qué nos están vendiendo en realidad'
    ],
    queVamosAAprender: 'En las redes, si no pagás por el producto, el producto sos vos (y tus datos de atención). Analizaremos anuncios digitales para descubrir qué resortes emocionales tocan para inducir el consumo.',
    explicacionTeorica: {
      seccion: 'La persuasión invisible en el ecosistema digital',
      texto: 'A diferencia del cartel tradicional en la calle que todos ven igual, la publicidad digital está hipersegmentada: dos personas sentadas en el mismo banco reciben anuncios completamente distintos según sus búsquedas y likes. Los anunciantes utilizan gatillos psicológicos como la prueba social ("Todos tus amigos ya lo tienen") o la urgencia artificial ("Quedan solo 2 cupos").',
      conceptosClave: [
        { concepto: 'Microsegmentación', definicion: 'Dirigir anuncios a grupos hiperespecíficos según edad, gustos, ubicación y conductas de navegación.' },
        { concepto: 'Publicidad nativa', definicion: 'Anuncios cuyo formato visual imita el contenido editorial habitual de la plataforma para pasar inadvertidos.' },
        { concepto: 'Gatillo de escasez', definicion: 'Técnica que simula que algo se acaba rápido para forzar una decisión impulsiva sin reflexión.' }
      ]
    },
    ejemplos: [
      {
        id: 'ej-19-1',
        titulo: 'Análisis de un anuncio ficticio de zapatillas',
        tipo: 'caso',
        contenido: '"¡Últimos 3 pares disponibles en tu talle! Sé el primero de tu escuela en tenerlas y ganá respeto en la cancha."',
        analisis: '¿Qué vende? No vende calzado resistente: vende pertenencia y estatus social ("ganá respeto"). ¿Qué recurso usa? Urgencia y escasez ("últimos 3 pares").',
        metadatos: { 'Estrategia': 'Venta de estatus + Presión de escasez' }
      }
    ],
    actividadAnalizar: {
      id: 'act-19-analizar',
      tipo: 'multiple_choice',
      titulo: '¿Qué está vendiendo realmente?',
      consigna: 'Un anuncio de una bebida azucarada muestra a un grupo de jóvenes bailando felices en la playa con amigos. No menciona ningún ingrediente ni beneficio nutricional. ¿Cuál es el recurso persuasivo principal?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Asociación emocional: vincula el producto con la juventud, la alegría, la diversión y la pertenencia grupal.', esCorrecta: true, retroalimentacion: '¡Exacto! Vende un estilo de vida y una emoción, no las propiedades químicas del refresco.' },
          { id: 'o2', texto: 'Información científica comprobada.', esCorrecta: false, retroalimentacion: 'No brinda datos nutricionales.' }
        ]
      }
    },
    actividadPracticar: {
      id: 'act-19-practicar',
      tipo: 'multiple_choice',
      titulo: 'Identificar publicidad nativa encubierta',
      consigna: '¿Cómo podés reconocer si una publicación en el feed es un anuncio pagado?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Buscando la etiqueta "Publicidad", "Patrocinado" o "Colaboración paga" debajo del nombre del usuario.', esCorrecta: true, retroalimentacion: '¡Muy bien! Las leyes exigen que todo anuncio declare su naturaleza patrocinada.' },
          { id: 'o2', texto: 'Todas las fotos con buena luz son publicidad.', esCorrecta: false, retroalimentacion: 'La clave es la etiqueta de patrocinio comercial.' }
        ]
      }
    },
    actividadDesafio: {
      id: 'act-19-desafio',
      tipo: 'multiple_choice',
      titulo: 'Desarmar el truco de la escasez artificial',
      consigna: 'Entrás a una tienda digital y un reloj con cuenta regresiva roja dice "¡Oferta termina en 04:59 minutos!". Si recargás la página, el reloj vuelve a 04:59. ¿Qué demostró?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Es un patrón oscuro de diseño ("dark pattern") programado para inducir pánico de compra falso.', esCorrecta: true, retroalimentacion: '¡Excelente detector de trampas comerciales digitales!' },
          { id: 'o2', texto: 'Que el reloj de internet se descalibró.', esCorrecta: false, retroalimentacion: 'Es un engaño deliberado del sitio.' }
        ]
      }
    },
    produccion: {
      id: 'prod-19',
      titulo: 'Ficha de deconstrucción publicitaria',
      consigna: 'Elegí una publicidad digital que hayas visto recientemente y analizá sus capas ocultas.',
      formato: 'Ficha de Análisis Semiótico',
      campos: [
        { id: 'producto_anunciado', label: 'Producto o servicio anunciado', placeholder: 'Ej: Curso online / Zapatillas / Videojuego...', tipo: 'input' },
        { id: 'promesa_implicita', label: '¿Qué promete implícitamente más allá del objeto?', placeholder: 'Ej: Popularidad, éxito, belleza, tranquilidad...', tipo: 'textarea' },
        { id: 'publico_segmentado', label: '¿A qué perfil de persona va dirigido?', placeholder: 'Rango de edad, intereses...', tipo: 'input' },
        { id: 'estrategia_persuasiva', label: 'Recurso persuasivo utilizado (miedo, humor, estatus, escasez)', placeholder: 'Describí cómo intentan convencer...', tipo: 'textarea' }
      ],
      criterioEvaluacion: ['Mirada crítica no ingenua', 'Identificación de recursos persuasivos']
    },
    autoevaluacion: [
      {
        id: 'auto-19-1',
        pregunta: '¿Puedo mirar un anuncio publicitario reconociendo los mecanismos que usa para intentar influir en mi conducta?',
        opciones: [
          { id: 'a1', texto: 'Sí, no me dejo llevar por la primera emoción y analizo qué me están ofreciendo.', valor: 4, esCorrecta: true, retroalimentacion: '¡Pensamiento crítico activo!' },
          { id: 'a2', texto: 'A veces sigo comprando o deseando cosas solo por verlas en un video.', valor: 2, retroalimentacion: 'El análisis de anuncios te dará mayor libertad de elección.' }
        ]
      }
    ],
    puntajeMaximo: 129,
    logroIdAsociado: 'logro-13'
  },
  {
    id: 20,
    numero: 20,
    fecha: '05/11/2026',
    ejeId: 'eje-4',
    ejeNombre: 'COMUNICACIÓN CRÍTICA',
    titulo: 'Influencers y tendencias',
    objetivo: 'Examinar el ecosistema de creadores de contenido, la construcción de lazos parasociales, las tendencias virales y la publicidad encubierta con mirada analítica y sin juicios simplistas.',
    contenidos: [
      'De la celebridad tradicional al creador de nicho',
      'Relaciones parasociales: la ilusión de amistad e intimidad con el seguidor',
      'Cómo nace, explota y muere una tendencia viral',
      'Publicidad no declarada y responsabilidad ética del creador'
    ],
    queVamosAAprender: 'Los influencers marcan modas, opiniones y consumos. No son héroes ni villanos: son comunicadores con gran poder y modelos de negocio. Aprenderemos cómo construyen su credibilidad y cómo evaluar sus recomendaciones.',
    explicacionTeorica: {
      seccion: 'La economía de la influencia y las relaciones parasociales',
      texto: 'Un influencer no vende simplemente con carteles: vende a través de la confianza y la cercanía cotidiana. Los seguidores sienten que lo conocen ("relación parasocial"), como a un amigo. Esa confianza es monetizada por las marcas cuando el creador recomienda un producto. Por eso es vital distinguir una recomendación genuina de un contrato comercial.',
      conceptosClave: [
        { concepto: 'Relación parasocial', definicion: 'Vínculo psicológico unidireccional donde el usuario siente cercanía e intimidad con una figura pública que no lo conoce.' },
        { concepto: 'Tendencia viral (Trend)', definicion: 'Patrón de contenido (audio, baile, desafío) replicado masivamente por millones de usuarios en poco tiempo.' },
        { concepto: 'Publicidad encubierta', definicion: 'Recomendar un producto cobrando por ello sin avisar a la audiencia que es un anuncio.' }
      ]
    },
    ejemplos: [
      {
        id: 'ej-20-1',
        titulo: 'El caso del streamer y el teclado gamer',
        tipo: 'caso',
        contenido: 'Un streamer muy querido dice casualmente: "Chicos, de verdad este teclado me cambió la vida, no juego con otra cosa". No aclara que la marca le pagó miles de dólares por decir esa frase.',
        analisis: 'Engaña la buena fe de su comunidad al esconder la transacción económica.',
        metadatos: { 'Falta ética': 'Publicidad encubierta no declarada' }
      }
    ],
    actividadAnalizar: {
      id: 'act-20-analizar',
      tipo: 'multiple_choice',
      titulo: 'Analizar la anatomía de un trend viral',
      consigna: '¿Por qué un desafío o trend se expande con tanta velocidad entre adolescentes?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Porque combina un audio pegadizo, una acción fácil de replicar y el deseo humano de pertenecer y ser visto por el grupo.', esCorrecta: true, retroalimentacion: '¡Exacto! Fácil reproducción + gratificación social + impulso del algoritmo.' },
          { id: 'o2', texto: 'Porque el presidente de internet obliga a todos a bailarlo.', esCorrecta: false, retroalimentacion: 'Respuesta absurda.' }
        ]
      }
    },
    actividadPracticar: {
      id: 'act-20-practicar',
      tipo: 'multiple_choice',
      titulo: 'Límites éticos de las tendencias virales',
      consigna: 'Surge un trend que propone hacer bromas peligrosas a transeúntes en la calle. ¿Cuál debe ser la postura del prosumidor consciente?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'No sumarse, denunciar el contenido en la plataforma y no darle visualizaciones ni comentarios que lo amplifiquen.', esCorrecta: true, retroalimentacion: '¡Excelente ciudadanía digital! No alimentar la viralidad del daño.' },
          { id: 'o2', texto: 'Copiarlo igual para tener más seguidores.', esCorrecta: false, retroalimentacion: 'Pone en riesgo a terceros y vulnera la ética básica.' }
        ]
      }
    },
    actividadDesafio: {
      id: 'act-20-desafio',
      tipo: 'multiple_choice',
      titulo: 'Creadores que aportan valor real',
      consigna: '¿Cuándo un creador digital se convierte en un referente positivo?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Cuando divulga saberes, visibiliza causas sociales, respeta a su audiencia y transparenta sus vínculos comerciales con honestidad.', esCorrecta: true, retroalimentacion: '¡Brillante! Comunica con propósito ético y responsabilidad social.' },
          { id: 'o2', texto: 'Cuando genera polémicas falsas y peleas todos los días.', esCorrecta: false, retroalimentacion: 'Eso es contenido sensacionalista y tóxico.' }
        ]
      }
    },
    produccion: {
      id: 'prod-20',
      titulo: 'Análisis crítico de un creador o tendencia digital',
      consigna: 'Elegí un creador de contenido o una tendencia popular y analizá su propuesta comunicativa.',
      formato: 'Ensayo Crítico Breve',
      campos: [
        { id: 'nombre_creador_o_trend', label: 'Nombre del creador o tendencia analizada', placeholder: 'Ej: Divulgador de historia / Trend de recetas rápidas...', tipo: 'input' },
        { id: 'relacion_audiencia', label: '¿Cómo construye el vínculo con su audiencia?', placeholder: 'Tono, cercanía, recursos que utiliza...', tipo: 'textarea' },
        { id: 'aspectos_positivos', label: 'Aspectos valiosos o constructivos de su contenido', placeholder: 'Qué aporta de bueno a quienes lo siguen...', tipo: 'textarea' },
        { id: 'aspectos_a_cuidar', label: 'Riesgos o aspectos críticos a observar', placeholder: 'Consumo, sesgos, publicidad encubierta...', tipo: 'textarea' }
      ],
      criterioEvaluacion: ['Equilibrio reflexivo sin caer en simplismos', 'Identificación de estrategias comunicativas']
    },
    autoevaluacion: [
      {
        id: 'auto-20-1',
        pregunta: '¿Comprendo que los influencers son profesionales que viven de capturar mi atención y no simplemente "amigos virtuales"?',
        opciones: [
          { id: 'a1', texto: 'Sí, mantengo distancia analítica y evalúo críticamente sus recomendaciones.', valor: 4, esCorrecta: true, retroalimentacion: '¡Excelente lucidez digital!' },
          { id: 'a2', texto: 'A veces confío a ciegas en todo lo que dice mi creador favorito.', valor: 2, retroalimentacion: 'Siempre es sano contrastar con otras fuentes.' }
        ]
      }
    ],
    puntajeMaximo: 129,
    logroIdAsociado: 'logro-14'
  },
  {
    id: 21,
    numero: 21,
    fecha: '10/11/2026',
    ejeId: 'eje-4',
    ejeNombre: 'COMUNICACIÓN CRÍTICA',
    titulo: 'IA aplicada a comunicación',
    objetivo: 'Utilizar herramientas de Inteligencia Artificial generativa como asistentes creativos, comprendiendo la necesidad indispensable de la supervisión, corrección humana, detección de sesgos y autoría responsable.',
    contenidos: [
      'Modelos de lenguaje e imágenes generativas: qué son y cómo operan por probabilidad estadística',
      'La IA no es infalible: alucinaciones, sesgos de entrenamiento y desactualización',
      'Ingeniería básica de prompts: contexto, rol, tarea y formato',
      'El rol insustituible del ser humano: verificación, ética y toque emocional'
    ],
    queVamosAAprender: 'La Inteligencia Artificial no viene a reemplazar tu cerebro, sino a ser un borrador veloz. Aprenderemos a escribir buenas instrucciones (prompts), pero sobre todo a corregir sus errores y asumir la autoría de lo que publicamos.',
    explicacionTeorica: {
      seccion: 'La IA como copiloto, nunca como autor ciego',
      texto: 'Un modelo de IA generativa predice palabras estadísticamente plausibles a partir de enormes volúmenes de texto. No "sabe", no "siente" y no tiene sentido común. Puede inventar fuentes históricas con total seguridad ("alucinación") o reproducir estereotipos discriminatorios. Por ello, el estudiante es siempre el autor responsable: quien usa IA debe revisar, verificar cada dato y darle su impronta personal.',
      conceptosClave: [
        { concepto: 'Prompt', definicion: 'Instrucción detallada que guía a la IA indicándole contexto, rol y resultado deseado.' },
        { concepto: 'Alucinación de IA', definicion: 'Cuando el modelo genera datos o hechos totalmente falsos presentándolos como reales.' },
        { concepto: 'Autoría responsable', definicion: 'Hacerse cargo del contenido final, habiéndolo verificado, editado y mejorado conscientemente.' }
      ]
    },
    ejemplos: [
      {
        id: 'ej-21-1',
        titulo: 'Prompt vago vs Prompt estructurado',
        tipo: 'comparacion',
        contenido: 'Prompt vago: "Escribí algo de la escuela". Resultado: Texto genérico y frío. Prompt estructurado: "Actuá como estudiante de secundaria del taller de comunicación. Escribí un copy de 3 oraciones para Instagram convocando a familias a la muestra de fin de año de la Escuela 787 el 26 de noviembre. Tono cálido y claro".',
        analisis: 'A mejor contexto y especificación de rol, mejor calidad del borrador inicial.',
        metadatos: { 'Técnica': 'Rol + Audiencia + Restricción + Tono' }
      }
    ],
    actividadAnalizar: {
      id: 'act-21-analizar',
      tipo: 'multiple_choice',
      titulo: 'Detectar un error de alucinación en un texto generado por IA',
      consigna: 'Le pedís a una IA que resuma la historia de tu escuela y el texto dice: "La Escuela 787 fue fundada en el año 1492 por Cristóbal Colón en una nave espacial". ¿Qué debés hacer como estudiante?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Copiarlo y pegarlo igual porque la IA "es más inteligente que los humanos".', esCorrecta: false, retroalimentacion: 'Grave error: la IA alucinó datos imposibles.' },
          { id: 'o2', texto: 'Rechazar ese dato falso, consultar los documentos del archivo escolar y reescribir con datos históricos reales verificados.', esCorrecta: true, retroalimentacion: '¡Exacto! El criterio humano y la verificación de fuentes son indispensables.' }
        ]
      }
    },
    actividadPracticar: {
      id: 'act-21-practicar',
      tipo: 'multiple_choice',
      titulo: 'Construcción de un buen prompt',
      consigna: '¿Cuáles son los 4 componentes indispensables para darle una instrucción eficaz a una IA generativa?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Rol/Identidad + Objetivo concreto + Contexto/Audiencia + Restricciones de formato y tono.', esCorrecta: true, retroalimentacion: '¡Excelente estructura metodológica de prompting!' },
          { id: 'o2', texto: 'Escribir solo una palabra y esperar magia.', esCorrecta: false, retroalimentacion: 'Produce resultados genéricos e inútiles.' }
        ]
      }
    },
    actividadDesafio: {
      id: 'act-21-desafio',
      tipo: 'multiple_choice',
      titulo: 'Ética y transparencia en el uso de IA',
      consigna: 'Si utilizaste una herramienta de IA para ayudarte a hacer una lluvia de ideas o pulir la redacción de tu campaña, ¿cuál es la conducta ética adecuada?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Ocultarlo y mentir diciendo que no usaste nada.', esCorrecta: false, retroalimentacion: 'Falta de honestidad académica.' },
          { id: 'o2', texto: 'Declarar abiertamente qué herramienta se utilizó, qué instrucción se le dio y qué cambios humanos se realizaron para validarla.', esCorrecta: true, retroalimentacion: '¡Brillante! La transparencia fortalece tu valor como prosumidor ético.' }
        ]
      }
    },
    produccion: {
      id: 'prod-21',
      titulo: 'Pieza de comunicación asistida por IA con auditoría humana',
      consigna: 'Diseñá un ejercicio de co-creación con IA completando los 6 pasos de la auditoría reflexiva.',
      formato: 'Registro de Co-creación y Auditoría',
      campos: [
        { id: 'herramienta_utilizada', label: '1. Herramienta o asistente de IA utilizado', placeholder: 'Ej: Gemini / ChatGPT / Copilot...', tipo: 'input' },
        { id: 'instruccion_prompt', label: '2. Instrucción o Prompt completo enviado', placeholder: 'Detallá el rol, objetivo y contexto que le diste...', tipo: 'textarea' },
        { id: 'resultado_original', label: '3. Resultado original que devolvió la IA', placeholder: 'Pegá el fragmento inicial...', tipo: 'textarea' },
        { id: 'revision_errores', label: '4. Errores, clichés o datos fríos detectados', placeholder: 'Qué cosas sonaban poco naturales o inexactas...', tipo: 'textarea' },
        { id: 'cambios_realizados', label: '5. Versión final con tus correcciones humanas', placeholder: 'El texto pulido con tu estilo personal...', tipo: 'textarea' },
        { id: 'justificacion_decisiones', label: '6. ¿Por qué tus cambios mejoraron el resultado?', placeholder: 'Explicá tus decisiones comunicacionales...', tipo: 'textarea' }
      ],
      criterioEvaluacion: ['Evidencia de intervención humana crítica', 'Justificación de los cambios realizados']
    },
    autoevaluacion: [
      {
        id: 'auto-21-1',
        pregunta: '¿Comprendo que la IA es solo un borrador y que la responsabilidad ética y la autoría final son mías?',
        opciones: [
          { id: 'a1', texto: 'Sí, jamás publico nada generado por IA sin antes chequearlo y reescribirlo con mi voz.', valor: 4, esCorrecta: true, retroalimentacion: '¡Pensamiento de comunicador del siglo XXI!' },
          { id: 'a2', texto: 'A veces me tiento de copiar y pegar sin leer.', valor: 2, retroalimentacion: 'El copia y pega ciego destruye tu propia voz creadora.' }
        ]
      }
    ],
    puntajeMaximo: 129,
    logroIdAsociado: 'logro-15'
  },
  {
    id: 22,
    numero: 22,
    fecha: '12/11/2026',
    ejeId: 'eje-4',
    ejeNombre: 'COMUNICACIÓN CRÍTICA',
    titulo: 'Ética digital',
    objetivo: 'Construir un marco ético integral para la comunicación digital que contemple la privacidad, el consentimiento, los derechos de autor (Creative Commons), la no discriminación y la publicación responsable.',
    contenidos: [
      'Los pilares de la ética digital comunitaria',
      'Derecho a la propia imagen y consentimiento informado',
      'Propiedad intelectual, plagio y licencias abiertas (Creative Commons)',
      'Algoritmos no discriminatorios y respeto a las diversidades'
    ],
    queVamosAAprender: 'Comunicar en digital te da un poder inmenso: podés llegar a miles de personas con un toque. Ese poder exige una brújula moral clara. Crearemos nuestro propio código de ética para garantizar que nuestra voz sume al bienestar común.',
    explicacionTeorica: {
      seccion: 'La brújula moral en los ecosistemas conectados',
      texto: 'La ética digital no es una lista de prohibiciones externas, sino una convicción interna: preguntarse siempre "¿a quién beneficia lo que voy a publicar?" y "¿a quién podría perjudicar?". Implica citar a los autores de las fotos e ideas que usamos, cuidar los datos de los más chicos y no promover el odio ni la difamación.',
      conceptosClave: [
        { concepto: 'Consentimiento informado', definicion: 'Acuerdo explícito y libre de una persona antes de que su imagen o testimonio sea difundido.' },
        { concepto: 'Licencias Creative Commons', definicion: 'Modelos legales que permiten compartir y reutilizar obras creativas bajo ciertas condiciones explícitas.' },
        { concepto: 'Responsabilidad social comunicativa', definicion: 'Compromiso de utilizar los medios para construir comunidad, inclusión y verdad.' }
      ]
    },
    ejemplos: [
      {
        id: 'ej-22-1',
        titulo: 'Uso de fotos ajenas: Plagio vs Cita responsable',
        tipo: 'caso',
        contenido: 'Caso A: Descargar una ilustración de internet, borrar la firma del artista y ponerla en el afiche escolar como propia. Caso B: Utilizar una imagen con licencia Creative Commons CC-BY e incluir en el pie: "Ilustración por [Nombre de artista] bajo licencia CC".',
        analisis: 'El Caso B respeta el trabajo ajeno y demuestra profesionalismo ético.',
        metadatos: { 'Principio': 'Reconocimiento de autoría' }
      }
    ],
    actividadAnalizar: {
      id: 'act-22-analizar',
      tipo: 'multiple_choice',
      titulo: 'Dilema ético en la cobertura escolar',
      consigna: 'Durante un festival escolar, un niño tropieza y llora. Un estudiante quiere sacar una foto en primer plano de su llanto para un meme gracioso. ¿Cuál es el análisis ético correcto?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Vulnera la dignidad y los derechos de la infancia: no se debe fotografiar ni ridiculizar a un menor en situación de vulnerabilidad sin consentimiento.', esCorrecta: true, retroalimentacion: '¡Excelente principio ético! La empatía y el cuidado de las personas están antes que cualquier chiste.' },
          { id: 'o2', texto: 'Está bien porque en lugares públicos se puede hacer lo que uno quiera.', esCorrecta: false, retroalimentacion: 'El derecho al respeto y protección de la infancia prevalece siempre.' }
        ]
      }
    },
    actividadPracticar: {
      id: 'act-22-practicar',
      tipo: 'multiple_choice',
      titulo: 'Elección de bancos de imágenes éticos',
      consigna: 'Para ilustrar tu campaña escolar sin vulnerar derechos de autor, ¿dónde debés buscar imágenes?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'En bancos de imágenes libres (Unsplash, Wikimedia Commons, Pexels) o creando tus propias fotos con consentimiento.', esCorrecta: true, retroalimentacion: '¡Perfecto! Garantiza legalidad y respeto a la comunidad creativa.' },
          { id: 'o2', texto: 'Descargando fotos de perfiles privados de personas desconocidas.', esCorrecta: false, retroalimentacion: 'Invasión a la privacidad e infracción legal.' }
        ]
      }
    },
    actividadDesafio: {
      id: 'act-22-desafio',
      tipo: 'multiple_choice',
      titulo: 'El test de la publicación responsable',
      consigna: 'Antes de publicar cualquier contenido en las redes del proyecto, ¿cuál es la pregunta final que debés hacerte?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: '¿Es verídico? ¿Es respetuoso? ¿Aporta valor real a mi comunidad? ¿Puedo defenderlo en persona cara a cara?', esCorrecta: true, retroalimentacion: '¡Brillante decálogo ético! El filtro que distingue a un auténtico prosumidor.' },
          { id: 'o2', texto: '¿Cuántos millones de likes voy a ganar en 5 minutos?', esCorrecta: false, retroalimentacion: 'Obsesión por métricas vacías sin responsabilidad social.' }
        ]
      }
    },
    produccion: {
      id: 'prod-22',
      titulo: 'Código ético para la comunicación digital escolar',
      consigna: 'Redactá 4 compromisos éticos que guiarán el desarrollo de tu Campaña de Proyecto Final Integrador.',
      formato: 'Decálogo Ético Personal y Comunitario',
      campos: [
        { id: 'compromiso_veracidad', label: '1. Compromiso con la verdad y la verificación', placeholder: 'Cómo verificarás los datos de tu campaña...', tipo: 'textarea' },
        { id: 'compromiso_privacidad', label: '2. Compromiso con la privacidad y el consentimiento', placeholder: 'Cómo cuidarás las imágenes y testimonios...', tipo: 'textarea' },
        { id: 'compromiso_autoria', label: '3. Compromiso con los derechos de autor y licencias', placeholder: 'Cómo citarás fuentes, música y gráficos...', tipo: 'textarea' },
        { id: 'compromiso_respeto', label: '4. Compromiso con el respeto, la no discriminación y la empatía', placeholder: 'Qué lenguaje y tono emplearás...', tipo: 'textarea' }
      ],
      criterioEvaluacion: ['Profundidad moral de los compromisos', 'Aplicabilidad real en el proyecto']
    },
    autoevaluacion: [
      {
        id: 'auto-22-1',
        pregunta: '¿Comprendo que la ética no es un freno a la creatividad, sino la garantía de que mi comunicación sea creíble y duradera?',
        opciones: [
          { id: 'a1', texto: 'Sí, la confianza comunitaria es el mayor activo de cualquier comunicador.', valor: 4, esCorrecta: true, retroalimentacion: '¡Madurez y excelencia ciudadana!' },
          { id: 'a2', texto: 'A veces creo que ser ético quita diversión.', valor: 2, retroalimentacion: 'La verdadera diversión no necesita dañar a otros para brillar.' }
        ]
      }
    ],
    puntajeMaximo: 129,
    logroIdAsociado: 'logro-16'
  }
];
