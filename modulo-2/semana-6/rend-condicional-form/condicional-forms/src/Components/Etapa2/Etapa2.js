import React from 'react';
import styled from 'styled-components';
import PerguntaAberta from '../Perguntas/PerguntaAberta';

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

export default class Etapa2 extends React.Component {
  render() {
    return (
      <MainContainer>
        <h3>ETAPA 2 - INFOMAÇÕES DO ENSINO SUPERIOR</h3>
        <PerguntaAberta pergunta="5. Qual curso? *" id="perguntaCurso"/>
        <PerguntaAberta pergunta="6. Qual a unidade de ensino?" id="perguntaUnidadeEnsino"/>
        <br />
        <button onClick={this.props.avancarParaAEtapa3}>Próxima etapa</button>
      </MainContainer>
    )
  }
}
