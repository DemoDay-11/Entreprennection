import './Noticias.css';
import { Col, Row } from 'react-bootstrap';
import Parceiros from './Pagamento.png'

export default function Noticias() {
    return (
       <div className='pagePagamentos'>
        <div className='DadosCompra'>
            <h1>caique</h1>
        </div>
        <div className='DetalhesCompra'>
            <h2 className='Detalhes'>Detalhes da Compra</h2>
            <p className='TipoPlano'>Tipo de Plano:<span className='PlanoP'>Plano Plus Mensal</span></p>
            <p className='UmaVez'>Pague uma vez no mês</p>
            <p className='DescPlano'>Inclui: Plano plus mensal, com mais visibilidade e mentorias com nossos renomeados mentores</p>
            <h4 className='Cupom'>Cupom de Desconto</h4>
            <button className='Grey'>Código do Cupom</button>
            <p className='preco'>Valor R$39</p>
            <button className='blue'>Assine</button>
        </div>

        <div className='Parcerias'>
            <h4 className='Parce'>Nossos Parcerios</h4>
            <div className='FundoParcerias'>
                <img className='parceiros' src={Parceiros}></img>
            </div>
        </div>
       </div>
    )
}