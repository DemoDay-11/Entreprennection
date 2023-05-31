import './home.css';
import { Col, Row } from 'react-bootstrap';
import imagem from "../../img/cachorro.jpg";
import Postagens from '../../components/postagens/postagens';


function Home() {
  return (
    <div className="Home">
      <div className='Feed'>
      <div className="card shadow my-4 w-75">
                <Row className="card-body">
                    <Col xs={12} sm={12} md={2} lg={2} xl={2} className='d-flex justify-content-center'>
                        <img className="card-img-top circulo" src={imagem} alt="Card image cap"/>
                    </Col>
                </Row>
                
            </div>
      <div className='pub'>
                <Row className="card-body my-4 w-75">
                  <Postagens/>
                    <Col xs={12} sm={12} md={2} lg={2} xl={2} className='d-flex justify-content-center'>
                        <img className="card-img-top circulo" src={imagem} alt="Card image cap"/>
                        <input type='text' value={'olá galera'}></input>
                    </Col>
                </Row>
      </div>
            
      </div>
      
      <div className='Trending'>
        <div className='Noticias'>
          <p>Notícias do momento</p>
        </div>
        <div className='CardsNoticiais'>
          <div className='Noticia1'>
            <p>Texto da Noticia1</p>
          </div>
          <div className='Noticia2'>
          <p>Texto da Noticia2</p>
          </div>
          <div className='Noticia3'>
          <p>Texto da Noticia3</p>
          </div>
          <div className='Noticia4'>
          <p>Texto da Noticia4</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;