import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';


export const ModalEnd = (props) => {

    const { clear } = useCartContext();

    const history = useHistory();

    const handleClick = (path) => {
        history.push(path);
        clear();

    }

    return <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
    >
      
        <Modal.Body>
            <h4>Orden realizada </h4>
            <p>Su código de orden es <b>{ props.orderId || 'cargando...' }</b> </p>
           
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={() => handleClick("/")} variant="dark">Volver al inicio</Button>
        </Modal.Footer>
    </Modal>
}