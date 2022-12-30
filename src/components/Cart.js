import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {

  const ctxCart = useContext(CartContext);

  return (
    <>
    <Link to='/'>
      <button>ir a comprar</button>
    </Link>
    <h1>Productos seleccionados</h1>

    <ul>
    {
      ctxCart.cartList.length > 0 
      ? ctxCart.cartList.map(products => <li key={products.id}>
      - nombre: {products.name}
      - precio: {products.price}
      - cantidad: {products.quantity}
      - Sub-total: ${products.quantity * products.price}
      <button onClick={() => ctxCart.deleteProduct(products.id)}>Eliminar este producto</button>
      </li>)
      : null
    }
    </ul> 

    {
      (ctxCart.cartList.length !== 0)
      ? <button onClick={ctxCart.deleteAll }>Eliminar todo</button>
      : <h5>Tu carrito está vacio</h5>
    }
    </>
  ) 
}


export default Cart;