import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from './utils/firebaseConfig';
/* import { dataProducts } from "./utils/dataProducts";
import { callFetch } from "./utils/callFetch"; */


const ItemDitailContainer = () => {
  const [products, setProducts] = useState ({});
  const { idProduct } = useParams();

    useEffect (() => {
      const fireFetchPerProduct = async() => {
        const docRef = doc(db, "products", idProduct);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          return {
            id: docSnap.id,
            ...docSnap.data()
          }
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      }
      fireFetchPerProduct()
        .then(result => setProducts(result))
        .catch(err => console.log(err))
    }, []);

  return (
    <>
      <ItemDetail products={products} />
    </>
  )
}

export default ItemDitailContainer;