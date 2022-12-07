import { useState, useEffect } from "react";
import { dataProducts } from "./utils/dataProducts";
import { callFetch } from "./utils/callFetch";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";



const ItemDitailContainer = () => {
  const [products, setProducts] = useState ( {} );
  const { idProduct } = useParams();

  //componentDidMount
    useEffect(() => {
      callFetch(2000, dataProducts.find(product => product.id == idProduct))
        .then(response => setProducts(response))
        .catch(err => console.log(err))
    },[])

  return (
    <>
      <ItemDetail products={products} />
    </>
  )
}

export default ItemDitailContainer;