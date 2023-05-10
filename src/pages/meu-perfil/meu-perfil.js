import { Container, Row, Col } from 'react-bootstrap';
import Perfil from '../../components/perfil/perfil';
import './meu-perfil.css';
import Conexoes from '../../components/conexoes/conexoes';
import Sobrenos from '../../components/sobrenos/sobrenos';
import Postagens from '../../components/postagens/postagens';
import img from "../../img/ficante-da-barbie.jpg";
import image from "../../img/homemdeferro.jpg";
import imagem from "../../img/cachorro.jpg";

function MeuPerfil() {
  return (
    <div className="background py-3">
    <header className="background-header"></header>
    
      <Container>
        <Row> 

          <Col xs={12} sm={12} md={12} lg={4} xl={4} className='py-3'>
           <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <Perfil></Perfil>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <Conexoes></Conexoes>
            </Col>
           </Row>
            
          </Col>

          <Col xs={12} sm={12} md={12} lg={5} xl={4} className='py-3'>
            <Row>
              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <Sobrenos></Sobrenos>
              </Col>

              <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                <Postagens></Postagens>
              </Col>
            </Row>
          </Col>
          
          <Col xs={12} sm={12} md={12} lg={3} xl={4} className='py-3'>
            Terceira coluna
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default MeuPerfil;