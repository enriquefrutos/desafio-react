import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';
import ItemCount from './components/ItemCount';


const App = () => {
  return (
    <>
    <nav>
      <NavBar 
      />
      <ItemListContainer />
</nav>
<p>
  <ItemCount />
</p>
</>
  );
}

export default App;