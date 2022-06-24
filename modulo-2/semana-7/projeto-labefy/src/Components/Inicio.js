import axios from "axios";
import React from "react";
import styled from "styled-components";
import iconetopplaylist from "../img/iconetopplaylist.png";

const Container = styled.div`
  height: 100%;
  background-color: #121212;
  padding: 30px;
`;

const ContainerTopPlaylist = styled.div`
  height: 54%;
  display: flex;
  background-color: black;
  padding: 15px 15px 15px 15px;
  border-radius: 5px;
`;

const ContainerImgTopPlaylist = styled.div`
  width: 22%;
  display: flex;
  align-items: end;
  justify-content: center;
`;

const ImgTopPlaylist = styled.img`
  height: 78%;
  max-height: 220px;
  min-width: 100px;
  width: 100%;
`;

const ContainerTextoTopPlaylist = styled.div`
  color: white;
  width: 78%;
  padding-left: 15px;
`;

const TextoPequeno = styled.p`
  font-size: 14px;
`;

const TextoMedio = styled.p`
  font-size: 15px;
  font-family: sans-serif;
`;

const TextoGrande = styled.p`
  font-size: 75px;
  font-weight: bold;
`;

const Button = styled.button`
  background-color: #1ed760;
  width: 90px;
  height: 50px;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 600;
  margin-top: 15px;
  &:hover {
    cursor: pointer;
  }
`;

const ContainerOutrasPlaylist = styled.div`
  height: 35%;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: space-around;
`;

const playlists = [
  { nome: "Daily Mix 1", imagem: "url" },
  { nome: "Daily Mix 1", imagem: "url" },
  { nome: "Daily Mix 1", imagem: "url" },
  { nome: "Daily Mix 1", imagem: "url" },
  { nome: "Daily Mix 1", imagem: "url" },
  { nome: "Daily Mix 1", imagem: "url" },
];

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-end-start-radius: 5px;
  border-top-left-radius: 5px;
`;

const ContainerPlaylists = styled.div`
  display: flex;
  width: 32%;
  min-width: 250px;
  height: 80px;
  background-color: #2a2a2a;
  border-radius: 5px;
`;

const NovasPlaylitsTexto = styled.div`
  height: 4%;
  margin: 2% 0 1% 0;
  color: white;
  font-size: 18px;
`;
const CardPlaylistImg = styled.div`
  width: 22%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardPlaylistTexto = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  color: white;
  font-size: 16px;
`;

class Inicio extends React.Component {
  render() {
    const aparecerPlaylists = playlists.map((musica) => {
      return (
        <ContainerPlaylists>
          <CardPlaylistImg>
            <Img src={iconetopplaylist} />
          </CardPlaylistImg>
          <CardPlaylistTexto>{musica.nome}</CardPlaylistTexto>
        </ContainerPlaylists>
      );
    });

    return (
      <Container>
        <ContainerTopPlaylist>
          <ContainerImgTopPlaylist>
            <ImgTopPlaylist src={iconetopplaylist} />
          </ContainerImgTopPlaylist>
          <ContainerTextoTopPlaylist>
            <TextoPequeno>PLAYLIST</TextoPequeno>
            <TextoGrande>Sertajeno 2022</TextoGrande>
            <TextoGrande>Mais Tocadas ...</TextoGrande>
            <TextoMedio>
              SEXTOU só com as TOP do SERTANEJO. Ouça agora na melhor playlist
              do labefy!
            </TextoMedio>
            <a href="https://www.youtube.com/watch?v=r2ma8WPRppk&list=PL0ao6cotJFFUgKFlnkidAO7S5pWXQtiLB" target="_blank">
              <Button>Play</Button>
            </a>
          </ContainerTextoTopPlaylist>
        </ContainerTopPlaylist>
        <NovasPlaylitsTexto>
          <p>Você também pode gostar de:</p>
        </NovasPlaylitsTexto>
        <ContainerOutrasPlaylist>{aparecerPlaylists}</ContainerOutrasPlaylist>
      </Container>
    );
  }
}

export default Inicio;
