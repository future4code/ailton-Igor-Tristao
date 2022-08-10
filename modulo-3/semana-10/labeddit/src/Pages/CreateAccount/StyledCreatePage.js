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
  height: 40vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  p {
    font-family: "IBM Plex Sans";
    font-size: 33px;
    font-weight: 700;
    width: 90%;
    color: #373737;
  }

  @media screen and (min-width: 800px) {
    height: 20vh;
    justify-content: space-between;

    p {
      margin: 0;
    }
  }
`;

export const ContainerInputs = styled.div`
  display: flex;
  flex-direction: column;
  height: 55vh;
  width: 100%;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 58vh;
    width: 100%;
    gap: 5px;

    #button-registration {
      width: 90%;
      height: 3.2rem;
      border: none;
      border-radius: 27px;
      background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
      color: white;
      font-size: 18px;
      font-weight: 700;
      font-family: "Noto Sans";
    }

  }

  @media screen and (min-width: 800px) {
    height: 50vh;

    form {
      height: 60vh;
    }
  }
`;

export const ContainerAgreed = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 10px;
  margin: 3rem 0 1rem 0;

  p {
    font-size: 14px;
    font-family: "Noto Sans";
    font-weight: 400;
    color: black;
    margin: 0;
  }

  span {
    color: #4088cb;
  }

  div {
    display: flex;
    gap: 8px;
    align-items: center;
  }
`;
