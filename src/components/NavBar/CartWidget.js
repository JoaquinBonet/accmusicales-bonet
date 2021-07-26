import React from 'react';
import { Cart } from 'react-bootstrap-icons';
import { useCartContext } from '../../context/CartContext';
import Badge from 'react-bootstrap/Badge/';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom';
import './CartWidget.css'


export const CartWidget = () => {
    const { cart, totalItems } = useCartContext();

    return <>{cart.length > 0 ?
        <Button className="btn btn-dark" as={Link} to="/cart/" > <Cart /><Badge variant="dark">{totalItems(cart)}</Badge></Button> : null}
    </>
}
