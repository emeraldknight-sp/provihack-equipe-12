import styled from "styled-components";
import HeaderImage from "../../assets/img/header.svg";


export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100%;
  height: 238px;

  /* background-color: red; */
  background-image: "url(${HeaderImage})";
  background-repeat: no-repeat;
  background-size: cover;

  div {
    display: flex;
    gap: 35px;
    padding-left: 20px;
    padding-top: 20px;

    font: 400 18px "Roboto", sans-serif;
    color: rgb(255, 255, 255);
  }

`