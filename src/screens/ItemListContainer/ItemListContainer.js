import React from 'react';
import './styles.css'
import { ItemList } from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom'

export const items = [{
    titulo: 'Bogner ecstasy red',
    precio: '$30.000',
    img: "https://media.sweetwater.com/api/i/q-82__ha-ba2a3b8a0ebc868d__hmac-80e36a22612c1be571ab4ee3c901baba08265af9/images/items/750/EcstasyRed-large.jpg",
    stock: 5,
    initial: 1,
    descripcion: "Con el Bogner Ecstasy Red, Bogner empaqueta el canal rojo de su legendaria parte superior de éxtasis en un titulo compacto que cabe en cada tituloera. Bogner utiliza un circuito totalmente analógico con cinco etapas de ganancia discretas de Clase A, de modo que se dispone de una sobremarcha de alta ganancia ardiente para disfrutar al máximo del sonido en el rock y el metal. Además del ecualizador probado de 3 bandas, también están disponibles cuatro mini-interruptores, que pueden influir en la estructura del timbre y del gain. Por último, pero no por ello menos importante, el titulo rojo de Bogner Ecstasy tiene un boost conmutable que proporciona un volumen adicional y reservas de ganancia si es necesario.",
    cat: "pedales",
    id: 1
},
{
    titulo: 'Bogner ecstasy blue',
    precio: '$30.000',
    img: 'https://media.sweetwater.com/api/i/f-webp__q-82__ha-df2b63237859c4d9__hmac-4b2d50302cc22e2cda1d6713b0eee5968969f055/images/items/750/EcstasyBlue-large.jpg.auto.webp   ',
    stock: 3,
    initial: 1,
    descripcion: 'El éxtasis se introdujo por primera vez en 1992 y todavía se fabrica a mano en Los Ángeles. El titulo Ecstasy Blue reproduce los sonidos del clásico canal "azul" conocido por su Rock n Roll Crunch. Pero el Azul también se lleva bien en entornos difíciles y destruye aunque sea necesario! Reinhold Bogner equipó el titulo con 4 pasos discretos de ganancia de Clase A y de forma muy consciente sin amplificadores operacionales o recorte de diodos. Así el titulo representa exactamente el sonido del canal del amplificador y permanece claro, dinámico e incluso los acordes complejos se disuelven limpiamente.',
    cat: "pedales",
    id: 2
},
{
    titulo: 'Suhr Riot',
    precio: '$40.000',
    img: 'https://files.soniccdn.com/images/products/original/710/suhr-riot-21710.jpg',
    stock: 1,
    initial: 1,
    descripcion: 'Riot, en su nombre da una pista, es una caja de distorsión high-gain que hará que un pequeño combo suene como un Stack rugiente. Hemos escuchado muchas cajas de distorsión, y nunca estuvimos satisfechos con como sonaban o como se sentían con un amplificador limpio. Queríamos las características sónicas de la distorsión, y la forma en que el pedal reacciona a nuestra forma de tocar como un cabezal de 100w de bulbos hogh gain. Después de muchas pruebas, re-trabajar y reconstrucción del Riot sobre un período de más de un año, finalmente estamos satisfechos con como se desempeña y suena en aplicaciones reales en el mundo de la música con músicos profesionales en vivo y en el estudio. El Riot hará que te olvides que estás tocando a través de un pedal.',
    cat: "pedales",
    id: 3
},
{
    titulo: 'Eventide H9 Max',
    precio: '$170.000',
    img: 'https://static.sonovente.com/img/library/zoom/55/optim/55940_1.jpg',
    stock: 2,
    initial: 1,
    descripcion: 'Eventide H9 Max Harmonizer está lleno de los emblemáticos efectos de reverberación, chorus, delay, modulación, pitch-shifting y distorsión de Eventide. Con el H9, puede evocar el paisaje sónico de álbumes legendarios y abrir las puertas a la creación de nuevos sonidos nunca antes escuchados. Recrear fielmente los sonidos icónicos utilizados por los mejores artistas, ingenieros y productores como Steve Vai, Jimmy Page, Frank Zappa, Eddie Van Halen, Richard Devine, Suzane Ciani y muchos más. El Eventide H9 Max Harmonizer presenta una interfaz de usuario simple y de un solo botón que permite una fácil edición de efectos y selección preestablecida. Dos conmutadores de pedal le permiten cambiar los preajustes, tocar el tempo etc. El H9 ofrece sonido de calidad de estudio, E / S estéreo y compatibilidad MIDI completa. Con la aplicación gratuita H9 Control para PC, Mac y iOS, puede comprar algoritmos adicionales, crear listas de conjuntos, editar y administrar ajustes preestablecidos de forma inalámbrica a través de Bluetooth o USB. Por otro lado permite cargar efectos heredados de TimeFactor (delay), ModFactor (modulación), PitchFactor (pitch shifting), y Space (Reverb) de Eventide.',
    cat: "multifx",
    id: 4
},
{
    titulo: 'Mogami Gold 3 mts plug/plug',
    precio: '$7.000',
    img: 'https://http2.mlstatic.com/D_NQ_NP_647101-MLA29128511722_012019-O.webp',
    stock: 7,
    initial: 1,
    descripcion: 'Los cables Mogami GOLD INSTRUMENT-R para pedal de guitarra proporcionan un tono cristalino y un fondo silencioso y silencioso. La mejor opción para el cableado de estudios de grabación profesionales durante décadas, los cables de instrumentos Mogami Gold muestran una claridad increíble y preservan la personalidad única de tu instrumento y efectos.  \nDiseñados para el más alto nivel de transparencia, los cables de instrumentos Mogami Gold están fabricados con un subescudo de polímero conductivo, un escudo en espiral de alta densidad (UHD) y un núcleo de cobre libre de oxígeno (OFC). Para músicos en movimiento, los cables de instrumentos Mogami Gold también están diseñados con una capa de protección antiestática de PVC impregnado de carbono para evitar todo el ruido de manejo.  \nCables con cable de alta impedancia para guitarra/instrumento Mogami Gold Instrument Cables cuentan con sonido de alta definición ideal para uso con guitarra acústica, guitarra eléctrica, bajo, teclado, efectos de pedal y otras aplicaciones de cable de instrumento desequilibrado.  \nEste cable de instrumento de guitarra Mogami GOLD INSTRUMENT-03R es de 3 pies de longitud. La serie de cables Mogami GOLD INSTRUMENT-R para instrumentos de guitarra también está disponible en una longitud de 10.0 in y 2, 6, 10, 18 y 25 pies de longitud.  \nMogami garantía de por vida "No Excuses": todos los cables Mogami incluyen la garantía limitada de por vida "No Excuses" de Mogami al comprador original y están orgullosamente apoyados por Mogami y su red dedicada de distribuidores autorizados. Por favor, consulta la totalidad de la especificación de garantía limitada de por vida "No Excuses" de Mogami Cable para obtener detalles completos.',
    cat: 'cables',
    id: 5
},
{
    titulo: 'Jim Dunlop Jazz III Puas Nylon Pack X 6',
    precio: '$890',
    img: 'https://http2.mlstatic.com/D_NQ_NP_899102-MLA31016646057_062019-O.webp',
    stock: 4,
    initial: 1,
    descripcion: 'Flexible, ligera y prácticamente indestructible.  \nMoldeado de liberación rápida Edge.  \nIcónica forma de Jazz III y punta.',
    cat: 'puas',
    id: 6
},
{
    titulo: 'Set Mics Fender Vintage Noiseless Strat',
    precio: '$67.149',
    img: 'https://http2.mlstatic.com/D_NQ_NP_697141-MLA42417889654_062020-O.webp',
    stock: 2,
    initial: 1,
    descripcion: 'Las pastillas Vintage Noiseless ™ Strat producen toda la brillantez, definición y atributos armónicos del tono Strat original de una sola bobina sin el zumbido. Obtenga el preciado tono Stratocaster temprano con circuitos modernos y artesanía.  \nCaracterísticas:  \n• Alambre magnético recubierto de polisol  \n• Varillas popadas a mano escalonadas para un tono suave y equilibrado  \n• Los imanes Alnico 2 crean armónicos complejos con un ataque más cálido y un rango medio menos agresivo  \n• Alambre de salida revestido de vinilo y bobina de plástico.  \n• Hardware de instalación incluido',
    cat: 'mics',
    id: 7
},
{
    titulo: 'Micrófono Gibson Classic 57 Plus Dorado',
    precio: '$30.187',
    img: 'https://www.woodbrass.com/images/SQUARE400/woodbrass/GIBSON+MICRO+57+CLASSIC+GOLD.JPG',
    stock: 1,
    initial: 1,
    descripcion: 'La Classic 57 Plus. Esta PAF usa un bobinado con vueltas de hilo extra, igual que en los 50, donde se bobinaban accidentalmente más de lo conveniente. La opción perfecta para puente, emparejada con la 57 Classic en mástil.  \nLa Gibson 57 Classic Plus es una bobina de Alnico II y separadores de arce, tal y como verías en una original de la época. De hecho conservan la leyenda PAF en su base, como se hacía en los 50s. Perfecta para emparejarla con la 57 Classic. Mismo tono, con un poquito más de salida, que el tone-stack de tu amplificador agradecerá cuando quieras saturar sin perder crema. Dos conductores, y encerado total. Olvídate de acoples indeseados.',
    cat: 'mics',
    id: 8
},
{
    titulo: 'Correa Guitarra Hipstrap Vintage Jacquard',
    precio: '$1.299',
    img: 'https://http2.mlstatic.com/D_NQ_NP_992236-MLA44127949914_112020-O.webp',
    stock: 10,
    initial: 1,
    descripcion: 'Nuestra nueva linea de productos HipStrap Classic Jacquard trae de regreso algunos de las correas más lindas, psicodélicas e icónicas de la historia.    Confeccionadas con los mejores materiales del mercado: - Diseños tejidos en jacquard. - Base de Nylon Dupont 6/6- Herrajes de metal. - Punteras 100% cuero Argentino. Nuestros productos son confiados por clientes mayoristas y minoristas alrededor del mundo y a su vez utilizados por cientos de músicos de alto reconocimiento internacional. Hecho con amor y pasión en Buenos Aires, Argentina.',
    cat: 'correas',
    id: 9
},
{
    titulo: 'Soporte Pie De Instrumento Stagg Sg100bk',
    precio: '$1.820',
    img: 'https://http2.mlstatic.com/D_NQ_NP_617657-MLA41230128834_032020-O.webp',
    stock: 8,
    initial: 1,
    descripcion: `Modelo: SG100BK ESPECIFICACIONES:  \nCon patas plegables.  \nRango de altura: 65 a 70 cm / 25,6 a 27,6 pulgadas  \nHorquilla de cuello con banda de seguridad.  \nPeso: 0,95 kg / 2,1 libras \nColor: Negro `,
    cat: 'otros',
    id: 10
},

]

export const itemsPromise = new Promise((resolve, reject) => {

    setTimeout((items.length > 0 ? resolve(items) : reject("No hay items")), 2000);

})

export const ItemListContainer = (props) => {
    const [data, setData] = React.useState([]);
    const { id } = useParams()
    React.useEffect(() => itemsPromise.then(setData), [])
    return <div className="container" ><ItemList data={id ? data.filter((item) => { return item.cat === id }) : data} > </ItemList> </div>
}