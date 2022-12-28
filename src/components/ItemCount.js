import { useState, useEffect } from "react";

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
    <>
      <button onClick={sustract}> - </button>
      <p> {counter} </p>
      <button onClick={sum}> + </button>
        {
          stock 
          ? <button onClick={ ()=>onAdd(counter) }> Agregar al carrito </button>
          : <button disabled> Agregar al carrito </button>
        }
    </>
  ) 
}

export default ItemCount;