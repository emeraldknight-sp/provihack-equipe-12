import Container from "../Container";
import { StyledHeader } from "./styles";

// import { ReactComponent as HeaderImage } from "../../assets/img/header.svg";

const Header = ({ children }) => {
  return (
    <StyledHeader>
      {/* <HeaderImage /> */}
        <Container>
          { children }
        </Container>
    </StyledHeader>
  )
}

export default Header;