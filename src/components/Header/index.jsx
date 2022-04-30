import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CloseIcon from "../../assets/img/close-icon-header/icons8-excluir-64.svg";
import MenuIcon from "../../assets/img/burguerMenu.svg";
import Logo from "../../assets/img/+Leaf.svg";
import SidebarMenu from "../SidebarMenu";
import "./style.css";

function Header() {

  const [ click, setClick ] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    if (click !== true) {
      console.log(click);
      setClick(true);
    } else {
      console.log(click);
      setClick(false);
    }
  }

  return (
    <header className="header">
      <SidebarMenu click={click} setClick={setClick} />
      <div className="headerBackground">
        <img className="headerLogo" src={Logo} alt="Logo" onClick={() => navigate("/profile")} />
        <img className="menuBurguer" src={click ? CloseIcon : MenuIcon} alt="Menu" onClick={() => handleClick()}/>
      </div>
    </header>
  );
}

export default Header;
