import React from 'react';
import styled from 'styled-components';

const Perguntas = styled.div`
    text-align: center;
`

const Input = styled.input`
    width: 150px;
`


export default class PerguntaAberta extends React.Component {
  render() {
    return (
        <Perguntas>
            <p>{this.props.pergunta}</p>
            <Input id={this.props.id}></Input>
        </Perguntas>
    )
  }
}
