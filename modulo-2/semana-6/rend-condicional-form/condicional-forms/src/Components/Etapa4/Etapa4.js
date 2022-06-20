import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Perguntas = styled.div`
    text-align: center;
`
const Input = styled.input`
    width: 150px;
`

export default class Etapa3 extends React.Component {
  render() {
    return (
      <MainContainer>
        <h3>O FORMULÁRIO ACABOU</h3>
        <p>Muito obrigado por participar! Entraremos em contato</p>
      </MainContainer>
    )
  }
}
