import React from 'react';
import Card from 'react-bootstrap/card';
import Button from 'react-bootstrap/Button';
import './Item.css';
import { Link, useHistory } from 'react-router-dom'



export const Item = ({ titulo, precio, img, id }) => {
    const history = useHistory();
    const routeClick = (path) => {
        history.push(path);
    }

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
        <Button className="detail" variant="dark" onClick={()=> routeClick(`/item/${id}`)} >Ver detalle</Button>

    </Card>
}

