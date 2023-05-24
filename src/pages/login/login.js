import { Col, Row } from 'react-bootstrap';
import './login.css';
import { useNavigate } from "react-router-dom";
import imagem from "../../img/login.png";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function Login() {
    const Navigate = useNavigate();
    
    const Login = () => {
        Navigate("/Home")
    }
  return (
    <div className='p-0'>
      <div>LOGO DA EMPRESA</div>
      <Row className='p-0 m-0'>
        <Col xs={12} sm={12} md={5} lg={5} xl={5} className='p-0 m-0 d-none d-md-block'>
          <img src={imagem} className='img-login'></img>
        </Col>

        <Col xs={12} sm={12} md={7} lg={7} xl={7} className='p-0 m-0 d-flex justify-content-center'>
          <div className='d-flex justify-content-center card-container'>
            <div className="card card-login p-3">
              <div className="card-body">
                <Form>
                  <h2 className='text-center'>Faça Login ou Cadastre-se</h2>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Senha</Form.Label>
                    <Form.Control type="password" placeholder="************" />
                  </Form.Group>

                  <div class="d-grid gap-2 col-12">
                    <Button variant="dark" className='botao-login' onClick={Login}>Entrar</Button>
                    <Button variant="dark">Cadastre-se</Button>
                  </div>

                </Form>
              </div>
            </div>
          </div>



          
        </Col>
        
        {/* <Col xs={12} sm={12} md={12} lg={12} xl={12} style={{backgroundColor: "pink"}}>
          meu footer
        </Col> */}
      </Row>
    </div>
  );
}

export default Login;