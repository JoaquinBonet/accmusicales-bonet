import React from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from 'react-bootstrap/Button';
import './ItemCount.css'


export const ItemCount = (props) => {
    const [count, setCount] = React.useState(props.initial);

    return <div className="itemCount">
        <ButtonGroup aria-label="ItemCount" >
            <Button variant="outline-dark" className="btnCount" onClick={() => setCount(count - 1)} disabled={count < 1 ? "true" : ""}>-</Button>
            <span className="count"><b>{count}</b></span>
            <Button variant="outline-dark" className="btnCount" onClick={() => setCount(count + 1)} disabled={count === props.stock ? "true" : ""}>+</Button>
        </ButtonGroup>
    </div>
}



