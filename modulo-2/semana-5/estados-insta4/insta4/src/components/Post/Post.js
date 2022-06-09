import React from 'react'
import styled from 'styled-components'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeFavoritoPreto from '../../img/favorito.png'
import iconeFavoritoBranco from '../../img/favoritobranco.png'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeSharePreto from '../../img/sharepreto.png'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'
import {SecaoCompartilhar} from '../SecaoCompartilhar/SecaoCompartilhar'

const PostContainer = styled.div`
  border: 1px solid gray;
  width: 300px;
  margin-bottom: 10px;
`

const PostHeader = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`

const PostFooter = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  justify-content: space-between;
`
const DivCurtirFavorito = styled.div`
  display: flex;
  gap: 20px;
`

const UserPhoto = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
  border-radius: 50%;
`

const PostPhoto = styled.img`
  width: 100%;
`

class Post extends React.Component {
  state = {
    curtido: false,
    numeroCurtidas: 0,
    comentando: false,
    numeroComentarios: 0,
    favorito: false,
    share: false
  }

  onClickCurtida = (event) => {
    let numero = this.state.numeroCurtidas
    if(numero === 0) {
    this.setState({
      numeroCurtidas: this.state.numeroCurtidas +1,
      curtido: !this.state.curtido
    })
      console.log('Curtiu!')
    } 
    else {
      this.setState({
        numeroCurtidas: this.state.numeroCurtidas - 1,
        curtido: !this.state.curtido
      })
      console.log('Descurtiu!')
    }
  }

  onClickFavorito = () => {
    this.setState({
      favorito: !this.state.favorito
    })
  }

  onClickShare = () => {
    this.setState({
      share: !this.state.share
    })
  }

  onClickComentario = () => {
    this.setState({
      comentando: !this.state.comentando
    })
  }

  aoEnviarComentario = () => {
    this.setState({
      comentando: false,
      numeroComentarios: this.state.numeroComentarios + 1
    })
  }

  render() {
    let iconeCurtida

    if(this.state.curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let iconeFavorito

    if(this.state.favorito) {
      iconeFavorito = iconeFavoritoPreto
    } else {
      iconeFavorito = iconeFavoritoBranco
    }

    let componenteCompartilhar

    if(this.state.share) {
      componenteCompartilhar = <SecaoCompartilhar />
    }

    

    let componenteComentario
    
    if(this.state.comentando) {
      componenteComentario = <SecaoComentario aoEnviar={this.aoEnviarComentario}/>
    }

    return <PostContainer>
      <PostHeader>
        <UserPhoto src={this.props.fotoUsuario} alt={'Imagem do usuario'}/>
        <p>{this.props.nomeUsuario}</p>
      </PostHeader>

      <PostPhoto src={this.props.fotoPost} alt={'Imagem do post'}/>

      <PostFooter>
        <DivCurtirFavorito>
        <IconeComContador 
          icone={iconeCurtida}
          onClickIcone={this.onClickCurtida}
          valorContador={this.state.numeroCurtidas}
        />

        <IconeComContador 
          icone={iconeFavorito}
          onClickIcone={this.onClickFavorito}
        />

        <IconeComContador 
          icone={iconeSharePreto}
          onClickIcone={this.onClickShare}
        />
        </DivCurtirFavorito>


        <IconeComContador
          icone={iconeComentario}
          onClickIcone={this.onClickComentario}
          valorContador={this.state.numeroComentarios}
        />
      </PostFooter>
      {componenteCompartilhar}
      {componenteComentario}
    </PostContainer>
  }
}

export default Post