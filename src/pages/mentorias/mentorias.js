import Button from 'react-bootstrap/Button';
import { Col,Row } from 'react-bootstrap';
import './mentorias.css';
import img from "../../img/imgmentoria.png";
import { useState, useEffect} from 'react';
import Cardmentor from '../../components/cardmentor/cardmentor';
import Calendar from 'react-calendar';
import './calendario.css';
import imagem from "../../img/cachorro.jpg";

function Mentorias() {
  const [agendar, setAgendar] = useState(false)
  const [calendario, setCalendario] = useState(false)
  const [value, onChange] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);

  const showCalendar = (calendario) => {
    setCalendario(calendario)
  }

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleAgendarClick = () => {
    if (selectedTime) {
      // Logic to schedule the selected time
      console.log("Horário agendado:", selectedTime);
    } else {
      console.log("Nenhum horário selecionado.");
    }
  };


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
        agendar == true && calendario== false?

        <div className="agendar">
          <h1 className='titulomentoria py-4'>Agende já</h1>
          <p className='textagendar text-center pt-1'>Agende a sua mentoria e alavanque o seu negócio </p>
        
            <Row className='p-0 m-0'>
                <Cardmentor showCalendar={showCalendar} />
                <Cardmentor showCalendar={showCalendar}/>
                <Cardmentor showCalendar={showCalendar}/>
                <Cardmentor showCalendar={showCalendar}/>
                <Cardmentor showCalendar={showCalendar}/>
                <Cardmentor showCalendar={showCalendar}/>
                <Cardmentor showCalendar={showCalendar}/>
                <Cardmentor showCalendar={showCalendar}/>
            </Row>
        </div>
        :
        <div className="Mentoria">
          <div className="headerM">
            <h1 className="tituloM">Agendamento de mentoria</h1><br/><br/>
          </div>
          <Row className='mx-1 d-flex justify-content-center'>
            <Col xs={12} sm={12} md={12} lg={6} xl={6}  className='d-flex justify-content-center'>
              <div className="card shadow containercal">
                <Row>
                  <Col xs={12} sm={12} md={12} lg={12} xl={12} className='d-flex justify-content-center'>
                    <img className='imgcalen' src={imagem}></img>  
                  </Col>
                  <Col  xs={12} sm={12} md={12} lg={12} xl={12} className='text-center letra py-3'>
                    <div>Qual é a melhor data? <br/></div>
                  </Col>
                  <Col  xs={12} sm={12} md={12} lg={12} xl={12} className='d-flex justify-content-center'>
                    <Calendar onChange={onChange} value={value} />
                  </Col>
                </Row>  
                <br/>
              </div>
            </Col>

            <Col xs={12} sm={12} md={12} lg={6} xl={6} className='text-center d-flex justify-content-center letra'>
              <div className="card shadow containerhora">
                <br/>
                <div>Qual é o melhor horario? <br/></div>
                <div className="timeslots">
                  <div onClick={() => handleTimeSelect("9:00")}>9:00</div>
                  <div onClick={() => handleTimeSelect("10:00")}>10:00</div>
                  <div onClick={() => handleTimeSelect("11:00")}>11:00</div>
                  <div onClick={() => handleTimeSelect("12:00")}>12:00</div>
                  <div onClick={() => handleTimeSelect("13:00")}>13:00</div>
                  <div onClick={() => handleTimeSelect("14:00")}>14:00</div>
                  <div onClick={() => handleTimeSelect("15:00")}>15:00</div>
                  <button className='button-calendar' onClick={handleAgendarClick}>AGENDAR</button>
                </div>
              </div>
            </Col>

          </Row>

        </div>
      }
    </div>
  );
}

export default Mentorias;