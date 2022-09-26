import {collection, serverTimestamp,doc, setDoc, updateDoc, increment} from 'firebase/firestore'
import { useContext } from "react";
import { CartContext } from "./CartContext";
import {db} from '../utils/firebaseconfig';


const Cart = () => {
    
    const test = useContext(CartContext);

    const createorder = () => {
        let itemsDb = test.cartList.map(item =>({
            id: item.id,
            title: item.name,
            price: item.price,
            qty: item.quantity
        }))
        let order = {
            buyer: {
                name: 'Enrique Frutos',
                email:'enriqueafrutos@gmail.com',
                phone:'1161564753'
            },
            date: serverTimestamp(),
            items: itemsDb,
            total: test.totalcomp()
        }
       
      
    const createorderinfirestore = async () => {
        const newOrderRef = doc(collection(db,"orders"));
        await setDoc(newOrderRef,order);
        return newOrderRef;
    }
    createorderinfirestore()
    .then(result => {
        alert("Orden creada" + result.id)
        test.cartList.forEach(async(item) => {
        const itemRef = doc(db, "products", item.id);
        await updateDoc(itemRef, {
        stock: increment(-item.quantity)
        });
    })
    test.clear()
})
    }

    
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

                <div>
                    TOTAL COMPRA: {test.totalcomp()}<br></br>
                    <button onClick={createorder}>FINALIZAR COMPRA</button>
                </div>


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