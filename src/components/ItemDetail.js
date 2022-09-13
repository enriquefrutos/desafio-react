import React from 'react'
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import { useState, useContext } from "react";
import {CartContext} from './CartContext';


const ItemDetail = ({itemn}) => {
  const [itemCount, setItemCount] =useState(0)
  const test = useContext(CartContext);

  const onAdd = (qty) => {
    setItemCount(qty);
    test.addItem(itemn,qty);
  } 
  return (
    <>
    {   
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src= {itemn.image} />
    <Card.Body>
      <Card.Title>{itemn.name}</Card.Title>
      <Card.Text>
       {itemn.description}<br></br>
       Precio:{itemn.price}
       <ItemCount stock={itemn.stock} onClick = {onAdd} initial ={itemCount}/>
      </Card.Text>
    </Card.Body>
  </Card>
    }
    </>
  )
}

export default ItemDetail