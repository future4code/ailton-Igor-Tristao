import React, {Component} from 'react'
import styled from 'styled-components'

const ShareContainer = styled.div`
    justify-content: center;
    padding: 5px;
`

const Buttons = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
`

const InputComentario = styled.input`
    width: 100%;
    margin-right: 5px;
`

export class SecaoCompartilhar extends Component {
	state = {
        comentario: "",
        mensagem: "",
	};

    onChangeComentario = (event) => {
    	this.setState({
      		comentario: event.target.value
    	});
	};

    aoClicarFacebook = () => {
        this.setState({
          mensagem: console.log(`Post compartilhado no Facebook com a mensagem: ${this.state.comentario}`)})
        this.setState({comentario: ""})
    }
    
    aoClicarInstagram = () => {
        this.setState({
          mensagem: console.log(`Post compartilhado no Instagram com a mensagem: ${this.state.comentario}`)})
          this.setState({comentario: ""})
    }
    
    aoClicarTwitter = () => {
        this.setState({
          mensagem: console.log(`Post compartilhado no Twitter com a mensagem: ${this.state.comentario}`)})
          this.setState({comentario: ""})
    }

	render() {

		return(
        <ShareContainer>
            <Buttons>
                <button onClick={this.aoClicarFacebook}>Facebook</button>
                <button onClick={this.aoClicarInstagram}>Instagram</button>
                <button onClick={this.aoClicarTwitter}>Twitter</button>
            </Buttons>
            <InputComentario
				placeholder={'Comentário'}
				value={this.state.comentario}
				onChange={this.onChangeComentario}
			/>
		</ShareContainer>
	)}
}
