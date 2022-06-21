import axios from "axios";
import React from "react";
import "./App.css";
import Cadastro from "./Components/Cadastro/Cadastro";
import ListaUsuarios from "./Components/ListaUsuarios/ListaUsuarios";
import DetalhesUsuario from "./Components/DetalhesUsuario/DetalhesUsuario";

class App extends React.Component {
  state = {
    tela: "cadastro",
    inputName: "",
    inputEmail: "",
    usuarios: [],
    detalheUsuario: []
  };

  onChangeInputName = (event) => {
    this.setState({ inputName: event.target.value });
  };

  onChangeInputEmail = (event) => {
    this.setState({ inputEmail: event.target.value });
  };

  createUsers = () => {
    const body = {
      name: this.state.inputName,
      email: this.state.inputEmail,
    };

    const createUser = axios.post(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      body,
      {
        headers: {
          Authorization: "igor-castro-ailton",
        },
      }
    );

    createUser
      .then((response) => {
        alert("Cadastro realizado com sucesso!");
      })
      .catch((error) => {
        alert("Cadastro não realizado, tente novamente mais tarde.");
        console.log(error);
      });

    this.setState({ inputName: "" });
    this.setState({ inputEmail: "" });
  };

  getAllUsers = () => {
    this.setState({ tela: "listaUsuarios" });
    const request = axios.get(
      "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
      {
        headers: {
          Authorization: "igor-castro-ailton",
        },
      }
    );

    request
      .then((response) => {
        const novosUsuarios = response.data.map((objeto) => {
          return objeto;
        });
        this.setState({ usuarios: novosUsuarios });

      })
      .catch((error) => {
        console.log(error);
      });
  };

  deleteUser = (idUsuario) => {
    if (window.confirm("Tem certeza de que deseja deletar?")) {
      const deleteUser = axios.delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idUsuario}`,
        {
          headers: {
            Authorization: "igor-castro-ailton",
          },
        }
      );

      deleteUser
        .then((response) => {
          alert("Usuario removido com sucesso.");
          this.getAllUsers();
        })
        .catch((error) => {
          alert("Usuario não foi removido, tente novamente mais tarde.");
          console.log(idUsuario);
          console.log(error);
        });
    }
  };

  voltarCadastro = () => {
    this.setState({ tela: "cadastro" });
  };

  voltarListausuarios = () => {
    this.setState({ tela: "listaUsuarios"})
  }

  userDetails = (idUsuario) => {
    const userDetails = axios.get(
      `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${idUsuario}`,
      {
        headers: {
          Authorization: "igor-castro-ailton",
        },
      }
    );

    userDetails
      .then((response) => {
        const detalhesUsuario = response.data
        this.setState({ detalheUsuario: detalhesUsuario });
        this.setState({tela: "detalhesUsuario"})
      })
      .catch((error) => {
        alert("Detalhes não encontrados, tente novamente mais tarde.");
      });
  }

  render() {
    return (
      <div>
        {this.state.tela === "cadastro" && (
          <Cadastro
            getAllUsers={this.getAllUsers}
            createUsers={this.createUsers}
            inputName={this.state.inputName}
            onChangeInputName={this.onChangeInputName}
            inputEmail={this.state.inputEmail}
            onChangeInputEmail={this.onChangeInputEmail}
          />
        )}
        {this.state.tela === "listaUsuarios" && (
          <ListaUsuarios
            userDetails={this.userDetails}
            voltarCadastro={this.voltarCadastro}
            usuarios={this.state.usuarios}
            deleteUser={this.deleteUser}
          />
        )}
        {this.state.tela === "detalhesUsuario" && (
          <DetalhesUsuario
            voltarCadastro={this.voltarCadastro}
            userDetails={this.userDetails}
            deleteUser={this.deleteUser}
            detalheUsuario={this.state.detalheUsuario}
            voltarListausuarios={this.voltarListausuarios}
          />
        )}
      </div>
    );
  }
}

export default App;
