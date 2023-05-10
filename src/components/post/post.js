import './post.css';
import { Col, Row } from 'react-bootstrap';
import imgperfil from '../../img/filhote-gato.jpg'; 


function Post({img, texto}) {
    return (
        <Col xs={12} sm={12} md={12} lg={12} xl={12} className='borderpost'>
            <Row>
               <Col xs={12} sm={12} md={12} lg={12} xl={12}><img src={imgperfil} className='imgFotodeperfil'/></Col>
               <Col xs={12} sm={12} md={12} lg={12} xl={12}>Luis Henrique </Col>
            </Row>
            <br/>
            <div className='fundopost'>
                <img src={img} className='imgPost'/>
                <p className='py-2'>{texto}</p>
            </div>
            
        </Col>  
    );
}

export default Post;