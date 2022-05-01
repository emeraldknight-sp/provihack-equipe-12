import styled from "styled-components";

export const StyledButton = styled.button `
  background-color: var(--primary-color);
  width: 100%;
  height: 50px;
  color: var(--gray-0);
  font-size: 20px;
  font-weight: bolder;
  text-transform: uppercase;
  padding: 10px 15px;
  border: 1.7px solid transparent;
  transition: filter 0.2s;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    border: 1.7px solid var(--primary-color);
    filter: brightness(0.8);
  }

  &:active {
    border: 1.7px solid var(--primary-color);
  }

  &:visited {
    border: 1.7px solid var(--primary-color);
  }
`

export const SmallButton = styled(StyledButton)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  width: 50px;
  color: var(--primary-color);
  border: 2px solid var(--border);
  border-radius: 50%;
  padding: 0;
  margin: 0 25px;

  &:hover {
    border: 2px solid var(--primary-color);
    filter: brightness(0.8);
  }
`

export const MediumButton = styled(SmallButton)`
  width: 100px;

`

export const LargeButton = styled(MediumButton)`
  width: 150px;

`

export const SolidSmallButton = styled(StyledButton)`
  background-color: var(--primary-color);
  color: var(--gray-0);
  width: 50px;
  
`
export const SolidMediumButton = styled(SolidSmallButton)` 
  width: 100px;
  
`

export const SolidLargeButton = styled(SolidMediumButton)`
  width: 150px;

`
