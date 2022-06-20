import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import fotoperfil from './img/fotoperfil.jpg'
import email from './img/email.png'
import endereço from './img/endereço.png'
import CardPequeno from './components/CardPequeno/CardPequeno'
import seta from './img/seta.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={fotoperfil}
          nome="Igor Castro" 
          descricao="Oi me chamo Igor, tenho 26 anos e moro no Rio de Janeiro. Possuo grande facilidade/interesse em aprender e boa desenvoltura para trabalhar em equipe."
        />
        
        <ImagemButton 
          imagem={seta}
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem={email}
          tipo="Email: "
          texto="igorcastro55@hotmail.com"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem={endereço}
          tipo="Endereço: "
          texto="Rua belo horizonte, 795, Cabo Frio"
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Cursando Labenu (web full stack developer), adquirindo experiências práticas e teóricas sobre front-end e back-end para no futuro trabalhar como Dev. " 
        />
        
        <CardGrande 
          imagem="https://t.ctcdn.com.br/CgXYkXzLQvvhXTxTDLykz9ePGLI=/400x400/smart/filters:format(webp)/i490082.jpeg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
