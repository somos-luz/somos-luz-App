// Este es el catálogo de productos y servicios de "Somos Luz"
// Los datos se guardan en el localStorage del navegador para que no se pierdan al recargar
let catalog = JSON.parse(localStorage.getItem('catalog')) || [
    {
        id: 'Incienso de Salvia Blanca',
        name: 'Incienso de Salvia Blanca',
        type: 'producto',
        description: 'Caja 9 inciensos. Ideal para limpiezas energéticas profundas del hogar y el aura nos ayuda en la claridad mental y limpieza de espacios ya que la Salvia sube la frecuencia del espacio, protegiendonos y abriendo nuestro camino para conectar con nuestra luz y sabiduria interior.',
        price: 4300,
        imageUrl: 'https://i.imgur.com/T0TD8EI.jpeg'
    },
    {
        id: 'Incienso de Eucalipto, Laurel & Cedro',
        name: 'Incienso de Eucalipto, Laurel & Cedro',
        type: 'producto',
        description: 'Caja 9 inciensos. Esta fusión nos ayuda a la apertura de caminos y nuevas posibilidades. El Cedro nos conecta con la estabilidad, el Laurel con la abundancia y el Eucalipto nos abre nuestra percepcion para poder ver todo materializado.',
        price: 4300,
        imageUrl: 'https://i.imgur.com/FQdcp3m.jpeg'
    },
    {
        id: 'Inciensos Anis, Canela & Olibano',
        name: 'Inciensos Anis, Canela & Olibano',
        type: 'producto',
        description: 'Caja 9 Inciensos. La combinacion de estas hierbas y maderas crea una mezcla poderosa que limpia energías densas, protege el aura y atrae prosperidad. Ideal para rituales de apertura, cambios, manifestación consciente y proteccion energetica',
        price: 4300,
        imageUrl: 'https://i.imgur.com/6haCS0h.jpeg'
    },
    {
        id: 'Inciensos de Lavanda & Olibano',
        name: 'Inciensos de Lavanda & Olibano',
        type: 'producto',
        description: 'Caja 9 Inciensos. La lavanda aporta equilibrio y armonia que junto con el Oibano que atrae energías positivas, sutiles y purifica el espacio, son un protector poderoso del hogar y neutralidad de energias densas',
        price: 4300,
        imageUrl: 'https://i.imgur.com/IxAqUo1.jpeg'
    },
    {
        id: 'Inciensos Palo Santo con Lavanda',
        name: 'Inciensos Palo Santo con Lavanda',
        type: 'producto',
        description: 'Caja 8 inciensos. La sagrada madera de Palo Santo combinada con la frescura de la lavanda purifican el campo energetico y relajan nuestra mente, nos da equilibrio y armonia en el espacio.',
        price: 3900,
        imageUrl: 'https://i.imgur.com/9yxQcsQ.jpeg'
    },
    {
        id: 'Inciensos Palo Santo con Mirra',
        name: 'Inciensos Palo Santo con Mirra',
        type: 'producto',
        description: 'Caja 8 inciensos. El Palo Santo combinado con la Mirra atrae energías positivas armoniosas atrayendo el poder de renovación, calma y tranquilidad a todo aquel que se deleite con su fragancia.',
        price: 3900,
        imageUrl: 'https://i.imgur.com/2AqLPM6.jpeg'
    },
    {
        id: 'Inciensos Palo Santo con Ruda',
        name: 'Inciensos Palo Santo con Ruda',
        type: 'producto',
        description: 'Caja 8 inciensos. Esta mezcla nos ayuda a purificar los espacios, nos brinda proteccion y llena de Amor y luz nuestros espacios, ademas de limpiar las energías densas nos protege.',
        price: 3900,
        imageUrl: 'https://i.imgur.com/K0VvwGx.jpeg'
    },
    {
        id: 'Inciensos Palo Santo con Canela',
        name: 'Inciensos Palo Santo con Canela',
        type: 'producto',
        description: 'Caja 8 inciensos. La canela con su aroma nos ayuda a relajar y ,amtemer una paz mental que nos guía hacia la abundancia y prosperidad junto con el Palos Santo intensifica y abre nuestros caminos.',
        price: 3900,
        imageUrl: 'https://i.imgur.com/mlQb2GW.jpeg'
    },
    {
        id: 'Inciensos Palo Santo',
        name: 'Inciensos Palo Santo',
        type: 'producto',
        description: 'Caja 8 inciensos. Encender uno de estos inciensos es un acto sagrado y purificador, aumenta la sensacion de calma y bienestar, atrayendo energías positivas armoniosas a todos los que esten en contacto con este humo sagrado.',
        price: 3900,
        imageUrl: 'https://i.imgur.com/qKuuJFH.jpeg'
    },
    {
        id: 'Inciensos Palo Santo con Sandalo',
        name: 'Inciensos Palo Santo con Sandalo',
        type: 'producto',
        description: 'Caja 8 inciensos. Estas dos maderas sagradas nos brinda claridad mental, es un relajante natural, ayudandonos con la memoria, su aroma afrodisiaco natural reduce nuestro estres y nos aporta amor propio o de pareja en el espacio.',
        price: 3900,
        imageUrl: 'https://i.imgur.com/mqSKjb6.jpeg'
    },
    {
        id: 'Inciensos Palo Santo con Copal',
        name: 'Inciensos Palo Santo con Copal',
        type: 'producto',
        description: 'Caja 8 inciensos. La union de Palo Santo con el Copal forman un humo poderoso y sagrado que nos ayuda con la purificación y sanación, nos vuelve un iman para las energias de abundancia y sanación tanto fisica como espiritual por su gran conexion con lo divino y sagrado.',
        price: 3900,
        imageUrl: 'https://i.imgur.com/pPFGtHx.jpeg'
    },
    {
        id: 'Inciensos Palo Santo con Salvia',
        name: 'Inciensos Palo Santo con Salvia',
        type: 'producto',
        description: 'Caja 8 inciensos. Combinacion poderosa que nos ayuda en la claridad mental y limpieza de espacios ya que la Salvia sube la frecuencia del espacio, protegiendonos y abriendo nuestro camino para conectar con nuestra luz.',
        price: 3900,
        imageUrl: 'https://i.imgur.com/XVCHgXr.jpeg'
    },
    {
        id: 'Inciensos Palo Santo con Romero',
        name: 'Inciensos Palo Santo con Romero',
        type: 'producto',
        description: 'Caja 8 inciensos. El Palo Santo y el Romero juntos nos brindan purificacion y sanación de espacios, atrae energías positivas uniendo las almas con Amor, lo que genera paz y armonia en el hogar o trabajo.',
        price: 3900,
        imageUrl: 'https://i.imgur.com/kL062nJ.jpeg'
    },
    {
        id: 'Sahumo Mirra y Palo Santo',
        name: 'Sahumo de Mirra y Palo Santo',
        type: 'producto',
        description: 'Atado de hierbas y resinas. La Mirra es una ofrenda sagrada, purifica espacios creando vibraciones positivas proporcionando paz y tranquilidad, en combinacion con el Palo Santo limpia el aura y sella todo con Amor y luz.',
        price: 3500,
        imageUrl: 'https://i.imgur.com/VwhdSZs.jpeg'
    },
    {
        id: 'Sahumo de Romero',
        name: 'Sahumo de Romero',
        type: 'producto',
        description: 'Atado de hierbas y resinas. Efectivo para limpiar nuestra vida y aura, por sus poderes esotéricos es excelente para abrir caminos, nuestra mente y percepcion a nuevas bendiciones y oportunidades.',
        price: 3500,
        imageUrl: 'https://i.imgur.com/rgEPSVV.jpeg'
    },
    {
        id: 'Sahumo de Sandalo',
        name: 'Sahumo de Sandalo',
        type: 'producto',
        description: 'Atado de hierbas y resinas. Purifica y calma la mente ayudandonos a reducir la tension y el estres. Sus propiedades esotéricas relacionadas con la atraccion de energias positivas, apertura de caminos espirituales y fortalecimiento de la intuicion, ademas nos ayuda a la union de almas con Amor y deseo.',
        price: 3500,
        imageUrl: 'https://i.imgur.com/8ryaAiu.jpeg'
    },
    {
        id: 'Sahumo de Salvia Blanca',
        name: 'Sahumo de Salvia Blanca',
        type: 'producto',
        description: 'Atado de hierbas y resinas. Tiene un alto poder esotérico y espiritual, ampliamente usada para atraer la sanación, proteccion espiritual, limpieza poderosa y elevacion frecuencia de los espacios ayudandonos a conectar con nuestra luz y sabiduria interior.',
        price: 3500,
        imageUrl: 'https://i.imgur.com/IxOa3BP.jpeg'
    },
    {
        id: 'Sahumo de Copal',
        name: 'Sahumo de Copal',
        type: 'producto',
        description: 'Atado de hierbas y resinas. Conocida como la "resina de los dioses" o "elixir de la tierra", su poder ancestral, nos sigue acompañando protegiendo, purificando y limpiando energeticamente nuestras vidas, uniendo la fuerza y poder de la naturaleza y el poder y fuerza del cielo.',
        price: 3500,
        imageUrl: 'https://i.imgur.com/ek3qZJ6.jpeg'
    },
    {
        id: 'Kit ambienta tu espacio',
        name: 'Kit Ambienta tu Espacio',
        type: 'producto',
        description: '5 varillas de incienso. A eleccion podras elegir del stock disponible 5 varilla de incienso (sin repetir), ideal para probar aromas y luego elegir con conocimiento y gusto la proxima vez.',
        price: 2500,
        imageUrl: 'https://i.imgur.com/DQDZJtM.jpeg'
    },
    {
        id: 'Kits',
        name: 'Kit Amor Propio y Conexion Espiritual',
        type: 'producto',
        description: 'Este kit incluye; 1 Vela lisa Rosada, 1 sahumo de Copal, 1 Collar de Cuarzo Rosa, Ritual paso a paso, Este kit está diseñado para quienes necesitan conectarse con su corazón, sanar sus emociones y cultivar el amor por sí mismos.',
        price: 8888,
        imageUrl: 'https://i.imgur.com/2AGTgBd.jpeg'
    },
    {
        id: 'Kits',
        name: 'Kit Proteccion y Manifestacion',
        type: 'producto',
        description: 'Este kit incluye; 1 Vela lisa Violeta, 1 sahumo de Romero, 1 Collar de Pirita o 1 collar de Obsidiana, Ritual paso a paso, Este kit es para quienes buscan protegerse de energías densas del exterior e interior y enfocarse en manifestar sus deseos y metas.',
        price: 8888,
        imageUrl: 'https://i.imgur.com/5vXxZR9.jpeg'
    },
    {
        id: 'Kits',
        name: 'Kit Limpieza Energetica y Paz Interior',
        type: 'producto',
        description: 'Este kit incluye; 1 Vela lisa blanca, 1 sahumo de Salvia Blanca, 3 Varillas de incienso de Palo santo Lavanda, 1 Collar de Cuarzo blanco, Ritual paso a paso, este Kit es perfecto para quienes buscan purificar su espacio de energías estancadas y crear un ambiente de calma. Es el regalo ideal para un nuevo hogar o para un nuevo comienzo.',
        price: 8888,
        imageUrl: 'https://i.imgur.com/Ql99G1W.jpeg'
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
        id: 'Infusion de Tranquilidad',
        name: 'Infusion de Tranquilidad',
        type: 'producto',
        description: 'Pack 5 bolsitas de infusion herbal. Mezcla de hierbas medicinales, Manzanilla, Hierba Buena, Cedrón, Matico, Eucalipto. Nos ayuda a relajar el sistema nervioso, abre nuestro corazon para expulsar tensiones emocionales y mentales para un descanso restaurador.',
        price: 2000,
        imageUrl: 'https://i.imgur.com/eLbunwP.jpeg'
    },
    {
        id: 'Velas lisas',
        name: 'Vela Lisa Blanca',
        type: 'producto',
        description: '1 vela blanca 17cm. El color Blanco nos transmite pureza y claridad, es un color neutral podemos encender una vela con la fiel intencion y certeza de atraer claridad y guia divina, para encender la luz y a traerla hacia tu vida, puedes invocar al Arcangel Gabriel el custodio de la luz y la claridad del Creador.',
        price: 1000,
        imageUrl: 'https://fabricadevelas.cl/cdn/shop/products/blanca_f0f8a11c-642f-497a-8ace-5912a2d2e4df_1024x1024.jpg?v=1682376881'
    },
    {
        id: 'Velas lisas',
        name: 'Vela Lisa Morada',
        type: 'producto',
        description: '1 vela morada 17cm. El color Morado nos transmite cambio y transmutacion, al endenderla nos pre dispone a la meditacion e introspeccion y realizar desde allí con intencion y conviccion los cambios y transformaciones que necesitamos en nuestra vida, puedes invocar al Arcangel Zadquiel el custodio de la energia de transformacion y cambio del Creador.',
        price: 1000,
        imageUrl: 'https://fabricadevelas.cl/cdn/shop/products/morada-3_1024x1024.jpg?v=1682377036'
    },
     {
        id: 'Velas lisas',
        name: 'Vela Lisa Naranja',
        type: 'producto',
        description: '1 vela naranja 17cm. El color Naranjo nos transmite alegria y energia, enciendela cuando estes falto de estas cualidades, con pesades y sin muchas ganas, intencionala con conviccion de despertar la energia y alegria que necesitas para actuar con equilibrio y armonia, puedes invocar al Arcangel Uriel el custodio de la alegria y las ganas o la energía del Creador.',
        price: 1000,
        imageUrl: 'https://fabricadevelas.cl/cdn/shop/products/naranja_5416fbfe-432c-4c06-a0db-61a8190dee98_1024x1024.jpg?v=1682377044'
    },
    {
        id: 'Velas lisas',
        name: 'Vela Lisa Amarilla',
        type: 'producto',
        description: '1 vela amarilla 17cm. El color Amarillo nos transmite sabiduria y abundancia, enciendela cuando necesites sabiduria para actuar desde el corazon y para adquirir el aprendizaje de las lecciones que nos presenta la vida, agredeciendo la abundancia y la prosperidad, puedes invocar al Arcangel Jofhiel el custodio de la sabiduria y abundancia del Creador.',
        price: 1000,
        imageUrl: 'https://fabricadevelas.cl/cdn/shop/products/llama-dinero_1024x1024.jpg?v=1682376769'
    },
    {
        id: 'Velas lisas',
        name: 'Vela Lisa Azul',
        type: 'producto',
        description: '1 vela Azul 17cm. El color Azul nos transmite Seguridad y Fuerza, enciendela cuando te sientas inseguro y necesites fuerza para afrontar las adversidades y enseñanzas de la vida intencionala con fuerza y poder de conviccion que la luz azul te esta protegiendo y envolviendo a ti y todo tu alrededor, puedes invocar al Arcangel Miguel el custodio de la proteccion y fuerza del Creador.',
        price: 1000,
        imageUrl: 'https://fabricadevelas.cl/cdn/shop/products/azul_a1103d62-ce0a-4a3d-8814-4b33fcf99470_1024x1024.jpg?v=1682376785'
    },
    {
        id: 'Velas lisas',
        name: 'Vela Lisa Rosada',
        type: 'producto',
        description: '1 vela Rosada 17cm. El color Rosado nos transmite Amor y Compasión, enciendela cuando quieras atraer el Amor divino y la compasión a tu vida, intencionala con la conviccion que todo tu ser esta siendo envuelto en luz rosada y que todo se puede solucionar con el Amor, puedes invocar al Arcangel Shamuel el custodio del Amor y la Compasion del Creador.',
        price: 1000,
        imageUrl: 'https://fabricadevelas.cl/cdn/shop/products/rosada_272546b6-f8f8-418f-bd88-90d9ca8d2c3e_1024x1024.jpg?v=1682377084'
    },
    {
        id: 'Bisuteria',
        name: 'Aros de Minerales o Piedras Semipreciosas',
        type: 'producto',
        description: '1 par de pendientes artesanales. Consulta por el stock disponible o diseña el tuyo propio eligiendo el mineral tu mismo, linea unica de bisuteria artesanal con sentido y propiedades energeticas unicas.',
        price: 3500,
        imageUrl: 'https://i.imgur.com/kzjBMt3.jpeg'
    },
    {
        id: 'Bisuteria',
        name: 'Collares de Minerales o Piedras Semipreciosas',
        type: 'producto',
        description: '1 Collar artesanal. Consulta por el stock disponible o diseña el tuyo propio eligiendo el mineral tu mismo, linea unica de bisuteria artesanal con sentido y propiedades energeticas unicas.',
        price: 5000,
        imageUrl: 'https://i.imgur.com/KGYOS6S.jpeg'
    },
    {
        id: 'Bisuteria',
        name: 'Colgantes Armonizadores de Minerales o Piedras Semipreciosas',
        type: 'producto',
        description: '1 Colgante artesanal. Consulta por el stock disponible o diseña el tuyo propio eligiendo el mineral tu mismo, linea unica de bisuteria artesanal con sentido y propiedades energeticas unicas.',
        price: 6000,
        imageUrl: 'https://i.imgur.com/JgpEZnB.jpeg'
    },
    {
        id: 'Terapias',
        name: 'Flores de Bach',
        type: 'servicio',
        description: 'Es una terapia energética que utiliza esencias florales silvestres. Cada flor aporta su huella energética para ayudarnos en procesos emocionales, Su propósito es guiarnos y permitirnos ver la vida desde nuestro verdadero ser.',
        price: 19000,
        imageUrl: 'https://lh3.googleusercontent.com/gg-dl/AJfQ9KS7YXpf3ltKkWcZgWFKGGqoiROogWDjReV3-GJQ-BwzcScULWPas7A9LCvgFPFhgJKtidRJVsRjDd7453ogLa74LkU8Unsg-ekKad1oPgUyUlXi_SIldgbDmMdPen_gbVPkrUJy8i8NT2gbR7vlu-TzbTtIM8O5KgFZsYMHz_G_R2o4'
    },
    {
        id: 'Masajes',
        name: 'Masaje de Relajacion 40 min.',
        type: 'servicio',
        description: 'Masaje de relajacion que abarca espalda, cuello, hombros, brazos y manos, de duracion aprox. de 30 a 40 min, ideal para personas que tienen un corto tiempo para regalarse un descanso y despojarse del estres de la rutina. Puedes pedirlo a domicilio por un valor adicional.',
        price: 28000,
        imageUrl: 'https://i.imgur.com/gq8dB5O.jpeg'
    },
    {
        id: 'Masajes',
        name: 'Masaje de Relajacion 1 Hora.',
        type: 'servicio',
        description: 'Masaje de relajacion que abarca espalda, cuello, hombros, brazos, manos piernas y opcional pies, ademas se incluye terapia de sonido con cuencos de cuarzo y bronce, tiene una duracion aprox. de 1 hora y media, ideal para personas que quieren una desconexion total de la rutina, del estres y volver a conectar con su energia regenerativa que produce un buen masaje. Puedes pedirlo a domicilio por un valor adicional.',
        price: 35000,
        imageUrl: 'https://i.imgur.com/7lKMyPg.png'
    },
    {
        id: 'Masajes',
        name: 'Ritual Masaje Holistico.',
        type: 'servicio',
        description: 'Este ritual de conexion empieza con una infusion de hierbas que nos ayuda abrir el corazon para luego pasar por un test floral que nos ayudara abrir y entender nuestro mundo emocional, pasaremos a un Masaje de relajacion que abarca espalda, cuello, hombros, brazos, manos piernas y opcional pies, ademas se incluye terapia de sonido con cuencos de cuarzo y bronce, tiene una duracion aprox. de 2 hora y media, ideal para personas que quieren una desconexion total para una reconexion con su ser completo. Puedes pedirlo a domicilio por un valor adicional.',
        price: 45000,
        imageUrl: 'https://i.imgur.com/rQJAMND.jpeg'
    },
    {
        id: 'Masajes',
        name: 'GIFTCARD Ritual Masaje Holistico.',
        type: 'servicio',
        description: '¿No sabes que regalar? este ritual de conexion es el mejor regalo para esa persona que amas y quiere regalarle bienestar y conexion verdadera, empieza con una infusion de hierbas que nos ayuda abrir el corazon para luego pasar por un test floral que nos ayudara abrir y entender nuestro mundo emocional, pasaremos a un Masaje de relajacion que abarca espalda, cuello, hombros, brazos, manos piernas y opcional pies, ademas se incluye terapia de sonido con cuencos de cuarzo y bronce, tiene una duracion aprox. de 2 hora y media, ideal para personas que quieren una desconexion total para una reconexion con su ser completo. Puedes pedirlo a domicilio por un valor adicional. 1 mes para canjear.',
        price: 45000,
        imageUrl: 'https://i.imgur.com/2w7Fuzz.jpeg'
    },
    {
        id: 'Terapias',
        name: 'Sesiones de Reiki Usui.',
        type: 'servicio',
        description: 'Su principal función es la sanación y el equilibrio energético . El Reiki actúa limpiando, purificando y alineando los siete chakras principales, que son centros de energía a lo largo del cuerpo. Esto permite un flujo energético correcto, ayudando a la persona a liberar emociones negativas, traumas y bloqueos kármicos. esta terapia se puede hacer a distancia a personas, animalitos y plantas.',
        price: 10000,
        imageUrl: 'https://i.imgur.com/EhZ9fOg.jpeg'
    },
    {
        id: 'Terapias',
        name: 'Lectura de Registros Akashicos.',
        type: 'servicio',
        description: 'La Lectura de Registros Akáshicos es la apertura del "libro" del alma. Es un campo energético y la memoria universal de la existencia, que contiene todas las experiencias de un ser desde su origen. Esta información, custodiada por Maestros y Guardianes, es accesible para obtener el conocimiento necesario para la evolución espiritual. no es predictiva, es altamente sanadora.',
        price: 20000,
        imageUrl: 'https://i.imgur.com/TBiwupA.jpeg'
    },
    {
        id: 'Terapias',
        name: 'Sesion de Terapia de codificación Solar.',
        type: 'servicio',
        description: 'Es una Terapia complementaria que utiliza la energía solar de Quinta Dimensión , conocida como energía Crística . Esta energía, que irradia desde el Sol y está conectada con el Gran Sol Central, es de alta frecuencia y vibración, promoviendo el despertar de la conciencia y el amor incondicional. La terapia limpia y purifica el torrente sanguíneo, el agua del cuerpo y los hemisferios cerebrales de toxinas emocionales, mentales y físicas del pasado y presente. El propósito de esta limpieza es preparar a la persona para anclar la energía Crística, facilitando una transformación interna hacia un "nuevo ser humano".',
        price: 10000,
        imageUrl: 'https://i.imgur.com/OIpd2rc.png'
    },
    {
        id: 'Terapias',
        name: 'Sesion de Pendulo.',
        type: 'servicio',
        description: '✨ Lecturas con Péndulo ✨, El péndulo es una poderosa herramienta de conexión energética que nos ayuda a acceder a respuestas claras desde nuestra intuición y el campo espiritual. A través de esta práctica podrás recibir orientación para tomar decisiones, liberar bloqueos, equilibrar tu energía y encontrar mayor claridad en tu camino. 🌙💫Déjate guiar por la sabiduría de tu propia energía y descubre lo que el péndulo tiene para revelarte..',
        price: 12000,
        imageUrl: 'https://i.imgur.com/7onlA3S.jpeg'
    },
    {
        id: 'Terapias',
        name: 'Guia de los ELementos.',
        type: 'servicio',
        description: '🌿✨ Lecturas con el Oráculo de la Bruja Verde ✨🌿, Este oráculo es un portal a la sabiduría ancestral de la naturaleza, donde cada carta revela mensajes de sanación, guía espiritual y conexión con los ciclos de la vida. A través de sus símbolos mágicos recibirás ORIENTACIÓN para comprender tu presente, tomar decisiones conscientes y abrirte a nuevas posibilidades. 🍃🔮Permite que la energía de la tierra y la magia de lo verde te acompañen en tu camino.',
        price: 15000,
        imageUrl: 'https://i.imgur.com/hpbi6mT.jpeg'
    },
    {
        id: 'Terapias',
        name: 'Guia de los Angeles.',
        type: 'servicio',
        description: 'Recibiras una guia consciente, orientacion, ayuda y consejo por medio de una Lectura de cartas de Angeles, podras realizar preguntas y recibir guia con diferentes formas de respuestas a traves de esta excelente conexión con ellos.',
        price: 10000,
        imageUrl: 'https://i.imgur.com/vCNFpdC.jpeg'
    },
];

