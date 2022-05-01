import styled from "styled-components"

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  height: 70%;

  h1 {
    font-size: var(--fontsize-h1);
  }

  div {
    display: flex;
    align-items: center;
  }

  svg {
    cursor: pointer;
  }
`

