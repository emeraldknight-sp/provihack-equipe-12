import styled from "styled-components";

export const StyledMenu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  gap: 10px;
  z-index: 1;
  cursor: pointer;
`

export const StyledImage = styled.img`
  width: 400px;
  height: 200px;
  border: none;
  border-radius: 5px;
`

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 400px 0 1;
    gap: 20px;
    transition: border 0.2s;
    height: 600px;
    padding: 20px;
    border: 2px solid transparent;
    border-radius: 15px;

    h3 {
      width: 100%;
      font-size: var(--fontsize-h3);
      padding: 20px;
      border: 2px solid;
      border-radius: 35px;
    }

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

    &:hover {
    border: 2px solid var(--primary-color);
    cursor: pointer;
  }
`