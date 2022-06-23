import React from "react";
import styled from "styled-components";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  height: 100%;
  border: 1px solid black;
`;

const ContainerButton = styled.div`
  display: flex;
  gap: 15px;
`;

const ContainerDetalhes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
`;

const ContainerEditar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 80%;
  margin-bottom: 10px;
`;

const ButtonSave = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 5px;
`

class DetalhesUsuario extends React.Component {
  state = {
    editar: false,
    inputEditarName: "",
    inputEditarEmail: "",
  };

  onChangeinputEditarName = (event) => {
    this.setState({ inputEditarName: event.target.value });
  };

  onChangeinputEditarEmail = (event) => {
    this.setState({ inputEditarEmail: event.target.value });
  };

  aparecerInputsEditar = () => {
    this.setState({ editar: !this.state.editar });
  };

  editarUsuario = (idUsuario) => {
    const body = {
      name: this.state.inputEditarName,
      email: this.state.inputEditarEmail,
    };

    const editUser = axios.put(
      `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idUsuario}`,
      body,
      {
        headers: {
          Authorization: "igor-castro-ailton",
        },
      }
    );

    editUser
      .then((response) => {
        alert("Usuário editado com sucesso!");
      })
      .catch((error) => {
        alert("Edição falhou, tente novamente mais tarde.");
        console.log(error);
      });

    this.setState({ editar: !this.state.editar})
    this.props.voltarCadastro()
  };

  render() {
    return (
      <Container>
        <MainContainer>
          <h3>Detalhes do usuário</h3>
          <ContainerDetalhes>
            <p>Nome: {this.props.detalheUsuario.name}</p>
            <p>Email: {this.props.detalheUsuario.email}</p>
          </ContainerDetalhes>
          <ContainerButton>
            {this.state.editar || (
                <button onClick={() => this.aparecerInputsEditar()}>Editar</button>
            )}
            <button
              onClick={() =>
                this.props.deleteUser(this.props.detalheUsuario.id)
              }
            >
              Deletar
            </button>
            <button onClick={() => this.props.voltarListausuarios()}>
              Voltar
            </button>
          </ContainerButton>
          {this.state.editar && (
            <ContainerEditar>
              <p>Insira o novo nome:</p>
              <input value={this.state.inputEditarName} onChange={this.onChangeinputEditarName}/>
              <p>Insira o novo email:</p>
              <input value={this.state.inputEditarEmail} onChange={this.onChangeinputEditarEmail}/>
                <ButtonSave>
                    <button onClick={() => this.editarUsuario(this.props.detalheUsuario.id)}>Salvar</button>
                </ButtonSave>
            </ContainerEditar>
          )}
        </MainContainer>
      </Container>
    );
  }
}

export default DetalhesUsuario;
