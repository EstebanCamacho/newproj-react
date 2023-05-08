import './itemcount.css'
import {useState} from "react";

function ItemCount({stock}) {
 
  const [count, setCount] = useState(1);

  function handleAdd(){
    if (count < stock) setCount(count + 1)
  }

  function handleSubstract(){
    if (count > 1) setCount(count - 1)
  }
 
  let isDisabledAdd = count === 5;
  let isDisabledSubstract = count === 1;


  return (
    <>
    <div className="counter">
      <button disabled={isDisabledSubstract} className="counterresta" onClick={handleSubstract}>-</button>
      <p className="counternumero">{count}</p>
      <button disabled={isDisabledAdd} className="countersuma" onClick={handleAdd}>+</button>
    </div>
    <div>
      <button className="counteragreg">Agregar al carrito</button>
    </div>
    </>
  )
}

export default ItemCount