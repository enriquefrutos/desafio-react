import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';
import ItemDetailContainer from './components/ItemDetailContainer';



const App = () => {
  return (
    <>
    <nav>
      <NavBar 
      />
</nav>
<p>
 {/* <ItemListContainer /> */}
 <ItemDetailContainer />
</p>
</>
  );
}

export default App;