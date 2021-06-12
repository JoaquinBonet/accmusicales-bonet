import React from 'react';
import Container from 'react-bootstrap/Container'
import { ItemDetail } from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';


const getItem = new Promise((resolve, reject) => {
    const pedal = {
        pedal: 'Bogner ecstasy red',
        precio: '$30.000',
        img: "https://media.sweetwater.com/api/i/q-82__ha-ba2a3b8a0ebc868d__hmac-80e36a22612c1be571ab4ee3c901baba08265af9/images/items/750/EcstasyRed-large.jpg",
        stock: 5,
        initial: 1,
        descripcion: "Con el Bogner Ecstasy Red, Bogner empaqueta el canal rojo de su legendaria parte superior de éxtasis en un pedal compacto que cabe en cada pedalera. Bogner utiliza un circuito totalmente analógico con cinco etapas de ganancia discretas de Clase A, de modo que se dispone de una sobremarcha de alta ganancia ardiente para disfrutar al máximo del sonido en el rock y el metal. Además del ecualizador probado de 3 bandas, también están disponibles cuatro mini-interruptores, que pueden influir en la estructura del timbre y del gain. Por último, pero no por ello menos importante, el pedal rojo de Bogner Ecstasy tiene un boost conmutable que proporciona un volumen adicional y reservas de ganancia si es necesario."
    }
    setTimeout(resolve(pedal), 2000)

})

export const ItemDetailContainer = (props) => {
    const [data, setData] = React.useState('');
    React.useEffect(() => { getItem.then(setData) }, []);
    return <Container >
        <ItemDetail img={data.img} precio={data.precio} descripcion={data.descripcion} pedal={data.pedal}></ItemDetail>

    </Container>
}