// --- VARIABLES Y ELEMENTOS DEL DOM ---

// Catálogo
const productsServicesContainer = document.getElementById('products-services');

// Carrito
let cart = [];
const cartButton = document.getElementById('cart-button');
const cartCount = document.querySelector('.cart-count');
const cartContainer = document.getElementById('cart-container');
const closeCartButton = document.getElementById('close-cart');
const cartItemsContainer = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
const checkoutButton = document.getElementById('checkout-button');

// Formulario de contacto
const contactForm = document.getElementById('contact-form');
const contactFormContent = document.getElementById('contact-form-content');

// Administración
const adminLink = document.getElementById('admin-link');
const adminPanel = document.getElementById('admin-panel');
const loginForm = document.getElementById('login-form');
const catalogManager = document.getElementById('catalog-manager');
const adminUsernameInput = document.getElementById('admin-username');
const adminPasswordInput = document.getElementById('admin-password');
const adminLoginBtn = document.getElementById('admin-login-btn');
const productForm = document.getElementById('product-form');
const productIdInput = document.getElementById('product-id-input');
const productNameInput = document.getElementById('product-name-input');
const productDescriptionInput = document.getElementById('product-description-input');
const productPriceInput = document.getElementById('product-price-input');
const productImageInput = document.getElementById('product-image-url-input');
const productTypeInput = document.getElementById('product-type-input');
const addEditBtn = document.getElementById('add-edit-btn');
const currentCatalogContainer = document.getElementById('current-catalog');

