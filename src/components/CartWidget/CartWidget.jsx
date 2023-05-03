import './cartwidget.css'
import iconocarrito from '../../assets/iconocarrito.jpg'


const CartWidget= () => {
    return (
        <>
        <img class="icono" src={iconocarrito} alt="imagen de un carrito de compras" />
        <div class="numero">0</div>
        </>
    )
}



export default CartWidget; 
