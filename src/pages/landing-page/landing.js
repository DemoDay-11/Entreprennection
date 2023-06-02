import './landing.css';
import { useNavigate } from "react-router-dom";
import imagem from "../../img/landingpage.png";

function Landing(props) {
    const Navigate = useNavigate();

    const goToLogin = () => {
        Navigate("/Login")
    }

    return (
        <div className="container-fluid p-0">
            <header className='header-landing'>
                <img src={imagem}></img>
                <div className="centered">
                    <div >
                        <h1 style={{ padding: 0, textAlign: "center", fontFamily: "Roboto", fontWeight: 900 }}>ENTRENNECTION</h1>
                        <p>Unindo talentos, tranformando negócios.</p>
                        <button className="btn botao" type="button" onClick={goToLogin}>Conheça nossa plataforma</button>
                    </div>
                </div>
            </header>
            <div className='white' >
                <div className='text'>
                    <h2>Nossos métodos de trabalho</h2>
                </div>
                <div className='cards'>
                    <div className='card1'>
                        <div className='photo1'></div>
                        <div className='text1'>
                            <p>Metas</p>
                        </div>
                    </div>
                    <div className='card2'>
                        <div className='photo2'></div>
                        <div className='text2'>
                            <p>Mentorias</p>
                        </div>
                    </div>
                    <div className='card3'>
                        <div className='photo3'></div>
                        <div className='text3'>
                            <p>Conexões</p>
                        </div>
                    </div>
                    <div className='card4'>
                        <div className='photo4'></div>
                        <div className='text4'>
                            <p>Compartilhe sua evolução</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bluepart'>
                <div className='conteudo'>
                    <div className='textbluepart'>
                        <p>Contando sobre a plataforma</p>
                    </div>
                    <div className='video'>
                        <iframe src="https://player.vimeo.com/video/818941970?h=ee85426980" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <div className='endpart'>
                <div className='endtext'>
                    <p>Quer ter esses benefícios também?</p>
                </div>
                <div className='btn-cds'>
                <button className="btn botao2" type="button" onClick={goToLogin}>Cadastre-se em nossa plataforma</button>
                </div>
            </div>
        </div>
    );
}

export default Landing;