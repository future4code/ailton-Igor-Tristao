import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 800px) {
    min-height: 95vh;
    margin-top: 2vh;
    height: 100%;
    min-width: 410px;
    width: 410px;
    justify-content: center;
    margin-left: 30%;
    border: 1px solid black;
    border-radius: 12px;
  }
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  height: 45vh;

  img {
    width: 150px;
    height: 120px;
  }

  p {
    font-family: "IBM Plex Sans";
    font-weight: 900;
    font-size: 42px;
    margin: 0;
    color: #373737;
  }

  span {
    font-family: "IBM Plex Sans";
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    color: #000000;
  }

  @media screen and (min-width: 800px) {
    min-height: 40vh;
    height: 100%;
  }
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 55vh;
  gap: 1rem;

  @media screen and (min-width: 800px) {
    min-height: 55vh;
    height: 100%;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 55vh;
  width: 100%;
  gap: 5px;

  hr {
    width: 87%;
    margin: 12px 0;
    height: 1px;
    border: none;
    transform: rotate(0.32deg);
    background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  }

  #button-enter {
    width: 90%;
    height: 3.2rem;
    border: none;
    border-radius: 27px;
    background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
    color: white;
    font-size: 18px;
    font-weight: 700;
    font-family: "Noto Sans";
    margin-top: 3rem;
  }

  #button-create {
    width: 90%;
    height: 3.2rem;
    border: 1px solid #fe7e02;
    border-radius: 27px;
    background-color: white;
    color: #fe7e02;
    font-size: 18px;
    font-weight: 700;
    font-family: "Noto Sans";
  }

  @media screen and (min-width: 800px) {
    min-height: 55vh;
    height: 100%;
  }
`;
