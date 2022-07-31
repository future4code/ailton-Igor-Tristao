import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  p {
    margin: 0;
  }

  hr {
    width: 80%;
    margin: 6px 0;
    height: 1px;
    border: none;
    transform: rotate(0.32deg);
    background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
  }

  #container-posts {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 15px;
  }

  #button-more-posts {
    border: none;
    background: none;
    color: #4088cb;
    font-family: "Noto Sans";
    font-size: 16px;
    border-radius: 12px;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  header {
    width: 100%;
    height: 8vh;
    background: #ededed;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    #button-logout {
      position: absolute;
      border-radius: 12px;
      border: none;
      font-family: "Noto Sans";
      right: 5px;
    }

    img {
      width: 8%;
      height: 40px;
    }
  }

  @media screen and (min-width: 800px) {
    min-height: 95vh;
    margin-top: 2vh;
    height: 100%;
    min-width: 410px;
    width: 410px;
    justify-content: center;
    margin-left: 30%;
    border: 1px solid black;
    position: relative;
    border-radius: 12px;

    header {
      position: absolute;
      top: 0;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
    }
  }
`;

export const LabelFloat = styled.div`
  position: relative;
  padding-top: 13px;
  width: 80%;
  height: 25px;
  border: 1px solid rgba(213, 216, 222, 1);
  border-radius: 4px;
  margin-top: 2.5%;

  label {
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 15px;
    margin-top: 8px;
    font-size: 16px;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    font-family: "Noto Sans";
  }

  input {
    font-family: "Noto Sans";
    border: 0;
    outline: none;
    min-width: 180px;
    height: 18px;
    padding-left: 13px;
    width: 90%;
    margin-top: 3px;
    font-size: 14px;
    transition: all 0.3s ease-out;
    -webkit-transition: all 0.3s ease-out;
    -moz-transition: all 0.3s ease-out;
    -webkit-appearance: none;
    border-radius: 0;
    background-color: none;
  }

  input::placeholder {
    color: transparent;
  }

  input:focus + label,
  input:not(:placeholder-shown) + label {
    font-size: 12px;
    margin-top: 0;
  }
`;

export const Form = styled.form`
  height: 200px;
  width: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 10px;

  input {
    border-radius: 8px;
    background: #ededed;
    border: none;
    font-family: "IBM Plex Sans";
    color: #6f6f6f;
    font-weight: 400;
    font-size: 18px;
    width: 100%;
    height: 20%;
    padding: 0 0 0 4%;
  }

  textarea {
    width: 100%;
    height: 60%;
    border-radius: 8px;
    background: #ededed;
    border: none;
    font-family: "IBM Plex Sans";
    color: #6f6f6f;
    font-weight: 400;
    font-size: 18px;
    padding: 4% 0 0 4%;
  }

  #button-post {
    width: 100%;
    height: 3.2rem;
    border: 1px solid black;
    border: none;
    border-radius: 12px;
    background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
    color: white;
    font-size: 18px;
    font-weight: 700;
    font-family: "Noto Sans";
  }

  @media screen and (min-width: 800px) {
    margin-top: 18%;
  }
`;

export const Post = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 150px;
  word-break: break-word;
`;

export const Votes = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;

  div {
    display: flex;
    background: #fbfbfb;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    justify-content: space-between;
    padding: 6px 10px;

    img {
      width: 16px;
      height: 18px;
    }
  }

  #votes {
    width: 80px;
    display: flex;
    align-items: center;

    p {
      color: #6f6f6f;
      font-size: 13px;
      font-weight: 700;
    }
  }

  #comments {
    width: 45px;
    display: flex;
    align-items: center;

    p {
      font-family: "IBM Plex Sans";
      font-style: normal;
      font-weight: 700;
      font-size: 13px;
      color: #6f6f6f;
    }
  }

  #share {
    display: flex;
    justify-content: center;
    width: 25px;
    padding: 4px 10px;

    img {
      width: 18px;
      height: 20px;
    }
  }
`;

export const ContainerPostMap = styled.div`
  width: 80%;
  height: 100%;
  background: #fbfbfb;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 9px 10px;
  font-family: "IBM Plex Sans";

  #username {
    font-size: 12px;
    font-weight: 400;
    color: #6f6f6f;
  }

  #title {
    font-size: 18px;
    font-weight: 400;
    color: black;
    align-self: center;
    margin-top: 10px;
  }

  #body {
    font-size: 18px;
    font-weight: 400;
    color: black;
    text-align: start;
    margin: 10px 0 45px 0;
  }

  #share-container {
    display: flex;
    background: #fbfbfb;
    border: 1px solid #e0e0e0;
    border-radius: 12px;
    align-items: center;
    padding: 6px 10px;
    margin-top: 1rem;
    gap: 1rem;
    justify-content: space-around;
    z-index: 2;

    button {
      display: flex;
      align-items: center;
    }
  }
`;
