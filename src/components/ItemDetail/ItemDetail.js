import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import './ItemDetail.css';
import { ItemCount } from '../ItemCount/ItemCount';
import { Link, useHistory } from 'react-router-dom';



export const ItemDetail = (props) => {
    const [display, setDisplay] = React.useState({
        1: 'oculto',
        2: ''
    });

    const history =  useHistory();

    const routeClick = (path) => {
        history.push(path);
    }

    const handleClick = (e) => {
        setDisplay({
            1: '',
            2: 'oculto'
        });
    }

    return <>
        <Row>
            <Col sm={12} ><h1 className="title">{props.titulo}</h1></Col>
        </Row>
        <Row>
            <Col sm={9} ><h3 className="price">{props.precio}</h3></Col>
            <Col sm={3} className="buy" >
                <ItemCount stock={props.stock} handleClick={handleClick} className={display[2]}></ItemCount>


                <Button variant="dark" className={`end ${display[1]}`} onClick={() => routeClick("/cart/")}>Terminar compra!</Button>
            </Col>

        </Row>
        <Row>
            <Col sm ><img className="img" src={props.img} alt={props.pedal} /></Col>
            <Col sm className="colText"> <p className="text"> {props.descripcion}</p></Col>
        </Row>




    </>
}






