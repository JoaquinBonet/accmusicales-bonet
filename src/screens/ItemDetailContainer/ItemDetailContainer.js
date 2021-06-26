import React from 'react';
import Container from 'react-bootstrap/Container'
import { ItemDetail } from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import { itemsPromise } from '../../services/items'
import { useParams } from 'react-router-dom'




export const ItemDetailContainer = (props) => {
    const { id } = useParams();
    const [data, setData] = React.useState([]);
    React.useEffect(() => { itemsPromise.then(setData) }, []);
    const itemFiltrado = data.find((item) => {return item.id === Number(id)})
    return <Container >
        <ItemDetail {...itemFiltrado}></ItemDetail>

    </Container>
}