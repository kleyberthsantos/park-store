import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import {useState} from "react";
import {useContext} from "react";
import { CartContext } from './CartContext';
import '../App.css';

const ItemDetail = ({ products }) => {
  const [ItemCounter, setItemCounter] = useState (0);

  //const ctxCart = useContext(CartContext);
  const { addToCart } = useContext (CartContext);

  const onAdd = (quantity) =>{
    alert('Seleccionaste ' + quantity + ' ticket/s');
    setItemCounter(quantity);
    //ejecutar la función global para agregar products al cart
    addToCart(products, quantity);
  }
  return (

        <itemDetailView className='itemListStyle'>
        
        <img className="imgDetail" src={products.img}/ >
        <div className='detail'>
        <h2> {products.name} </h2>
        <h4> {products.details} </h4>
        <h5> ${products.price} </h5>
        {
          ItemCounter === 0
          ? <ItemCount stock={products.initial} onAdd={onAdd} />
          : <button className="butonCard">
              <Link className='textButton' to='/cart'>CheckOut <img src="https://i.ibb.co/T2hrr1p/boletos.png" className='ticketIcon' /></Link>
            </button>
        }
        </div>
        
        </itemDetailView>
      
    
  ) 
}

export default ItemDetail;