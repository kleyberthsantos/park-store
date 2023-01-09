import { Container } from "react-bootstrap"
import "../App.css"
import { Link } from 'react-router-dom';

// FontAwesome is imported
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSlidersH } from '@fortawesome/free-solid-svg-icons' */

// iconSlider is created for the brand icon
/* const iconSlider = <FontAwesomeIcon icon={faSlidersH} /> */

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="footer">
          <div id="copyright">
            <Link to={`/`}>
              {/* {iconSlider} */} Palmilla Park
            </Link>
          </div>
          <div id="copyright">
            Copyright ©2023.
          </div>
          <div id="copyright-name" className="footer-copyright">
            Made By <span className="footer-text">Kleybeth Santos</span>
          </div>
        </div >
      </Container >
    </div >
  )
}

export default Footer
