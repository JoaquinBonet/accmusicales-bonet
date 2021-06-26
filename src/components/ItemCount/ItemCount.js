import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import './ItemCount.css'


export const ItemCount = ({stock, handleClick, className}) => {
    const [count, setCount] = React.useState(0);

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
            <Button variant="outline-dark" className="btnCount" onClick={onAdd} disabled={count === stock}>+</Button>
            <Button variant="dark" onClick={() => handleClick({count})} className="addToCart" disabled={count === 0}>Agregar al Carrito</Button>
        </ButtonGroup>
        
       
         
    </div>
}



