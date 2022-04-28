import Container from "../Container";
import { StyledHeader } from "./styles";

const Header = ({ children }) => {
  return (
    <StyledHeader>
      <Container>
        { children }
      </Container>
    </StyledHeader>
  )
}

export default Header;