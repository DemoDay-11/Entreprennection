import './CardPagamento.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function CardPagamento() {
    return(
        <div className="Cards">
            <div className="Card-1 d-flex justify-content-center">
                <Card style={{ width: '20rem', height: '21.4rem' }}>
                <Card.Body>
                    <Card.Title className='textH1'>Plus Mensal</Card.Title>
                    <Card.Title className='textPreco'><p>1 Mês</p></Card.Title>
                <Card.Text>
                <span className='TextAzul'>R$39.99</span> Pagamento Mensal
                </Card.Text>
                <br></br>
                <Card.Text className='PrecoGrandeDois'>
                R$39,99
                </Card.Text>
                <Button variant="primary" className='Assine'>Assine</Button>
                </Card.Body>
                </Card>
            </div>
            <div className="Card-2">
            <Card style={{ width: '20rem' }}>
                <Card.Body>
                    <Card.Title className='textH2'>Plus Anual</Card.Title>
                    <Card.Title className='textPreco'><p>12 Meses</p></Card.Title>
                <Card.Text>
                <span className='TextAzul'>R$350,00</span> A cada 12 Meses
                </Card.Text>
                <Card.Text>
                Equivale a <span className='TextAzul'>R$29,00/Mês</span>
                </Card.Text>
                <Card.Text className='PrecoGrande'>
                <span classname='TextCinza'>R$350,00</span>
                </Card.Text>
                <Button variant="primary" className='Assine'>Assine</Button>
                </Card.Body>
                </Card>
            </div>
        </div>
    )
}