import React from 'react';
import { useContext } from 'react';
import { cartContext} from "../../context/cartContext";
import "./cartview.css";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
import { createOrderWithStockUpdate } from '../../services/firebase';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

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

if (countTotalPrice() !== 0) return (
        <>
        <h1>Tu Carrito</h1>
                    <tr className='style-row-principal'>
                    <td className='style-column'>Producto</td>
                    <td className='style-column'>Item</td>
                    <td className='style-column'>Precio U.</td>
                    <th className='style-column'>Cantidad</th>
                    <th className='style-column'>Total-Item</th>
                    <th className='style-column'>Remover</th>
                    </tr>
            
            <tbody className='style-body'>
            {cart.map ((item) => (
              <tr className='style-row-principal' key={item.id} >
                <td>
                    <img className='style_img' src={item.imagen} alt={item.producto} />
                </td>
                <td className='name_row'>{item.nombre}</td>
                <td className='name_row-precio'>$ {(item.precio).toFixed(2)}</td>
                <td className='name_row-count'>{item.count}</td>    
                <td className='name_row-count'>$ {(item.precio * item.count).toFixed(2)}</td>
                <td>
                <button className='name_row-button' onClick={() => removeItem(item.id)}>
                <img className='img_row' src="../../../public/images/cestobasura.svg" alt="icono de un cesto de basura" />
                </button>
                </td>
               </tr>
                ))}
            </tbody>
                <div className="cartList_detail">
                    <h4>Precio Total de compra: $ {countTotalPrice().toFixed(2)}</h4>
                    <CheckoutForm onConfirm={handleConfirm} />
                </div>
            </>
    );

    return (
        Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Tu carrito está vacío! Por favor regresa a Homepage',
        }))
}

export default CartView;