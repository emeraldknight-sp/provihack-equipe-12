import styled from "styled-components"

export const Menu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  
  background-color: red;
  width: 300px;
  height: 100%;
  `

export const MenuOptionsList = styled.ul`
box-shadow: 20px 0px 35px 0px rgba(0,0,0,0.49);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  
  position: fixed;
  top: 0;
  left: ${(props) => (props.click ? "0px" : "-130px")};
  
  font-size: ${(props) => props.click ? "25px" : "0px"};
  width: ${(props) => (props.click ? "25rem" : "0rem")};
  height: 100%;
  
  background-color: var(--primary-color);
  color: var(--gray-0);
  list-style: none;
  
  padding: 1rem;
  border: none;
  border-radius: 0 10px 10px 0;
  transition: all 0.5s ease;
  z-index: 2;
  `;

export const OptionsMenuItem = styled.li`
  display: flex;
  align-items: center;
  color: var(--gray-0);
  text-decoration: none;
  width: 100%;
  padding: .8rem;
  border-bottom: 2px solid transparent;
  cursor: pointer;

  &:hover {
    border-bottom: 2px solid var(--gray-0);
  }

  svg {
    color: var(--gray-0);
    width: 2rem;
    margin: 10px;
    height: auto;
  }
`;