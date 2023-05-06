import { Container, Row, Col } from 'react-bootstrap';
import Perfil from '../../components/perfil/perfil';
import './meu-perfil.css';
import Conexoes from '../../components/conexoes/conexoes';
import Sobrenos from '../../components/sobrenos/sobrenos';
import Postagens from '../../components/postagens/postagens';

function MeuPerfil() {
  return (
    <div className="background">
    <header className="background-header"></header>
    
      <Container>
        <Row> 

          <Col xs={12} sm={12} md={12} lg={4} xl={4}>Primeira coluna
           <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <Perfil></Perfil>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <Conexoes></Conexoes>
            </Col>
           </Row>
            
          </Col>

          <Col xs={12} sm={12} md={12} lg={4} xl={4}>
            Segunda coluna

            <Row>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{ height: '228px' }}>
              <Sobrenos></Sobrenos>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <Postagens></Postagens>
            </Col>
            </Row>
          </Col>
          
          <Col xs={12} sm={12} md={12} lg={4} xl={4}>
            Terceira coluna
          </Col>

        </Row>
      </Container>
    </div>
  );
}

export default MeuPerfil;