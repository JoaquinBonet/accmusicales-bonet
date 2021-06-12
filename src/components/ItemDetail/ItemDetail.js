import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './ItemDetail.css';


export const ItemDetail = ({ precio, pedal, img, descripcion }) => {
    
    return <>
        <Row>
            <Col sm={12} ><h1 className="title">{pedal}</h1></Col>
        </Row>
        <Row>
            <Col sm={12} ><h3 className="price">{precio}</h3></Col>
        </Row>
        <Row>
            <Col sm ><img className="img" src={img} alt={pedal} /></Col>
            <Col sm className="colText"> <p className="text"> {descripcion}</p></Col>
        </Row>
        
    </>
}






