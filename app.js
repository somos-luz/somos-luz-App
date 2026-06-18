 <script src="/_sdk/editing_sdk.js"></script>
  <script>
    const products = {
       {
        id: 'Conecta con tu Poder Creador',
        name: 'Conecta con tu Poder Creador',
        type: 'kit',
        description: 'Intención Activar la energía vital, fortalecer la confianza personal y acompañar procesos de inicio, motivación y acción consciente, Este ritual invita a que tus intenciones vayan más allá de los deseos banales y superficiales, conectándote con tu poder creador, tu luz interior y permitiendo que esta crezca y se expanda desde el amor y la conciencia, Materiales incluidos • 🕯️ Vela amarilla y naranja (energía, creatividad y acción consciente) • 🌿 Sahúmo limpiador (copal o salvia) • 🪵 Palo santo • Ritual paso a paso.',
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
        description: 'Caja 9 inciensos. Ideal para limpiezas energéticas, meditaciones y crear un clima de bienestar, util para cerrar o dar inicios dando una sensacion de orden y limpieza.',
        price: 4800,
        imageUrl: 'https://i.imgur.com/DYCPYuM.jpeg'
    },
    {
        id: 'Incienso de Salvia Blanca',
        name: 'Incienso de Salvia Blanca',
        type: 'producto',
        description: 'Caja 9 inciensos. Ideal para limpiezas energéticas profundas del hogar y el aura nos ayuda en la claridad mental y limpieza de espacios ya que la Salvia sube la frecuencia del espacio, protegiendonos y abriendo nuestro camino para conectar con nuestra luz y sabiduria interior.',
        price: 4800,
        imageUrl: 'https://i.imgur.com/T0TD8EI.jpeg'
    },
     {
        id: 'Amor Propio y Conexion Espiritual',
        name: 'Amor Propio y Conexion Espiritual',
        type: 'kit',
        description: 'Este kit incluye; 1 Vela lisa Rosada, 1 sahumo de Copal, 1 Collar de Cuarzo Rosa, Ritual paso a paso, Este kit está diseñado para quienes necesitan conectarse con su corazón, sanar sus emociones y cultivar el amor por sí mismos.',
        price: 8888,
        imageUrl: 'https://i.imgur.com/2AGTgBd.jpeg'
    },
    {
        id: 'Inciensos Anis, Canela & Olibano',
        name: 'Inciensos Anis, Canela & Olibano',
        type: 'producto',
        description: 'Caja 9 Inciensos. La combinacion de estas hierbas y maderas crea una mezcla poderosa que limpia energías densas, protege el aura y atrae prosperidad. Ideal para rituales de apertura, cambios, manifestación consciente y proteccion energetica',
        price: 4800,
        imageUrl: 'https://i.imgur.com/6haCS0h.jpeg'
    },
     {
        id: 'Proteccion y Manifestacion',
        name: 'Proteccion y Manifestacion',
        type: 'kit',
        description: 'Este kit incluye; 1 Vela lisa Violeta, 1 sahumo de Romero, 1 Collar de Pirita o 1 producto de Obsidiana, Ritual paso a paso, Este kit es para quienes buscan protegerse de energías densas del exterior e interior y enfocarse en manifestar sus deseos y metas.',
        price: 8888,
        imageUrl: 'https://i.imgur.com/5vXxZR9.jpeg'
    },
    {
        id: 'Inciensos de Lavanda & Olibano',
        name: 'Inciensos de Lavanda & Olibano',
        type: 'producto',
        description: 'Caja 9 Inciensos. La lavanda aporta equilibrio y armonia que junto con el Oibano que atrae energías positivas, sutiles y purifica el espacio, son un protector poderoso del hogar y neutralidad de energias densas',
        price: 4800,
        imageUrl: 'https://i.imgur.com/IxAqUo1.jpeg'
    },
    {
        id: 'Inciensos Palo Santo con Lavanda',
        name: 'Inciensos Palo Santo con Lavanda',
        type: 'producto',
        description: 'Caja 8 inciensos. La sagrada madera de Palo Santo combinada con la frescura de la lavanda purifican el campo energetico y relajan nuestra mente, nos da equilibrio y armonia en el espacio.',
        price: 4300,
        imageUrl: 'https://i.imgur.com/9yxQcsQ.jpeg'
    },
     {
        id: 'Limpieza Energetica y Paz Interior',
        name: 'Limpieza Energetica y Paz Interior',
        type: 'kit',
        description: 'Este kit incluye; 1 Vela lisa blanca, 1 sahumo de Salvia Blanca, 3 Varillas de incienso de Palo santo Lavanda, 1 producto de Cuarzo blanco (aros, colgantes, pulseras, collar), Ritual paso a paso, este Kit es perfecto para quienes buscan purificar su espacio de energías estancadas y crear un ambiente de calma. Es el regalo ideal para un nuevo hogar o para un nuevo comienzo.',
        price: 8888,
        imageUrl: 'https://i.imgur.com/Ql99G1W.jpeg'
    },
     {
        id: 'Energía Vital',
        name: 'Energía Vital',
        type: 'kit',
        description: 'Este kit incluye; 1 Vela lisa Naranja, 1 frasco Amuleto, Guía de conexión paso a paso. Activa este kit cuando te sientas estancada/o sin energía o desmotivada/o. la luz de esta vela activa tu alegría, tu creatividad y las ganas de disfrutar la vida, junto al amuleto que podrás llevar contigo, recargado e intencionado con la vibración de la vela.',
        price: 5000,
        imageUrl: 'https://i.imgur.com/2hLCMC3.jpeg'
    },
    {
        id: 'Balsamo al Corazón',
        name: 'Balsamo al Corazón',
        type: 'kit',
        description: 'Este kit incluye; 1 Vela lisa Rosada, 1 frasco Amuleto, Guía de conexión paso a paso. Activa este kit cuando necesites Amor propio o sanar una herida emocional. la vibracion y energía de esta vela envolvera tu corazón en ternura y aceptación, junto al amuleto que podrás llevar contigo, recargado e intencionado con la vibración de la vela.',
        price: 5000,
        imageUrl: 'https://i.imgur.com/AD7YvVD.jpeg'
    },
    {
        id: 'Sol de Abundancia y Sabiduría',
        name: 'Sol de Abundancia y Sabiduría',
        type: 'kit',
        description: 'Este kit incluye; 1 Vela lisa Amarilla, 1 frasco Amuleto, Guía de conexión paso a paso. Activa este kit cuando necesites enfoque, fuerza de voluntad, éxito en tus proyectos o recordar que la abundancia y la sabiduría del Universo son parte de ti, junto al amuleto que podrás llevar contigo, recargado e intencionado con la vibración de la vela.',
        price: 5000,
        imageUrl: 'https://i.imgur.com/ZChLehW.jpeg'
    },
    {
        id: 'Claridad y Luz Eterna',
        name: 'Claridad y Luz Eterna',
        type: 'kit',
        description: 'Este kit incluye; 1 Vela lisa Blanca, 1 frasco Amuleto, Guía de conexión paso a paso. Activa este kit cuando necesites iluminar tu Ser, purificar tu hogar o empezar un nuevo camino con la mente y las emociones claras y puras, junto al amuleto que podrás llevar contigo, recargado e intencionado con la vibración de la vela.',
        price: 5000,
        imageUrl: 'https://i.imgur.com/Tl1JTe0.jpeg'
    },
    {
        id: 'Alquimia del Alma',
        name: 'Alquimia del Alma',
        type: 'kit',
        description: 'Este kit incluye; 1 Vela lisa Violeta, 1 frasco Amuleto, Guía de conexión paso a paso. Activa este kit cuando necesites perdonar, soltar el pasado o transformar el dolor en sabiduría, la luz de esta vela transmuta lo viejo y denso en algo nuevo y luminoso, junto al amuleto que podrás llevar contigo, recargado e intencionado con la vibración de la vela.',
        imageUrl: 'https://i.imgur.com/B87LxDn.jpeg'
    },
    {
        id: 'Escudo de Paz',
        name: 'Escudo de Paz',
        type: 'kit',
        description: 'Este kit incluye; 1 Vela lisa Azul, 1 frasco Amuleto, Guía de conexión paso a paso. Activa este kit cuando te sientas insegura/o, con ansiedad o necesites protección. la luz de esta vela crea un circulo de Paz y verdad a tu alredor, junto al amuleto que podrás llevar contigo, recargado e intencionado con la vibración de la vela.',
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
        description: 'Caja 8 inciensos. Esta mezcla nos ayuda a purificar los espacios, nos brinda proteccion y llena de Amor y luz nuestros espacios, ademas de limpiar las energías densas nos protege.',
        price: 4300,
        imageUrl: 'https://i.imgur.com/K0VvwGx.jpeg'
    },
     {
        id: 'Flores De Bach',
        name: 'Flores de Bach',
        type: 'servicio',
        description: 'Es una terapia energética que utiliza esencias florales silvestres. Cada flor aporta su huella energética para ayudarnos en procesos emocionales, Su propósito es guiarnos y permitirnos ver la vida desde nuestro verdadero ser.',
        price: 19000,
        imageUrl: 'https://i.imgur.com/XneDcpr.jpeg'
    },
    {
        id: 'Inciensos Palo Santo con Canela',
        name: 'Inciensos Palo Santo con Canela',
        type: 'producto',
        description: 'Caja 8 inciensos. La canela con su aroma nos ayuda a relajar y ,amtemer una paz mental que nos guía hacia la abundancia y prosperidad junto con el Palos Santo intensifica y abre nuestros caminos.',
        price: 4300,
        imageUrl: 'https://i.imgur.com/mlQb2GW.jpeg'
    },
    {
        id: 'Inciensos Palo Santo',
        name: 'Inciensos Palo Santo',
        type: 'producto',
        description: 'Caja 8 inciensos. Encender uno de estos inciensos es un acto sagrado y purificador, aumenta la sensacion de calma y bienestar, atrayendo energías positivas armoniosas a todos los que esten en contacto con este humo sagrado.',
        price: 4300,
        imageUrl: 'https://i.imgur.com/qKuuJFH.jpeg'
    },
    {
        id: 'Guia de los Elementos',
        name: 'Guia de los Elementos',
        type: 'servicio',
        description: '🌿✨ Lecturas con el Oráculo de la Bruja Verde ✨🌿, Este oráculo es un portal a la sabiduría ancestral de la naturaleza, donde cada carta revela mensajes de sanación, guía espiritual y conexión con los ciclos de la vida. A través de sus símbolos mágicos recibirás ORIENTACIÓN para comprender tu presente, tomar decisiones conscientes y abrirte a nuevas posibilidades. 🍃🔮Permite que la energía de la tierra y la magia de lo verde te acompañen en tu camino.',
        price: 10000,
        imageUrl: 'https://i.imgur.com/hpbi6mT.jpeg'
    },
    {
        id: 'Inciensos Palo Santo con Sandalo',
        name: 'Inciensos Palo Santo con Sandalo',
        type: 'producto',
        description: 'Caja 8 inciensos. Estas dos maderas sagradas nos brinda claridad mental, es un relajante natural, ayudandonos con la memoria, su aroma afrodisiaco natural reduce nuestro estres y nos aporta amor propio o de pareja en el espacio.',
        price: 4300,
        imageUrl: 'https://i.imgur.com/mqSKjb6.jpeg'
    },
    {
        id: 'Inciensos Palo Santo con Copal',
        name: 'Inciensos Palo Santo con Copal',
        type: 'producto',
        description: 'Caja 8 inciensos. La union de Palo Santo con el Copal forman un humo poderoso y sagrado que nos ayuda con la purificación y sanación, nos vuelve un iman para las energias de abundancia y sanación tanto fisica como espiritual por su gran conexion con lo divino y sagrado.',
        price: 4300,
        imageUrl: 'https://i.imgur.com/pPFGtHx.jpeg'
    },
    {
        id: 'Masaje de Reconexión y Armonía 40 min',
        name: 'Masaje de Reconexión y Armonía 40 min.',
        type: 'servicio',
        description: 'Ideal para un respiro profundo en medio de la rutina. Este masaje se enfoca en liberar la carga de las zonas donde más acumulamos tensión: espalda, cuello, brazos y manos. Es perfecto si buscas alivio rápido y efectivo. ​¿Qué incluye? Masaje de relajación en tren superior + un cierre armonizador de 15 a 20 minutos de Sonoterapia con cuencos de cuarzo y bronce para alinear tu energía.',
        price: 28000,
        imageUrl: 'https://i.imgur.com/MfYvg7O.jpeg'
    },
    {
        id: 'Inciensos Palo Santo con Salvia',
        name: 'Inciensos Palo Santo con Salvia',
        type: 'producto',
        description: 'Caja 8 inciensos. Combinacion poderosa que nos ayuda en la claridad mental y limpieza de espacios ya que la Salvia sube la frecuencia del espacio, protegiendonos y abriendo nuestro camino para conectar con nuestra luz.',
        price: 4300,
        imageUrl: 'https://i.imgur.com/XVCHgXr.jpeg'
    },
    {
        id: 'Inciensos Palo Santo con Romero',
        name: 'Inciensos Palo Santo con Romero',
        type: 'producto',
        description: 'Caja 8 inciensos. El Palo Santo y el Romero juntos nos brindan purificacion y sanación de espacios, atrae energías positivas uniendo las almas con Amor, lo que genera paz y armonia en el hogar o trabajo.',
        price: 4300,
        imageUrl: 'https://i.imgur.com/kL062nJ.jpeg'
    },
    {
        id: 'Lectura de Registros Akashicos',
        name: 'Lectura de Registros Akashicos',
        type: 'servicio',
        description: 'La Lectura de Registros Akáshicos es la apertura del "libro" del alma. Es un campo energético y la memoria universal de la existencia, que contiene todas las experiencias de un ser desde su origen. Esta información, custodiada por Maestros y Guardianes, es accesible para obtener el conocimiento necesario para la evolución espiritual. no es predictiva, es altamente sanadora.',
        price: 20000,
        imageUrl: 'https://i.imgur.com/TBiwupA.jpeg'
    },
    {
        id: 'Sahumo Mirra y Palo Santo',
        name: 'Sahumo de Mirra y Palo Santo',
        type: 'producto',
        description: 'Atado de hierbas y resinas. La Mirra es una ofrenda sagrada, purifica espacios creando vibraciones positivas proporcionando paz y tranquilidad, en combinacion con el Palo Santo limpia el aura y sella todo con Amor y luz.',
        price: 3900,
        imageUrl: 'https://i.imgur.com/VwhdSZs.jpeg'
    },
    {
        id: 'Sahumo de Romero',
        name: 'Sahumo de Romero',
        type: 'producto',
        description: 'Atado de hierbas y resinas. Efectivo para limpiar nuestra vida y aura, por sus poderes esotéricos es excelente para abrir caminos, nuestra mente y percepcion a nuevas bendiciones y oportunidades.',
        price: 3900,
        imageUrl: 'https://i.imgur.com/rgEPSVV.jpeg'
    },
    {
        id: 'Sahumo de Sandalo',
        name: 'Sahumo de Sandalo',
        type: 'producto',
        description: 'Atado de hierbas y resinas. Purifica y calma la mente ayudandonos a reducir la tension y el estres. Sus propiedades esotéricas relacionadas con la atraccion de energias positivas, apertura de caminos espirituales y fortalecimiento de la intuicion, ademas nos ayuda a la union de almas con Amor y deseo.',
        price: 3900,
        imageUrl: 'https://i.imgur.com/8ryaAiu.jpeg'
    },
    {
        id: 'Sahumo de Salvia Blanca',
        name: 'Sahumo de Salvia Blanca',
        type: 'producto',
        description: 'Atado de hierbas y resinas. Tiene un alto poder esotérico y espiritual, ampliamente usada para atraer la sanación, proteccion espiritual, limpieza poderosa y elevacion frecuencia de los espacios ayudandonos a conectar con nuestra luz y sabiduria interior.',
        price: 3900,
        imageUrl: 'https://i.imgur.com/IxOa3BP.jpeg'
    },
    {
        id: 'Sahumo de Copal',
        name: 'Sahumo de Copal',
        type: 'producto',
        description: 'Atado de hierbas y resinas. Conocida como la "resina de los dioses" o "elixir de la tierra", su poder ancestral, nos sigue acompañando protegiendo, purificando y limpiando energeticamente nuestras vidas, uniendo la fuerza y poder de la naturaleza y el poder y fuerza del cielo.',
        price: 3900,
        imageUrl: 'https://i.imgur.com/ek3qZJ6.jpeg'
    },
    {
        id: 'Ambienta tu Espacio',
        name: 'Ambienta tu Espacio',
        type: 'kit',
        description: '5 varillas de incienso. A eleccion podras elegir del stock disponible 5 varilla de incienso (sin repetir), ideal para probar aromas y luego elegir con conocimiento y gusto la proxima vez.',
        price: 2700,
        imageUrl: 'https://i.imgur.com/DQDZJtM.jpeg'
    },
    {
        id: 'Trozos de Palo Santo',
        name: 'Trozos de Palo Santo',
        type: 'producto',
        description: 'Bolsa con 4 Trozos. Esta madera sagrada nos ayuda a purificar espacios, armonizarlos alejando energías densas y que nos estacan en pensamiento y emociones bajas y densas.',
        price: 1500,
        imageUrl: 'https://i.imgur.com/drQiWTL.jpeg'
    },
      {
        id: 'Infusion Dharana',
        name: 'Infusion Dharana',
        type: 'producto',
        description: 'Pack 5 bolsitas de infusion herbal. Mezcla de hierbas y especias. Te Negro Ceylan, Clavo de Olor, Canela, Cedron, las cuales tienen propiedades tanto fisicas como energeticas, activa nuestra energia, nos da calidez y calma, a la vez nos ayuda con la concentracion y nos conecta con la tierra.',
        price: 2000,
        imageUrl: 'https://i.imgur.com/9VtD0i3.jpeg'
    },
    {
        id: 'Infusion de Tranquilidad',
        name: 'Infusion de Tranquilidad',
        type: 'producto',
        description: 'Pack 5 bolsitas de infusion herbal. Mezcla de hierbas medicinales, Manzanilla, Hierba Buena, Cedrón, Matico, Eucalipto. Nos ayuda a relajar el sistema nervioso, abre nuestro corazon para expulsar tensiones emocionales y mentales para un descanso restaurador.',
        price: 2000,
        imageUrl: 'https://i.imgur.com/eLbunwP.jpeg'
    },
    {
        id: 'Velas Lisa Blanca',
        name: 'Vela Lisa Blanca',
        type: 'producto',
        description: '1 vela blanca 17cm. El color Blanco nos transmite pureza y claridad, es un color neutral podemos encender una vela con la fiel intencion y certeza de atraer claridad y guia divina, para encender la luz y a traerla hacia tu vida, puedes invocar al Arcangel Gabriel el custodio de la luz y la claridad del Creador.',
        price: 1000,
        imageUrl: 'https://i.imgur.com/j5PENBM.jpeg'
    },
    {
        id: 'Velas Lisa Morada',
        name: 'Vela Lisa Morada',
        type: 'producto',
        description: '1 vela morada 17cm. El color Morado nos transmite cambio y transmutacion, al endenderla nos pre dispone a la meditacion e introspeccion y realizar desde allí con intencion y conviccion los cambios y transformaciones que necesitamos en nuestra vida, puedes invocar al Arcangel Zadquiel el custodio de la energia de transformacion y cambio del Creador.',
        price: 1000,
        imageUrl: 'https://i.imgur.com/Q2JmpH8.jpeg'
    },
     {
        id: 'Velas Lisa Naranja',
        name: 'Vela Lisa Naranja',
        type: 'producto',
        description: '1 vela naranja 17cm. El color Naranjo nos transmite alegria y energia, enciendela cuando estes falto de estas cualidades, con pesades y sin muchas ganas, intencionala con conviccion de despertar la energia y alegria que necesitas para actuar con equilibrio y armonia, puedes invocar al Arcangel Uriel el custodio de la alegria y las ganas o la energía del Creador.',
        price: 1000,
        imageUrl: 'https://i.imgur.com/XviCDDV.jpeg'
    },
    {
        id: 'Velas Lisa Amarilla',
        name: 'Vela Lisa Amarilla',
        type: 'producto',
        description: '1 vela amarilla 17cm. El color Amarillo nos transmite sabiduria y abundancia, enciendela cuando necesites sabiduria para actuar desde el corazon y para adquirir el aprendizaje de las lecciones que nos presenta la vida, agredeciendo la abundancia y la prosperidad, puedes invocar al Arcangel Jofhiel el custodio de la sabiduria y abundancia del Creador.',
        price: 1000,
        imageUrl: 'https://i.imgur.com/TvngNr4.jpeg'
    },
    {
        id: 'Velas Lisa Azul',
        name: 'Vela Lisa Azul',
        type: 'producto',
        description: '1 vela Azul 17cm. El color Azul nos transmite Seguridad y Fuerza, enciendela cuando te sientas inseguro y necesites fuerza para afrontar las adversidades y enseñanzas de la vida intencionala con fuerza y poder de conviccion que la luz azul te esta protegiendo y envolviendo a ti y todo tu alrededor, puedes invocar al Arcangel Miguel el custodio de la proteccion y fuerza del Creador.',
        price: 1000,
        imageUrl: 'https://i.imgur.com/sxdrXXr.jpeg'
    },
    {
        id: 'Velas Lisa Rosada',
        name: 'Vela Lisa Rosada',
        type: 'producto',
        description: '1 vela Rosada 17cm. El color Rosado nos transmite Amor y Compasión, enciendela cuando quieras atraer el Amor divino y la compasión a tu vida, intencionala con la conviccion que todo tu ser esta siendo envuelto en luz rosada y que todo se puede solucionar con el Amor, puedes invocar al Arcangel Shamuel el custodio del Amor y la Compasion del Creador.',
        price: 1000,
        imageUrl: 'https://i.imgur.com/cIzPLsr.jpeg'
    },
    {
        id: 'Aros de Minerales o Piedras Semipreciosas',
        name: 'Aros de Minerales o Piedras Semipreciosas',
        type: 'producto',
        description: '1 par de pendientes artesanales. Consulta por el stock disponible o diseña el tuyo propio eligiendo el mineral tu mismo, linea unica de bisuteria artesanal con sentido y propiedades energeticas unicas.',
        price: 3500,
        imageUrl: 'https://i.imgur.com/kzjBMt3.jpeg'
    },
    {
        id: 'Collares de Minerales o Piedras Semipreciosas',
        name: 'Collares de Minerales o Piedras Semipreciosas',
        type: 'producto',
        description: '1 Collar artesanal. Consulta por el stock disponible o diseña el tuyo propio eligiendo el mineral tu mismo, linea unica de bisuteria artesanal con sentido y propiedades energeticas unicas.',
        price: 5000,
        imageUrl: 'https://i.imgur.com/KGYOS6S.jpeg'
    },
    {
        id: 'Colgantes Armonizadores de Minerales o Piedras Semipreciosas',
        name: 'Colgantes Armonizadores de Minerales o Piedras Semipreciosas',
        type: 'producto',
        description: '1 Colgante artesanal. Consulta por el stock disponible o diseña el tuyo propio eligiendo el mineral tu mismo, linea unica de bisuteria artesanal con sentido y propiedades energeticas unicas.',
        price: 6000,
        imageUrl: 'https://i.imgur.com/JgpEZnB.jpeg'
    },
    {
        id: 'Masaje de Relajación Profunda de Cuerpo Completo.',
        name: 'Masaje de Relajación Profunda de Cuerpo Completo.',
        type: 'servicio',
        description: 'Una renovación total para tu templo físico. Una experiencia diseñada para soltar el control y permitir que la energía fluya sin bloqueos. Trabajamos de forma integral en espalda, cuello, brazos, manos, piernas y opcional gluteos y pies, eliminando el cansancio físico y mental. ​¿Qué incluye? Masaje integral de cuerpo completo + relajación profunda con cierre de sonoterapia con cuencos de cuarzo y bronce. ​Duración: 1 hora y 15 minutos aprox.',
        price: 35000,
        imageUrl: 'https://i.imgur.com/rFONerd.jpeg'
    },
    {
        id: 'Masaje Holístico Transmutador.',
        name: 'Masaje Holístico Transmutador.',
        type: 'servicio',
        description: '​Nuestra sesión más profunda: Sanación para el cuerpo y el alma. Este no es solo un masaje, es un proceso de acompañamiento en tu camino de crecimiento. Ideal para momentos de cambio o cuando necesitas reencontrar tu centro emocional. ¿Qué incluye?  ​Guía Consciente: Lectura de Flores de Bach para identificar y canalizar emociones o bloqueos actuales, infusión de hierbas medicinales para preparar tus sentidos y abrir el corazón, Masaje profundo de cuerpo completo para liberar memorias físicas de estrés, Cierre Vibracional con cuencos para asentar la paz en tu ser. Duración: 2 horas de dedicación exclusiva.',
        price: 45000,
        imageUrl: 'https://i.imgur.com/rQJAMND.jpeg'
    },
    {
        id: 'GIFTCARD Masaje Holistico',
        name: 'GIFTCARD Masaje Holistico',
        type: 'servicio',
        description: '¿No sabes que regalar? este Masaje Holistico es ideal para esa persona que amas y quieres regalarle Sanación para el cuerpo y el alma. Este no es solo un masaje, es un proceso de acompañamiento en tu camino de crecimiento. Ideal para momentos de cambio o cuando necesitas reencontrar tu centro emocional. ¿Qué incluye?  ​Guía Consciente: Lectura de Flores de Bach para identificar y canalizar emociones o bloqueos actuales, infusión de hierbas medicinales para preparar tus sentidos y abrir el corazón, Masaje profundo de cuerpo completo para liberar memorias físicas de estrés, Cierre Vibracional con cuencos para asentar la paz en tu ser. Duración: 2 horas de dedicación exclusiva.',
        price: 39000,
        imageUrl: 'https://i.imgur.com/2w7Fuzz.jpeg'
    },
    {
        id: 'Sesiones de Reiki Usui',
        name: 'Sesiones de Reiki Usui',
        type: 'servicio',
        description: 'Su principal función es la sanación y el equilibrio energético . El Reiki actúa limpiando, purificando y alineando los siete chakras principales, que son centros de energía a lo largo del cuerpo. Esto permite un flujo energético correcto, ayudando a la persona a liberar emociones negativas, traumas y bloqueos kármicos. esta terapia se puede hacer a distancia a personas, animalitos y plantas.',
        price: 8000,
        imageUrl: 'https://i.imgur.com/EhZ9fOg.jpeg'
    },
    {
        id: 'Sesion de Terapia de codificación Solar',
        name: 'Sesion de Terapia de codificación Solar',
        type: 'servicio',
        description: 'Es una Terapia complementaria que utiliza la energía solar de Quinta Dimensión , conocida como energía Crística . Esta energía, que irradia desde el Sol y está conectada con el Gran Sol Central, es de alta frecuencia y vibración, promoviendo el despertar de la conciencia y el amor incondicional. La terapia limpia y purifica el torrente sanguíneo, el agua del cuerpo y los hemisferios cerebrales de toxinas emocionales, mentales y físicas del pasado y presente. El propósito de esta limpieza es preparar a la persona para anclar la energía Crística, facilitando una transformación interna hacia un "nuevo ser humano".',
        price: 8000,
        imageUrl: 'https://i.imgur.com/OIpd2rc.png'
    },
    {
        id: 'Sesion de Pendulo',
        name: 'Sesion de Pendulo',
        type: 'servicio',
        description: '✨ Lecturas con Péndulo ✨, 30 minutos aprox, conuso de plantillas y las preguntas que necesite tu corazón, El péndulo es una poderosa herramienta de conexión energética que nos ayuda a acceder a respuestas claras desde nuestra intuición y el campo espiritual. A través de esta práctica podrás recibir orientación para tomar decisiones, liberar bloqueos, equilibrar tu energía y encontrar mayor claridad en tu camino. 🌙💫Déjate guiar por la sabiduría de tu propia energía y descubre lo que el péndulo tiene para revelarte..',
        price: 10000,
        imageUrl: 'https://i.imgur.com/7onlA3S.jpeg'
    },
    {
        id: 'Guia de los Angeles',
        name: 'Guia de los Angeles',
        type: 'servicio',
        description: 'Recibiras una guia consciente, orientacion, ayuda y consejo por medio de una Lectura de cartas de Angeles, podras realizar preguntas y recibir guia con diferentes formas de respuestas a traves de esta excelente conexión con ellos.',
        price: 8000,
        imageUrl: 'https://i.imgur.com/vCNFpdC.jpeg'
    },
];

    const cart = {};
    const cartCount = document.getElementById('cart-count');
    const cartTotal = document.getElementById('cart-total');
    const cartItems = document.getElementById('cart-items');
    const emptyCart = document.getElementById('empty-cart');
    const cartPanel = document.getElementById('cart-panel');
    const cartOverlay = document.getElementById('cart-overlay');
    const whatsappBtn = document.getElementById('whatsapp-order');
    const toast = document.getElementById('toast');

    function playTone(freq = 520, duration = 0.06) {
      try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;
        const ctx = new AudioContext();
        const oscillator = ctx.createOscillator();
        const gain = ctx.createGain();
        oscillator.type = 'sine';
        oscillator.frequency.value = freq;
        gain.gain.setValueAtTime(0.0001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.025, ctx.currentTime + 0.01);
        gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);
        oscillator.connect(gain);
        gain.connect(ctx.destination);
        oscillator.start();
        oscillator.stop(ctx.currentTime + duration + 0.02);
      } catch(e) {}
    }

    function money(value){
      return '$' + value.toLocaleString('es-CL');
    }

    function openCart(){
      cartPanel.classList.add('open');
      cartOverlay.classList.add('open');
      cartPanel.setAttribute('aria-hidden','false');
      playTone(420);
    }

    function closeCart(){
      cartPanel.classList.remove('open');
      cartOverlay.classList.remove('open');
      cartPanel.setAttribute('aria-hidden','true');
      playTone(320);
    }

    function showToast(){
      toast.classList.add('show');
      setTimeout(()=>toast.classList.remove('show'), 1800);
    }

    function updateCart(){
      const keys = Object.keys(cart);
      let totalQty = 0;
      let total = 0;
      keys.forEach(id => {
        totalQty += cart[id].qty;
        total += cart[id].qty * products[id].price;
      });

      cartCount.textContent = totalQty;
      cartTotal.textContent = money(total);
      whatsappBtn.disabled = keys.length === 0;

      const existing = new Map([...cartItems.children].map(el => [el.dataset.id, el]));

      keys.forEach(id => {
        const item = cart[id];
        let row = existing.get(id);
        if(!row){
          const tpl = document.getElementById('cart-item-template').content.cloneNode(true);
          row = tpl.querySelector('[data-template-id="cart-item"]');
          row.dataset.id = id;

          const sourceImg = document.querySelector(`[data-template-id="${products[id].image}"]`);
          const img = row.querySelector('[data-template-id="cart-item-image"]');
          if(sourceImg && sourceImg.src){
            img.src = sourceImg.src;
            img.alt = sourceImg.alt || products[id].name;
          }

          row.querySelector('[data-template-id="cart-item-name"]').textContent = products[id].name;
          row.querySelector('[data-template-id="cart-item-price"]').textContent = money(products[id].price);

          row.querySelector('.qty-plus').addEventListener('click', ()=> {
            cart[id].qty += 1;
            playTone(560);
            updateCart();
          });
          row.querySelector('.qty-minus').addEventListener('click', ()=> {
            if(cart[id].qty > 1){
              cart[id].qty -= 1;
            }else{
              delete cart[id];
            }
            playTone(380);
            updateCart();
          });
          row.querySelector('.remove-item').addEventListener('click', ()=> {
            delete cart[id];
            playTone(300);
            updateCart();
          });

          cartItems.appendChild(row);
          lucide.createIcons();
        } else {
          existing.delete(id);
        }
        row.querySelector('.qty-value').textContent = item.qty;
      });

      existing.forEach(el => el.remove());

      if(keys.length){
        emptyCart.classList.add('hidden');
        cartItems.classList.remove('hidden');
      }else{
        emptyCart.classList.remove('hidden');
        cartItems.classList.add('hidden');
      }
    }

    document.querySelectorAll('.add-to-cart').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const card = btn.closest('[data-product-id]');
        const id = card.dataset.productId;
        if(!cart[id]) cart[id] = { qty: 0 };
        cart[id].qty += 1;
        btn.classList.add('scale-110');
        setTimeout(()=>btn.classList.remove('scale-110'), 180);
        playTone(620);
        updateCart();
        showToast();
      });
    });

    document.querySelectorAll('.filter-btn').forEach(btn=>{
      btn.addEventListener('click', ()=>{
        const filter = btn.dataset.filter;
        document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));
        btn.classList.add('active');
        playTone(480);
        document.querySelectorAll('.product-card').forEach(card=>{
          const show = filter === 'all' || card.dataset.category === filter;
          card.style.display = show ? '' : 'none';
        });
      });
    });

    document.getElementById('open-cart').addEventListener('click', openCart);
    document.getElementById('close-cart').addEventListener('click', closeCart);
    document.getElementById('continue-shopping').addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);
    document.getElementById('hero-cta').addEventListener('click', ()=>{
      document.getElementById('tienda').scrollIntoView({behavior:'smooth'});
      playTone(520);
    });

    whatsappBtn.addEventListener('click', ()=>{
      const keys = Object.keys(cart);
      if(!keys.length) return;
      let lines = ['Hola, quiero hacer este pedido en Somos Luz:', ''];
      let total = 0;
      keys.forEach(id=>{
        const subtotal = cart[id].qty * products[id].price;
        total += subtotal;
        lines.push(`• ${products[id].name} x${cart[id].qty} - ${money(subtotal)}`);
      });
      lines.push('');
      lines.push(`Total: ${money(total)}`);
      const url = 'https://wa.me/56900000000?text=' + encodeURIComponent(lines.join('\n'));
      window.open(url, '_blank', 'noopener,noreferrer');
      playTone(700);
    });

    updateCart();
    lucide.createIcons();
  </script>
 <script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'a0dd8033a0294218',t:'MTc4MTgxOTMzMy4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>
</html>
