import styled from "styled-components";

// LOGIN/LOGIN ERROR

const MainContainer = styled.div`
  width: 400px;
  min-height: 90vh;
  background-color: white;
  position: relative;
  background-image: linear-gradient(#f65e69, #e04a7c);
  border: 1px solid black;
  border-radius: 4px;
`;

const Title = styled.p`
  font-family: "Bebas Neue", cursive;
  font-size: 42px;
  color: white;
`;

const LoginContainer = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoginButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50%;
  width: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  height: 50%;
  width: 100%;
  padding: 2rem 1rem 3rem 0;
`;

const FireImage = styled.img`
  width: 60px;
  height: 60px;
`;

const TextError = styled.p`
  color: white;
  font-size: 14px;
  position: absolute;
  bottom: 35%;
`;



export {MainContainer, Title, LoginContainer, LoginButtons, TitleContainer, FireImage, TextError}