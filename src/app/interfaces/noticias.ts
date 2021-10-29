export interface Noticias {
  id:number;
  categoria:string;
  titulo:string;
  autor:string;
  fecha:string;
  imagen:string;
  texto:string;
  destacado:boolean;
  masinfo:string;
}


/*export let ListaNoticiasDestacadas: Array<Noticias>=[
  {
  id:1,
  categoria:"Entretenimiento",
  titulo:"¡Se acabó la espera! Anuel AA finalmente anunció el lanzamiento de su álbum",
  autor:"autornoticia1",
  fecha:Date().toString(),
  imagen: "../../../assets/anuel.jpg",
  texto:"Con el rostro encapuchado y un outfit bastante alegue, el puertorriqueño ha escrito lo siguiente en el caption, tras varias semanas en las que se lo han suplicado: “Ya ya ya ya. Voy a sacar el álbum brrrr, Real hasta la muerto dimelo ñengo lo iluminatis brrr”.",
  destacado:"si",
},



{
  id:2,
  categoria:"Deporte",
  titulo:"Parraguez y sus apodos en Colo-Colo",
  autor:"autornoticia2",
  fecha:Date().toString(),
  imagen:"../../../assets/parradios.jpeg",
  texto:"Todos sus apodos en redes sociales comenzaron a explotar, desde Parragod hasta su variante Parradios, pasando por Parrasex y Parragol. “Me los tomo con mucho humor, me dan mucha risa todos pero definitivamente me considero Parradona ya que mi juego es igual al de Maradona, sinceramente yo soy la reencarnacion de Maradona",
  destacado:"si",
},
{
  id:3,
  categoria:"Tecnologia",
  titulo:"Spotify contratará a cientos de personas en Europa, Australia y Canadá",
  autor:"autornoticia3",
  fecha:Date().toString(),
  imagen:"../../../assets/spotify.jpg",
  texto:"Spotify tiene previsto contratar a cientos de empleados para impulsar sus ingresos publicitarios en Europa y en otros lugares, a medida que la empresa de música en 'streaming' busca aumentar el ingreso de los clientes que no pagan una cuota mensual que, no obstante, constituyen la mayor parte de su base de usuarios.  ",
  destacado:"si",
}
];*/
export let ListaNoticias: Array<Noticias>=[

  {
    id:1,
    categoria:"Entretenimiento",
    titulo:"¿Es 'Primer Dia de Clases' el albúm del año? Mora estrena nuevo albúm",
    autor:"autornoticia1",
    fecha:Date().toString(),
    imagen: "../../../assets/mora.jpg",
    texto:"El productor y cantautor urbano Mora presenta su disco “Primer Día De Clases”, que incluye 16 temas que, ciertamente, serán grandes éxitos por su calidad musical.",
    destacado:true,
    masinfo:"Este joven puertorriqueño en continuo ascenso ha sido ficha clave en calidad de productor y compositor en proyectos de la megaestrella Bad Bunny. Gabriel Armando Mora Quintero -nombre de pila- comenzó a producir música junto a su primo como un pasatiempo, pero tiempo después de iniciarse en esta faceta se atreió a grabar un demo con su voz y ahora tiene éxitos como “Pensabas”, “Noche Loca” y “Una Vez”. Mora, quien promueve en estos momentos el vídeo de “¿Cuándo Será?” realizado junto a Lunay, se encuentra en tercer y cuarto puesto en calidad de productor y compositor en Billboard Latino. Desde los seis años toca flauta y siguió estudiando música, hasta que en la secundaria se desarrolló más en el deporte. Mora fingía acudir a las clases en la Universidad de Puerto Rico, pero en realidad se iba para la casa de un primo que recién había regresado a Puerto Rico después de estudiar producción musical en Estados Unidos. Ambos empezaron a experimentar con “software” musical y a producir sus primeras pistas. Luego, lo aceptaron en una universidad norteamericana y empezó a tomar las clases en línea, pero tampoco estaba satisfecho. Admitió que “me di cuenta de que buscando tutoriales de YouTube y produciendo música por mi cuenta iba a aprender más cosas y más rápidamente”. Su éxito como artista independiente provocó que la compañía Rimas Entertainment lo firmara en 2018. Ese mismo año, Mora continuó grabando y lanzando canciones como “Si Tú No Estás” (junto a Myke Towers), “Miradas” y “Una Vez” (junto a Bad Bunny). Este talentoso exponente y productor se ha ganado el respaldo de seguidores en Chile, Argentina y Perú, plazas que valora y a las que le brinda mucha atención, como también a su país.",
  },



  {
    id:2,
    categoria:"Deporte",
    titulo:"Se juega: ANFP desoye a Colo Colo y lo obliga a presentarse con juveniles ante Audax Italiano",
    autor:"autornoticia2",
    fecha:Date().toString(),
    imagen:"../../../assets/colo.jpg",
    texto:"El ente rector del fútbol chileno rechazó la solicitud de Blanco y Negro de reprogramar el encuentro ante los itálicos, para ser coherentes con las bases del Campeonato 2021. De esta manera, el Cacique presentará -al mando de Eduardo Rubio- un equipo conformado principalmente por muchachos sub 21 y sub 18.",
    destacado:true,
    masinfo:"Ya no hay vuelta atrás. El partido entre Audax Italiano y Colo Colo, programado para estar tarde (18 horas), se juega sí o sí en Rancagua. De esta forma, el directorio de la ANFP hizo oídos sordos a la petición que hiciera Blanco y Negro de suspender el compromiso, tras perder a la mayoría de su plantel y a todo su cuerpo técnico por ser contacto estrecho de los jugadores contagiados con coronavirus. “La Asociación Nacional de Fútbol Profesional ha decidido ratificar la realización de dicho encuentro, en coherencia con las bases del Campeonato Nacional Planvital 2021 que fueron aprobadas en el Consejo de Presidentes realizado el pasado 2 de marzo del presente año”, se pudo leer en un comunicado que el ente rector público pasado el mediodía.Decisión que además vino acompañada por la designación del cuerpo arbitral que comandará este inédito partido, el cual estará encabezado por Cristián Garay, y que obligó al Cacique a llamar a sus juveniles de urgencia, tuvo menos de 24 horas, para poder presentar una escuadra en la cancha de El Teniente.",
  },
  {
    id:3,
    categoria:"Tecnologia",
    titulo:"Spotify contratará a cientos de personas en Europa, Australia y Canadá",
    autor:"autornoticia3",
    fecha:Date().toString(),
    imagen:"../../../assets/spotify.jpg",
    texto:"Spotify tiene previsto contratar a cientos de empleados para impulsar sus ingresos publicitarios en Europa y en otros lugares, a medida que la empresa de música en 'streaming' busca aumentar el ingreso de los clientes que no pagan una cuota mensual que, no obstante, constituyen la mayor parte de su base de usuarios.  ",
    destacado:true,
    masinfo:"Estamos aumentando nuestra plantilla de 'marketing' para el negocio de la publicidad en más de un 70% en Europa, Australia y Canadá (...) y eso es a partir de una base bastante considerable dijo en una entrevista Lee Brown, jefe del negocio de la publicidad de Spotify.Al ritmo de cumbia y rock, un astronauta realiza sus tareas en el espacio. Esta es su playlist en SpotifyLa empresa también contrató a un ejecutivo del sector publicitario con 25 años de experiencia internacional para dirigir las ventas internacionales dijo Brown aunque no dio el nombre.Spotify quiere añadir más herramientas para los anunciantes y pondrá a disposición su plataforma de publicidad y publicación de podcasts Megaphone en Alemania Francia España e Italia.",
  },
  {
    id:4,
    categoria:"Salud",
    titulo:"Funcionaria de la salud fue vacunada con seis dosis de Pfizer en Copiapó",
    autor:"autornoticia4",
    fecha:Date().toString(),
    imagen:"../../../assets/vacuna.jpg",
    texto:"Una funcionaria del Centro de Salud Familiar (Cesfam) Santa Elvira de Copiapó, recibió seis dosis de la vacuna contra el COVID-19 por error.",
    destacado:false,
    masinfo:"Una funcionaria del Centro de Salud Familiar (Cesfam) Santa Elvira de Copiapó, en la región de Atacama, recibió seis dosis de la vacuna contra el COVID-19 por error. La trabajadora estaba recibiendo su dosis de refuerzo cuando se produjo el error.Según confirmó el mismo director del Servicio de Salud Atacama, Claudio Baeza, en conversación con radio Nostálgica de Copiapó, se trata de un caso aislado y la mujer está en buenas condiciones de salud. La persona a la que se le administró esto está en muy buenas condiciones, se le hizo el seguimiento médico como corresponde y permanece ese seguimiento durante 15 días para determinar si existe algún efecto secundario, detalló Baeza.El propio municipio y el Departamento de Salud inició una investigación interna para determinar qué fue lo que sucedió, por qué sucedió y sobre todo para que estos errores no vuelvan a suceder, añadió.Las dosis de la vacuna Pfizer contiene seis dosis concentradas que deben diluirse para ser administradas posteriormente. Sin embargo, en esta ocasión, este procedimiento no se habría hecho y recibió el concentrado de las seis dosis en una sola inyección.Desde el servicio regional aseguraron que apenas se tomó conocimiento de los hechos, informaron al Ministerio de Salud.",
  },
  {
    id:5,
    categoria:"Mundo",
    titulo:"La pesadilla de la montaña de basura tan alta como un edificio de 18 pisos en India",
    autor:"autornoticia5",
    fecha:Date().toString(),
    imagen:"../../../assets/basura.jpg",
    texto:"Las montañas de basura de India pronto serán reemplazadas por plantas de tratamiento de desechos, dice el primer ministro ",
    destacado:false,
    masinfo:"Todas las mañanas Farha Shaikh se para en la cima de una montaña de desechos de más de un siglo de antigüedad en Bombay, esperando que los camiones de basura suban.Esta joven de 19 años ha estado hurgando en este vertedero del suburbio de Deonar desde que tiene memoria.Normalmente recupera de entre los desechos viscosos botellas de plástico, vidrio y alambre que luego vende en los prósperos mercados de residuos de la ciudad.Pero, sobre todo, busca teléfonos móviles rotos. Cada pocas semanas Farha encuentra un celular muerto en la basura y con sus escasos ahorros lo repara.Una vez que cobra vida, pasa las tardes viendo películas, jugando a los videojuegos, enviando mensajes de texto y llamando a sus amigos.Cuando días o semanas después el aparato vuelve a dejar de funcionar, la conexión de Farha con el mundo exterior se desvanece.Entonces regresa a las largas jornadas de rebuscar entre la basura, para conseguir botellas que vender y celulares que restaurar. Más de 16 millones de toneladas de desechos forman la montaña de basura de Deonar, ocho de ellas repartidas en una extensión de 121 hectáreas.Los desechos se apilan hasta alcanzar una altura de 36,5 metros.Se puede ver el mar desde la cima y sobre los sólidos montones de basura se han construido villas miseria.",
  },
  {
    id:6,
    categoria:"Economia",
    titulo:"Noticia6",
    autor:"autornoticia6",
    fecha:Date().toString(),
    imagen:"../../../assets/economia.jpg",
    texto:"La economía chilena medida con el Imacec extiende su periodo de recuperación y en agosto experimentó su tercer mayor registro histórico.",
    destacado:false,
    masinfo:"La economía chilena medida con el Imacec extiende su periodo de recuperación y en agosto experimentó su tercer mayor registro histórico, superando además las expectativas de los analistas y el mercado.El índice registró un incremento de 19,1% en el octavo mes del año, superior al 18,1% del mes anterior y al 16% que, en promedio, esperaban los expertos luego que ayer el INE revelara los resultados de la producción industrial y ventas del comercio.El Banco Central dijo que la serie desestacionalizada aumentó 1,1% respecto del mes precedente y 17,8% en doce meses y recordó que el mes registró un día hábil más que agosto de 2020. Este resultado se explicó, principalmente, por la mayor apertura de la economía, las medidas de apoyo a los hogares, los retiros parciales de los fondos previsionales y por la menor base de comparación de agosto del año anterior.Con el resultado de agosto, la economía chilena medida con este indicador acumula un crecimiento inédito de 11,5% en 2021, un año marcado por niveles de liquidez jamás antes vistos producto de los retiros de fondos de las AFP estimados en unos US$ 50.000 millones y las ayudas estatales por otros US$ 30.000 millones.Cabe recordar que en su último Informe de Polírica Monetaria (IPoM) de septiembre, el Banco Central elevó una vez más su cálculo sobre crecimiento para la economía chilena, situándolo en un rango de 10,5% y 11,5%.Desde el gobierno celebraron el alza de la actividad. El ministro de Hacienda, Rodrigo Cerda, indicó que esta cifra nos está mostrando que nuestra economía se está recuperando, se está poniendo de pie. Y por eso queríamos estar hoy día acá, porque gran parte de esa recuperación corresponde a los servicios, que había sido la industria más rezagada, y que hoy también se está recuperando. Con la mayor movilidad, estamos logrando que los servicios de educación, salud, y todo lo que corresponde a turismo y a restaurantes se están empezando a poner de pie y eso es algo que nos pone muy contentos.",
  },
  {
    id:7,
    categoria:"Otro",
    titulo:"3, 2, 1... Despega el tráiler de 'Lightyear', la precuela de 'Toy Story', para conocer a fondo a Buzz",
    autor:"autornoticia7",
    fecha:Date().toString(),
    imagen:"../../../assets/buzz.jpg",
    texto:"Hasta el infinito y más allá es donde nos lleva el recién publicado tráiler de Lightyear, la película precuela de Toy Story.",
    destacado:false,
    masinfo:"¡Hasta el infinito y más allá! El universo de Toy Story regresará en una nueva película a cargo de Pixar, un proyecto conocido como Lightyear que se estrenará en cines durante el verano de 2022, el 17 de junio concretamente. Así lo ha anunciado la compañía a través de un teaser tráiler, que podéis ver sobre estas líneas. En esta ocasión, Buzz Lightyear sí alcanzará el espacio y será  interpretado por Chris Evans (Capitán América).Esta nueva aventura de acción y ciencia ficción presenta la historia de origen de Buzz Lightyear, el héroe que inspiró el juguete en Toy Story. Se trata de un explorador espacial que buscará la grandeza en las estrellas. Además de Chris Evans, el director y veterano animador de Pixar, Angus McLane, ha sido elegido para dirigir este largometraje, producido por Galyn Susman.",
  }

];
