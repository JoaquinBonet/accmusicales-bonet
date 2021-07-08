import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';


export const ModalEnd = (props) => {

    const { setCart } = useCartContext();

    const history = useHistory();

    const handleClick = (path) => {
        history.push(path);
        setCart([]);

    }

    return <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        backdrop="static"
    >
      
        <Modal.Body>
            <h4>Orden realizada</h4>
            <p>
                Toca el botón para volver a la navegación
            </p>
        </Modal.Body>
        <Modal.Footer>
            <Button onClick={() => handleClick("/")} variant="dark">Inicio</Button>
        </Modal.Footer>
    </Modal>
}