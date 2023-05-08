import arrayProductos from "../Products/Products";

function Card ({producto, categoria, descripcion, precio, stock, imagen}) {

  return(
    <>
<div class="card" style="width: 18rem;">
  <img src={imagen} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h1>{categoria}</h1>
    <h2>{producto}</h2>
    <p class="card-text">{descripcion}</p>
    <h3>Quedan:{stock}productos</h3>
    <h4>${precio}</h4>
    <a href="" class="btn btn-primary">Comprar</a>
  </div>
</div>
</>
)
}

export default Card;
