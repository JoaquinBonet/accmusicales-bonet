import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ItemDetail.css';



export const ItemDetail = (props) => {
    return <>
        <Row>
            <Col sm={12} ><h1 className="title">{props.titulo}</h1></Col>
        </Row>
        <Row>
            <Col sm={12} ><h3 className="price">{props.precio}</h3></Col>
        </Row>
        <Row>
            <Col sm ><img className="img" src={props.img} alt={props.pedal} /></Col>
            <Col sm className="colText"> <p className="text"> {props.descripcion}</p></Col>
        </Row>
        
    </>
}






