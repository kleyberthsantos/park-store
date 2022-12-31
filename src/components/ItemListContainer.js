//import FontPage from "./landingPages/FontPage";
/* import { dataProducts } from "./utils/dataProducts";
import { callFetch } from "./utils/callFetch"; */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";
import { db } from './utils/firebaseConfig';
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import '../App.css';

const ItemListContainer = () => {
  const [products, setProducts] = useState ([]);
  const {nameCategory} = useParams ();

  //componentDidMount
    useEffect(() => {
      const firebaseFetch = async() => {
        let q;
        if (nameCategory) {
          q = query(collection(db, "products"), where('category', '==', nameCategory))
        } else {
          q = query(collection(db, "products"), orderBy('category'));
        }
        
        const querySnapshot = await getDocs(q);
          const dataProducts = querySnapshot.docs.map(products => ({
            id: products.id,
            ...products.data()
          }))
          return dataProducts;
      }
      firebaseFetch()
        .then(result => setProducts(result))
        .catch(err => console.log(err))
    },[nameCategory]);


  return (
    <div className='itemListStyle' >
      <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer;