import '../App.css';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import  {IoTicketOutline}  from 'react-icons/fa';


const Item = (props) => {
  return (
    <div className='itemListStyle'>
      <viewCart className='conatiner'>
        <Card  key={props.id} className='card'>
          <Card.Img variant="top" className="imgCard" src={props.img} />
          <Card.Body className="cardBody" >
            <Card.Title className="cardTitlle">{props.name}</Card.Title>            
            <button className="butonCard" > <Link className='textButton' to={`/item/${props.id}` }>Detalle de Ticket <img src="https://i.ibb.co/T2hrr1p/boletos.png" className='ticketIcon' /> </Link> </button>
            </Card.Body>
        </Card>
      </viewCart>

    </div>
  )
}

export default Item;

