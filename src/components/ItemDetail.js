import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ItemCount from './ItemCount';
import { useState } from "react";
import {Link} from 'react-router-dom';

const ItemDetail = ({itemn}) => {
  const [itemCount, setItemCount] =useState(0)

  const onAdd = (qty) => {
    setItemCount(qty);
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
       <ItemCount/>
      </Card.Text>
      {
        itemCount === 0 ?
      <Button variant="primary" onClick = {onAdd}>Comprar</Button>
      : <Link to='/cart'><Button>Checkout</Button></Link>
}
    </Card.Body>
  </Card>
    }
    </>
  )
}

export default ItemDetail