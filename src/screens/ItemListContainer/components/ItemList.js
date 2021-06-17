import React from 'react';
import { Item } from './Item';
import '../styles.css';
import CardDeck from 'react-bootstrap/CardDeck'
import {  useParams } from 'react-router-dom'




export const ItemList = ({data}) => {
    const { id } = useParams()

    return <CardDeck className="cardDeck" >{data.map((item, i) =>

        <Item {...item} key={i === id} />
    )}
    </CardDeck>

}

