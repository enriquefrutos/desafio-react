import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextProvider from './components/CartContext';
import Cart from './components/Cart';


const App = () => {
  return (
    <CartContextProvider value={[]}>
      <BrowserRouter>
      <NavBar    />
      <Routes>
<Route path='/' element={<ItemListContainer />}/>
<Route path='/category/:id' element={<ItemListContainer />}/>
<Route path='/item/:id' element={<ItemDetailContainer />}/>
<Route path='/cart' element={<Cart />}/>
</Routes>
</BrowserRouter>
</CartContextProvider>
  );
}

export default App;