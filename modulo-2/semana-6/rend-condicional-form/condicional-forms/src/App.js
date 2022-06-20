import './App.css';
import React from 'react';
import styled from 'styled-components';
import Etapa1 from './Components/Etapa1/Etapa1';
import Etapa1error from './Components/Etapa1/Etapa1error';
import Etapa1error2 from './Components/Etapa1/Etapa1error2';
import Etapa1error3 from './Components/Etapa1/Etapa1error3';
import Etapa2 from './Components/Etapa2/Etapa2';
import Etapa2error from './Components/Etapa2/Etapa2error';
import Etapa3 from './Components/Etapa3/Etapa3';
import Etapa4 from './Components/Etapa4/Etapa4';

const Container = styled.div`
  height: 100vh;
`

export default class App extends React.Component {

  state = {
    etapa: "etapa1"
  }

  renderizaTela = () => {
    if(this.state.etapa === "etapa1") { return <Etapa1 avancarParaAEtapa2={this.avancarParaAEtapa2}/>}
    else if(this.state.etapa === "etapa1error") { return <Etapa1error avancarParaAEtapa2={this.avancarParaAEtapa2}/>}
    else if(this.state.etapa === "etapa1error2") { return <Etapa1error2 avancarParaAEtapa2={this.avancarParaAEtapa2}/>}
    else if(this.state.etapa === "etapa1error3") { return <Etapa1error3 avancarParaAEtapa2={this.avancarParaAEtapa2}/>}
    else if(this.state.etapa === "etapa2") { return <Etapa2 avancarParaAEtapa3={this.avancarParaAEtapa3}/>}
    else if(this.state.etapa === "etapa2error") { return <Etapa2error avancarParaAEtapa3={this.avancarParaAEtapa3}/>}
    else if(this.state.etapa === "etapa3") { return <Etapa3 avancarParaAEtapa4={this.avancarParaAEtapa4}/>}
    else if(this.state.etapa === "etapa4") { return <Etapa4 />}
  }

  avancarParaAEtapa2 = () => {
    var select = document.getElementById('escolaridade');
    var value = select.options[select.selectedIndex].value;
    var inputNome = document.querySelector("#perguntaNome");
    var inputIdade = document.querySelector("#perguntaIdade");
    var nome = inputNome.value;
    var idade = inputIdade.value;

    if(nome === "" && idade === "") {
      this.setState({
        etapa: "etapa1error3"
      })
      return alert("Você deve preencher todas as perguntas antes de continuar")
    }

    if(nome === "") {
      this.setState({
        etapa: "etapa1error"
      })
      return alert("Você deve preencher todas as perguntas antes de continuar")
    }

    if(idade === "") {
      this.setState({
        etapa: "etapa1error2"
      })
      return alert("Você deve preencher todas as perguntas antes de continuar")
    }

    if(value > 2){
    this.setState({
      etapa: "etapa2"
    })
    }
    else {
      this.setState({
        etapa: "etapa3"
      })
    }
  }

  avancarParaAEtapa3 = () => {
    var inputCurso = document.querySelector("#perguntaCurso");  
    var curso = inputCurso.value;
    // var inputUnidadeEnsino = document.querySelector("#perguntaUnidadeEnsino");  
    // var unidade = inputUnidadeEnsino.value;

    if(curso === "") {
      this.setState({
        etapa: "etapa2error"
      })
      return alert("Você deve preencher todas as perguntas antes de continuar")
    }

    this.setState({
      etapa: "etapa3"
    })
  }

  avancarParaAEtapa4 = () => {
    // var inputGraduacao = document.querySelector("#perguntaGraduacao");  
    // var graduacao = inputGraduacao.value;

    // if(graduacao === "") {
    //   return alert("Você deve preencher todas as perguntas antes de continuar")
    // }  
    this.setState({
      etapa: "etapa4"
    })
  }


  render() {
  return (
    <Container>
      {this.renderizaTela()}
    </Container>
  );
  }
}

