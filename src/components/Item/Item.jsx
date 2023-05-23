import "../Products/Products";
import './item.css';
import { Link } from "react-router-dom";

function Item ({producto, nombre, precio, imagen, id}) {

  return(
    <Link to={`/product/${id}`}>
    <section className="cartoom">
<div className="card stylecard">
  <img src={imagen} class="card-img-top styleimg" alt="..."/>
  <div className="card-body">
    <h1 className="styleprod">{producto}</h1>
    <h2 className="stylenom">{nombre}</h2>
    <h3 className="styleprecio">${precio}</h3>
    <a href="/" class="btn btn-primary">Ver Detalle</a>
  </div>
</div>
</section>
</Link>
)
}

export default Item;
