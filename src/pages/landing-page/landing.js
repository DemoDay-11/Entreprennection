import './landing.css';
import { useNavigate } from "react-router-dom";
import imagem from "../../img/landingpage.png";

function Landing() {
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
                    <h1 style={{padding:0, textAlign:"center", fontFamily: "Roboto", fontWeight: 900}}>ENTRENNECTION</h1>
                    <p>Unindo talentos, tranformando negócios.</p>
                    <button className="btn botao" type="button" onClick={goToLogin}>Conheça nossa plataforma</button>
                </div>
            </div> 
        </header>
    
    </div>
  );
}

export default Landing;