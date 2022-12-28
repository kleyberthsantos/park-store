import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
  const [cartList, setCartList] = useState([]);

  //agregar elementos al carrito
  const addToCart = (products, quantity) => {
    setCartList([
      ...cartList,
      {
        //información que va al carrito
        id: products.id, 
        img: products.img, 
        name: products.name, 
        price: products.price,
        quantity: quantity
      }
    ]);
  }

  //borrar elemento en el carrito
  const deleteProduct = (id) => {
    let updatedLits = cartList.filter( products => products.id !== id);
    setCartList (updatedLits);
  }


  return (
    <CartContext.Provider value={{
      cartList, 
      addToCart, 
      deleteProduct
      }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider;