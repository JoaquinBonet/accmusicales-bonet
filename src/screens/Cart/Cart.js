import React from 'react';
import { useCartContext } from '../../context/CartContext';
import Table from 'react-bootstrap/Table';
import { DashCircle } from 'react-bootstrap-icons';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Cart.css'



export const Cart = () => {

    const { cart, setCart } = useCartContext();
    const history = useHistory();
    const routeLink = (path) => {
        history.push(path);
    }

    const clear = () => {
        setCart([]);
    }

    const removeItem = (id) => {
        debugger;
        const removableItem = cart.find(item => { return item.item.id === id });
        const index = cart.indexOf(removableItem);
        cart.splice(index, 1);
        setCart([...cart]);

    }

    const totalPrice = (cart) => {
        let count = 0;
        for (let i = 0; i < cart.length; i++) {
            let currency = cart[i].item.precio;
            let priceNumber = Number(currency.replace(/[^0-9-,]+/g, "")) * cart[i].quantity;
            count += priceNumber;
        };
        return count;
    }

    return <>{
        cart.length === 0 ? <div className="iContainer">
            <h1 className="noItems"> No hay items en el carrito! </h1>
            <Button variant="dark" onClick={e => routeLink("/")}>Volver</Button>
        </div> : <div className="iContainer">

            <Table responsive striped bordered hover variant="dark">
                <thead>
                    <th>Quitar</th>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                </thead>
                <tbody>
                    {cart.map((item, i) => {
                        return <tr key={i} >
                            <td sm><Button variant="outline-danger" onClick={() => removeItem(item.item.id)}><DashCircle /></Button></td>
                            <td>{item.item.titulo}</td>
                            <td>{item.quantity}</td>
                            <td>$ {Number(item.item.precio.replace(/[^0-9-,]+/g, "")) * item.quantity}</td>
                        </tr>
                    })}
                    <tr>
                        <td></td>
                        <td colSpan="2">TOTAL</td>
                        <td>$ {totalPrice(cart)}</td>
                    </tr>
                </tbody>


            </Table>

            <div className="btns">
                <Button variant="danger" onClick={e => clear(cart)}>Vaciar carrito</Button>
                <Button variant="success">Continuar</Button>

            </div>
        </div>

    }
    </>



}