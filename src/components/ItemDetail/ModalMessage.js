import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export const ModalMessage = ({show, setShow}) => {



    const handleClose = () => setShow(false);
   
    return (
        <>
    
            <Modal show={show} onHide={handleClose} variant="dark" backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Se agregó el producto al carrito</Modal.Title>
                </Modal.Header>
                <Modal.Body>¿Qué deseas hacer?</Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-dark" as={Link} to="/cart/">
                        Ir al carrito
                    </Button>
                    <Button variant="dark" as={Link} to="/">
                        Continuar comprando
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}