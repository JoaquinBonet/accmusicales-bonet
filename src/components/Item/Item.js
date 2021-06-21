import React from 'react';
import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/Button';
import './Item.css';
import { Link } from 'react-router-dom'



export const Item = ({ titulo, precio, img, id }) => {

    return <Card>
        <Link to={`/item/${id}`}>
            <Card.Img variant="top" src={img} />
        </Link>
        <Card.Body>
            <Card.Title>{titulo}</Card.Title>
            <Card.Text>
                {precio}
            </Card.Text>
        </Card.Body>
        <Link to={`/item/${id}`}>
                <Button className="detail" variant="dark" >Ver detalle</Button>
            </Link>
    </Card>
}

