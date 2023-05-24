import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import MeuPerfil from '../../pages/meu-perfil/meu-perfil';
import Feed from '../../pages/feed/feed';
import Empresas from '../../pages/empresas/empresas';
import Mentorias from '../../pages/mentorias/mentorias';
import Plus from '../../pages/plus/plus';
import Home from '../../pages/home/home';
import './menu.css'
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import SegundaConexao from '../../pages/conexoes/segunda';
import imagem from "../../img/site-logo.jpg";


function Menu() {
  const [key, setKey] = useState('home');

  return (
    <Tab.Container 
      id="controlled-tab-example"
      defaultActiveKey="home"
      className="tabs"
      
      style={{backgroundColor: 'PINK !important'}}
      >
      <Row className='p-0 m-0'>
        <Col sm={2} className='tabs' style={{height: "100vh"}}>
          <Nav variant="pills" className="flex-column">
            <img src={imagem} width={64} height={64} className='my-3 imageredonda'></img>
            <Nav.Item>
              <Nav.Link eventKey="home" title="Home">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="meu-perfil" title="Meu Perfil">Meu Perfil</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="conexoes" title="SegundaConexao">Conexões</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="empresas" title="Empresas">Empresas</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="mentorias" title="Mentorias">Mentorias</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="plus" title="Plus">Plus</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>

        <Col sm={10} className='offset-sm-2 p-0'>
          <Tab.Content>
            <Tab.Pane eventKey="home">
              <Home />
            </Tab.Pane>
            <Tab.Pane eventKey="meu-perfil">
              <MeuPerfil />
            </Tab.Pane>
            <Tab.Pane eventKey="conexoes">
              <SegundaConexao />
            </Tab.Pane>
            <Tab.Pane eventKey="empresas">
              <Empresas />
            </Tab.Pane>
            <Tab.Pane eventKey="mentorias">
              <Mentorias />
            </Tab.Pane>
            <Tab.Pane eventKey="plus">
              <Plus />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Menu;