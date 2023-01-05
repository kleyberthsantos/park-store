import { BsCart4 } from "react-icons/bs";
import { useContext } from 'react';
import { CartContext } from "../CartContext";
import './NavBar.css'


const CartWidget = () => {
  
  const widgetList = useContext(CartContext);

  return (
    <cartWidget className='cartSpaceNav'>
      <numberProductsInCart className='qtyProductsCart'>
          { widgetList.counterProducts() }
      </numberProductsInCart>
      <BsCart4 className="cart"/>
    </cartWidget>
  )
}

export default CartWidget;
