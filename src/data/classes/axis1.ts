import { ClassData } from '../../types';

export const AXIS_1_CLASSES: ClassData[] = [
  {
    id: 1,
    numero: 1,
    fecha: '01/09/2026',
    ejeId: 'eje-1',
    ejeNombre: 'COMUNICACIÓN DIGITAL',
    titulo: '¿Qué es la comunicación digital?',
    objetivo: 'Comprender los elementos básicos de la comunicación digital y analizar una publicación o mensaje identificando: emisor, mensaje, receptor, medio/canal, contexto, intención y posible respuesta.',
    contenidos: [
      'Comunicación analógica vs. digital',
      'El circuito de la comunicación interactivo',
      'Emisor, receptor, canal, contexto e intención',
      'Clasificación de mensajes: claros, confusos, incompletos y manipuladores',
      'Adaptación del registro según la audiencia'
    ],
    queVamosAAprender: 'En este primer laboratorio descubriremos que comunicar en digital no es solo enviar datos: es construir sentido. Aprenderemos a desarmar cualquier mensaje de WhatsApp, Instagram o TikTok para descubrir quién lo dice, con qué intención y qué respuesta busca generar.',
    explicacionTeorica: {
      seccion: 'El circuito comunicacional digital',
      texto: 'En los medios digitales, el circuito comunicativo clásico se vuelve dinámico, hipertextual y bidireccional. Todo mensaje digital viaja a través de un canal o medio técnico (redes sociales, apps de mensajería, correo) dentro de un contexto sociocultural específico. Comprender este circuito nos permite pasar de ser consumidores pasivos a prosumidores analíticos y responsables.',
      conceptosClave: [
        { concepto: 'Emisor', definicion: 'Quien origina, codifica y publica el mensaje digital.' },
        { concepto: 'Mensaje', definicion: 'El contenido, idea o información expresada a través de signos y códigos.' },
        { concepto: 'Receptor / Audiencia', definicion: 'Quien decodifica, interpreta y reacciona al mensaje.' },
        { concepto: 'Medio / Canal', definicion: 'El soporte técnico y plataforma por donde circula el mensaje (ej. feed, chat privado, video vertical).' },
        { concepto: 'Contexto', definicion: 'La situación espacial, temporal y cultural que condiciona el significado.' },
        { concepto: 'Intención', definicion: 'El propósito del emisor: informar, persuadir, divertir, alertar o manipular.' },
        { concepto: 'Retroalimentación', definicion: 'La respuesta, interacción o efecto que produce el mensaje en el receptor.' }
      ],
      esquema: 'EMISOR → MENSAJE (CÓDIGO/CANAL) → RECEPTOR | CONDICIONADO POR EL CONTEXTO Y LA INTENCIÓN'
    },
    ejemplos: [
      {
        id: 'ej-1-1',
        titulo: 'Situación inicial: "Mañana todos tienen que venir temprano."',
        tipo: 'mensaje',
        contenido: 'Mensaje recibido sin remitente identificado en un grupo de mensajería: "Mañana todos tienen que venir temprano."',
        analisis: '¿Quién lo dice? Si lo dice un preceptor escolar, es una orden oficial; si lo dice un compañero, puede ser una sugerencia. ¿Qué significa "temprano"? ¿A las 7:15 o a las 7:45? ¿Qué información falta? Falta el horario exacto, el motivo y la firma. Demuestra cómo la falta de contexto genera incertidumbre.',
        metadatos: {
          'Emisor': 'Desconocido / Ambiguo',
          'Intención': 'Avisar o convocar',
          'Falla comunicativa': 'Ambigüedad horaria y falta de emisor claro'
        }
      },
      {
        id: 'ej-1-2',
        titulo: 'Publicación institucional escolar en redes',
        tipo: 'publicacion',
        contenido: '"¡Comienza el Taller de Comunicación Digital! Martes y jueves de 14 a 15 hs en el aula multimedia de la Escuela Nº 787. Traé tu cuaderno o celular. ¡Cupos confirmados!"',
        analisis: 'Emisor claro (la institución), destinatario definido (estudiantes del ciclo básico), canal público formal, datos precisos (días, horarios, lugar) y tono de bienvenida claro.',
        metadatos: {
          'Canal': 'Instagram / Cartelera digital escolar',
          'Claridad': 'Alta (precisa lugar, hora y destinatario)'
        }
      }
    ],
    actividadAnalizar: {
      id: 'act-1-analizar',
      tipo: 'clasificacion',
      titulo: '¿Qué está comunicando realmente?',
      consigna: 'Analizá cada uno de los 4 mensajes ficticios. Identificá su intención y clasificalo según su calidad comunicativa: CLARA, CONFUSA, INCOMPLETA o MANIPULADORA.',
      puntaje: 25,
      explicacionDidactica: 'Un mensaje claro brinda todos los datos sin rodeos; un mensaje incompleto omite información vital; uno confuso mezcla códigos o resulta ambiguo; y uno manipulador busca engañar o provocar una reacción emocional sin sustento.',
      data: {
        casos: [
          {
            id: 'c1',
            texto: '"¡Urgente! Si no compartís este enlace con 10 contactos antes de las 18 hs, van a suspender tu cuenta para siempre."',
            opciones: ['CLARA', 'CONFUSA', 'INCOMPLETA', 'MANIPULADORA'],
            correcta: 'MANIPULADORA',
            explicacion: 'Utiliza urgencia artificial, miedo y amenaza para forzar una conducta viral sin fundamento técnico.'
          },
          {
            id: 'c2',
            texto: '"Nos vemos en el lugar de siempre a la hora que sabemos para hacer eso."',
            opciones: ['CLARA', 'CONFUSA', 'INCOMPLETA', 'MANIPULADORA'],
            correcta: 'INCOMPLETA',
            explicacion: 'Falta especificar el lugar exacto, la hora y el objetivo. Solo tiene sentido si hay un código previo muy cerrado.'
          },
          {
            id: 'c3',
            texto: '"Estimadas familias de 2º año: este jueves 3 de septiembre a las 10:00 hs se realizará la reunión informativa en el SUM escolar."',
            opciones: ['CLARA', 'CONFUSA', 'INCOMPLETA', 'MANIPULADORA'],
            correcta: 'CLARA',
            explicacion: 'Tiene emisor identificable, destinatario directo, fecha, hora, lugar y propósito inequívocos.'
          },
          {
            id: 'c4',
            texto: '"El acto de mañana se pospone para antes de la semana que viene pero depende si no llueve ayer."',
            opciones: ['CLARA', 'CONFUSA', 'INCOMPLETA', 'MANIPULADORA'],
            correcta: 'CONFUSA',
            explicacion: 'Inconsistencias temporales y gramaticales que desorientan al receptor.'
          }
        ]
      }
    },
    actividadPracticar: {
      id: 'act-1-practicar',
      tipo: 'analisis_mensaje',
      titulo: 'Desarme de la situación inicial',
      consigna: 'Completá los campos analíticos para el mensaje: "Mañana todos tienen que venir temprano."',
      puntaje: 25,
      explicacionDidactica: 'Comprender qué falta en un mensaje nos entrena para redactar comunicaciones efectivas.',
      data: {
        preguntas: [
          {
            id: 'p1',
            etiqueta: '¿Qué información crítica falta en "Mañana todos tienen que venir temprano"?',
            opciones: [
              'Hora exacta de ingreso, motivo de la convocatoria y quién lo firma',
              'El pronóstico del clima para el día siguiente',
              'La lista de útiles escolares'
            ],
            correctaIndex: 0,
            retroalimentacion: 'Exacto: sin horario preciso ni emisor explícito, el receptor no puede actuar con certeza.'
          },
          {
            id: 'p2',
            etiqueta: 'Si este mensaje lo envía un compañero de banco por WhatsApp a las 23 hs, ¿cuál es el contexto más probable?',
            opciones: [
              'Un recordatorio informal sobre algún examen o trabajo práctico en equipo',
              'Una disposición ministerial obligatoria para toda la provincia',
              'Una oferta publicitaria digital'
            ],
            correctaIndex: 0,
            retroalimentacion: 'Correcto: el vínculo de confianza y el canal privado configuran un contexto informal entre pares.'
          }
        ]
      }
    },
    actividadDesafio: {
      id: 'act-1-desafio',
      tipo: 'multiple_choice',
      titulo: 'Detectar qué cambia cuando cambia la audiencia',
      consigna: 'Deseamos comunicar la misma idea: "El laboratorio de comunicación comienza puntualmente a las 14:00 hs". ¿Cuál versión es la más adecuada para un COMUNICADO OFICIAL INSTITUCIONAL en la web escolar?',
      puntaje: 25,
      explicacionDidactica: 'El registro debe adecuarse a la investidura institucional y a la seriedad del canal público.',
      data: {
        opciones: [
          {
            id: 'o1',
            texto: 'Che chicos, dale que a las 2 arranca la compu, no cuelguen 😉🔥',
            esCorrecta: false,
            retroalimentacion: 'Este registro es coloquial e informal, apto para un chat entre amigos pero no para una web institucional.'
          },
          {
            id: 'o2',
            texto: 'Se informa a la comunidad educativa que las actividades del Taller de Comunicación Digital iniciarán a las 14:00 hs con estricta puntualidad en la Escuela Nº 787.',
            esCorrecta: true,
            retroalimentacion: '¡Excelente! Utiliza vocabulario formal, claridad informativa, respeto institucional y precisión horaria.'
          },
          {
            id: 'o3',
            texto: '¡Puntualidad ya! El que llega 14:01 no entra más a nada.',
            esCorrecta: false,
            retroalimentacion: 'Tono amenazante e inadecuado que no cumple con las pautas de una comunicación empática y formal.'
          }
        ]
      }
    },
    produccion: {
      id: 'prod-1',
      titulo: 'Ficha de análisis y adaptación comunicacional',
      consigna: 'Completá la ficha redactando la misma idea comunicativa ("Hay que cuidar y apagar las computadoras al terminar la clase") adaptada a 3 audiencias diferentes.',
      formato: 'Ficha de Producción Escrita',
      campos: [
        {
          id: 'version_amigo',
          label: 'Versión 1: Para un compañero/amigo en un chat privado',
          placeholder: 'Ej: Che acordate de apagar la compu antes de salir...',
          tipo: 'textarea',
          ayuda: 'Utilizá un registro cercano, espontáneo y coloquial.'
        },
        {
          id: 'version_grupo_escolar',
          label: 'Versión 2: Para el grupo de WhatsApp del curso',
          placeholder: 'Ej: Compañeros, por favor verifiquemos que todos los equipos queden apagados...',
          tipo: 'textarea',
          ayuda: 'Registro cooperativo, claro y respetuoso entre pares.'
        },
        {
          id: 'version_publicacion_publica',
          label: 'Versión 3: Para un cartel o post público en la cartelera digital de la escuela',
          placeholder: 'Ej: Cuidemos los recursos tecnológicos de nuestra institución...',
          tipo: 'textarea',
          ayuda: 'Registro institucional, formal y con un llamado a la acción constructivo.'
        }
      ],
      criterioEvaluacion: [
        'Diferenciación evidente del registro y vocabulario según la audiencia',
        'Claridad en la transmisión de la idea central',
        'Uso ético y constructivo del lenguaje'
      ]
    },
    autoevaluacion: [
      {
        id: 'auto-1-1',
        pregunta: '¿Logro identificar con facilidad al emisor y la intención real de un mensaje digital?',
        opciones: [
          { id: 'a1', texto: 'Sí, totalmente: reconozco quién lo emite y qué busca conseguir.', valor: 4, esCorrecta: true, retroalimentacion: '¡Excelente autonomía crítica!' },
          { id: 'a2', texto: 'En la mayoría de los casos, aunque a veces dudo en mensajes confusos.', valor: 3, retroalimentacion: 'Bien; la práctica analítica agudizará tu mirada.' },
          { id: 'a3', texto: 'Me cuesta distinguir cuando un mensaje intenta manipularme.', valor: 2, retroalimentacion: 'Profundizaremos este punto en las clases de redes y desinformación.' }
        ]
      },
      {
        id: 'auto-1-2',
        pregunta: '¿Comprendo cómo cambia la redacción de un mensaje al variar la audiencia destinataria?',
        opciones: [
          { id: 'b1', texto: 'Sí, puedo adaptar el tono y vocabulario para amigos, profesores o público general.', valor: 4, esCorrecta: true, retroalimentacion: '¡Gran competencia para un comunicador digital!' },
          { id: 'b2', texto: 'Comprendo la diferencia pero a veces se me escapan términos coloquiales en lo formal.', valor: 3, retroalimentacion: 'Es cuestión de revisar antes de publicar.' }
        ]
      }
    ],
    puntajeMaximo: 129,
    logroIdAsociado: 'logro-1'
  },
  {
    id: 2,
    numero: 2,
    fecha: '03/09/2026',
    ejeId: 'eje-1',
    ejeNombre: 'COMUNICACIÓN DIGITAL',
    titulo: 'Elementos de la comunicación',
    objetivo: 'Identificar y articular los componentes del circuito comunicativo (emisor, receptor, mensaje, canal, código, contexto, intención, respuesta y retroalimentación) en situaciones digitales reales.',
    contenidos: [
      'Emisor y receptor en entornos interactivos',
      'Código: símbolos, emojis, memes e hipervínculos',
      'Canal digital: sincrónico vs asincrónico',
      'El rol de la retroalimentación (feedback)',
      'Ruido e interferencias comunicacionales en la red'
    ],
    queVamosAAprender: 'Profundizaremos en cada engranaje del circuito de la comunicación: cómo un mal código (como un emoji malinterpretado) o el ruido digital pueden provocar malentendidos en redes.',
    explicacionTeorica: {
      seccion: 'Los engranajes del intercambio digital',
      texto: 'Todo proceso comunicativo digital requiere un código común (el idioma, los emojis o la jerga digital) y un canal físico o lógico (la fibra óptica, la red Wi-Fi o la app de mensajería). Si el código no es compartido, o si existe ruido (notificaciones excesivas, mala conexión, diseño visual confuso), la comunicación se interrumpe o distorsiona.',
      conceptosClave: [
        { concepto: 'Código', definicion: 'Sistema de signos y reglas compartidas para construir e interpretar el mensaje.' },
        { concepto: 'Canal', definicion: 'Vía física o digital por la que se transmite la información.' },
        { concepto: 'Ruido digital', definicion: 'Toda interferencia (técnica, visual o semántica) que dificulta la comprensión.' },
        { concepto: 'Retroalimentación', definicion: 'Retorno que permite al emisor verificar si el mensaje fue comprendido y recibido.' }
      ]
    },
    ejemplos: [
      {
        id: 'ej-2-1',
        titulo: 'El emoji malinterpretado (Ruido de código)',
        tipo: 'caso',
        contenido: 'Un estudiante le responde al preceptor un mensaje formal sobre faltas con un emoji de payaso 🤡 intentando bromear.',
        analisis: 'El código utilizado no es compartido en el contexto institucional formal, generando un conflicto de respeto y ruido comunicativo.',
        metadatos: { 'Falla': 'Desfasaje de código y registro en canal formal' }
      }
    ],
    actividadAnalizar: {
      id: 'act-2-analizar',
      tipo: 'relacionar',
      titulo: 'Relacionar elementos de la comunicación digital',
      consigna: 'Asociá cada elemento con su ejemplo correspondiente en una transmisión en vivo de la escuela.',
      puntaje: 25,
      explicacionDidactica: 'Identificar cada elemento en situaciones complejas consolida el pensamiento comunicacional.',
      data: {
        pares: [
          { elemento: 'Canal', ejemplo: 'Transmisión en streaming de YouTube de la Escuela Nº 787' },
          { elemento: 'Código', ejemplo: 'Idioma español oral complementado con subtítulos automáticos' },
          { elemento: 'Emisor', ejemplo: 'Estudiantes del taller conduciendo la radio escolar digital' },
          { elemento: 'Retroalimentación', ejemplo: 'Los comentarios y preguntas que envían los espectadores en el chat' }
        ]
      }
    },
    actividadPracticar: {
      id: 'act-2-practicar',
      tipo: 'multiple_choice',
      titulo: 'Detección de ruido comunicacional',
      consigna: 'En una publicación de Instagram escolar, el texto tiene tipografía amarilla fluorescente sobre fondo blanco y letras ilegibles. ¿Qué tipo de ruido se produjo?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Ruido visual en el canal que impide la decodificación del mensaje.', esCorrecta: true, retroalimentacion: '¡Correcto! El bajo contraste y la tipografía inadecuada son barreras de diseño que rompen la legibilidad.' },
          { id: 'o2', texto: 'Falta de emisor.', esCorrecta: false, retroalimentacion: 'El emisor existe, pero su diseño dificulta la lectura.' },
          { id: 'o3', texto: 'Cambio de idioma.', esCorrecta: false, retroalimentacion: 'El código lingüístico es el mismo, el problema es visual.' }
        ]
      }
    },
    actividadDesafio: {
      id: 'act-2-desafio',
      tipo: 'multiple_choice',
      titulo: 'Reconstruir una comunicación incompleta',
      consigna: 'Recibís un mail que dice: "Te mando el archivo que me pediste. Saludos." pero el archivo no está adjunto y no dice qué archivo es. ¿Cuál es la respuesta de retroalimentación más profesional y resolutiva?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: '¡Eh, no mandaste nada, fijate bien!', esCorrecta: false, retroalimentacion: 'Tono informal y poco colaborativo.' },
          { id: 'o2', texto: 'Estimado/a: Noté que el archivo adjunto no figura en el correo. ¿Podrías reenviarlo para poder revisarlo? Muchas gracias.', esCorrecta: true, retroalimentacion: '¡Excelente! Corrige el fallo comunicativo de forma clara, educada y eficiente.' },
          { id: 'o3', texto: 'No contestar nada y esperar a ver si se da cuenta.', esCorrecta: false, retroalimentacion: 'La falta de retroalimentación bloquea la resolución del objetivo.' }
        ]
      }
    },
    produccion: {
      id: 'prod-2',
      titulo: 'Mapa de elementos de una comunicación digital',
      consigna: 'Elegí una comunicación digital real o ficticia de la escuela y descomponé sus 6 elementos constitutivos.',
      formato: 'Mapa Estructurado de Comunicación',
      campos: [
        { id: 'caso_elegido', label: 'Situación o mensaje elegido', placeholder: 'Ej: Anuncio del torneo deportivo intercolegial en redes', tipo: 'input' },
        { id: 'emisor', label: 'Emisor', placeholder: 'Quién emite...', tipo: 'input' },
        { id: 'receptor', label: 'Receptor / Audiencia', placeholder: 'A quién se dirige...', tipo: 'input' },
        { id: 'canal', label: 'Canal / Plataforma', placeholder: 'Plataforma y soporte...', tipo: 'input' },
        { id: 'codigo', label: 'Código utilizado', placeholder: 'Idioma, emojis, imágenes...', tipo: 'input' },
        { id: 'retroalimentacion', label: 'Retroalimentación esperada', placeholder: 'Inscripción en formulario, comentarios...', tipo: 'textarea' }
      ],
      criterioEvaluacion: ['Precisión al aislar cada elemento', 'Comprensión de la retroalimentación']
    },
    autoevaluacion: [
      {
        id: 'auto-2-1',
        pregunta: '¿Comprendo la importancia de la retroalimentación (feedback) para asegurar que un mensaje llegó?',
        opciones: [
          { id: 'a1', texto: 'Sí, la comunicación no termina hasta que se produce la respuesta o verificación.', valor: 4, esCorrecta: true, retroalimentacion: '¡Exacto! El feedback cierra el circuito.' },
          { id: 'a2', texto: 'Todavía pienso que basta con enviar el mensaje para que la comunicación sea exitosa.', valor: 2, retroalimentacion: 'Recordá que el receptor puede no haber comprendido lo esperado.' }
        ]
      }
    ],
    puntajeMaximo: 129,
    logroIdAsociado: 'logro-2'
  },
  {
    id: 3,
    numero: 3,
    fecha: '08/09/2026',
    ejeId: 'eje-1',
    ejeNombre: 'COMUNICACIÓN DIGITAL',
    titulo: 'Públicos y audiencias',
    objetivo: 'Caracterizar a las audiencias digitales según intereses, edad, necesidades y contexto, adaptando el mensaje con un lenguaje pertinente.',
    contenidos: [
      'Concepto de público objetivo y buyer persona educativo',
      'Segmentación por intereses, hábitos y plataformas',
      'Empatía comunicacional: hablarle a quien escucha',
      'Adaptación de tono y registro'
    ],
    queVamosAAprender: 'No le hablamos igual a un compañero de 14 años que a la directora de la escuela o a una familia del barrio. Aprenderemos a perfilar a nuestra audiencia para que nuestro mensaje sea escuchado y valorado.',
    explicacionTeorica: {
      seccion: 'La audiencia en el centro de la estrategia',
      texto: 'Un mensaje perfecto dirigido a la audiencia equivocada fracasa. En comunicación digital, la audiencia no es una masa informe: son personas con tiempos escasos, intereses específicos y códigos propios. Conocer qué le interesa a nuestro público y qué problemas busca resolver es el primer paso antes de presionar "Publicar".',
      conceptosClave: [
        { concepto: 'Público objetivo', definicion: 'Grupo específico de personas al que se destina conscientemente un mensaje.' },
        { concepto: 'Segmentación', definicion: 'Criterio para dividir al público según edad, hábitos, ubicación o intereses.' },
        { concepto: 'Empatía comunicativa', definicion: 'Capacidad de ponerse en el lugar del receptor para elegir palabras comprensibles.' }
      ]
    },
    ejemplos: [
      {
        id: 'ej-3-1',
        titulo: 'Mismo evento, dos audiencias distintas',
        tipo: 'comparacion',
        contenido: 'Evento: "Feria de Ciencias y Tecnología de la Escuela 787". Para alumnos: "Vení a probar los videojuegos y robots creados en el taller este viernes". Para las familias: "Invitamos cordialmente a la comunidad a presenciar los proyectos científicos elaborados por nuestros estudiantes".',
        analisis: 'La idea central es la misma, pero el foco, vocabulario y beneficio destacado varían de acuerdo a la expectativa del destinatario.',
        metadatos: { 'Técnica': 'Segmentación y adecuación de valor' }
      }
    ],
    actividadAnalizar: {
      id: 'act-3-analizar',
      tipo: 'clasificacion',
      titulo: 'Identificar la audiencia adecuada',
      consigna: 'Determiná para qué público fue diseñado cada uno de los siguientes tres mensajes.',
      puntaje: 25,
      data: {
        casos: [
          {
            id: 'c1',
            texto: '"¡Anotate al torneo de Minecraft escolar de este sábado! Premios y transmisión en vivo con relatos."',
            opciones: ['Estudiantes de secundaria', 'Equipo directivo y supervisión', 'Comerciantes del barrio'],
            correcta: 'Estudiantes de secundaria',
            explicacion: 'Usa lenguaje lúdico, refiere al videojuego y al streaming escolar.'
          },
          {
            id: 'c2',
            texto: '"Ponemos a disposición el informe de gestión pedagógica y balance edilicio correspondiente al primer semestre."',
            opciones: ['Estudiantes de secundaria', 'Equipo directivo y familias', 'Chicos de jardín'],
            correcta: 'Equipo directivo y familias',
            explicacion: 'Vocabulario institucional de rendición de cuentas e informes formales.'
          }
        ]
      }
    },
    actividadPracticar: {
      id: 'act-3-practicar',
      tipo: 'multiple_choice',
      titulo: 'Elegir el tono adecuado',
      consigna: 'Queremos concientizar a chicos y chicas de 13 a 16 años sobre no compartir contraseñas en redes. ¿Qué enfoque resulta más persuasivo?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Un decálogo en PDF de 20 páginas con leyes y artículos penales.', esCorrecta: false, retroalimentacion: 'Genera desinterés y no conecta con sus hábitos de lectura.' },
          { id: 'o2', texto: 'Un video corto con ejemplos cotidianos (ej. qué pasa si te hackean la cuenta de un juego) y 3 consejos prácticos.', esCorrecta: true, retroalimentacion: '¡Excelente! Habla en su código, aborda algo valioso para ellos y ofrece soluciones concretas.' },
          { id: 'o3', texto: 'Prohibirles el uso de teléfonos en todo momento.', esCorrecta: false, retroalimentacion: 'La prohibición no educa ni desarrolla pensamiento crítico.' }
        ]
      }
    },
    actividadDesafio: {
      id: 'act-3-desafio',
      tipo: 'multiple_choice',
      titulo: 'Selección de plataforma por hábitos de audiencia',
      consigna: 'Si tu campaña busca informar a los abuelos y adultos mayores de la comunidad barrial sobre un taller de tecnología, ¿cuál es el canal prioritario?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'TikTok y Twitch con videos acelerados.', esCorrecta: false, retroalimentacion: 'No coincide con el canal habitual de consumo de esa franja etaria.' },
          { id: 'o2', texto: 'Facebook, mensajes de WhatsApp con texto claro y carteleras en centros de jubilados.', esCorrecta: true, retroalimentacion: '¡Perfecto! Canales donde esta audiencia ya está presente y habituada a interactuar.' },
          { id: 'o3', texto: 'Discord exclusivo para gamers.', esCorrecta: false, retroalimentacion: 'Plataforma ajena al segmento objetivo.' }
        ]
      }
    },
    produccion: {
      id: 'prod-3',
      titulo: 'Perfil de audiencia (Ficha de Audiencia)',
      consigna: 'Construí el perfil de la audiencia a la que te gustaría dirigir un mensaje educativo escolar.',
      formato: 'Ficha de Segmentación',
      campos: [
        { id: 'nombre_perfil', label: 'Nombre ficticio representativo del segmento', placeholder: 'Ej: Estudiantes ingresantes a 1º año', tipo: 'input' },
        { id: 'edad_intereses', label: 'Rango de edad e intereses principales', placeholder: 'Ej: 12-13 años, videojuegos, música, redes sociales...', tipo: 'textarea' },
        { id: 'necesidades', label: '¿Qué problema o necesidad comunicacional tienen?', placeholder: 'Ej: Tienen dudas sobre cómo organizarse con las materias...', tipo: 'textarea' },
        { id: 'canales_preferidos', label: 'Plataformas que más utilizan', placeholder: 'Ej: Instagram, TikTok, WhatsApp...', tipo: 'input' }
      ],
      criterioEvaluacion: ['Coherencia entre la edad y los canales elegidos', 'Identificación de intereses reales']
    },
    autoevaluacion: [
      {
        id: 'auto-3-1',
        pregunta: '¿Comprendo que la audiencia debe determinar el vocabulario, el formato y el medio de mi mensaje?',
        opciones: [
          { id: 'a1', texto: 'Sí, siempre planifico pensando primero en quién va a recibir la información.', valor: 4, esCorrecta: true, retroalimentacion: '¡Esa es la base de un buen estratega digital!' },
          { id: 'a2', texto: 'A veces escribo como a mí me gusta sin pensar si el otro me entenderá.', valor: 2, retroalimentacion: 'Recordá siempre ponerte en los zapatos de tu receptor.' }
        ]
      }
    ],
    puntajeMaximo: 129,
    logroIdAsociado: 'logro-3'
  },
  {
    id: 4,
    numero: 4,
    fecha: '10/09/2026',
    ejeId: 'eje-1',
    ejeNombre: 'COMUNICACIÓN DIGITAL',
    titulo: 'Lenguajes digitales',
    objetivo: 'Analizar cómo interactúan el texto, la imagen, el audio, el video, los emojis y los memes en una comunicación multimodal, reconociendo cómo cada lenguaje modifica el significado.',
    contenidos: [
      'Comunicación multimodal: articulación de sentidos',
      'Texto, tipografía y jerarquías de lectura',
      'El poder de la imagen fija y en movimiento',
      'El meme y el GIF como unidades culturales condensadas',
      'El sonido y la voz en la conexión emocional'
    ],
    queVamosAAprender: 'En la red casi nunca leemos solo texto. Miramos una imagen, leemos un epígrafe, escuchamos un audio y vemos un sticker. Aprenderemos a combinar estos recursos para que se potencien y no se contradigan.',
    explicacionTeorica: {
      seccion: 'La multimodalidad digital',
      texto: 'Un mensaje multimodal combina dos o más sistemas semióticos: lingüístico (texto oral o escrito), visual (colores, encuadres, tipografías), auditivo (música, efectos sonoros) y gestual/espacial. En las redes, el meme o el video vertical sintetizan significados complejos en segundos.',
      conceptosClave: [
        { concepto: 'Multimodalidad', definicion: 'Integración coordinada de texto, sonido, gráficos y movimiento en un solo mensaje.' },
        { concepto: 'Anclaje visual', definicion: 'El texto que guía la interpretación de una imagen para evitar ambigüedades.' },
        { concepto: 'Meme digital', definicion: 'Unidad de contenido con humor o ironía replicable que transmite una idea cultural compartida.' }
      ]
    },
    ejemplos: [
      {
        id: 'ej-4-1',
        titulo: 'Imagen sin texto vs Imagen con epígrafe',
        tipo: 'comparacion',
        contenido: 'Una foto de un aula con bancos apilados. Sin texto: puede parecer abandono. Con texto: "¡Pintamos el aula entre todos para recibir el segundo cuatrimestre con alegría!".',
        analisis: 'El texto "ancla" el sentido de la imagen y transforma una posible impresión negativa en un logro comunitario.',
        metadatos: { 'Función': 'Anclaje del sentido según Roland Barthes' }
      }
    ],
    actividadAnalizar: {
      id: 'act-4-analizar',
      tipo: 'multiple_choice',
      titulo: 'Elegir el lenguaje más adecuado para la situación',
      consigna: 'La escuela necesita explicar paso a paso cómo registrarse en la biblioteca virtual desde el celular. ¿Qué lenguaje o formato resulta pedagógicamente más efectivo?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Un audio de WhatsApp de 7 minutos sin pausas.', esCorrecta: false, retroalimentacion: 'Es difícil de seguir y no permite visualizar botones ni pantallas.' },
          { id: 'o2', texto: 'Un carrusel de imágenes con capturas de pantalla señalizadas o un tutorial en video breve.', esCorrecta: true, retroalimentacion: '¡Excelente! La combinación de imagen visual y texto puntual facilita el aprendizaje procedimental.' },
          { id: 'o3', texto: 'Un meme gracioso sin datos técnicos.', esCorrecta: false, retroalimentacion: 'El meme puede entretener pero no explica el procedimiento paso a paso.' }
        ]
      }
    },
    actividadPracticar: {
      id: 'act-4-practicar',
      tipo: 'multiple_choice',
      titulo: 'Coherencia multimodal',
      consigna: 'Un video promocional de un debate escolar serio tiene música de terror de fondo y emojis de fiesta en el título. ¿Qué error comunicacional presenta?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Contradicción multimodal: la música y los emojis envían mensajes opuestos al tema central.', esCorrecta: true, retroalimentacion: '¡Exacto! Todos los modos (sonido, texto y gráficos) deben reforzar la misma intención comunicativa.' },
          { id: 'o2', texto: 'Ninguno, en redes todo vale.', esCorrecta: false, retroalimentacion: 'La contradicción de códigos desorienta y quita credibilidad.' }
        ]
      }
    },
    actividadDesafio: {
      id: 'act-4-desafio',
      tipo: 'multiple_choice',
      titulo: 'El poder sintetizador del meme con función didáctica',
      consigna: '¿Cuándo un meme cumple una función educativa real en una campaña escolar?',
      puntaje: 25,
      data: {
        opciones: [
          { id: 'o1', texto: 'Cuando utiliza la ironía para burlarse de una persona específica.', esCorrecta: false, retroalimentacion: 'Eso constituye ciberacoso y vulnera la convivencia digital.' },
          { id: 'o2', texto: 'Cuando utiliza una situación cómica universal para hacer reflexionar sobre un hábito cotidiano (ej. olvidarse de guardar el documento).', esCorrecta: true, retroalimentacion: '¡Brillante! Conecta con la experiencia común para transmitir una enseñanza sin juzgar.' }
        ]
      }
    },
    produccion: {
      id: 'prod-4',
      titulo: 'Pieza comunicacional multimodal',
      consigna: 'Diseñá la estructura de una pieza multimodal para difundir una campaña escolar: "Menos ruido en el aula, más concentración".',
      formato: 'Esquema Multimodal',
      campos: [
        { id: 'texto_titular', label: 'Texto o Titular principal', placeholder: 'Titular con impacto...', tipo: 'input' },
        { id: 'descripcion_visual', label: 'Descripción de la imagen, foto o ilustración elegida', placeholder: 'Qué se ve en la escena, qué colores dominan...', tipo: 'textarea' },
        { id: 'sonido_o_musica', label: 'Elemento sonoro o audio sugerido', placeholder: 'Voz en off serena, sonido ambiental...', tipo: 'input' },
        { id: 'llamada_accion', label: 'Llamada a la acción (CTA) y hashtags', placeholder: 'Ej: Ponete los auris para escuchar música en el recreo, en clase nos escuchamos todos #Escuela787', tipo: 'textarea' }
      ],
      criterioEvaluacion: ['Sinergia entre texto, imagen y sonido', 'Claridad del mensaje central']
    },
    autoevaluacion: [
      {
        id: 'auto-4-1',
        pregunta: '¿Puedo planificar publicaciones combinando texto, elementos visuales y auditivos de manera coherente?',
        opciones: [
          { id: 'a1', texto: 'Sí, entiendo cómo cada capa aporta sentido.', valor: 4, esCorrecta: true, retroalimentacion: '¡Excelente competencia audiovisual!' },
          { id: 'a2', texto: 'A veces agrego música o stickers solo por adorno.', valor: 3, retroalimentacion: 'Recordá que cada elemento debe tener un propósito pedagógico.' }
        ]
      }
    ],
    puntajeMaximo: 129,
    logroIdAsociado: 'logro-2'
  }
];
