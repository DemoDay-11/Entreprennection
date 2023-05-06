import './conexoes.css';
import img from "../../img/ficante-da-barbie.jpg"
import image from "../../img/homemdeferro.jpg"
import imagem from "../../img/cachorro.jpg"
import { Row, Col } from 'react-bootstrap';


function Conexoes() {
    return (
        <div className='borderconexoes'>
            <header>
            
            <h1>Conexões</h1>

            
            
            <Row>
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <img src={image} width="110px" height="110px" className='img'/>
                <p>Rodolfinho0202</p>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <img src={imagem} width="110px" height="110px" className='img'/>
                <p>Scooby-doo</p>
                </Col>
                <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <img src={img} width="110px" height="110px" className='img'/>
                <p>Ken</p>
                </Col>
            </Row>
            
            </header>
        </div>
    );
  }
  
  export default Conexoes;