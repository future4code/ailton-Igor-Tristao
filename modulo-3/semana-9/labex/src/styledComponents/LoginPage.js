import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  min-height: 100vh;
  z-index: -1;
  background-color: #c7c9ce;
`;

const Header = styled.div`
  height: 14vh;
  display: flex;
  align-items: center;
  z-index: 1;
  padding: 0 10px;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 86vh;
  width: 100%;
  justify-content: space-between;
  padding: 5% 0;
  z-index: 1;
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
  z-index: 0;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 400px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  padding-bottom: 3rem;
`

const TitleText = styled.p`
  font-size: 50px;
  font-weight: thin;
  color: black;
`

export { Container, Header,MainContainer, TitleHeader, BackgroundContainer, Form, ButtonContainer, TitleText }