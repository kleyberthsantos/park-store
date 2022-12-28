//import FontPage from "./landingPages/FontPage";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { dataProducts } from "./utils/dataProducts";
import { callFetch } from "./utils/callFetch";
import ItemList from "./ItemList";


const ItemListContainer = () => {
  const [products, setProducts] = useState ([]);
  const {nameCategory} = useParams ();

  //componentDidMount
    useEffect(() => {
      if (nameCategory) {
        callFetch(100, dataProducts.filter(product => product.category === nameCategory))
          .then(response => setProducts(response))
          .catch(err => console.log(err))
      } else {
        callFetch(2000, dataProducts)
        .then(response => setProducts(response))
        .catch(err => console.log(err))
      }

    },[])

  return (
    <>
      
      {/* < FontPage /> */}
      <ItemList products={products} />
    </>
  )
}

export default ItemListContainer;