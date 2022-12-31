import { useState, useEffect } from "react";
import '../App.css';

const ItemCount = ({ stock = 10, initial = 1, onAdd }) => {

  const [counter, setCounter] = useState(0);
  useEffect( () => {
    setCounter(initial);
  },[]);

  const sum = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  }

  const sustract = () => {
    if (counter > initial) {
      setCounter (counter - 1);
    }
  }

  return (
    <countItem className='counterStyle'>
      <div className="counterStyle">
      <button className="butonCount" onClick={sustract}> - </button>
        <p className="qtySelect"> {counter} </p>
      <button className="butonCount" onClick={sum}> + </button>
      
      
        {
          stock 
          ? <button className="butonCount" onClick={ ()=>onAdd(counter) }> Agregar al carrito </button>
          : <button disabled> Agregar al carrito </button>
        }
        </div>
    </countItem>
  ) 
}

export default ItemCount;