import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
`;

const Header = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  padding: 0 10px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-height: 80vh;
  gap: 5px;
`;

const TitleHeader = styled.p`
  font-family: "Audiowide", cursive;
  font-size: 35px;
  width: 21%;
  letter-spacing: 8px;
  color: black;
`;

const BackgroundContainer = styled.div`
  height: 100vh;
  width: 100%;
  position: absolute;
  overflow: hidden;
  z-index: -1;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const TitleCreate = styled.p`
  font-size: 36px;
  color: black;
  margin: 2% 0;
`;

export { Container, Header, MainContainer, TitleHeader, BackgroundContainer, Form, TitleCreate}