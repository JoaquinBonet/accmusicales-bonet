import React from 'react';
import { ItemCount } from './ItemCount';
import './styles.css'

export const ItemListContainer = (props) => {
    return <div className="container" ><p className="greeting">{props.greeting}</p><ItemCount initial={1} stock={5} ></ItemCount></div>
}