import styled from 'styled-components';
import SecaoComentario from './componentes/SecaoComentario/SecaoComentario';
import Cabecalho from './componentes/Cabecalho/Cabecalho';
import React from 'react';
import img from './img/background.jpg'

const Container = styled.div`           //div da pagina inteira
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`

const MainContainer = styled.div`        // div de todo o conteudo
  height: 100vh;
  width: 40%;
  display: flex;
  flex-direction: column;
  border: 1px solid #f1f2f6;
  &:before{
    content: '';
    background-image: url(${img});
    background-size: auto;
    opacity: 0.9;
    position: absolute;
    width: 40%;
    height: 99vh;
  }
`

const ComentariosContainer = styled.div`   //div dos comentarios
  height: 90%;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: end;
  justify-content: flex-end;
  padding: 20px;  
`

const InputsContainer = styled.div`          // div dos inputs+botão
  height: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
  background-color: #f1f2f7;
`

const Button = styled.button`          //botão
  height: 64%;
  width: 12%;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  background-color: white;
`

const InputUsuario = styled.input`       //input do usuario
  height: 50%;
  width: 80px;
  font-size: 17px;
  border: none;
  border-radius: 4px;  
  padding: 4px;
`

const InputMensagem = styled.input`       //input das mensagens
  height: 50%;
  width: 64%;
  font-size: 17px;
  border: none;
  border-radius: 4px;
  padding: 4px;
`

document.addEventListener("keypress", function(e) {      //função enviar mensagem ENTER
  if(e.key === 'Enter') {
      var btn = document.querySelector("#submit");
    btn.click();
  }
});

class App extends React.Component {
  
  state = {
    comentario: [],
    valorInputNomeUsuario: "",
    valorInputMensagemUsuario: ""
  }

  adicionarComentario = () => {
    const novoObjetoComentario = {
      nomeUsuario: this.state.valorInputNomeUsuario,
      mensagemUsuario: this.state.valorInputMensagemUsuario
    };

    const novoComentario = [ ...this.state.comentario, novoObjetoComentario]
    this.setState({comentario: novoComentario})
    this.setState({valorInputNomeUsuario: ""})
    this.setState({valorInputMensagemUsuario: ""})
  };
  
  onChangeInputNomeUsuario = (event) => {
    this.setState({ valorInputNomeUsuario: event.target.value });
  };

  onChangeInputMensagemUsuario = (event) => {
    this.setState({ valorInputMensagemUsuario: event.target.value });
  };
  
  removerComentario = (id) => {
    if(window.confirm('Deseja deletar esta mensagem?')) {
      const novoArray = this.state.comentario.filter((pessoa, index) => {
        return id !== index
      })
      this.setState({comentario: novoArray})
    }
  } 

  render() {

    const componenteComentario = this.state.comentario.map((comentario, index) => {
      return(
        <SecaoComentario
        nomeUsuario={comentario.nomeUsuario}  
        mensagemUsuario={comentario.mensagemUsuario}
        remover={() => this.removerComentario(index)}
        />
      );
    });

  return (
    <Container>
        <MainContainer>
          <Cabecalho />
          <ComentariosContainer>
             {componenteComentario}
          </ComentariosContainer>
          <InputsContainer> 
            <InputUsuario value={this.state.valorInputNomeUsuario} onChange={this.onChangeInputNomeUsuario} placeholder=' Usuário'/>
            <InputMensagem value={this.state.valorInputMensagemUsuario} onChange={this.onChangeInputMensagemUsuario} placeholder='  Mensagem'/>
            <Button onClick={this.adicionarComentario} id="submit"><strong>Enviar</strong></Button>
          </InputsContainer>
        </MainContainer>
    </Container>
  );
  }
}

export default App;
