
const ItemDetail = ({products}) => {
  return (
    <>
      <div className="itemDetail">
        <img src={products.img} className="imgDetail"/>
      </div>
      <div>
        <h3> {products.name} </h3>
        <p> {products.details} </p>
        <h5> ${products.price} </h5>
      </div>
    </>
  ) 
}

export default ItemDetail;