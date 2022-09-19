import ItemCount from "./ItemCount";
import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { CartContext } from "./CartContext";


const ItemDetail = ({ item }) => {

  const [itemCount, setItemCount] = useState(0);
  const test = useContext(CartContext);

    const onAdd = (qty) => {
      alert ("You have selected " + qty + " items.");
      setItemCount(qty);
      test.addItem(item, qty);
}

    return (
      <> 
      <main class="containerDetail">
        <div class="cardDetail">
          
                <div class="flex-item">
                  <p class="name"> {item.nombre}</p>
                  <img class="img" src={item.image} alt=""/>
                </div>
                  
                <div class="flex-item">
                  <hr />
                  <h2>{item.name}</h2>
                  <p class="desc">Categoría : {item.category}</p>
                  <p class="desc">Stock Disponible = {item.stock}</p>
                  <p class="precio">Precio = {item.price} pesos</p> 
                  <hr />                
                  
                  {
                        itemCount === 0
                      
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        : <Link to='/cart'><button class="btn btn-outline-primary btn-sm">CheckOut</button></Link>
                    }
                    <hr />
                </div>
        </div>
      </main>
                   
      




      </>
      )
    
  }

  export default ItemDetail;