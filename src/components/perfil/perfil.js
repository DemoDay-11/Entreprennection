import './perfil.css';
import img from "../../img/filhote-gato.jpg"

function Perfil() {
  return (
    <div className='borderperfil'>
      <header>
        
      <img src={img} width="100px" height="100px" className='img'/>
        <p>
          Luis Henrique<br/>
          Empresa<br/>
          São Paulo, São Paulo, Brasil.
        </p>   
        
      </header>
    </div>
  );
}

export default Perfil;