import React, { useEffect, useState } from 'react'
import { item } from '../utils/ItemList';
import ItemDetail from './ItemDetail';
import desafio from './Item';


const ItemDetailContainer = () => {
    const[detalle, setDetalle] = useState({});

    useEffect(() => {
        desafio(item[2])
        .then(result => setDetalle(result))
    },[]);
  return (
    <ItemDetail itemn ={detalle}/>
  );
}

export default ItemDetailContainer