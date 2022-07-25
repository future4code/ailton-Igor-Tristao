import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { goToLoginPage } from "../../Routes/coordinator";
import { useProtectedPage } from "../../Hooks/useProtectedData";

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  gap: 1rem;
`;

function FeedPage() {
  const navigate = useNavigate();

  useProtectedPage(navigate);

  return (
    <Container>
      <button onClick={() => goToLoginPage(navigate)}>Login page</button>
      <p>Feed Page</p>
      <ContainerInputs></ContainerInputs>
    </Container>
  );
}

export default FeedPage;
