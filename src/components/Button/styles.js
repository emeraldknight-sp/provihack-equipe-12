import styled from "styled-components";

export const StyledButton = styled.button `
  background-color: transparent;
  color: var(--primary-color);
  font-weight: bolder;
  text-transform: uppercase;
  padding: 10px 15px;
  border: 1.5px solid transparent;
  transition: filter 0.2s;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    border: 1.7px solid var(--primary-color);
    filter: brightness(0.9);
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

export const SolidSmallButton = styled(StyledButton)
`
  background-color: var(--primary-color);
  color: white;
  
`
export const SolidMediumButton = styled(StyledButton)
`

`

export const SolidLargeButton = styled(StyledButton)
`

`