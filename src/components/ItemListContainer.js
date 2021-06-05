import React from 'react';
import { ItemCount } from './ItemCount';

export const ItemListContainer = () => {
    return <div className="container" ><ItemCount initial={1} stock={5} ></ItemCount></div>
}