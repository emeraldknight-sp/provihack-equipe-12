import styled from "styled-components"

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  height: 80vh;

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

