import React from 'react';
import logo from './youtubelogo.jpg';
import logomenu from './iconemenu.png';
import lupa from './lupa.png';
import perfil from './perfil.jpg';
import mic from './iconemic.jpg';
import casinha from './casa.png';    
import bussola from './bussola.jpg'
import './App.css';

function App() {
  const titulo = "Título do vídeo"

  function reproduzVideo() {
    alert("O vídeo está sendo reproduzido")
  }

  return (
      <div>
        <div className="tela-inteira">
        <header>
            <div className="header-logos">
                <img src={logomenu} alt="logo-menu" width="32px" />
                <img src={logo} alt="logo" width="120px" /> 
            </div>
            <div className="div-campodebusca">
                <input type="text" placeholder="Pesquisar" id="campoDeBusca" />
                <img src={lupa} alt="lupa" width="40px" height="30px"/> 
                <img src={mic} alt="microfone" width="50px" height="40px"/>
            </div>
            <div className="div-imagem-perfil">
                <img src={perfil} alt="foto-perfil" width="50px" />
            </div>
        </header>

        <main>
            <nav className="menu-vertical">
                <div className="div-icones-navegacao">
                    <img src={casinha} alt="casinha" width="30px" />
                    <p>Início</p>
                </div>
                <div className="div-icones-navegacao">
                    <img src={casinha} alt="bussola" width="30px" />
                    <p>Explorar</p>
                </div>
                <div className="div-icones-navegacao">
                    <img src={casinha} alt="casinha" width="30px" />
                    <p>Shorts</p>
                </div>
                <div className="div-icones-navegacao">
                    <img src={casinha} alt="casinha" width="30px" />
                    <p>Inscrições</p>
                </div>
                <div className="div-icones-navegacao">
                    <img src={casinha} alt="casinha" width="30px" />
                    <p>Biblioteca</p>
                </div>
            </nav>

            <section className="painel-de-videos">
                <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=1 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=2 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=3 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=4 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=5 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=6 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=7 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=8 " alt="" />
                    <h4>{titulo}</h4>
                </div>
            </section>
        </main>

        {/* <footer>
            <h4>Oi! Eu moro no footer!</h4>
        </footer> */}
    </div>
      </div>
  );
}

export default App;
