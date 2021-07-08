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
                console.log("Item doesn't exist!");
                return;
            }

            setItem({ id: doc.id, ...doc.data() });
        }).catch((error) => {
            console.log("Error searching items", error)
        }).finally(() => { setLoading(false) });
    }, [id])


 
    return <Container >

        {loading ? <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
        </Spinner> : <ItemDetail {...item}></ItemDetail>}
    </Container>
}