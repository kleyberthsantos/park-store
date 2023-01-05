import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
  const [cartList, setCartList] = useState([]);

    //Muestra cantidad de productos en el carrito del navbar
      const counterProducts = () => {
      let numProducts = cartList.map(product => product.quantity);
      return numProducts.reduce(((previousValue, currentValue) => previousValue + currentValue), 
      null); 
      //null para no mostrar el 0 en el carrito
    }


  //agregar elementos al carrito
  const addToCart = (products, quantity) => {
    //console.log("products: ",products)
    //console.log("quantity: ",quantity)
    let existsProduct = cartList.find( tickets => tickets.id === products.id )
    if (existsProduct === undefined) {
    setCartList ([
      ...cartList,
      {
        id: products.id,
        img: products.img,
        name: products.name,
        price: products.price,
        quantity: quantity
      } 
    ]);
    } else {
      existsProduct.quantity += quantity;
      setCartList([
        ...cartList
      ]);
    }

  }
  
  //borrar elemento en el carrito
  const deleteProduct = (id) => {
    let updatedLits = cartList.filter( products => products.id !== id);
    setCartList (updatedLits);
  }

  //Limpiar el carrito
  const deleteAll = () => {
    setCartList([]);
  }

  //Calculo total por producto
  const sumPerProduct = (id) => {
    let index = cartList.map(product => product.id).indexOf(id);
    return index = cartList[index].price * cartList[index].quantity;
  }


  //Calculo total carrito
  const totalCartToPay = () => {
    let totalPay = cartList.map(product => sumPerProduct(product.id));
    return totalPay.reduce((previousValue, currentValue) => previousValue + currentValue);
  }

  return (
    <CartContext.Provider value={{
      cartList, 
      addToCart, 
      deleteProduct, 
      deleteAll,
      sumPerProduct,
      counterProducts,
      totalCartToPay
      }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;