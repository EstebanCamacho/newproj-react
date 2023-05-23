import React from 'react'
import Item from '../Item/Item'
import './itemlistcontainer.css'

function ItemList({products}) {
  
    return (
      
    
    <div class='mapprod'>
      {products.map((itemInArray) => (
        <Item key={itemInArray.id} {...itemInArray} />
        ))}
      </div>
    )
}

export default ItemList;