// --- FUNCIONES ---

// Función para guardar el catálogo en el almacenamiento local del navegador
function saveCatalog() {
    localStorage.setItem('catalog', JSON.stringify(catalog));
}

// Renderizar el catálogo para los clientes
function renderCatalog() {
    productsServicesContainer.innerHTML = '';
    catalog.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('catalog-item');
        itemElement.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p class="price">$${item.price.toLocaleString('es-CL')}</p>
            <button class="add-to-cart-btn" data-id="${item.id}">
                ${item.type === 'producto' ? 'Añadir al carrito' : 'Agendar Servicio'}
            </button>
        `;
        productsServicesContainer.appendChild(itemElement);
    });
}

// Renderizar el catálogo en el panel de administración
function renderAdminCatalog() {
    currentCatalogContainer.innerHTML = '';
    catalog.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('catalog-item');
        itemElement.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.name}">
            <div class="item-info">
                <strong>${item.name}</strong> - $${item.price.toLocaleString('es-CL')}
                <br>
                <small>${item.type}</small>
            </div>
            <div class="item-actions">
                <button class="edit-btn" data-id="${item.id}">Editar</button>
                <button class="delete-btn" data-id="${item.id}">Eliminar</button>
            </div>
        `;
        currentCatalogContainer.appendChild(itemElement);
    });
}

