import styled from "styled-components";

export const Options = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  width: 300px;
  h2 {
    font-size: var(--fontsize-h2);
  }

  li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    font-size: var(--fontsize-h3);
    text-align: center;

    width: 100%;
    height: 50px;
    background-color: rgba(34, 177, 76, .30);
    border: none;
    border-radius: 15px;

    transition: background-color 0.5s;
    padding: 30px 20px;
    cursor: pointer;

    &:hover {
      background-color: rgb(34, 177, 76);
      color: var(--gray-0);
    }
  }
`

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 300px;

  p {
    font-size: 20px;
  }
`