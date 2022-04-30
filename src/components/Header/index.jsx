import "./style.css";
import Logo from "../../assets/img/+Leaf.svg";
import MenuIcon from "../../assets/img/burguerMenu.svg";
import CloseIcon from "../../assets/img/close-icon-header/icons8-excluir-64.svg";
import { useState } from "react";
import SidebarMenu from "../SidebarMenu";

function Header() {

  const [ click, setClick ] = useState(false);

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
        <img className="headerLogo" src={Logo} alt="Logo" />
        <img className="menuBurguer" src={click ? CloseIcon : MenuIcon} alt="Menu" onClick={() => handleClick()}/>
      </div>
    </header>
  );
}

export default Header;
