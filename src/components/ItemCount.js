import { useState } from "react";

const ItemCount = (props) => {
    const[rate, setRate] = useState(1);

  

    const subir = () =>{ 
        if
        (rate <= 4) {  
        setRate(rate+1)}
    }
    const bajar = () => {
        if
        (rate >=1) {  
        setRate(rate-1)}
    }


   return(
    <div>
        <h6>CANTIDAD DE PRODUCTOS</h6>
        <button onClick={subir}>+</button>{rate}
        <button onClick={bajar}>-</button>
    </div>
   ) 
}
export default ItemCount;