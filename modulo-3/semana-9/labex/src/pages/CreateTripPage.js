import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/coordinator";
import { useProtectedPage } from "../Hooks/useProtectedPage";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
`;

const Header = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-height: 80vh;
  gap: 5px;
`;

const Footer = styled.div`
  height: 10vh;
  display: flex;
  justify-content: center;
`;

function CreateTripPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [planet, setPlanet] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");
  const [durationInDays, setDurationInDays] = useState("");

  useProtectedPage(navigate);

  const createTrip = () => {
    const token = localStorage.getItem("token");
    const body = {
      name,
      planet,
      date,
      description,
      durationInDays,
    };

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/igor-castro-ailton/trips",
        body,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
      setName("")
      setPlanet("none")
      setDate(new Date())
      setDescription("")
      setDurationInDays("")
  };

  return (
    <Container>
      <Header>CreateTripPage</Header>
      <MainContainer>
        <input
          type={"text"}
          placeholder="Insira o nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type={"date"}
          placeholder="Insira a data"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <input
          type={"text"}
          placeholder="Insira a descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type={"number"}
          placeholder="Insira a duração em dias"
          value={durationInDays}
          onChange={(e) => setDurationInDays(e.target.value)}
        />
        <select value={planet} onChange={(e) => setPlanet(e.target.value)}>
          <option value="none">Escolha o planeta</option>
          <option value="Terra">Terra</option>
          <option value="Marte">Marte</option>
          <option value="Saturno">Saturno</option>
        </select>
        <button onClick={() => createTrip()}>Criar viagem</button>
        <button onClick={() => goBack(navigate)}>Voltar</button>
      </MainContainer>
      <Footer>footer</Footer>
    </Container>
  );
}

export default CreateTripPage;
