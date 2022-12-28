import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import {useState} from "react";
import {useContext} from "react";
import { CartContext } from './CartContext';

const ItemDetail = ({ products }) => {
  const [ItemCounte, setItemCount] = useState (0);

  const ctxCart = useContext(CartContext);
  //const { addToCart } = useContext (CartContext);

  const onAdd = (quantity) =>{
    alert('Seleccionaste ' + quantity + ' ticket/s');
    setItemCount(quantity);
    //ejecutar la función global para agregar products al cart
    ctxCart.addToCart(products, quantity);
  }
  return (
    <>
      <div>
        <h3> {products.name} </h3>
        <p> {products.details} </p>
        <h5> ${products.price} </h5>
        <ItemCount stock={products.initial} onAdd={onAdd}  />
        <Link to='/cart'><button>CheckOut</button></Link>
      </div>
    </>
  ) 
}

export default ItemDetail;