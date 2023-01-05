import { useContext } from 'react';
import { CartContext } from './CartContext';
import { Link } from 'react-router-dom';
import { collection, serverTimestamp } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { db } from "./utils/firebaseConfig";
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
    console.log(dataOrder)

    const createOrder = async () =>{
      const createIdPerOrder = doc(collection(db, "pedido"))
      await setDoc(createIdPerOrder, dataOrder);
      return createIdPerOrder
    }
    createOrder()
      .then(result => {
        alert("Has creado tu pedido con el siguiente id: " + (result.id))
        //limpiar el carrito posterior al pedido realizado
        ctxCart.deleteAll()
      })
      .catch(err => console.log(err))
  }
  

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
      <h5>Sub-total: ${ctxCart.sumPerProduct(products.id)}</h5>
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

    <div>
      {
        ctxCart.cartList.length > 0 &&
        <total>
          <h2> Total a pagar: ${ctxCart.totalCartToPay()} </h2>
        </total>
      }
    </div>
    
    <div>
      <button className="butonCard" onClick={orderFinish}>Finalizar pedido</button>
    </div>


    </cartView>
  ) 
}


export default Cart;