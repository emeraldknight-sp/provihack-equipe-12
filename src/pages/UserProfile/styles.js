import styled from "styled-components";

export const StyledMenu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  gap: 10px;
  cursor: pointer;
`

export const StyledImage = styled.img`
  width: 320px;
`

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1 0 30%;
    height: 327px;

    p {
      height: 100px;
      margin-bottom: 20px;
    }

    figure {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
`