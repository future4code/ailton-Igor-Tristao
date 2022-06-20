import React from 'react';
import styled from 'styled-components';
import PerguntaAberta from '../Perguntas/PerguntaAberta';
import PerguntaFechada from '../Perguntas/PerguntaFechada';

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`


export default class Etapa3 extends React.Component {
  render() {
    return (
      <MainContainer>
        <h3>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h3>
        <PerguntaAberta pergunta="5. Por que você não terminou um curso de graduação?" id="perguntaGraduacao"/>
        <PerguntaFechada pergunta="6. Você fez algum curso complementar?" opcoes={["Nenhum", "Curso técnico", "Curso inglês"]} id="curso"/>
        <br />
        <button onClick={this.props.avancarParaAEtapa4}>Próxima etapa</button>
      </MainContainer>
    )
  }
}
