import React from 'react';
import styled from 'styled-components'

function CardGrande(props) {

const BigCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 200px;
`
const BigCardImagem = styled.img`
    width: 70px;
    margin-right: 10px;
    border-radius: 50%;
`

    return (
        <BigCardContainer>
            <BigCardImagem src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </BigCardContainer>
    )
}

export default CardGrande;