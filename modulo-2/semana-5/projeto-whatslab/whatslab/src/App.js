import styled from 'styled-components';
import SecaoComentario from './componentes/SecaoComentario/SecaoComentario';
import React from 'react';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`

const MainContainer = styled.div`
  height: 100vh;
  width: 40%;
  display: flex;
  flex-direction: column;
  background-color: #B0C4DE;
  border: 1px solid black;
`

const ComentariosContainer = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: end;
  justify-content: flex-end;
  padding: 20px;  
`

const InputsContainer = styled.div`
  height: 10%;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Button = styled.button`
  height: 64%;
  width: 12%;
  font-size: 18px;
  border: none;
  border-radius: 4px;
  background-color: white;
`

const InputUsuario = styled.input`
  height: 50%;
  width: 90px;
  font-size: 19px;
  border: none;
  border-radius: 4px;  
  padding: 4px;
`

const InputMensagem = styled.input`
  height: 50%;
  width: 64%;
  font-size: 19px;
  border: none;
  border-radius: 4px;
  padding: 4px;
`

document.addEventListener("keypress", function(e) {
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
  
  render() {

    const componenteComentario = this.state.comentario.map((comentario) => {
      return(
        <SecaoComentario key="index"  
        nomeUsuario={comentario.nomeUsuario}
        mensagemUsuario={comentario.mensagemUsuario}
        />
      );
    });

  return (
    <Container>
        <MainContainer>
          <ComentariosContainer>
             {componenteComentario}
          </ComentariosContainer>
          <InputsContainer> 
            <InputUsuario value={this.state.valorInputNomeUsuario} onChange={this.onChangeInputNomeUsuario} placeholder='Usuário'/>
            <InputMensagem value={this.state.valorInputMensagemUsuario} onChange={this.onChangeInputMensagemUsuario} placeholder='Mensagem'/>
            <Button onClick={this.adicionarComentario} id="submit"><strong>Enviar</strong></Button>
          </InputsContainer>
        </MainContainer>
    </Container>
  );
  }
}

export default App;
