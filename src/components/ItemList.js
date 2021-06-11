import React from 'react';
import { Item } from './Item';
import './styles.css';
import CardDeck from 'react-bootstrap/CardDeck'

const itemsPromise = new Promise((resolve, reject) => {
    const items = [{ pedal: 'Bogner ecstasy red', precio: '$30.000', img: "https://media.sweetwater.com/api/i/q-82__ha-ba2a3b8a0ebc868d__hmac-80e36a22612c1be571ab4ee3c901baba08265af9/images/items/750/EcstasyRed-large.jpg", stock: 5, initial: 1 },
    { pedal: 'Bogner ecstasy blue', precio: '$30.000', img: 'https://media.sweetwater.com/api/i/f-webp__q-82__ha-df2b63237859c4d9__hmac-4b2d50302cc22e2cda1d6713b0eee5968969f055/images/items/750/EcstasyBlue-large.jpg.auto.webp   ', stock: 3, initial: 1 },
    { pedal: 'Suhr Riot', precio: '$40.000', img: 'https://files.soniccdn.com/images/products/original/710/suhr-riot-21710.jpg', stock: 1, initial: 1 }]
    setTimeout((items.length > 0 ? resolve(items) : reject("No hay items")), 2000);

})



export const ItemList = (props) => {
    const [data, setData] = React.useState([]);
    React.useEffect(() => itemsPromise.then(setData), [])


    return <CardDeck className="cardDeck" >{data.map((item, i) =>

        <Item key={i} pedal={item.pedal} precio={item.precio} img={item.img} stock={item.stock} initial={item.initial}/>
    )}
    </CardDeck>

}

