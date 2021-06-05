import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import './styles.css'


export const ItemCount = (props) => {
    const [count, setCount] = React.useState(props.initial);

    return <div className="itemCount">
        <ButtonGroup aria-label="ItemCount" >
            <Button variant="outline-dark" className="btnCount" onClick={() => setCount(count - 1)} disabled={count < 1 ? "true" : ""}>-</Button>
            <div className="count"><b>{count}</b></div>
            <Button variant="outline-dark" className="btnCount" onClick={() => setCount(count + 1)} disabled={count === props.stock ? "true" : ""}>+</Button>
        </ButtonGroup>
        <Button variant="outline-success" className="btnAdd">Agregá al carrito</Button>
    </div>
}



