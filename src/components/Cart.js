import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import { collection, serverTimestamp } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./utils/firebaseConfig";
import swal from 'sweetalert2'; 
import '../App.css';


const Cart = () => {

  const ctxCart = useContext(CartContext);

  //crear orden en firebase
  const orderFinish = () => {
    const dataOrder = {
      client: {
        name: 'Kley Santos',
        email: 'kleybike@gmail.com',
        phone: '12309821'
      },
      date: serverTimestamp(),
      productsBuyers: ctxCart.cartList.map(products =>({
        id: products.id,
        tittle: products.name,
        price: products.price,
        quantity: products.quantity
      })),
      total: ctxCart.totalCartToPay()
    }

    //envia orden en firebase
    const createOrder = async () =>{
      const createIdPerOrder = doc(collection(db, "pedido"))
      await setDoc(createIdPerOrder, dataOrder);
      return createIdPerOrder
    }
    createOrder()
      .then(result => {
        swal.fire({
          title: '<strong>HTML <u>example</u></strong>',
          icon: 'success',
          detalle: 'Has creado tu pedido con el siguiente id: ' + (result.id),
          focusConfirm: false,
          confirmButtonText:
            '<i class="fa fa-thumbs-up"></i> Great!',
          confirmButtonAriaLabel: 'Thumbs up, great!'
        })
        //limpiar el carrito posterior al pedido realizado
        ctxCart.deleteAll()
      })
      .catch(err => console.log(err))
  }
  

  return (
    <cartView className="cartStyle">
      
      {
        (ctxCart.cartList.length > 0)
        ? <h1 className='poductsSelected'>Productos seleccionados</h1>
        : <button className="goToBuy" ><Link className='textButton' to='/'>Compra tu ticket</Link></button>
      }
      <div className='cartView'>
      {
        ctxCart.cartList.length > 0
        ? ctxCart.cartList.map(products => 
        <selectProduct key={products.id}>
        <h5> {products.name} </h5>
        <h5>precio: {products.price}</h5>
        <h5>cantidad: {products.quantity}</h5>
        <h5>Sub-total: ${ctxCart.sumPerProduct(products.id)}</h5>
        <button className="butonCard" onClick={() => ctxCart.deleteProduct(products.id)}>Eliminar este ticket</button>
        <hr/>
        </selectProduct>
        )
        : null
      }
      </div>

      <div className='cartGoToBuy'>
        {
        (ctxCart.cartList.length > 0)
          ? <button className="butonCard" onClick={ctxCart.deleteAll }>Limpiar carrito</button>
          : <img src="https://i.ibb.co/Ptt9Lfc/quiero-comprar.jpg" alt="quiero-comprar" className='memeCartEmpty'></img>
            
        }

      </div>

      <div className='payToTotal'>
        {
          ctxCart.cartList.length > 0 &&
          <total>
            <h2> Total a pagar: ${ctxCart.totalCartToPay()} </h2>
            <div>
              <button className="butonCard" onClick={orderFinish}>Finalizar pedido</button>
            </div>
          </total>
        }
      </div>
    </cartView>
  ) 
}


export default Cart;