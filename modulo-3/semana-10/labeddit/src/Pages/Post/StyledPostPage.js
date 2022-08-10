import styled from "styled-components";

export const ContainerPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 5px;

  hr {
    width: 100%;
    height: 1px;
    border: none;
    transform: rotate(0.32deg);
    background: grey;
  }

  p {
    margin: 0;
  }

  textarea {
    width: 90%;
    min-height: 70px;
    height: 100%;
    border-radius: 8px;
    background: #ededed;
    border: none;
    font-family: "IBM Plex Sans";
    color: #6f6f6f;
    font-weight: 400;
    font-size: 18px;
    padding: 4% 0 0 4%;
  }

  #container-comments {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
  }

  #button-comment {
    width: 94%;
    height: 2rem;
    border: 1px solid black;
    border: none;
    margin: 8px 0 12px 0;
    border-radius: 12px;
    background: linear-gradient(90deg, #ff6489 0%, #f9b24e 100%);
    color: white;
    font-size: 18px;
    font-weight: 700;
    font-family: "Noto Sans";
  }
`;

export const Post = styled.div`
  width: 86%;
  height: 100%;
  background: #fbfbfb;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  padding: 9px 10px;
  font-family: "IBM Plex Sans";
  word-break: break-word;

  #username {
    font-size: 12px;
    font-weight: 400;
    color: #6f6f6f;
  }

  #body {
    font-size: 18px;
    font-weight: 400;
    color: black;
    height: 100%;
    text-align: start;
    margin: 20px 0 25px 0;
  }
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
`;
