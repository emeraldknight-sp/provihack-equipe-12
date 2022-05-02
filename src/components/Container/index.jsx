import { StyledContainer } from "./style";

const Container = ({ children, ...rest }) => {

  const { centered } = rest;

  return(
    <StyledContainer centered={centered} >
      { children }
    </StyledContainer>
  )
}

export default Container;