import "./style.css";
import Logo from "../../assets/img/+Leaf.svg";
import MenuIcon from "../../assets/img/burguerMenu.svg";

function Header() {
  return (
    <header className="header">
      <div className="headerBackground">
        <img className="headerLogo" src={Logo} alt="Logo" />
        <img className="menuBurguer" src={MenuIcon} alt="Menu" />
      </div>
    </header>
  );
}

export default Header;
