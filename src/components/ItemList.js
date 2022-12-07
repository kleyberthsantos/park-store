import Item from "./Item";
import './landingPages/landingPages.css';


const ItemList = (props) => {
  return (
    <>
      {
        props.products.map(item => <Item key={item.id} id={item.id} name={item.name} img={item.img}  />)
        }
    </>
  )
  }

  export default ItemList;