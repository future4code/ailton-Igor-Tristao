import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/coordinator";
import { useProtectedPage } from "../Hooks/useProtectedPage";
import useForm from "../Hooks/useForm";

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

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

function CreateTripPage() {
  const navigate = useNavigate();

  const { form, onChange, clearFields } = useForm({
    name: "",
    planet: "",
    date: "",
    description: "",
    durationInDays: "",
  });

  useProtectedPage(navigate);

  const createTrip = (event) => {
    event.preventDefault();

    const token = localStorage.getItem("token");

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/igor-castro-ailton/trips",
        form,
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((response) => {
        alert('Viagem marcada com sucesso.')
      })
      .catch((err) => {
      });
    clearFields();
  };

  return (
    <Container>
      <Header>CreateTripPage</Header>
      <MainContainer>
        <Form onSubmit={createTrip}>
          <input
            name="name"
            placeholder="Insira o nome"
            value={form.name}
            onChange={onChange}
            required
            pattern={"^.{6,}"}
            title={"O nome precisa ter no mínimo 6 caracteres."}
          />
          <input
            name="date"
            type={"date"}
            placeholder="Insira a data"
            value={form.date}
            onChange={onChange}
            required
            min="2022-09-01"
          />
          <input
            name="description"
            placeholder="Insira a descrição"
            value={form.description}
            onChange={onChange}
            required
            pattern={"^.{30,60}"}
            title={"Descrição precisa ter no mínimo 30 caracteres e no máximo 60"}
          />
          <input
            name="durationInDays"
            type={"number"}
            placeholder="Insira a duração em dias"
            value={form.durationInDays}
            onChange={onChange}
            required
            min={50}
          />
          <select
            name="planet"
            value={form.planet}
            onChange={onChange}
            required
          >
            <option value="none">Escolha o planeta</option>
            <option value="Mercúrio">Mercúrio</option>
            <option value="Vênus">Vênus</option>
            <option value="Terra">Terra</option>
            <option value="Marte">Marte</option>
            <option value="Júpiter">Júpiter</option>
            <option value="Saturno">Saturno</option>
            <option value="Urano">Urano</option>
            <option value="Netuno">Netuno</option>
          </select>
          <button>Criar viagem</button>
        </Form>
        <button onClick={() => goBack(navigate)}>Voltar</button>
      </MainContainer>
      <Footer>footer</Footer>
    </Container>
  );
}

export default CreateTripPage;
