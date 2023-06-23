import './itemlistcontainer.css';
import '../Item/Item';
import { useEffect, useState } from "react";
import { getCategoryData, getData } from '../../services/firebase';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

function ItemListContainer() {
    let [isLoading, setIsLoading] = useState(true);
    let [products, setProducts] = useState([]);
    const { categoryid } = useParams();

    const fetchData = categoryid === undefined ? getData : getCategoryData;

    useEffect(() => {
        fetchData(categoryid)
            .then((respuesta) => setProducts(respuesta))
            .finally(() => {
                setIsLoading(false)
            });
    }, [categoryid]);

    return (
        <div>
            <p class="stylecat">CATALOGO DE PRODUCTOS</p>
            <ItemList isLoading={isLoading} products={products} />
        </div>
    );
}

export default ItemListContainer;