import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import MeuPerfil from '../../pages/meu-perfil/meu-perfil';
import Feed from '../../pages/feed/feed';
import Empresas from '../../pages/empresas/empresas';
import Mentorias from '../../pages/mentorias/mentorias';
import Notificacoes from '../../pages/notificacoes/notificacoes';
import Home from '../../pages/home/home';


function Menu() {
  const [key, setKey] = useState('home');

  return (
    <Tabs
      id="controlled-tab-example"
      activeKey={key}
      onSelect={(k) => setKey(k)}
      className="mb-3"
    >
        <Tab eventKey="home" title="Home">
            <Home />
        </Tab>

        <Tab eventKey="meu-perfil" title="Meu Perfil">
            <MeuPerfil />
        </Tab>

      <Tab eventKey="feed" title="Feed">
        <Feed />
      </Tab>

      <Tab eventKey="empresas" title="Empresas">
        <Empresas />
      </Tab>

      <Tab eventKey="mentorias" title="Mentorias">
        <Mentorias />
      </Tab>

      <Tab eventKey="notificacoes" title="Notificações">
        <Notificacoes />
      </Tab>


    </Tabs>
  );
}

export default Menu;