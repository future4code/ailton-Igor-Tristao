import React from 'react'
import styled from 'styled-components'
import { createTrue } from 'typescript'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const ContainerTarefa = styled.div`
  display: flex;
  gap: 20px;
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [ 
        {
          id: Date.now(),
          texto: 'Primeira tarefa',
          completa: false
        }],
      inputValue: '',
      filtro: ''  
    }

  componentDidUpdate() {
    localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas))
  };

  componentDidMount() {
    // const tarefas = localStorage.getItem("tarefas")
    // if(tarefas) {
    // const dadosTarefas = localStorage.getItem("tarefas")
    // const dadosConvertidos = JSON.parse(dadosTarefas)
    // this.setState({id: dadosConvertidos[0].id})
    // this.setState({texto: dadosConvertidos[0].texto})
    // this.setState({completa: dadosConvertidos[0].completa})
    // }
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {

    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }
    const novasTarefas = [novaTarefa, ...this.state.tarefas]

    this.setState({tarefas: novasTarefas})
    this.setState({inputValue: ""})
  }

  removeTarefa = (id) => {
    const tarefaRemovida = this.state.tarefas.filter(tarefa => {
      return id !== tarefa.id
    })
    this.setState({tarefas: tarefaRemovida})
  }

  selectTarefa = (id) => {  
    const novaListaTarefas = this.state.tarefas.map((tarefa) => {
      if(id === tarefa.id) {
        const novaTarefa = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return novaTarefa
      } else {
        return tarefa
      }
    })

    this.setState({tarefas: novaListaTarefas})
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filtro} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <ContainerTarefa>
                <Tarefa
                  completa={tarefa.completa}
                  onClick={() => this.selectTarefa(tarefa.id)}
                  >
                  {tarefa.texto}
                </Tarefa>
                <button onClick={() => this.removeTarefa(tarefa.id)}>X</button>
              </ContainerTarefa>
              
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
