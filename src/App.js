import NavBar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';



const App = () => {
  return (
    <>
    <nav>
      <NavBar 
      />
</nav>
<p>
 <ItemListContainer />
</p>
</>
  );
}

export default App;