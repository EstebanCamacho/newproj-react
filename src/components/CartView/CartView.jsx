import React from 'react';
import { useContext } from 'react';
import { cartContext} from "../../context/cartContext";
import "./cartview.css";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { createOrderWithStockUpdate } from '../../services/firebase';
import { useNavigate } from "react-router-dom";

function CartView(){
    const { cart, removeItem, countTotalPrice, clear } = useContext(cartContext);
    const navigateTo = useNavigate();

    async function handleConfirm(userData){
        const order = {
            items: cart,
            buyer: userData,
            date: new Date(),
            price: countTotalPrice()
        };

try{
const id = await createOrderWithStockUpdate(order);
console.log("respuesta", id);
clear();
navigateTo(`/order-confirmation/${id}`)
    } catch(error){
        alert(error);
    }
}

return (
        <>
          <h1>Tu Carrito</h1>
            
            <thead className="cartList_head">
                <tr className="cartlist_row">
                    <th className='how'>Miniatura</th>
                    <th>Titulo</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Remover</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
            {cart.map ((item) => (
              <tr key={item.id} className="cartlist_row">
                <td>
                    <img height={50} src={item.imagen} alt={item.producto} />
                </td>
                <td>{item.nombre}</td>
                <td>{item.precio}</td>
                <td>{item.count}</td>    
                <td>
                <button color="#d95555" onClick={() => removeItem(item.id)}>
                <img src="../../src/assets/cestobasura.svg" alt="icono de un cesto de basura" />
                </button>
                </td>
                <th>$ { (item.precio * item.count).toFixed(2) }</th>
              </tr>
                ))}
            </tbody>
            

                <div className="cartList_detail">
                    <h4>El total de tu compra es de $ --,--</h4>
                    <CheckoutForm onConfirm={handleConfirm} />
                </div>
        </>
    );
}
        
export default CartView;