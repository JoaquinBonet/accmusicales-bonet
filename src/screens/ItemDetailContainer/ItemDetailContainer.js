import React from 'react';
import Container from 'react-bootstrap/Container'
import { ItemDetail } from './ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import { itemsPromise } from '../ItemListContainer/ItemListContainer'
import { useParams } from 'react-router-dom'




export const ItemDetailContainer = (props) => {
    const { id } = useParams()
    console.log(id)
    console.log(itemsPromise)
    const [data, setData] = React.useState([]);
    React.useEffect(() => { itemsPromise.then(setData) }, []);
    const itemFiltrado = data.find((item) => {return item.id === Number(id)})
    console.log(itemFiltrado)
    return <Container >
        <ItemDetail {...itemFiltrado}></ItemDetail>

    </Container>
}