import React from 'react';
import Item from '../Item/Item';
import './itemlistcontainer.css';
import Loader from '../Loader/Loader';

function ItemList({products, isLoading}) {
    if (isLoading) return <Loader />;
    if (products.length === 0) return <h2>No encontramos productos</h2>;

    return (
      <>
        <div class='mapprod'>
          {products.map((itemInArray) => (
            <Item key={itemInArray.id} {...itemInArray} />
        ))}
        </div>
      </>
    );
}

export default ItemList;