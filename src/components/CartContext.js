import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const[cartList, setCartList] = useState([]);

    const addItem = (itemn, qyt) =>{
        let itemForCart = {
            ...itemn,
            qyt
        }
        setCartList([
            ...cartList,
            itemForCart])

    }
    return(
        <CartContext.Provider value={{cartList, addItem}}>
            {children}
        </CartContext.Provider>
     );
}
export default CartContextProvider;