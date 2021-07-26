import React from 'react';
import { useCartContext } from '../../context/CartContext';
import { DashCircle } from 'react-bootstrap-icons';
import { Button, ButtonGroup, Form, Row, Col, Container, Table } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Cart.css'
import { dataBase } from '../../firebase/firebase'
import firebase from 'firebase/app'
import 'firebase/firestore';
import { ModalEnd } from './ModalEnd'
import { validateForm } from './validations'



export const Cart = () => {

    const { cart,  clear, removeItem, totalPrice } = useCartContext();

    const [user, setUser] = React.useState({ name: '', phone: '', email: '' });

    const [modalShow, setModalShow] = React.useState(false);
    const [orderId, setOrderId] = React.useState('');

    const history = useHistory();

    const routeLink = (path) => {
        history.push(path);
    }


    const handleClickContinue = () => {

        const orders = dataBase.collection("orders");

        const newOrder = {
            buyer: user,
            items: cart,
            date: firebase.firestore.Timestamp.fromDate(new Date()),
            total: totalPrice(cart)
        }

        const itemsToUpdate = dataBase.collection("productos")
            .where(firebase.firestore.FieldPath.documentId(), 'in', cart.map(i => i.item.id));

        itemsToUpdate.get().then(querySnapshot => {
            const batch = dataBase.batch();
            const outOfStock = [];

            querySnapshot.docs.forEach((docSnapshot, idx) => {
                if (docSnapshot.data().stock >= cart[idx].quantity) {
                    batch.update(docSnapshot.ref, { stock: docSnapshot.data().stock - cart[idx].quantity });

                } else {
                    outOfStock.push({ ...docSnapshot.data(), id: docSnapshot.id });
                }
            });

            if (outOfStock.length === 0) {
                orders.add(newOrder);
                batch.commit().then(() => {
                    orders
                        .orderBy('date', "desc").limit(1)
                        .get().then(querySnapshot => setOrderId(querySnapshot.docs[0].id));
                });

            }

        });

        setModalShow(true);
    }

    return <>{
        cart.length === 0 ? <div className="emptyContainer">
            <h1 className="noItems"> No hay productos en el carrito! </h1>
            <Button variant="dark" onClick={e => routeLink("/")}>Volver</Button>
        </div> : <Container fluid className="iContainer">
            <ModalEnd show={modalShow} orderId={orderId}></ModalEnd>
            <Row>
                <Col sm={6}>
                    <Table responsive striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Quitar</th>
                                <th>Producto</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item, i) => {
                                return <tr key={i} >
                                    <td><Button variant="outline-danger" onClick={() => removeItem(item.item.id)}><DashCircle /></Button></td>
                                    <td>{item.item.titulo}</td>
                                    <td>{item.quantity}</td>
                                    <td>${Number(item.item.precio.replace(/[^0-9-,]+/g, "")) * item.quantity}</td>
                                </tr>
                            })}
                            <tr>
                                <td></td>
                                <td colSpan="2">TOTAL</td>
                                <td>${totalPrice(cart)}</td>
                            </tr>
                        </tbody>
                    </Table>
                </Col>
                <Col sm={6}>
                    <Form>
                        <Form.Group controlId="formGroupName">
                            <Form.Label>Nombre y apellido</Form.Label>
                            <Form.Control type="text" placeholder="Nombre y apellido"
                                onChange={(e) => { setUser({ ...user, name: e.target.value }) }} />
                        </Form.Group>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label>Email </Form.Label>
                            <Form.Control type="email" placeholder="Email"
                                onChange={(e) => { setUser({ ...user, email: e.target.value }) }} />
                        </Form.Group>
                        <Form.Group controlId="formGroupPhone">
                            <Form.Label>Teléfono</Form.Label>
                            <Form.Control type="number" placeholder="Teléfono"
                                onChange={(e) => { setUser({ ...user, phone: e.target.value }) }} />
                        </Form.Group>

                    </Form>

                </Col>
            </Row>
            <Row className="btns">
                <ButtonGroup >
                    <Button variant="danger" onClick={e => clear(cart)}>Vaciar carrito</Button>
                    <Button variant="success"
                        onClick={() => validateForm(user.name, user.email, user.phone, handleClickContinue)} >
                        Continuar</Button>
                </ButtonGroup>
            </Row>
        </Container>
    }
    </>
}