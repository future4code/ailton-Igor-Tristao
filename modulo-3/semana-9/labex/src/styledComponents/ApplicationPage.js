import styled from 'styled-components'

const ApplicationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 40%;
  justify-content: center;
  gap: 5px;
`;

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
  margin-top: 35px;
`;

const TitleApplication = styled.p`
  font-size: 24px;
  color: black;
`;

const TripName = styled.p`
  font-size: 40px;
  color: black;
`;

export { ApplicationContainer, Container, Header, MainContainer, TitleHeader, BackgroundContainer, Form, TitleApplication, TripName }