import './navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary fs-4">
        <Link to="/" class="text-warning bg-dark ms-2 mt-2">Tiendas C&C☕</Link>
        <div class="container-fluid">
          
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/category/Bebidas">Bebidas</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active" to="/category/Dulces">Dulces</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link active " to="/category/Sandwiches">Sandwiches</Link>
              </li>
            </ul>
        </div>
        </div> 
        <div class="icono">
          < CartWidget />
          </div> 
      </nav>
    </>
  )
}

export default NavBar;