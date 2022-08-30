import { useEffect, useState } from 'react';
import desafio from './Item'
import {item} from '../utils/ItemList'
import ItemCount from './ItemCount';

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    useEffect (() => {
        desafio(item)
        .then (result => setProductos(result))

    },[])
    return(
    <>
    {
        productos.map(item => 
            
            (<><h4>{item.name}</h4>
            <img src={item.image} alt=''/> 
            <ItemCount />
            </>
            ))
    }
    </>)
}

export default ItemListContainer;