import { useContext } from "react";
import { CartContext } from "./CartContext";



const Cart = () => {
    
    const test = useContext(CartContext);
    


    return (
        <>
         <div class="containerDetail2">      
           

            <div class="cardDetail2">

                <div class="flex-item">
                {            
                test.cartList.map (item =>
                <>
                <h2>{item.brand}</h2>
                <img class="imgcart" src={item.image} alt="" />
                <span class="name2"> {item.name} <span class="precio3">/ Cantidad:</span> {item.quantity} <span class="precio3">/ Precio final =</span> {item.price * item.quantity} pesos </span>                 
                
                <buttom class="btn btn-outline-primary btn-lg" onClick={() => test.removeItem(item.id)}>Eliminar producto</buttom>
                <div><hr/></div>
                </>
                
                )
            
                }</div>
                <div class="flex-item">

                <button class="btn btn-outline-danger btn-sm" onClick={test.clear}>Eliminar todos los productos</button>
        <hr />
        
        </div>
        </div>
                
        
        </div>
        
        </>
    )
}

export default Cart;