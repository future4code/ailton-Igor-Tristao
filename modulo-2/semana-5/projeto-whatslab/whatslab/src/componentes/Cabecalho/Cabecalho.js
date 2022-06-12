import React from 'react'
import styled from 'styled-components'

const ContainerCabecalho = styled.div`
    height: 72px;
    display: flex;
    position: relative;
    background-color: #f1f2f6;
`

const ContainerImagem = styled.div`
    display: flex;
    align-items: center;
    width: 15%;
    justify-content: center;
`

const ContainerTexto = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
`

const ContainerNomeDoGrupo = styled.div`
    font-size: 18px;
`   

const ContainerMembrosGrupo = styled.div`
    color: #6f7a76;
    font-size: 14px;
`

const Imagem = styled.img`
    border-radius: 50%;
    width: 45px;
`

class Cabecalho extends React.Component {
    render() {
        return(
        <ContainerCabecalho>
            <ContainerImagem>
                <Imagem src="https://pbs.twimg.com/profile_images/1413183413322928134/IQQZwt7g_400x400.jpg" alt="logo-labenu"/>
            </ContainerImagem>
            <ContainerTexto>
                <ContainerNomeDoGrupo>Labenu - Ailton</ContainerNomeDoGrupo>
                <ContainerMembrosGrupo>Daniel, Giovanna, Joclelson, Lincoln, +351 917 796 660...</ContainerMembrosGrupo>
            </ContainerTexto>
        </ContainerCabecalho>
  )}
}
  
  export default Cabecalho