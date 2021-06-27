import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import './ItemCount.css';
import { useCartContext } from '../../context/CartContext'


export const ItemCount = ({stock, handleClick, className, id}) => {
    const [count, setCount] = React.useState(0);
    const { cart } = useCartContext();

    const isInCart = (id) => {
        return cart.find(item => { return item.item.id === id });
    }


    const handleStock = (id, count) => {
        if (isInCart(id)){
            console.log( isInCart(id).quantity + count)
            return isInCart(id).quantity + count ===  stock 
        } else {
            return stock === count 
        }
        
    }

    const onAdd = (e) => { 
        setCount(count + 1)
    }

    const onSubstract = (e) => {
        setCount(count - 1)
    }

    return <div className={className } >
        <ButtonGroup aria-label="ItemCount" className="itemCount" >
            <Button variant="outline-dark" className="btnCount" onClick={onSubstract} disabled={count === 0}>-</Button>
            <span className="count"><b>{count}</b></span>
            <Button variant="outline-dark" className="btnCount" onClick={onAdd} disabled={handleStock(id, count)}>+</Button>
            <Button variant="dark" onClick={() => handleClick({count})} className="addToCart" disabled={count === 0}>Agregar al Carrito</Button>
        </ButtonGroup>
        
       
         
    </div>
}



