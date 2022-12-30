import { BsCart4 } from "react-icons/bs";
import { useContext } from 'react';
import { CartContext } from "../CartContext";
import './NavBar.css'


const CartWidget = () => {
  
  const widgetList = useContext(CartContext);

  return (
    <>
      <BsCart4 className="cart"/>
      { widgetList.counterProducts() }
    </>
  )
}

export default CartWidget;
