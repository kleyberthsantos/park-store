import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import {useState} from "react";
import swal from 'sweetalert2'; 
import {useContext} from "react";
import { CartContext } from './CartContext';
import '../App.css';

const ItemDetail = ({ products }) => {
  const [ItemCounter, setItemCounter] = useState (0);

  //const ctxCart = useContext(CartContext);
  const { addToCart } = useContext (CartContext);



  const onAdd = (quantity) =>{
    swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Seleccionaste ' + quantity + ' ticket/s para ' + products.name,
      showConfirmButton: false,
      timer: 1600
    })
    /* swal.fire('Seleccionaste ' + quantity + ' ticket/s para ' + products.name); */
    setItemCounter(quantity);
    //ejecutar la función global para agregar products al cart
    addToCart(products, quantity);
  }
  return (

        <itemDetailView className='itemListStyleView'>
        
        <img  src={products.img} alt="" className="imgDetail"/>
        <div className='detail'>
        <h2> {products.name} </h2>
        <h4> {products.details} </h4>
        <h5> ${products.price} </h5>
          {
          ItemCounter === 0
          ? <ItemCount stock={products.initial} onAdd={onAdd} />
          : <button className="butonCard">
              <Link className='textButton' to='/cart'>Ir al carrito</Link>
            </button>
          }
        </div>
        </itemDetailView>

  ) 
}

export default ItemDetail;