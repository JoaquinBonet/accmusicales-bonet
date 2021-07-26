import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'
import './ItemDetail.css';
import { ItemCount } from '../ItemCount/ItemCount';
import { useCartContext } from '../../context/CartContext';
import { ModalMessage} from './ModalMessage';




export const ItemDetail = (props) => {
    const [display, setDisplay] = React.useState({ 1: 'oculto', 2: '' });
    const { addItem } = useCartContext();
    const [quantity, setQuantity] = React.useState('');
    const [show, setShow] = React.useState(false);

  
    const handleShow = () => setShow(true);

    const handleClickCount = ({ count }) => {
        setDisplay({ 1: '', 2: 'oculto' });
        setQuantity(count);
    }


    const handleClickConfirm = (props) => {
        addItem({ item: props, quantity: quantity });
        handleShow();
    }

    return <>
        <ModalMessage show={show} setShow={setShow}/>
        <Row>
            <Col sm={12} ><h1 className="title">{props.titulo}</h1></Col>
        </Row>
        <Row>
            <Col sm={9} ><h3 className="price">{props.precio}</h3></Col>
            <Col sm={3} className="buy" >
                <ItemCount stock={props.stock} id={props.id} handleClick={handleClickCount} className={display[2]} />
                <Button variant="dark" className={`end ${display[1]}`} onClick={e => handleClickConfirm(props)}>

                    Confirmar
                </Button>

                <Button variant="light" className={`end ${display[1]}`} onClick={() => {
                    setDisplay({ 1: 'oculto', 2: '' });
                }}>
                    Cancelar
                </Button>
            </Col>

        </Row>
        <Row>
            <Col sm ><img className="img" src={props.img} alt={props.pedal} /></Col>
            <Col sm className="colText"> <p className="text"> {props.descripcion}</p></Col>
        </Row>




    </>
}






