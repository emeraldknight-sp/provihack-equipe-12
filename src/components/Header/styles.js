import styled from "styled-components";
import { ReactComponent as HeaderImage } from "../../assets/img/header.svg";


export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 100vw;
  height: 15vh;
  z-index: 2;
  background-image: url(${HeaderImage});
  border-bottom: 2px solid var(--primary-color);

  svg {
    width: 100vw;
  }
`