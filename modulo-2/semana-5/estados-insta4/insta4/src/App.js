import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`
const PostContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  margin-bottom: 20px;
`

const Button = styled.button`
  height: 37px;
  width: 100px;
  display: flex;
  margin: 43px 0 0 5px;
`

class App extends React.Component {

  state = {
    post: [
      {
        nomeUsuario: "paulinha",
        fotoUsuario: "https://picsum.photos/50",
        fotoPost: "https://picsum.photos/200"
      },
      { 
        nomeUsuario: "pedrinho",
        fotoUsuario: "https://picsum.photos/48",
        fotoPost: "https://picsum.photos/150"
      },
      { 
        nomeUsuario: "carlinhos",
        fotoUsuario: "https://picsum.photos/30",
        fotoPost: "https://picsum.photos/10"
        }
    ],
    valorInputNome: "",
    valorInputFoto: "",
    valorInputFotoPost: ""
  }

  adicionarPost = () => {
    const novoObjetoPost = {
      nomeUsuario: this.state.valorInputNome,
      fotoUsuario: this.state.valorInputFoto,
      fotoPost: this.state.valorInputFotoPost
    };

    const novoPost = [novoObjetoPost, ...this.state.post]
    this.setState({post: novoPost})
    this.setState({valorInputNome: ""})
    this.setState({valorInputFoto: ""})
    this.setState({valorInputFotoPost: ""})
  };

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };

  onChangeInputFotoPerfil = (event) => {
    this.setState({ valorInputFoto: event.target.value });
  };

  onChangeInputFotoPost = (event) => {
    this.setState({ valorInputFotoPost: event.target.value });
  };

  render() {

    const componentePost = this.state.post.map((post) => {
      return (
        <Post
          nomeUsuario={post.nomeUsuario}
          fotoUsuario={post.fotoUsuario}
          fotoPost={post.fotoPost}
        />
      );
    });

  return (
      <MainContainer>
        <PostContainer>
          <div>
            <p>Nome</p>
            <input value={this.state.valorInputNome} onChange={this.onChangeInputNome} placeholder="Nome"/>
          </div>
          <div>
            <p>Foto Usuario</p>
            <input value={this.state.valorInputFoto} onChange={this.onChangeInputFotoPerfil} placeholder="Foto Perfil"/>
          </div>
          <div>
            <p>Foto Post</p>
            <input value={this.state.valorInputFotoPost} onChange={this.onChangeInputFotoPost} placeholder="Foto Post"/>
          </div>
          <Button onClick={this.adicionarPost}>Adicionar Post</Button>
        </PostContainer>
        <div>
          {componentePost}
        </div>
      </MainContainer>
    );
  }
}

export default App;
