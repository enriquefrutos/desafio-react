import { useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import {Link} from 'react-router-dom';




const ItemCount = ({stock, onAdd,initial}) => {
    const[rate, setRate] = useState(0);
 
 useEffect(()=>{
     setRate(initial)
 },[]);

    const subir = () =>{ 
        if
        (rate < stock) {  
        setRate(rate+1)}
    }
    const bajar = () => {
        if
        (rate > 0) {  
        setRate(rate-1)}
    }


   return(
    <div>
        <h6>CANTIDAD DE PRODUCTOS</h6>
        <button onClick={subir}>+</button>{rate}
        <button onClick={bajar}>-</button>
        {
                rate === 0 
                ? <Button variant="primary" onClick = {() => onAdd(rate)}>Comprar</Button>
                : <Link to='/cart'><Button>Checkout</Button></Link>
            }
    </div>
   ) 
}
export default ItemCount;
