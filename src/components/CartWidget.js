import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cartwidget = () => {
    const cart = useContext(CartContext);
    const cantidad = cart.calcItemsQty 

    return(
        <>
        <h4>Total:{cantidad()}</h4>
        <img src="https://cdn-icons-png.flaticon.com/512/107/107831.png?w=826&t=st=1661375612~exp=1661376212~hmac=dc79707bb35708d7e6167542455481779a66fc7f88dd7c4ee62d015f84f8ec19" alt="carrito" id="carrito"/>
        </>
    )
}
export default Cartwidget;