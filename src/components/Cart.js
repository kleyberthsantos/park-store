import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import '../App.css';


const Cart = () => {

  const ctxCart = useContext(CartContext);

  return (
    <cartView className="cartStyle">
    {
      (ctxCart.cartList.length > 0)
      ? <h1>Productos seleccionados</h1>
      : <button className="butonCard" ><Link className='textButton' to='/'>Ir a comprar</Link></button>
        
    }

    <div className='cartView'>
    {
      ctxCart.cartList.length > 0 
      ? ctxCart.cartList.map(products => 
      <selectProduct key={products.id}>
      <h5> {products.name} </h5>
      <h5>precio: {products.price}</h5>
      <h5>cantidad: {products.quantity}</h5>
      <h5>Sub-total: ${products.quantity * products.price}</h5>
      <button className="butonCard" onClick={() => ctxCart.deleteProduct(products.id)}>Eliminar este producto</button>
      <hr/>
      </selectProduct>
      )
      : null
    }
    </div>    
    
    <div className='cartView'>
      {
      (ctxCart.cartList.length > 0)
      ? <button className="butonCard" onClick={ctxCart.deleteAll }>Limpiar carrito</button>
      : <h2>Tu carrito está vacio</h2>
    }
    </div>
    
    </cartView>
  ) 
}


export default Cart;