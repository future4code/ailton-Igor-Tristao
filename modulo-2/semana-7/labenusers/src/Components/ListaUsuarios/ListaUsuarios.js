import React from "react";
import styled from "styled-components";
import axios from 'axios';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 100%;
  border: 1px solid black;
`;

const ContainerUsuario = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin-bottom: 25px;
`;

const Button = styled.button`
  height: 50%;
  margin-bottom: 10px;
`;

const ContainerButton = styled.div`
  display: flex;
  gap: 10px;
`;

const ContainerBuscar = styled.div`
  margin-bottom: 15px;
  width: 80%;
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const Containerusuarios = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class listaUsuarios extends React.Component {
  state = {
    inputBuscar: "",
    buscando: false,
    usuariosProcurados: []
  };

  onChangeBuscar = (event) => {
    this.setState({ inputBuscar: event.target.value });
  };

  buscarUsuario = (name) => {

    const searchUser = axios.get(
      `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/search?name=${name}`,
      {
        headers: {
          Authorization: "igor-castro-ailton",
        },
      }
    );

    searchUser
    .then((response) => {
        if(response.data.length > 0) {
        const usuarioProcurado = response.data.map((objeto) => {
          return objeto;
        })
        this.setState({ usuariosProcurados: usuarioProcurado });
        alert('Usuário encontrado!')}
        else {
        alert('Usuário não encontrado, tente outro nome.')
        this.setState({ buscando: !this.state.buscando })
        }
      })

      this.setState({ inputBuscar: ""})
      this.setState({ buscando: !this.state.buscando })
  };

  voltarBusca = () => {
    this.setState({ buscando: !this.state.buscando})
    this.setState({ inputBuscar: ""})   
    this.setState({ usuariosProcurados: []})
  }

  render() {
    const mostrarUsuarios = this.props.usuarios.map((usuario) => {
      return (
        <ContainerUsuario key={usuario.id}>
          <li>Nome: {usuario.name}</li>
          <ContainerButton>
            <Button onClick={() => this.props.userDetails(usuario.id)}>
              Detalhes
            </Button>
            <Button onClick={() => this.props.deleteUser(usuario.id)}>
              Remover
            </Button>
          </ContainerButton>
        </ContainerUsuario>
      );
    });

    const usuarioProcuradoRenderizar = this.state.usuariosProcurados.map((usuario) => {
        return (
            <Containerusuarios key={usuario.id}>
                <p>Nome: {usuario.name}</p>
                <p>Id: {usuario.id}</p>
            </Containerusuarios>
        )
    })

    return (
      <Container>
        <MainContainer>
          <h3>Lista de usuários cadastrados</h3>
          <ContainerBuscar>
            <input
              value={this.state.inputBuscar}
              onChange={this.onChangeBuscar}
            />
            <button onClick={() => this.buscarUsuario(this.state.inputBuscar)}>Buscar</button>
          </ContainerBuscar>
          {this.state.buscando || (
            <Containerusuarios>
                {mostrarUsuarios}
                <Button onClick={this.props.voltarCadastro}>Voltar</Button>
            </Containerusuarios>
          )}
          {this.state.buscando && (
            <Containerusuarios>
                {usuarioProcuradoRenderizar}
                <Button onClick={() => this.voltarBusca()}>Voltar</Button>
            </Containerusuarios>
          )}
        </MainContainer>
      </Container>
    );
  }
}

export default listaUsuarios;
