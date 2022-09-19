import React, { useEffect, useState } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { firestoreOneFetch } from '../utils/firebaseconfig';



const ItemDetailContainer = () => {
  const[detalle, setDetalle] = useState({});
  const {id} = useParams();

  useEffect(() => {
      firestoreOneFetch(id)
      .then(result => setDetalle(result))
  },[id]);
return (
  <ItemDetail item ={detalle}/>
);
}

export default ItemDetailContainer