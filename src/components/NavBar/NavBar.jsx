import './navbar.css'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary fs-4">
        <h1 class="text-warning bg-dark ms-2 mt-2">Tiendas C&C</h1>
        <div class="container-fluid">
          <a class="navbar-brand fs-4" href="#">Home</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Café</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">Chocolates</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">Sandwiches</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active " href="#">Postres</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">Sucursales</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active " href="#">Contacto</a>
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