import './plus.css';
import Button from 'react-bootstrap/Button';

function Plus() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'>Torne-se Plus</h1>
        <div className='video-area'>
          <iframe className='videoPlus' width="500" height="400" src="https://www.youtube.com/embed/sVnfv3-SeuU" title="Paisagens em movimento" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          <p className='textPlus'>Descubra seu potencial empreendedor e alcance o sucesso com nossas mentorias exclusivas. Assine nosso plano "Plus" e tenha acesso a aulas, consultorias e mentorias conduzidas por especialistas renomados do Sebrae e SENAC. Aproveite essa oportunidade única de aprimorar suas habilidades, desenvolver estratégias eficientes e impulsionar o crescimento do seu negócio. Junte-se a uma comunidade de microempreendedores visionários e colabore para alcançar resultados ainda mais expressivos. Assine agora nosso plano "Plus" e descubra o caminho para o sucesso empreendedor.</p>
        </div>
        <Button variant="dark" className='botao-login'><p>Quero me tornar PLUS</p></Button>
      </header>
    </div>
  );
}

export default Plus;
