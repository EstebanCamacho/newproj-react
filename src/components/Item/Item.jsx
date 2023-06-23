import "../Products/Products";
import './item.css';
import { Link } from "react-router-dom";


function Item({ producto, nombre, precio, imagen, id, descuento }) {

  const classNameStylePrecio =
    descuento ? "new_styleprecio" : "styleprecio";

  return (
    <Link className="text-decoration-none w-25 p-3 width: 800px" to={`/product/${id}`}>
      <section className="cartoom">
        <div className="card stylecard">
          <img src={imagen} className="card-img-top styleimg" alt="..." />
          <div className="card-body">
            <h1 className="styleprod">{producto}</h1>
            <h2 className="stylenom">{nombre}</h2>
            {descuento <= 10 && <small style={{ color: "green", margin: "none" }}>Descuento: {descuento} %</small>}
            {descuento > 10 && <small style={{ color: "red" }}>¡Oferta Especial!</small>}
            <h3 className={classNameStylePrecio}>${precio}</h3>
            <a href="/" className="btn btn-primary">Ver Detalle</a>
          </div>
        </div>
      </section>
    </Link>
  )
}

export default Item;
