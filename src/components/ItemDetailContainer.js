import React, { useEffect, useState } from 'react'
import { products } from '../utils/ItemList';
import ItemDetail from './ItemDetail';
import desafio from './Item';
import { useParams } from 'react-router-dom';



const ItemDetailContainer = () => {
    const[detalle, setDetalle] = useState({});
    const {id} = useParams();

    useEffect(() => {
        desafio(products.find(item => item.id == id))
        .then(result => setDetalle(result))
    },[id]);
  return (
    <ItemDetail item ={detalle}/>
  );
}

export default ItemDetailContainer