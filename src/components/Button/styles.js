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

export const SmallButton = styled(StyledButton)
`

`
export const MediumButton = styled(StyledButton)
`

`

export const LargeButton = styled(StyledButton)
`

`

export const SolidSmallButton = styled(StyledButton)`
  background-color: var(--primary-color);
  color: var(--gray-0);
  width: 50px;
  
`
export const SolidMediumButton = styled(StyledButton)` 
  background-color: var(--primary-color);
  color: var(--gray-0);
  width: 100px;
`

export const SolidLargeButton = styled(StyledButton)`
  background-color: var(--primary-color);
  color: var(--gray-0);
  width: 150px;
`