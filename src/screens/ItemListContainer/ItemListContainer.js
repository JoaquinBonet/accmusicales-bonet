import React from 'react';
import './styles.css'
import { ItemList } from '../../components/ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { itemsPromise } from '../../services/items'



export const ItemListContainer = (props) => {
    const [data, setData] = React.useState([]);
    const { id } = useParams()
    React.useEffect(() => itemsPromise.then(setData), [])
    return <div className="container" ><ItemList data={id ? data.filter((item) => { return item.cat === id }) : data} > </ItemList> </div>
}





