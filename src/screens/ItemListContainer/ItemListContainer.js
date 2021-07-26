import React from 'react';
import './styles.css'
import { ItemList } from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { dataBase } from '../../firebase/firebase'
import Spinner from 'react-bootstrap/Spinner'



export const ItemListContainer = (props) => {

    const [data, setData] = React.useState([]);
    const [loading, setLoading] = React.useState()
    const { catID } = useParams()

    React.useEffect(() => {
        setLoading(true);
        const itemCollection = dataBase.collection("productos");

        const itemCategory = itemCollection.where('cat', '==', `${catID}`);

        ( catID ? itemCategory : itemCollection).get().then((querySnapshot) => {
            if (querySnapshot.size === 0) {
                alert("No results!");
            }

            setData(querySnapshot.docs.map(doc => { return { id: doc.id, ...doc.data() } }));


        }).catch((error) => {
            alert("error searching items", error)
        }).finally(() => { setLoading(false) });
    }, [catID])

    return <div className="container" >
        {loading ? <Spinner animation="border" role="status" style={{marginTop: 50, marginBottom:800, marginLeft: 500}}>
            <span className="sr-only">Loading...</span>
        </Spinner> : <ItemList data={data} />}
    </div>

}