// Función para mostrar/ocultar el carrito
function toggleCart() {
    cartContainer.classList.toggle('hidden');
    productsServicesContainer.classList.toggle('hidden');
}

// Función para añadir un producto al carrito
function addToCart(itemId) {
    const itemToAdd = catalog.find(item => item.id === itemId);
    if (itemToAdd) {
        const existingItem = cart.find(item => item.id === itemId);
        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({ ...itemToAdd, quantity: 1 });
        }
        updateCartDisplay();
    }
}

// Función para actualizar la interfaz del carrito
function updateCartDisplay() {
    cartCount.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    cartItemsContainer.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.classList.add('cart-item');
        cartItemElement.innerHTML = `
            <span>${item.name} (${item.quantity})</span>
            <p>$${(item.price * item.quantity).toLocaleString('es-CL')}</p>
        `;
        cartItemsContainer.appendChild(cartItemElement);
        total += item.price * item.quantity;
    });
    cartTotalElement.textContent = `$${total.toLocaleString('es-CL')}`;
}

// Función para manejar el envío a WhatsApp
function sendToWhatsApp() {
    const phoneNumber = '56975291753';
    let message = '¡Hola Somos Luz! Me gustaría realizar un pedido con los siguientes productos y servicios:\n\n';
    let total = 0;
    cart.forEach(item => {
        message += `- ${item.name} x${item.quantity} - $${(item.price * item.quantity).toLocaleString('es-CL')}\n`;
        total += item.price * item.quantity;
    });
    message += `\nTotal: $${total.toLocaleString('es-CL')}\n\n`;
    message += '¡Espero su confirmación!';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
}

