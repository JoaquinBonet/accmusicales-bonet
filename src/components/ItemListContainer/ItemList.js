import React from 'react';
import { Item } from './Item';
import './styles.css';
import CardDeck from 'react-bootstrap/CardDeck'

export const items = [{
    pedal: 'Bogner ecstasy red',
    precio: '$30.000',
    img: "https://media.sweetwater.com/api/i/q-82__ha-ba2a3b8a0ebc868d__hmac-80e36a22612c1be571ab4ee3c901baba08265af9/images/items/750/EcstasyRed-large.jpg",
    stock: 5,
    initial: 1,
    descripcion: "Con el Bogner Ecstasy Red, Bogner empaqueta el canal rojo de su legendaria parte superior de éxtasis en un pedal compacto que cabe en cada pedalera. Bogner utiliza un circuito totalmente analógico con cinco etapas de ganancia discretas de Clase A, de modo que se dispone de una sobremarcha de alta ganancia ardiente para disfrutar al máximo del sonido en el rock y el metal. Además del ecualizador probado de 3 bandas, también están disponibles cuatro mini-interruptores, que pueden influir en la estructura del timbre y del gain. Por último, pero no por ello menos importante, el pedal rojo de Bogner Ecstasy tiene un boost conmutable que proporciona un volumen adicional y reservas de ganancia si es necesario."
},
{
    pedal: 'Bogner ecstasy blue',
    precio: '$30.000',
    img: 'https://media.sweetwater.com/api/i/f-webp__q-82__ha-df2b63237859c4d9__hmac-4b2d50302cc22e2cda1d6713b0eee5968969f055/images/items/750/EcstasyBlue-large.jpg.auto.webp   ',
    stock: 3,
    initial: 1,
    descripcion: 'El éxtasis se introdujo por primera vez en 1992 y todavía se fabrica a mano en Los Ángeles. El pedal Ecstasy Blue reproduce los sonidos del clásico canal "azul" conocido por su Rock n Roll Crunch. Pero el Azul también se lleva bien en entornos difíciles y destruye aunque sea necesario! Reinhold Bogner equipó el pedal con 4 pasos discretos de ganancia de Clase A y de forma muy consciente sin amplificadores operacionales o recorte de diodos. Así el pedal representa exactamente el sonido del canal del amplificador y permanece claro, dinámico e incluso los acordes complejos se disuelven limpiamente.'
},
{
    pedal: 'Suhr Riot',
    precio: '$40.000',
    img: 'https://files.soniccdn.com/images/products/original/710/suhr-riot-21710.jpg',
    stock: 1,
    initial: 1
}]

const itemsPromise = new Promise((resolve, reject) => {

    setTimeout((items.length > 0 ? resolve(items) : reject("No hay items")), 2000);

})



export const ItemList = (props) => {
    const [data, setData] = React.useState([]);
    React.useEffect(() => itemsPromise.then(setData), [])


    return <CardDeck className="cardDeck" >{data.map((item, i) =>

        <Item key={i} pedal={item.pedal} precio={item.precio} img={item.img} stock={item.stock} initial={item.initial} />
    )}
    </CardDeck>

}

