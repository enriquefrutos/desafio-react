import Cartwidget from "./CartWidget";
import {Link} from 'react-router-dom';

const  NavBar = () => {
    return (
      <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <Link to='/'><a class="navbar-brand" href="#">Perfumeria</a></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link to='/category/2'><a class="nav-link active" aria-current="page" href="#">Mujeres</a></Link>
        </li>
        <li class="nav-item">
        <Link to='/category/1'><a class="nav-link" href="#">Hombres</a></Link>
        </li>
        <li class="nav-item">
        <Link to='/category/3'><a class="nav-link" href="#">Niños</a></Link>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categorias
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>

          <Cartwidget />
  </nav>
    );
  }
  export default NavBar;