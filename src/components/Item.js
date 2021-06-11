import React from 'react';
import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/Button';
import { ItemCount } from './ItemCount';



export const Item = ({pedal, precio, img, stock, initial}) => {
    return <Card className="card">
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title>{pedal}</Card.Title>
            <Card.Text>
                {precio}
            </Card.Text>
            <ItemCount initial={initial} stock={stock}></ItemCount>
            <Button variant="dark">Añadir al carrito</Button>
        </Card.Body>
    </Card>
}

