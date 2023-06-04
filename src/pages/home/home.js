import './home.css';
import avatarRedondo  from '../../img/avatar-redondo.png';
import fotoPublicacao from '../../img/conexões.jpeg';




function Home() {
  return (
    <div className="Home">
      <div className='Feed'>
        <div className='FacaPub'>
          <div className='ConteudoPerfil'>
            <div className='FotoPerfil'>
              <img src={avatarRedondo} width="80px" height="80px" className='img'></img>
            </div>
            <div className='TextoPub'>
          
            </div>
          </div>
        </div>
        
        <div className='Publicacao'>
          <div className='parteCima'>
            <div className='fotoPerfil2'>
              <img src={avatarRedondo} width="60px" height="60px" className='img'></img>
            </div>
            <div className='nomesPerfil'>
              <div className='nomePerfil'>
                <p>Caique de Oliveira</p>
              </div>
              <div className='areaAPerfil'>
                <p>Mentor</p>
              </div>
            </div>
          </div>
            <div className='TituloPubli'>
              <p>Encontro realizado no dia 01/05/2023. Apenas amigos próximos. Foi um ótimo passeio e fico feliz de reencontrar vocês</p>
            </div>
            <div className='ConteudoFoto'>
              <img src={fotoPublicacao} width='100%' height='100%'></img>
            </div>
            <div className='BtnsBaixo'>
            <button class="slide_from_top">Gostei</button>
            <button class="slide_from_top">Comentar</button>
            <button class="slide_from_top">Compartilhar</button>
            <button class="slide_from_top">Enviar</button>
            </div>
        </div>

      </div>
      
      <div className='Trending'>
        <div className='Noticias'>
          <p>Notícias do momento</p>
        </div>
        <div className='CardsNoticiais'>
          <div className='Noticia1'>
            <p>Texto da Noticia1</p>
          </div>
          <div className='Noticia2'>
          <p>Texto da Noticia2</p>
          </div>
          <div className='Noticia3'>
          <p>Texto da Noticia3</p>
          </div>
          <div className='Noticia4'>
          <p>Texto da Noticia4</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;