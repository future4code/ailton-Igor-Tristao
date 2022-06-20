import React from 'react'
import styled from 'styled-components'

const CardPequeno = (props) => {

const SmallCardContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid black;
  padding: 20px 10px;
  margin-bottom: 10px;
  height: 70px;
`

const SmallCardImagem = styled.img `
  width: 40px;
  margin-right: 10px;
  border-radius: 50%;
`

  return (
    <SmallCardContainer>
        <SmallCardImagem src={props.imagem}/>
        <p><b>{props.tipo}</b>{props.texto}</p>
    </SmallCardContainer>
  )
}

export default CardPequeno