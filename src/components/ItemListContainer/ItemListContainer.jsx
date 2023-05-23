import './itemlistcontainer.css';
import arrayProductos from '../Products/Products';
import '../Item/Item';
import { useEffect, useState } from "react";
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';


function getData(){
    return new Promise ( resolve => {
        setTimeout( () => { resolve(arrayProductos)}, 2000)
    }); 
};

function ItemListContainer(){
            
    let [products, setProducts] = useState([]);
    const { categoryid } = useParams();
    
    useEffect(() => {
    getData().then((respuesta) => {
        if (categoryid) {
            const filterProducts = respuesta.filter( item => item.category === categoryid);
            setProducts(filterProducts);
        }
        else{
        setProducts(respuesta)}})}, [categoryid]);
        
    return (
                <div>
                    <p class="stylecat">CATALOGO DE PRODUCTOS</p>
                    <ItemList products={products}/>
                </div> 
                );
            }
        
export default ItemListContainer;