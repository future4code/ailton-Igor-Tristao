import styled from "styled-components";

export const LabelFloat = styled.div`
  position: relative;
  padding-top: 13px;
  width: 90%;
  height: 45px;
  border: 1px solid rgba(213, 216, 222, 1);
  border-radius: 4px;

  label {
    pointer-events: none;
    position: absolute;
    top: 0;
    left: 15px;
    margin-top: 20px;
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
    height: 35px;
    padding-left: 13px;
    width: 90%;
    font-size: 18px;
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
    font-size: 13px;
    margin-top: 0;
    color: linear-gradient(#ff6489, #f9b24e);
  }
`;