// Función para manejar el formulario de contacto
function handleContactForm(event) {
    event.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;
    const whatsappMessage = `¡Hola Somos Luz! Un cliente ha enviado un mensaje de contacto:\n\nNombre: ${name}\nEmail: ${email}\nMensaje: ${message}`;
    const encodedWhatsappMessage = encodeURIComponent(whatsappMessage);
    const whatsappUrl = `https://wa.me/56975291753?text=${encodedWhatsappMessage}`;
    window.open(whatsappUrl, '_blank');
}

// --- EVENT LISTENERS (ESCUCHAS DE CLICS) ---

// Escuchar clics en el catálogo para añadir al carrito
productsServicesContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('add-to-cart-btn')) {
        const itemId = event.target.getAttribute('data-id');
        addToCart(itemId);
    }
});

// Escuchar clics en el botón del carrito para mostrarlo
cartButton.addEventListener('click', toggleCart);

// Escuchar clics en el botón para cerrar el carrito
closeCartButton.addEventListener('click', toggleCart);

// Escuchar clic en el botón de "Enviar Pedido por WhatsApp"
checkoutButton.addEventListener('click', sendToWhatsApp);

// Escuchar el envío del formulario de contacto
contactFormContent.addEventListener('submit', handleContactForm);

// Escuchar clic en el enlace de administración
adminLink.addEventListener('click', (event) => {
    event.preventDefault();
    productsServicesContainer.classList.add('hidden');
    cartContainer.classList.add('hidden');
    contactForm.classList.add('hidden');
    adminPanel.style.display = 'block';
});

