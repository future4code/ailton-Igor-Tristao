import React from 'react'
import styled from 'styled-components'

const ComentarioContainer = styled.div`
    display: flex;
    margin-bottom: 8px;
    flex-direction:  ${props => {
        if (props.tipo === "eu") {
            return "row-reverse"
        } else {
            return "row"
        }
    }};
    position: relative;
`

const Comentarios = styled.div`            // div dos balões
    padding: 0.6em 0.8em;
    border-radius: 0.5em;
    font-weight: 450;
    line-height: 1.3;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    max-width: 60%;
    box-shadow: 0px 3px 3px 0px rgba(0, 0, 0, 0.2);
    word-wrap: break-word;  
    background-color: ${props => {
        if (props.tipo === "eu") {
            return "#DDF7C8" // Verde copiado do WhatsApp
        } else if (props.tipo === "outro") {
            return "#ffffff" // Branco
        }
    }};
    position: relative;
    margin: 0 20px;
`

const NomeUsuario = styled.div`         // div balão do nome usuario
    color: #9AAC8C;
    font-size: 1em;
    font-weight: 600;
    margin-bottom: 0.2em;
    &:after {
	content: '';
	border: 15px solid transparent;
	border-top-color: black;
    position: absolute;
    top: 0px;
    left: -8px;
    border-top-color: #ffffff;
    }
`

const MensagemUsuario = styled.div`            //div balão das mensagens
    &:after {
	content: '';
	border: 15px solid transparent;
	border-top-color: black;
    position: absolute;
    top: 0px;
    right: -8px;
    border-top-color: #DDF7C8;
    }
`

class SecaoComentario extends React.Component {
  render() {

    const nome = this.props.nomeUsuario.toLowerCase()
    if(nome === "eu") {
        return (
            <ComentarioContainer tipo="eu" onDoubleClick={this.props.remover}>
                <Comentarios tipo="eu">
                    <MensagemUsuario>{this.props.mensagemUsuario}</MensagemUsuario>
                </Comentarios>
            </ComentarioContainer>
        )
    }
    else {
        return (
            <ComentarioContainer tipo="outro" onDoubleClick={this.props.remover}>
              <Comentarios tipo="outro">
                  <NomeUsuario><b>{this.props.nomeUsuario}</b></NomeUsuario>
                  {this.props.mensagemUsuario}
              </Comentarios>
            </ComentarioContainer>
          )
    }
  }
}

export default SecaoComentario