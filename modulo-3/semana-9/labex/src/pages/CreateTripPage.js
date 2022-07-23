import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { goBack } from "../routes/coordinator";
import { useProtectedPage } from "../Hooks/useProtectedPage";
import useForm from "../Hooks/useForm";
import { Player } from "@lottiefiles/react-lottie-player";
import { Input, Button, Select } from "@chakra-ui/react";
import { Container, Header, MainContainer, TitleHeader, BackgroundContainer, Form, TitleCreate} from "../styledComponents/CreateTripPage"

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
        alert("Viagem marcada com sucesso.");
      })
      .catch((err) => {});
    clearFields();
  };

  return (
    <Container>
      <BackgroundContainer>
        <Player
          backgroundSize="cover"
          backgroundRepeat="repeat"
          autoplay
          loop
          src="https://assets8.lottiefiles.com/private_files/lf30_nSM2dY.json"
          style={{ height: "100%", width: "100%" }}
        />
      </BackgroundContainer>
      <Header>
        <TitleHeader>LabeX</TitleHeader>
      </Header>
      <MainContainer>
        <TitleCreate>Cadastrar um viagem</TitleCreate>
        <Form onSubmit={createTrip}>
          <Input
            name="name"
            placeholder="Insira o nome"
            _placeholder={{ opacity: 0.7, color: "white" }}
            value={form.name}
            onChange={onChange}
            required
            width="350px"
            color="white"
            pattern={"^.{6,}"}
            title={"O nome precisa ter no mínimo 6 caracteres."}
          />
          <Input
            name="date"
            type={"date"}
            color="white"
            opacity="0.7"
            value={form.date}
            onChange={onChange}
            required
            min="2022-09-01"
          />
          <Input
            name="description"
            placeholder="Insira a descrição"
            color="white"
            _placeholder={{ opacity: 0.7, color: "white" }}
            value={form.description}
            onChange={onChange}
            required
            pattern={"^.{30,70}"}
            title={"Descrição precisa ter no mínimo 30 e no máximo 70 caracteres."}
          />
          <Input
            name="durationInDays"
            type={"number"}
            color="white"
            placeholder="Insira a duração em dias"
            _placeholder={{ opacity: 0.7, color: "white" }}
            value={form.durationInDays}
            onChange={onChange}
            required
            min={50}
          />
          <Select
            name="planet"
            opacity="1"
            color="grey"
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
          </Select>
          <Button type="submit">Criar viagem</Button>
        </Form>
        <Button onClick={() => goBack(navigate)}>Voltar</Button>
      </MainContainer>
    </Container>
  );
}

export default CreateTripPage;
