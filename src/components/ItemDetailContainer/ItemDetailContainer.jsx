import './itemdetailcontainer.css';
import React, { useContext } from 'react';
import { useEffect, useState } from "react";
import ItemCount from '../ItemCount/ItemCount';
import { Link, useParams } from 'react-router-dom';
import { cartContext } from '../../context/cartContext';
import Loader from '../Loader/Loader';
import Swal from 'sweetalert2';
import { getItemData } from '../../services/firebase';

export default function ItemDetailContainer() {
  const [ errors, setErrors ] = useState(null);  
  const [ product, setProduct ] = useState(null);
  const { addItem, removeItem } = useContext(cartContext);
  const [countInCart, setCountInCart] = useState(0);
    
function onAddToCart(count){
  addItem(product, count);
  setCountInCart(count);
  Swal.fire(`Usted ha seleccionado ${count} - ${product.nombre}`);
}

const id = useParams().id;
         
    useEffect(() => {
        getItemData(id).then((respuesta) => {
            setProduct(respuesta);
          })
        .catch(error => {
          setErrors (error.message) 
        })
      }, [id]);
      if(errors)
      return(
        <div style={{ marginTop: "300px"}}>
          <h1>Error</h1>
          <p>{errors}</p>
        </div>
      );

if(product) {
  return (
<div class="card mb-3">
  <div class="row g-0">
    <div class="col-md-3">
      <img src={product.imagen} cd class="img-fluid rounded-start fig" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{product.producto} {product.nombre}</h5>
        <p class="card-text">{product.descripcion}</p>
        <p class="card-text"><small class="text-muted stock">Precio: ${product.precio}</small></p>
        <p class="card-text"><small class="text-muted stock">Stock: {product.stock}</small></p>
        
        {countInCart === 0 ? (
          <ItemCount onAddToCart={onAddToCart} stock={product.stock}/>
        ) : (
          <Link to="/cart">Ir al Carrito</Link>
        )}
        
      </div>
    </div>
  </div>
</div>
)
} 

return <h3><Loader /></h3>;

}
