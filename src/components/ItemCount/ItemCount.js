import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import './ItemCount.css';
import { useCartContext } from '../../context/CartContext'


export const ItemCount = ({stock, handleClick, className, id}) => {
    const [count, setCount] = React.useState(0);
    const { isInCart } = useCartContext();

    const handleStock = (id, count) => {
        if (isInCart(id)){
            return isInCart(id).quantity + count ===  stock 
        } else {
            return stock === count;
        }
        
    }

    const updateCount = (value) => {
        return setCount(count + value);
    }

    return <div className={className } >
        <ButtonGroup aria-label="ItemCount" className="itemCount" >
            <Button variant="outline-dark" className="btnCount" onClick={() => updateCount(-1)} disabled={!count}>-</Button>
            <span className="count"><b>{count}</b></span>
            <Button variant="outline-dark" className="btnCount" onClick={() =>updateCount(1)} disabled={handleStock(id, count)}>+</Button>
            <Button variant="dark" onClick={() => handleClick({count})} className="addToCart" disabled={!count}>Agregar al Carrito</Button>
        </ButtonGroup>
        
       
         
    </div>
}



