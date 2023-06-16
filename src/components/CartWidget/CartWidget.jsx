import './cartwidget.css'
import iconocarrito from '../../assets/iconocarrito.jpg'
import { useContext } from 'react'
import { cartContext } from '../../context/cartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const {countItems} = useContext(cartContext);
    
if(countItems()===0)
return (
        <Link to="/cart">
            <img className="icono" src={iconocarrito} alt="imagen de un carrito de compras" />
        </Link>
    )
return (
        <Link to="/cart">
            <img className="icono" src={iconocarrito} alt="imagen de un carrito de compras" />
            <span className="numero">{countItems()}</span>
        </Link>
    )
}

export default CartWidget; 
