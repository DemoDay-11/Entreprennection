import './landing.css';
import { useNavigate } from "react-router-dom";
import imagem from "../../img/landingpage.png";
import Card from 'react-bootstrap/Card';
import { Row, Col, Button } from 'react-bootstrap';
import compartilhe from '../../img/compartilhe.png';
import conexoes from '../../img/conexoes.png';
import metas from '../../img/metas.png';
import mentorias from '../../img/mentorias.png';
import Footer from '../../components/footer/footer';


function Landing(props) {
    const Navigate = useNavigate();

    const goToLogin = () => {
        Navigate("/Login")
    }

    function conhecaAPlataforma() {
        window.location.href="#conheca-a-plataforma";
    }

    return (
        <div className="container-fluid p-0">
            <header className='header-landing'>
                <img src={imagem}></img>
                <div className="centered">
                    <div >
                        <h1 className='text-logo'>ENTRENNECTION</h1>
                        <p>Unindo talentos, tranformando negócios.</p>
                        <button className="btn botao" type="button" onClick={() => conhecaAPlataforma()}>Conheça nossa plataforma</button>
                    </div>
                </div>
            </header>

            <div className='white'>
                <div className='text'>
                    <h2>Nossos métodos de trabalho</h2>
                    <br/>
                    <br/>
                    <br/>
                </div>

                <Row className='m-0 p-0'>
                    <Col xs={12} sm={6} md={6} lg={3} xl={3} className='p-3 d-flex justify-content-center'>
                        <Card className='shadow card-size'>
                            <Card.Img variant="top" src={metas} />
                            <Card.Body>
                                <Card.Title className='text-center'>Metas</Card.Title>
                                {/* <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text> */}
                            </Card.Body>
                        </Card>
                                        
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={3} xl={3} className='p-3 d-flex justify-content-center'>
                        <Card className='shadow card-size'>
                                <Card.Img variant="top" src={mentorias} />
                                <Card.Body>
                                    <Card.Title className='text-center'>Mentorias</Card.Title>
                                    {/* <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text> */}
                                </Card.Body>
                            </Card>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={3} xl={3} className='p-3 d-flex justify-content-center'>
                        <Card className='shadow card-size'>
                                <Card.Img variant="top" src={conexoes} />
                                <Card.Body>
                                    <Card.Title className='text-center'>Conexões</Card.Title>
                                    {/* <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text> */}
                                </Card.Body>
                            </Card>
                    </Col>
                    <Col xs={12} sm={6} md={6} lg={3} xl={3} className='p-3 d-flex justify-content-center'>
                        <Card className='shadow card-size'>
                                <Card.Img variant="top" src={compartilhe} />
                                <Card.Body>
                                    <Card.Title className='text-center'>Compartilhe sua evolução</Card.Title>
                                    {/* <Card.Text>
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text> */}
                                </Card.Body>
                            </Card>
                    </Col>
                </Row>
                <br/><br/>
                <br/>
                <br/>
                <br/>
            </div>

            <div className='bluepart' id="conheca-a-plataforma">
                <div className='conteudo d-flex'>
                    <div className='textbluepart'>
                        <p>Contando sobre a plataforma</p>
                    </div>
                    <div className='video align-self-center'>
                        <iframe src="https://www.youtube.com/embed/FDXS_vWk_JI" className='iframe-video' frameBorder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <br/><br/>
                    <br/><br/>
                </div>
            </div>

            <div className='endpart p-5'>
                <div className='endtext'>
                <br/>
            <br/>
                    <p>Quer ter esses benefícios também?</p>
                </div>
                <div className='btn-cds'>
                    <button className="btn botao2" type="button" onClick={goToLogin}>Cadastre-se em nossa plataforma</button>
                </div>
            </div>
            <br/>
            <br/>
            <Footer></Footer>  
        </div>
    );
}

export default Landing;