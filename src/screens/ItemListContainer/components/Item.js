import React from 'react';
import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/Button';
//import { ItemCount } from './ItemCount/ItemCount';
import '../styles.css';
import { Link } from 'react-router-dom'



export const Item = ({ titulo, precio, img, stock, initial, id }) => {

    return <Card>
        <Link to={`/item/${id}`}>
            <Card.Img variant="top" src={img} />
        </Link>
        <Card.Body>
            <Card.Title>{titulo}</Card.Title>
            <Card.Text>
                {precio}
            </Card.Text>
            <Link to={`/item/${id}`}>
                <Button variant="dark" >Ver detalle</Button>
            </Link>
        </Card.Body>
    </Card>
}

