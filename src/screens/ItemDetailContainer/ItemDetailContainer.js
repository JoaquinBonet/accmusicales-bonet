import React from 'react';
import Container from 'react-bootstrap/Container'
import { ItemDetail } from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

import { useParams } from 'react-router-dom'
import { dataBase } from '../../firebase/firebase'
import Spinner from 'react-bootstrap/Spinner'




export const ItemDetailContainer = (props) => {
    const { id } = useParams();
    const [item, setItem] = React.useState([]);
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        setLoading(true);
        const itemCollection = dataBase.collection("productos");

        const item = itemCollection.doc(id);
        item.get().then((doc) => {
            if (!doc.exists) {
                alert("Item doesn't exist!");
                return;
            }

            setItem({ id: doc.id, ...doc.data() });
        }).catch((error) => {
            alert("Error searching items", error);
        }).finally(() => { setLoading(false) });
    }, [id])



    return <Container id="itemContainer">

        {loading ? <Spinner animation="border" role="status" style={{marginTop: 50, marginBottom:800, marginLeft: 500}}/>
            : <ItemDetail {...item}></ItemDetail>}
    </Container>
}