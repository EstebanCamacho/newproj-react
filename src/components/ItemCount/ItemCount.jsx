import './itemcount.css';
import { useState } from "react";

function ItemCount({ stock, onAddToCart }) {

  const [count, setCount] = useState(0);

  function handleAdd() {
    if (count < stock) setCount(count + 1)
  }

  function handleSubstract() {
    if (count > 0) setCount(count - 1)
  }

  let isDisabledAdd = count === 5;
  let isDisabledSubstract = count === 0;


  return (
    <>
      <div className="counter">
        <button disabled={isDisabledSubstract} className="counterresta" onClick={handleSubstract}>-</button>
        <p className="counternumero">{count}</p>
        <button disabled={isDisabledAdd} className="countersuma" onClick={handleAdd}>+</button>
      </div>
      <div>
        <button onClick={() => {onAddToCart(count)}} className="counteragreg">Agregar al Carrito</button>
      </div>
    </>
  )
}

export default ItemCount;