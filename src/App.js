import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


const App = () => {
  return (
    
      <BrowserRouter>
      <NavBar    />
      <Routes>
<Route path='/' element={<ItemListContainer />}/>
<Route path='/category/:id' element={<ItemListContainer />}/>
<Route path='/item/:id' element={<ItemDetailContainer />}/>
</Routes>
</BrowserRouter>

  );
}

export default App;