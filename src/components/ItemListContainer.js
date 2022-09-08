import { useEffect, useState } from 'react';
import desafio from './Item'
import ItemCount from './ItemCount';
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom';
const {products} = require( '../utils/ItemList');


const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const{ id } = useParams();

    useEffect (() => {
        if (id) {
        desafio(products.filter(item => item.categoryId == id))
        .then (result => setProductos(result))}
        else {
            desafio(products)
        .then (result => setProductos(result))
        }
    },[id]);
    return(
    <>
    {
        productos.map(item => 
            
            (<><h4>{item.name}</h4>
            <Link to={`/item/${item.id}`}><img src={item.image} alt=''/></Link> 
            <ItemCount />
            </>
            ))
    }
    </>)
}

export default ItemListContainer;