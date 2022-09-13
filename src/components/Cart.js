import React, { useContext } from 'react'
import { CartContext } from './CartContext'

const Cart = () => {
    const test = useContext(CartContext);

  return (
    <>
    {
        test.cartList.map(itemn => <li>{itemn.name} ({itemn.qty})</li>)
    }
    </>
  )
}

export default Cart