import React from "react";
import { useNavigate } from "react-router-dom";
import { goToAdminHomePage, goToHomePage } from "../routes/coordinator";
import axios from "axios";
import useForm from "../Hooks/useForm";
import { Player } from "@lottiefiles/react-lottie-player";
import { Input, Button } from "@chakra-ui/react";
import { Container, Header,MainContainer, TitleHeader, BackgroundContainer, Form, ButtonContainer, TitleText } from "../styledComponents/LoginPage"

function LoginPage() {
  const { form, onChange, clearFields } = useForm({ email: "", password: "" });

  const navigate = useNavigate();

  const onSubmitLogin = (event) => {
    event.preventDefault();

    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/igor-castro-ailton/login",
        form
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        goToAdminHomePage(navigate);
      })
      .catch((err) => {
        alert('Login ou senha incorreta.')
      });
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
        <TitleText>Acessar área administrativa</TitleText>
        <Form onSubmit={onSubmitLogin}>
          <Input
            name="email"
            type="email"
            placeholder="Insira seu email"
            value={form.email}
            onChange={onChange}
            required
          />
          <Input
            name="password"
            type="password"
            placeholder="Insira sua senha"
            value={form.password}
            onChange={onChange}
            required
          />
          <ButtonContainer>
            <Button type="submit">Entrar</Button>
            <Button onClick={() => goToHomePage(navigate)}>Voltar</Button>
          </ButtonContainer>
        </Form>
      </MainContainer>
    </Container>
  );
}

export default LoginPage;