// Escuchar clic en el botón de inicio de sesión
adminLoginBtn.addEventListener('click', () => {
    const username = adminUsernameInput.value;
    const password = adminPasswordInput.value;
    if (username === 'somosluz' && password === 'somos$888') {
        loginForm.classList.add('hidden');
        catalogManager.classList.remove('hidden');
        renderAdminCatalog();
    } else {
        alert('Usuario o contraseña incorrecta.');
    }
});

// Escuchar el envío del formulario del panel de administración
productForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const id = productIdInput.value || Math.random().toString(36).substring(2, 9);
    const name = productNameInput.value;
    const description = productDescriptionInput.value;
    const price = parseFloat(productPriceInput.value);
    const imageUrl = productImageInput.value;
    const type = productTypeInput.value;
    
    const newProduct = { id, name, description, price, imageUrl, type };

    const existingIndex = catalog.findIndex(item => item.id === id);
    if (existingIndex !== -1) {
        catalog[existingIndex] = newProduct;
    } else {
        catalog.push(newProduct);
    }

    saveCatalog();
    renderCatalog();
    renderAdminCatalog();
    productForm.reset();
    productIdInput.value = '';
});

// Escuchar clics en los botones de editar y eliminar en el panel de administración
currentCatalogContainer.addEventListener('click', (event) => {
    const itemId = event.target.getAttribute('data-id');
    if (event.target.classList.contains('delete-btn')) {
        catalog = catalog.filter(item => item.id !== itemId);
        saveCatalog();
        renderCatalog();
        renderAdminCatalog();
    } else if (event.target.classList.contains('edit-btn')) {
        const itemToEdit = catalog.find(item => item.id === itemId);
        if (itemToEdit) {
            productIdInput.value = itemToEdit.id;
            productNameInput.value = itemToEdit.name;
            productDescriptionInput.value = itemToEdit.description;
            productPriceInput.value = itemToEdit.price;
            productImageInput.value = itemToEdit.imageUrl;
            productTypeInput.value = itemToEdit.type;
        }
    }
});

// Inicializar la aplicación
renderCatalog();


