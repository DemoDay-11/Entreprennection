import './Pagamento.css';
import CardPagamento from './components/CardPagamento';
import Entrennection from './components/image/logo.png';
import { Link } from 'react-router-dom';
import home from '../home/home';

export default function Pagamento() {
    
    return(
        <div className="Pagamento">
            <div className='Botoes d-flex'>
            <abbr title="Clique para voltar"><Link to='../home'><img className="LogoEntre" src={Entrennection} onClick={home}  alt="Logo-Entrennection"/></Link></abbr>
            </div>
            <h1 className='Titulo'>Planos</h1>
            <div className='Card-um d-flex justify-content-center'>
                <CardPagamento />
            </div>
            
        </div>   
    )
}