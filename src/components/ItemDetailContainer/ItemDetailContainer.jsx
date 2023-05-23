import './itemdetailcontainer.css';
import React from 'react';
import arrayProductos from '../Products/Products';
import { useEffect, useState } from "react";
import ItemCount from '../ItemCount/ItemCount';
import { useParams } from 'react-router-dom';

function getItemData(idURL){
    return new Promise ( resolve => {
        setTimeout( () => { 
        const requestedItem = arrayProductos.find(item => item.id === parseInt(idURL))    
        resolve(requestedItem)
    }, 2000)
    }); 
};




export default function ItemDetailContainer() {
    const [product, setProduct] = useState({});
    const { id } = useParams();
            
    useEffect(() => {
        getItemData(id).then((respuesta) => {
            setProduct(respuesta)})}, [id]);

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
        <ItemCount stock={5}/>
      </div>
    </div>
  </div>
</div>

  )
}
