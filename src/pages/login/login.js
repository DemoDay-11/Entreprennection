import './login.css';
import { useNavigate } from "react-router-dom";

function Login() {
    const Navigate = useNavigate();
    
    const Login = () => {
        Navigate("/Menu")
    }
  return (
    <div className="Home">
      <div>
      <header className='header-home'>
        <h1>Alavanque seu negócio conosco!</h1>
        <p>
          Nossa plataforma vai ajudar sua empresa se desenvolver e crescer. <br/>
          Tenha mentoria com os melhores do mercado. <br/>
          Faça networking com empresas e mentores. <br/>
          Faça parcerias comerciais com empreendedores da área do seu interesse!
        </p>
      </header>
      { /* Container do formulário */ }
      <div className="formulario">
        <form>
          <h2>Faça Login ou Cadastre-se</h2>
          <label for="email">Email</label>
          <input id= "email" type="text" placeholder="example@outlook.com" />
          <label for="senha">Senha</label>
          <input id="senha" type="password" placeholder="Senha" />
          <button className='button1' type="submit" onClick={Login}>Entrar</button>
          <button type="submit">Cadastre-se</button>
        </form>
      </div>
    </div>
      
    </div>
  );
}

export default Login;