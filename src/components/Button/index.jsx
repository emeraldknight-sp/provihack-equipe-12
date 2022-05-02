import { StyledButton } from "./styles";

const Button = ({ children, ...rest }) => {

  const { onClick } = rest;
  console.log(onClick)

  return (
    <StyledButton type="button" onClick={onClick}>
      { children }
    </StyledButton>
  )
}

export default Button;