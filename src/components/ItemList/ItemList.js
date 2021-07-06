import React from 'react';
import { Item } from '../Item/Item';
import './ItemList.css';
import CardDeck from 'react-bootstrap/CardDeck'





export const ItemList = ({ data }) => {

  
    return <CardDeck className="cardDeck" >{data.map((item, i) =>

        <Item {...item} key={i} />
    )}
    </CardDeck>

}

