(function () {
  "use strict";

  // 1. Base de datos completa con descripciones reales de Somos Luz
  const productsData = [
    {
      id: 'Conecta con tu Poder Creador',
      name: 'Conecta con tu Poder Creador',
      type: 'kit',
      description: 'Intención Activar la energía vital, fortalecer la confianza personal y acompañar procesos de inicio, motivación y acción consciente. Este ritual invita a que tus intenciones vayan más allá de los deseos banales y superficiales, conectándote con tu poder creador, tu luz interior y permitiendo que esta crezca y se expanda desde el amor y la conciencia. Materiales incluidos: • 🕯️ Vela amarilla y naranja • 🌿 Sahúmo limpiador • 🪵 Palo santo • Ritual paso a paso.',
      price: 7777,
      imageUrl: 'https://i.imgur.com/MRnS53F.jpeg'
    },
    {
      id: 'Inciensos Palo Santo con Pachulí',
      name: 'Inciensos Palo Santo con Pachulí',
      type: 'producto',
      description: 'Caja 8 inciensos. Ideal para iniciar un viaje emocional y espiritual, invitando a conectar con las emociones profundas y a encontrar la paz interior.',
      price: 4300,
      imageUrl: 'https://i.imgur.com/kM24kDo.jpeg'
    },
    {
      id: 'Incienso de Incienso Blanco',
      name: 'Incienso de Incienso Blanco',
      type: 'producto',
      description: 'Caja 9 inciensos. Ideal para limpiezas energéticas, meditaciones y crear un clima de bienestar, útil para cerrar o dar inicios dando una sensación de orden y limpieza.',
      price: 4800,
      imageUrl: 'https://i.imgur.com/DYCPYuM.jpeg'
    },
    {
      id: 'Incienso de Salvia Blanca',
      name: 'Incienso de Salvia Blanca',
      type: 'producto',
      description: 'Caja 9 inciensos. Ideal para limpiezas energéticas profundas del hogar y el aura. Nos ayuda en la claridad mental y limpieza de espacios ya que la Salvia sube la frecuencia del espacio, protegiéndonos y abriendo nuestro camino para conectar con nuestra luz y sabiduría interior.',
      price: 4800,
      imageUrl: 'https://i.imgur.com/T0TD8EI.jpeg'
    },
    {
      id: 'Amor Propio y Conexion Espiritual',
      name: 'Amor Propio y Conexión Espiritual',
      type: 'kit',
      description: 'Este kit incluye: 1 Vela lisa Rosada, 1 sahúmo de Copal, 1 Collar de Cuarzo Rosa, Ritual paso a paso. Diseñado para quienes necesitan conectarse con su corazón, sanar sus emociones y cultivar el amor por sí mismos.',
      price: 8888,
      imageUrl: 'https://i.imgur.com/2AGTgBd.jpeg'
    },
    {
      id: 'Inciensos Anis, Canela & Olibano',
      name: 'Inciensos Anís, Canela & Olíbano',
      type: 'producto',
      description: 'Caja 9 Inciensos. La combinación de estas hierbas y maderas crea una mezcla poderosa que limpia energías densas, protege el aura y atrae prosperidad. Ideal para rituales de apertura, cambios, manifestación consciente y protección energética.',
      price: 4800,
      imageUrl: 'https://i.imgur.com/6haCS0h.jpeg'
    },
    {
      id: 'Proteccion y Manifestacion',
      name: 'Protección y Manifestación',
      type: 'kit',
      description: 'Este kit incluye: 1 Vela lisa Violeta, 1 sahúmo de Romero, 1 Collar de Pirita o 1 producto de Obsidiana, Ritual paso a paso. Para quienes buscan protegerse de energías densas del exterior e interior y enfocarse en manifestar sus deseos y metas.',
      price: 8888,
      imageUrl: 'https://i.imgur.com/5vXxZR9.jpeg'
    },
    {
      id: 'Inciensos de Lavanda & Olibano',
      name: 'Inciensos de Lavanda & Olíbano',
      type: 'producto',
      description: 'Caja 9 Inciensos. La lavanda aporta equilibrio y armonía que junto con el Olíbano que atrae energías positivas, sutiles y purifica el espacio, son un protector poderoso del hogar y neutralidad de energías densas.',
      price: 4800,
      imageUrl: 'https://i.imgur.com/IxAqUo1.jpeg'
    },
    {
      id: 'Inciensos Palo Santo con Lavanda',
      name: 'Inciensos Palo Santo con Lavanda',
      type: 'producto',
      description: 'Caja 8 inciensos. La sagrada madera de Palo Santo combinada con la frescura de la lavanda purifican el campo energético y relajan nuestra mente, nos da equilibrio y armonía en el espacio.',
      price: 4300,
      imageUrl: 'https://i.imgur.com/9yxQcsQ.jpeg'
    },
    {
      id: 'Limpieza Energetica y Paz Interior',
      name: 'Limpieza Energética y Paz Interior',
      type: 'kit',
      description: 'Este kit incluye: 1 Vela lisa blanca, 1 sahúmo de Salvia Blanca, 3 Varillas de incienso de Palo santo Lavanda, 1 producto de Cuarzo blanco, Ritual paso a paso. Perfecto para quienes buscan purificar su espacio de energías estancadas y crear un ambiente de calma.',
      price: 8888,
      imageUrl: 'https://i.imgur.com/Ql99G1W.jpeg'
    },
    {
      id: 'Energía Vital',
      name: 'Energía Vital',
      type: 'kit',
      description: 'Este kit incluye: 1 Vela lisa Naranja, 1 frasco Amuleto, Guía de conexión paso a paso. Activa este kit cuando te sientas estancado/a sin energía o desmotivado/a. La luz de esta vela activa tu alegría, tu creatividad y las ganas de disfrutar la vida.',
      price: 5000,
      imageUrl: 'https://i.imgur.com/2hLCMC3.jpeg'
    },
    {
      id: 'Balsamo al Corazón',
      name: 'Bálsamo al Corazón',
      type: 'kit',
      description: 'Este kit incluye: 1 Vela lisa Rosada, 1 frasco Amuleto, Guía de conexión paso a paso. Activa este kit cuando necesites Amor propio o sanar una herida emocional. La vibración de esta vela envolverá tu corazón en ternura y aceptación.',
      price: 5000,
      imageUrl: 'https://i.imgur.com/AD7YvVD.jpeg'
    },
    {
      id: 'Sol de Abundancia y Sabiduría',
      name: 'Sol de Abundancia y Sabiduría',
      type: 'kit',
      description: 'Este kit includes: 1 Vela lisa Amarilla, 1 frasco Amuleto, Guía de conexión paso a paso. Activa este kit cuando necesites enfoque, fuerza de voluntad o recordar que la abundancia y la sabiduría del Universo son parte de ti.',
      price: 5000,
      imageUrl: 'https://i.imgur.com/ZChLehW.jpeg'
    },
    {
      id: 'Claridad y Luz Eterna',
      name: 'Claridad y Luz Eterna',
      type: 'kit',
      description: 'Este kit incluye: 1 Vela lisa Blanca, 1 frasco Amuleto, Guía de conexión paso a paso. Activa este kit cuando necesites iluminar tu Ser, purificar tu hogar o empezar un nuevo camino con la mente y las emociones claras y puras.',
      price: 5000,
      imageUrl: 'https://i.imgur.com/Tl1JTe0.jpeg'
    },
    {
      id: 'Alquimia del Alma',
      name: 'Alquimia del Alma',
      type: 'kit',
      description: 'Este kit incluye: 1 Vela lisa Violeta, 1 frasco Amuleto, Guía de conexión paso a paso. Activa este kit cuando necesites perdonar, soltar el pasado o transformar el dolor en sabiduría. La luz de esta vela transmuta lo viejo en luminoso.',
      price: 5000,
      imageUrl: 'https://i.imgur.com/B87LxDn.jpeg'
    },
    {
      id: 'Escudo de Paz',
      name: 'Escudo de Paz',
      type: 'kit',
      description: 'Este kit incluye: 1 Vela lisa Azul, 1 frasco Amuleto, Guía de conexión paso a paso. Activa este kit cuando te sientas inseguro/a, con ansiedad o necesites protección. La luz de esta vela crea un círculo de Paz y verdad.',
      price: 5000,
      imageUrl: 'https://i.imgur.com/KaRsVYE.jpeg'
    },
    {
      id: 'Inciensos Palo Santo con Mirra',
      name: 'Inciensos Palo Santo con Mirra',
      type: 'producto',
      description: 'Caja 8 inciensos. El Palo Santo combinado con la Mirra atrae energías positivas armoniosas atrayendo el poder de renovación, calma y tranquilidad a todo aquel que se deleite con su fragancia.',
      price: 4300,
      imageUrl: 'https://i.imgur.com/2AqLPM6.jpeg'
    },
    {
      id: 'Inciensos Palo Santo con Ruda',
      name: 'Inciensos Palo Santo con Ruda',
      type: 'producto',
      description: 'Caja 8 inciensos. Esta mezcla nos ayuda a purificar los espacios, nos brinda protección y llena de Amor y luz nuestros espacios, además de limpiar las energías densas.',
      price: 4300,
      imageUrl: 'https://i.imgur.com/K0VvwGx.jpeg'
    },
    {
      id: 'Flores De Bach',
      name: 'Flores de Bach',
      type: 'servicio',
      description: 'Es una terapia energética que utiliza esencias florales silvestres. Cada flor aporta su huella energética para ayudarnos en procesos emocionales. Su propósito es guiarnos y permitirnos ver la vida desde nuestro verdadero ser.',
      price: 19000,
      imageUrl: 'https://i.imgur.com/XneDcpr.jpeg'
    },
    {
      id: 'Inciensos Palo Santo con Canela',
      name: 'Inciensos Palo Santo con Canela',
      type: 'producto',
      description: 'Caja 8 inciensos. La canela con su aroma nos ayuda a relajar y mantener una paz mental que nos guía hacia la abundancia y prosperidad junto con el Palo Santo intensifica y abre nuestros caminos.',
      price: 4300,
      imageUrl: 'https://i.imgur.com/mlQb2GW.jpeg'
    },
    {
      id: 'Inciensos Palo Santo',
      name: 'Inciensos Palo Santo',
      type: 'producto',
      description: 'Caja 8 inciensos. Encender uno de estos inciensos es un acto sagrado y purificador, aumenta la sensación de calma y bienestar, atrayendo energías positivas armoniosas.',
      price: 4300,
      imageUrl: 'https://i.imgur.com/qKuuJFH.jpeg'
    },
    {
      id: 'Guia de los Elementos',
      name: 'Guía de los Elementos',
      type: 'servicio',
      description: '🌿✨ Lecturas con el Oráculo de la Bruja Verde ✨🌿 Lecturas orientativas que revelan mensajes de sanación, guía espiritual y conexión con los ciclos de la vida. Permite que la energía de la tierra te acompañe.',
      price: 10000,
      imageUrl: 'https://i.imgur.com/hpbi6mT.jpeg'
    },
    {
      id: 'Inciensos Palo Santo con Sandalo',
      name: 'Inciensos Palo Santo con Sándalo',
      type: 'producto',
      description: 'Caja 8 inciensos. Estas maderas sagradas brindan claridad mental, relajan de forma natural reduciendo el estrés y aportan armonía de amor propio o de pareja en el espacio.',
      price: 4300,
      imageUrl: 'https://i.imgur.com/mqSKjb6.jpeg'
    },
    {
      id: 'Inciensos Palo Santo con Copal',
      name: 'Inciensos Palo Santo con Copal',
      type: 'producto',
      description: 'Caja 8 inciensos. La unión de Palo Santo con el Copal forman un humo poderoso que ayuda con la purificación y sanación, volviéndonos un imán para las energías de abundancia tanto física como espiritual.',
      price: 4300,
      imageUrl: 'https://i.imgur.com/pPFGtHx.jpeg'
    },
    {
      id: 'Masaje de Reconexión y Armonía 40 min',
      name: 'Masaje de Reconexión y Armonía 40 min.',
      type: 'servicio',
      description: 'Ideal para liberar la carga en espalda, cuello, brazos y manos. Incluye: Masaje de relajación en tren superior + un cierre armonizador de 15 a 20 minutos de Sonoterapia con cuencos de cuarzo y bronce para alinear tu energía.',
      price: 28000,
      imageUrl: 'https://i.imgur.com/MfYvg7O.jpeg'
    },
    {
      id: 'Inciensos Palo Santo con Salvia',
      name: 'Inciensos Palo Santo con Salvia',
      type: 'producto',
      description: 'Caja 8 inciensos. Combinación poderosa que nos ayuda en la claridad mental y limpieza de espacios ya que la Salvia sube la frecuencia del espacio, protegiéndonos y abriendo caminos.',
      price: 4300,
      imageUrl: 'https://i.imgur.com/XVCHgXr.jpeg'
    },
    {
      id: 'Inciensos Palo Santo con Romero',
      name: 'Inciensos Palo Santo con Romero',
      type: 'producto',
      description: 'Caja 8 inciensos. El Palo Santo y el Romero juntos brindan purificación de espacios, atraen energías positivas uniendo las almas con Amor, lo que genera paz y armonía.',
      price: 4300,
      imageUrl: 'https://i.imgur.com/kL062nJ.jpeg'
    },
    {
      id: 'Lectura de Registros Akashicos',
      name: 'Lectura de Registros Akáshicos',
      type: 'servicio',
      description: 'Apertura del "libro" del alma para obtener el conocimiento necesario para la evolución espiritual. No es una terapia predictiva, es una sesión altamente sanadora guiada por tus Maestros y Guardianes.',
      price: 20000,
      imageUrl: 'https://i.imgur.com/TBiwupA.jpeg'
    },
    {
      id: 'Sahumo Mirra y Palo Santo',
      name: 'Sahumo de Mirra y Palo Santo',
      type: 'producto',
      description: 'Atado de hierbas y resinas. La Mirra purifica espacios creando vibraciones positivas de paz y tranquilidad, en combinación con el Palo Santo limpia el aura y sella todo con Amor y luz.',
      price: 3900,
      imageUrl: 'https://i.imgur.com/VwhdSZs.jpeg'
    },
    {
      id: 'Sahumo de Romero',
      name: 'Sahumo de Romero',
      type: 'producto',
      description: 'Atado de hierbas y resinas. Efectivo para limpiar nuestra vida y aura. Excelente para abrir caminos, nuestra mente y percepción a nuevas bendiciones y oportunidades.',
      price: 3900,
      imageUrl: 'https://i.imgur.com/rgEPSVV.jpeg'
    },
    {
      id: 'Sahumo de Sandalo',
      name: 'Sahumo de Sándalo',
      type: 'producto',
      description: 'Atado de hierbas y resinas. Purifica y calma la mente ayudándonos a reducir la tensión. Atrae energías positivas, apertura de caminos espirituales y fortalecimiento de la intuición.',
      price: 3900,
      imageUrl: 'https://i.imgur.com/8ryaAiu.jpeg'
    },
    {
      id: 'Sahumo de Salvia Blanca',
      name: 'Sahumo de Salvia Blanca',
      type: 'producto',
      description: 'Atado de hierbas y resinas. Alto poder esotérico y espiritual, ampliamente usada para atraer la sanación, protección espiritual, limpieza poderosa y elevación de la frecuencia del espacio.',
      price: 3900,
      imageUrl: 'https://i.imgur.com/IxOa3BP.jpeg'
    },
    {
      id: 'Sahumo de Copal',
      name: 'Sahumo de Copal',
      type: 'producto',
      description: 'Atado de hierbas y resinas. Conocida como la "resina de los dioses". Protege, purifica y limpia energéticamente nuestras vidas, uniendo la fuerza de la naturaleza con el cielo.',
      price: 3900,
      imageUrl: 'https://i.imgur.com/ek3qZJ6.jpeg'
    },
    {
      id: 'Ambienta tu Espacio',
      name: 'Ambienta tu Espacio',
      type: 'kit',
      description: '5 varillas de incienso a elección según stock disponible (sin repetir). Ideal para probar aromas y luego elegir con conocimiento y gusto tu favorito la próxima vez.',
      price: 2700,
      imageUrl: 'https://i.imgur.com/DQDZJtM.jpeg'
    },
    {
      id: 'Trozos de Palo Santo',
      name: 'Trozos de Palo Santo',
      type: 'producto',
      description: 'Bolsa con 4 Trozos. Esta madera sagrada nos ayuda a purificar espacios, armonizarlos alejando energías densas y pensamientos/emociones bajas.',
      price: 1500,
      imageUrl: 'https://i.imgur.com/drQiWTL.jpeg'
    },
    {
      id: 'Infusion Dharana',
      name: 'Infusión Dharana',
      type: 'producto',
      description: 'Pack 5 bolsitas. Té Negro Ceylán, Clavo de Olor, Canela y Cedrón. Activa nuestra energía, nos brinda calidez y calma, ayuda con la concentración y nos conecta con la tierra.',
      price: 2000,
      imageUrl: 'https://i.imgur.com/9VtD0i3.jpeg'
    },
    {
      id: 'Infusion de Tranquilidad',
      name: 'Infusión de Tranquilidad',
      type: 'producto',
      description: 'Pack 5 bolsitas. Manzanilla, Hierba Buena, Cedrón, Matico y Eucalipto. Relaja el sistema nervioso, abre el corazón para expulsar tensiones y propicia un descanso restaurador.',
      price: 2000,
      imageUrl: 'https://i.imgur.com/eLbunwP.jpeg'
    },
    {
      id: 'Velas Lisa Blanca',
      name: 'Vela Lisa Blanca',
      type: 'producto',
      description: '1 vela blanca 17cm. Transmite pureza y claridad. Enciéndela para atraer claridad y guía divina hacia tu vida, bajo la protección del Arcángel Gabriel.',
      price: 1000,
      imageUrl: 'https://i.imgur.com/j5PENBM.jpeg'
    },
    {
      id: 'Velas Lisa Morada',
      name: 'Vela Lisa Morada',
      type: 'producto',
      description: '1 vela morada 17cm. Transmite cambio y transmutación. Ideal para meditación, introspección y realizar con convicción las transformaciones necesarias junto al Arcángel Zadquiel.',
      price: 1000,
      imageUrl: 'https://i.imgur.com/Q2JmpH8.jpeg'
    },
    {
      id: 'Velas Lisa Naranja',
      name: 'Vela Lisa Naranja',
      type: 'producto',
      description: '1 vela naranja 17cm. Transmite alegría y energía. Enciéndela ante pesadez o falta de motivación para despertar el equilibrio para actuar, invocando al Arcángel Uriel.',
      price: 1000,
      imageUrl: 'https://i.imgur.com/XviCDDV.jpeg'
    },
    {
      id: 'Velas Lisa Amarilla',
      name: 'Vela Lisa Amarilla',
      type: 'producto',
      description: '1 vela amarilla 17cm. Transmite sabiduría y abundancia. Úsala para actuar desde el corazón, asimilar lecciones de vida y agradecer la prosperidad junto al Arcángel Jofhiel.',
      price: 1000,
      imageUrl: 'https://i.imgur.com/TvngNr4.jpeg'
    },
    {
      id: 'Velas Lisa Azul',
      name: 'Vela Lisa Azul',
      type: 'producto',
      description: '1 vela Azul 17cm. Transmite Seguridad y Fuerza. Enciéndela cuando te sientas inseguro y requieras fuerza ante adversidades. Invoca la protección del Arcángel Miguel.',
      price: 1000,
      imageUrl: 'https://i.imgur.com/sxdrXXr.jpeg'
    },
    {
      id: 'Velas Lisa Rosada',
      name: 'Vela Lisa Rosada',
      type: 'producto',
      description: '1 vela Rosada 17cm. Transmite Amor y Compasión. Enciéndela para atraer amor divino y sanar con ternura y aceptación los conflictos emocionales junto al Arcángel Chamuel.',
      price: 1000,
      imageUrl: 'https://i.imgur.com/cIzPLsr.jpeg'
    },
    {
      id: 'Aros de Minerales o Piedras Semipreciosas',
      name: 'Aros de Minerales o Piedras Semipreciosas',
      type: 'producto',
      description: '1 par de pendientes artesanales. Consulta stock disponible o diseña el tuyo eligiendo el mineral. Bisutería artesanal con sentido y propiedades energéticas únicas.',
      price: 3500,
      imageUrl: 'https://i.imgur.com/kzjBMt3.jpeg'
    },
    {
      id: 'Collares de Minerales o Piedras Semipreciosas',
      name: 'Collares de Minerales o Piedras Semipreciosas',
      type: 'producto',
      description: '1 Collar artesanal. Consulta stock disponible o diseña el tuyo eligiendo el mineral. Bisutería artesanal con sentido y propiedades energéticas únicas.',
      price: 5000,
      imageUrl: 'https://i.imgur.com/KGYOS6S.jpeg'
    },
    {
      id: 'Colgantes Armonizadores de Minerales o Piedras Semipreciosas',
      name: 'Colgantes Armonizadores de Minerales o Piedras Semipreciosas',
      type: 'producto',
      description: '1 Colgante artesanal. Consulta stock disponible o diseña el tuyo eligiendo el mineral. Bisutería artesanal con sentido y propiedades energéticas únicas.',
      price: 6000,
      imageUrl: 'https://i.imgur.com/JgpEZnB.jpeg'
    },
    {
      id: 'Masaje de Relajación Profunda de Cuerpo Completo.',
      name: 'Masaje de Relajación Profunda de Cuerpo Completo.',
      type: 'servicio',
      description: 'Renovación total en espalda, cuello, brazos, manos y piernas. Elimina el cansancio físico y mental. Incluye: Masaje integral + relajación profunda con cierre de sonoterapia con cuencos de cuarzo y bronce. Duración: 1h 15min aprox.',
      price: 35000,
      imageUrl: 'https://i.imgur.com/rFONerd.jpeg'
    },
    {
      id: 'Masaje Holístico Transmutador.',
      name: 'Masaje Holístico Transmutador.',
      type: 'servicio',
      description: 'Sanación profunda para cuerpo y alma. Incluye: Lectura de Flores de Bach para identificar emociones, infusión herbal, masaje de cuerpo completo para liberar estrés físico y cierre vibracional con cuencos. Duración: 2 horas.',
      price: 45000,
      imageUrl: 'https://i.imgur.com/rQJAMND.jpeg'
    },
    {
      id: 'GIFTCARD Masaje Holistico',
      name: 'GIFTCARD Masaje Holístico',
      type: 'servicio',
      description: 'El regalo perfecto de bienestar y sanación. Incluye: Lectura emocional de Flores de Bach, infusión herbal aromática, masaje profundo de cuerpo completo y cierre vibracional con cuencos de cuarzo. Duración: 2 horas.',
      price: 39000,
      imageUrl: 'https://i.imgur.com/2w7Fuzz.jpeg'
    },
    {
      id: 'Sesiones de Reiki Usui',
      name: 'Sesiones de Reiki Usui',
      type: 'servicio',
      description: 'Sanación y equilibrio energético. Limpia, purifica y alinea los siete chakras principales para liberar emociones negativas y bloqueos. Disponible también modalidad a distancia para personas, mascotas y plantas.',
      price: 8000,
      imageUrl: 'https://i.imgur.com/EhZ9fOg.jpeg'
    },
    {
      id: 'Sesion de Terapia de codificación Solar',
      name: 'Sesión de Terapia de Codificación Solar',
      type: 'servicio',
      description: 'Usa la energía solar de 5ta Dimensión (Crística). Limpia y purifica el torrente sanguíneo, el agua del cuerpo y hemisferios cerebrales de toxinas emocionales del pasado y presente para anclar la alta vibración.',
      price: 8000,
      imageUrl: 'https://i.imgur.com/OIpd2rc.png'
    },
    {
      id: 'Sesion de Péndulo',
      name: 'Sesión de Péndulo',
      type: 'servicio',
      description: 'Lecturas con Péndulo de 30 minutos aprox. mediante plantillas para responder las dudas de tu corazón, liberar bloqueos, equilibrar tu campo vibratorio y encontrar una guía intuitiva clara.',
      price: 10000,
      imageUrl: 'https://i.imgur.com/7onlA3S.jpeg'
    },
    {
      id: 'Guia de los Angeles',
      name: 'Guía de los Ángeles',
      type: 'servicio',
      description: 'Guía consciente, orientación y consejo amoroso por medio de una Lectura de cartas de Ángeles. Podrás realizar tus preguntas y recibir los mensajes que el plano sutil tiene para ti.',
      price: 8000,
      imageUrl: 'https://i.imgur.com/vCNFpdC.jpeg'
    }
  ];

  // Estructura interna simplificada para el carrito de compras
  const products = {};
  productsData.forEach(p => {
    products[p.id] = { name: p.name, price: p.price };
  });

  const cart = {};

  function inicializarTienda() {
    const grid = document.getElementById('product-grid');
    const cartPanel = document.getElementById('cart-panel');
    const cartOverlay = document.getElementById('cart-overlay');
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    const cartItems = document.getElementById('cart-items');
    const emptyCart = document.getElementById('empty-cart');
    const whatsappBtn = document.getElementById('whatsapp-order');
    const toast = document.getElementById('toast');

    // Forzar cerrado al arrancar
    if (cartPanel) cartPanel.classList.remove('open');
    if (cartOverlay) cartOverlay.classList.remove('open');

    function money(value) {
      return '$' + value.toLocaleString('es-CL');
    }

    function renderIcons() {
      try {
        if (typeof lucide !== 'undefined' && lucide.createIcons) {
          lucide.createIcons();
        }
      } catch (e) {}
    }

    // 2. FUNCIÓN SENSACIONAL: Renderizar e insertar los productos reales con su texto explicativo
    function renderTienda() {
      if (!grid) return;
      grid.innerHTML = ""; // Vaciar cargando

      productsData.forEach(p => {
        const card = document.createElement('div');
        // Estilos visuales consistentes con Tailwind
        card.className = "product-card bg-[#fbf8f2] border border-[#e5dccf] rounded-2xl overflow-hidden shadow-sm flex flex-col transition duration-300 hover:shadow-md";
        card.setAttribute('data-category', p.type);
        card.setAttribute('data-product-id', p.id);

        card.innerHTML = `
          <div class="relative pt-[100%] overflow-hidden bg-[#eee6db]">
            <img src="${p.imageUrl}" alt="${p.name}" class="absolute inset-0 w-full h-full object-cover transition duration-500 hover:scale-105" loading="lazy">
            <span class="absolute top-3 left-3 bg-[#e0d5c1] text-[#4d594a] text-[9px] uppercase tracking-wider px-2.5 py-1 rounded-full font-medium">${p.type}</span>
          </div>
          <div class="p-5 flex-1 flex flex-col justify-between">
            <div>
              <h3 class="serif text-[20px] leading-tight text-[#2a3328] mb-1">${p.name}</h3>
              <p class="text-[#5c6659] text-[13px] leading-relaxed mb-4 line-clamp-4 hover:line-clamp-none transition-all duration-300 cursor-pointer" title="Haz clic para expandir texto">
                ${p.description}
              </p>
            </div>
            <div>
              <div class="flex items-baseline justify-between mb-3">
                <span class="text-[11px] uppercase tracking-wider text-[#7a8a73]">Precio</span>
                <span class="serif text-[22px] font-medium text-[#344031]">${money(p.price)}</span>
              </div>
              <button class="add-to-cart w-full py-3 bg-[#5f735b] text-white text-[11px] uppercase tracking-widest rounded-xl hover:bg-[#4d604b] transition font-medium focus:outline-none focus:ring-2 focus:ring-[#5f735b]/40">
                Agregar Al Carrito
              </button>
            </div>
          </div>
        `;
        grid.appendChild(card);
      });

      // Reconectar los eventos de clic a los botones nuevos creados
      asignarEventosBotones();
    }

    function openCart() {
      if (cartPanel) cartPanel.classList.add('open');
      if (cartOverlay) cartOverlay.classList.add('open');
    }

    function closeCart() {
      if (cartPanel) cartPanel.classList.remove('open');
      if (cartOverlay) cartOverlay.classList.remove('open');
    }

    function updateCart() {
      try {
        const keys = Object.keys(cart);
        let totalQty = 0;
        let total = 0;

        keys.forEach(id => {
          if (products[id]) {
            totalQty += cart[id].qty;
            total += cart[id].qty * products[id].price;
          }
        });

        if (cartCount) cartCount.textContent = totalQty;
        if (cartTotal) cartTotal.textContent = money(total);
        if (whatsappBtn) whatsappBtn.disabled = keys.length === 0;

        if (cartItems) {
          cartItems.innerHTML = "";
          keys.forEach(id => {
            const templateEl = document.getElementById('cart-item-template');
            if (!templateEl) return;

            const clone = templateEl.content.cloneNode(true);
            const row = clone.querySelector('.cart-item');
            if (!row) return;

            row.querySelector('.cart-item-name').textContent = products[id].name;
            row.querySelector('.cart-item-price').textContent = money(products[id].price);
            row.querySelector('.qty-value').textContent = cart[id].qty;

            row.querySelector('.qty-plus').addEventListener('click', () => {
              cart[id].qty += 1;
              updateCart();
            });

            row.querySelector('.qty-minus').addEventListener('click', () => {
              if (cart[id].qty > 1) {
                cart[id].qty -= 1;
              } else {
                delete cart[id];
              }
              updateCart();
            });

            row.querySelector('.remove-item').addEventListener('click', () => {
              delete cart[id];
              updateCart();
            });

            cartItems.appendChild(row);
          });
        }

        if (emptyCart && cartItems) {
          if (keys.length > 0) {
            emptyCart.classList.add('hidden');
            cartItems.classList.remove('hidden');
          } else {
            emptyCart.classList.remove('hidden');
            cartItems.classList.add('hidden');
          }
        }
        renderIcons();
      } catch (err) {
        console.error("Error en updateCart:", err);
      }
    }

    function asignarEventosBotones() {
      document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', () => {
          try {
            const card = btn.closest('[data-product-id]');
            if (!card) return;
            const id = card.dataset.productId;
            
            if (!cart[id]) cart[id] = { qty: 0 };
            cart[id].qty += 1;
            
            updateCart();
            
            if (toast) {
              toast.classList.add('show');
              setTimeout(() => toast.classList.remove('show'), 1500);
            }
          } catch (e) {
            console.error("Error al añadir producto:", e);
          }
        });
      });
    }

    // Configuración de clics básicos de control
    const openBtn = document.getElementById('open-cart');
    const closeBtn = document.getElementById('close-cart');
    const continueBtn = document.getElementById('continue-shopping');
    const heroCtaBtn = document.getElementById('hero-cta');

    if (openBtn) openBtn.addEventListener('click', openCart);
    if (closeBtn) closeBtn.addEventListener('click', closeCart);
    if (continueBtn) continueBtn.addEventListener('click', closeCart);
    if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

    if (heroCtaBtn) {
      heroCtaBtn.addEventListener('click', () => {
        const tiendaSection = document.getElementById('tienda');
        if (tiendaSection) tiendaSection.scrollIntoView({ behavior: 'smooth' });
      });
    }

    // Configuración del filtrado interactivo de categorías
    document.querySelectorAll('.filter-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const filter = btn.dataset.filter;
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        document.querySelectorAll('.product-card').forEach(card => {
          const cat = card.dataset.category;
          card.style.display = (filter === 'all' || cat === filter) ? '' : 'none';
        });
      });
    });

    // Enlace dinámico con WhatsApp Business
    if (whatsappBtn) {
      whatsappBtn.addEventListener('click', () => {
        const keys = Object.keys(cart);
        if (!keys.length) return;
        let lines = ['Hola, quiero hacer este pedido en Somos Luz:', ''];
        let total = 0;
        keys.forEach(id => {
          const subtotal = cart[id].qty * products[id].price;
          total += subtotal;
          lines.push(`• ${products[id].name} x${cart[id].qty} - ${money(subtotal)}`);
        });
        lines.push('', `Total: ${money(total)}`);
        const url = 'https://wa.me/56900000000?text=' + encodeURIComponent(lines.join('\n'));
        window.open(url, '_blank', 'noopener,noreferrer');
      });
    }

    // Dibujar los productos en la interfaz al iniciar
    renderTienda();
    updateCart();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", inicializarTienda);
  } else {
    inicializarTienda();
  }
})();
