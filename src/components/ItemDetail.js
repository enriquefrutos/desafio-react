import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ItemDetail = ({itemn}) => {

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
      </Card.Text>
      <Button variant="primary">Comprar</Button>
    </Card.Body>
  </Card>
    }
    </>
  )
}

export default ItemDetail