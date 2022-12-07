import '../App.css';
import './landingPages/landingPages.css';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Item = (props) => {
  return (
      <div className='conatiner'>
        <Card  key={props.id} className='card'>
          <Card.Img variant="top" className="imgCard" src={props.img} />
          <Card.Body className="cardBody" >
            <Card.Title className="cardTitlle">{props.name}</Card.Title>
            <Card.Text ></Card.Text>
            <Button variant="warning" className="buton" list-style none> <Link to={`/item/${props.id}`}>Ver detalle</Link> </Button>
            </Card.Body>
        </Card>
      </div>
  )
}

export default Item;

