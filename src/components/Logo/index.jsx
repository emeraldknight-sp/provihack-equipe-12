
import Image from "../../assets/img/+Leaf.svg";
import { StyledLogo } from "./styles";

const Logo = () => {
  return(
    <StyledLogo>
      <img src={Image} alt="logo" />
    </StyledLogo>
  )
}

export default Logo;