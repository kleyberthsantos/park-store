import { useContext } from 'react'
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {

  const {cartList, deleteProduct} = useContext(CartContext);

  return (
    <>
    <Link to='/'>
      <button>ir a comprar</button>
    </Link>
    <h1>Productos seleccionados</h1>
    <ul>
    {
      cartList.length === 0
      ? <p> Tu carrito está vacío </p>
      : cartList.map(products => <li key={products.id}>
      - nombre: {products.name}
      - precio: {products.price}
      - cantidad: {products.quantity}
      <button onClick={() => deleteProduct(products.id)}>Eliminar producto</button>  </li>)
    }
    </ul>
    </>
  )
}


export default Cart