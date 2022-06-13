import React from 'react';
import styled from 'styled-components';
import PerguntaAberta from '../Perguntas/PerguntaAberta';
import PerguntaFechada from '../Perguntas/PerguntaFechada';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export default class Etapa1 extends React.Component {
  render() {
    return (
      <MainContainer>
        <h3>ETAPA 1 - DADOS GERAIS</h3>
        <PerguntaAberta pergunta="1. Qual é o seu nome? *" id="perguntaNome"/>
        <PerguntaAberta pergunta="2. Qual a sua idade? *" id="perguntaIdade"/>
        <PerguntaAberta pergunta="3. Qual o seu email?" id="perguntaEmail"/>
        <PerguntaFechada pergunta="4. Qual a sua escolaridade" opcoes={["Ensino médio incompleto", "Ensino médio completo", "Ensino superior incompleto", "Ensino superior completo"]} id="escolaridade"/>
        <br />
        <button onClick={this.props.avancarParaAEtapa2}>Próxima etapa</button>
      </MainContainer>
    )
  }
}