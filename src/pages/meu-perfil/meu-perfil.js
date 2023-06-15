import './meu-perfil.css';
import FotoPerfil from './components/FotoPerfil';
import CardConexoes from './components/CardConexoes';

function MeuPerfil() {
  return (
    <div className='meuPerfil'>
        <div className='FotoPerfil'>
        </div>
        <div className='Banner'>

        </div>
        
      <div className='BackgroundFundo'>
        <div className='TextosPerfil'>
            <div className='NomePerfil'>
              <p>Bubu Modas</p>
            </div>
            <div className='Produto'>
              <p>Roupas Premium</p>
            </div>
            <div className='DescricaoPerfil'>
            <p>Vendo roupa a 5 anos e meu negocio está precisando de parceiros.</p>
            </div>
        </div>

        <div className='Conexões'>
          <CardConexoes />
        </div>

        <div className='Postagens'>
          
        </div>
      </div>
    </div>
  );
}

export default MeuPerfil;