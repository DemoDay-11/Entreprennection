import Button from 'react-bootstrap/Button';
import { Col,Row } from 'react-bootstrap';
import './mentorias.css';
import img from "../../img/imgmentoria.png";
import { useState } from 'react';
import Cardmentor from '../../components/cardmentor/cardmentor';

function Mentorias() {
  const [agendar, setAgendar] = useState(false)

  return (
    <div className='cont-mentoria'>
      {
        agendar == false ?
        <div className="Mentorias m-0 p-0">
          <h1 className='titulomentoria py-4'>Mentorias</h1>
          <Row className='p-0 m-0'>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} >
              <div className=' d-flex justify-content-center'>
                <img src={img} width="80%" height="100%" className='img'/>
              </div>
            </Col>
            <Col xs={12} sm={12} md={12} lg={12} xl={12} className='d-flex align-items-center'>
              <p className='textMentorias text-center p-4'>Você está convidado(a) a participar de uma mentoria incrível com os nossos mentores altamente qualificados e experientes! Nossa equipe de mentores está pronta para compartilhar seu conhecimento, orientação e insights valiosos para ajudá-lo(a) a atingir seus objetivos pessoais e profissionais.</p>
            </Col>

            <Col xs={12} sm={12} md={12} lg={12} xl={12} className='d-flex justify-content-center py-3'>
              <Button variant="dark" className='botao-mentoria' onClick={() => setAgendar(true)}><p>Agendamentos</p></Button>
            </Col>
          </Row>
        </div>
        :
        <div className="agendar">
          <h1 className='titulomentoria py-4'>Agende já</h1>
          <p className='textagendar text-center pt-1'>Agende a sua mentoria e alavanque o seu negócio </p>
        
            <Row className='p-0 m-0'>
                <Cardmentor/>
                <Cardmentor/>
                <Cardmentor/>
                <Cardmentor/>
                <Cardmentor/>
                <Cardmentor/>
                <Cardmentor/>
                <Cardmentor/>
            </Row>
        </div>
      }
    </div>
  );
}

export default Mentorias;