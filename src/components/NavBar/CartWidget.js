import React from 'react';
import { Cart } from 'react-bootstrap-icons';
import { useCartContext } from '../../context/CartContext';
import  Badge  from 'react-bootstrap/Badge/';
import Button from 'react-bootstrap/Button'
import { Link} from 'react-router-dom';
import './CartWidget.css'


export const CartWidget = () => {
    const { cart } = useCartContext();

    const totalItems = (cart) =>{
        let count = 0;
        for (let i = 0; i < cart.length; i++){
            count += cart[i].quantity; 
        };
        return count === 0 ? 'oculto' : count;
    };


    return <Button className={`${totalItems(cart)} btn btn-dark`}  as={Link} to="/cart/" > <Cart ></Cart><Badge variant="dark">{totalItems(cart)}</Badge></Button>
}
