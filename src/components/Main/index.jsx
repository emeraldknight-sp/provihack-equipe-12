import Container from "../Container";
import { StyledMain } from "./style";

const Main = ({ children }) => {
  return(
    <StyledMain>
      <Container centered>
        { children }
      </Container>
    </StyledMain>
  )
}

export default Main;