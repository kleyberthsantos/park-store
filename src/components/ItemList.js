import Item from "./Item";
import './landingPages/landingPages.css';


const ItemList = (props) => {
  return (
    <>
      {
        props.products.length > 0
        ? props.products.map(item => <Item key={item.id} id={item.id} name={item.name} img={item.img}  />)
        : <p>cargando...</p>
        }
    </>
  )
  }

  export default ItemList;