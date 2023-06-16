import './navbar.css';
import CartWidget from '../CartWidget/CartWidget';
import { Link, useLocation } from 'react-router-dom';
import { useContext, useEffect } from 'react';


const NavBar = () => {
  let location = useLocation();
  useEffect (() => {
    window.scrollTo (0,0);
  }, [location]);
  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fs-4">
        <Link to="/" className="nav-link text-warning bg-dark ms-2 mt-2 me-5">Tiendas C&C☕</Link>
        <div class="container-fluid">
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active ms-3" aria-current="page" to="/category/Bebidas">Bebidas</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active ms-5" to="/category/Dulces">Dulces</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active ms-5" to="/category/Sandwiches">Sandwiches</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="icono">
          < CartWidget />
        </div>
      </nav>
    </>
  )
}

export default NavBar;