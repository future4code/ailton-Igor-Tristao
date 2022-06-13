import React from 'react';
import styled from 'styled-components';

const Perguntas = styled.div`
    text-align: center;
`

export default class PerguntaFechada extends React.Component {

  render() {
    return (
        <Perguntas>
            <p>{this.props.pergunta}</p>
            <select id={this.props.id} name={this.props.id}>
                {this.props.opcoes[0] && <option value="1">{this.props.opcoes[0]}</option>}
                {this.props.opcoes[1] && <option value="2">{this.props.opcoes[1]}</option>}
                {this.props.opcoes[2] && <option value="3">{this.props.opcoes[2]}</option>}
                {this.props.opcoes[3] && <option value="4">{this.props.opcoes[3]}</option>}
                {this.props.opcoes[4] && <option value="5">{this.props.opcoes[4]}</option>}
                {this.props.opcoes[5] && <option value="6">{this.props.opcoes[5]}</option>}
                {this.props.opcoes[6] && <option value="7">{this.props.opcoes[6]}</option>}
            </select>
        </Perguntas>
    )
  }
}
