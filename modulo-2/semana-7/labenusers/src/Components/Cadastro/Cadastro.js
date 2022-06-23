import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 100%;
    border: 1px solid black;
`

const ContainerButton = styled.div`
    display: flex;
    gap: 15px;
    margin-bottom: 10px;
`

class Cadastro extends React.Component {

  render() {

    return (
      <Container>
        <MainContainer>
            <h3>Faça seu cadastro!</h3>
            <p>Insira seu nome:</p>
            <input value={this.props.inputName} onChange={this.props.onChangeInputName}/>
            <p>Insira seu email:</p>
            <input value={this.props.inputEmail} onChange={this.props.onChangeInputEmail}/>
            <br/>
            <ContainerButton>
            <button onClick={() => this.props.createUsers()}>Cadastrar um usuario</button>
            <button onClick={() => this.props.getAllUsers()}>Mostrar usuarios</button>
            </ContainerButton>
        </MainContainer>
      </Container>
    )
  }
}

export default Cadastro
