import { useNavigate } from "react-router-dom";
import { Menu, MenuOptionsList, OptionsMenuItem } from "./styles";
import { GrLogout, GrValidate } from "react-icons/gr";
import { AiOutlineHome } from "react-icons/ai";
import { BsQuestionCircle } from "react-icons/bs";
import { CgGames } from "react-icons/cg";
import { VscActivateBreakpoints } from "react-icons/vsc";
import { IoIosCard } from "react-icons/io";
import { FiUsers } from "react-icons/fi";

const SidebarMenu = ({ click, setClick }) => {
  const navigate = useNavigate();

  const handleClick = (link) => {
    setClick(false);
    navigate(link);
  };

  return (
    <>
      <Menu click={click}>
        <MenuOptionsList click={click}>
          <OptionsMenuItem onClick={() => handleClick("/profile")}>
            <AiOutlineHome /> Início
          </OptionsMenuItem>

          <OptionsMenuItem onClick={() => handleClick("/information")}>
            <BsQuestionCircle /> O que é o Selo Verde?
          </OptionsMenuItem>

          <OptionsMenuItem onClick={() => handleClick("/review")}>
            <GrValidate color="#ffffff" /> Avaliar
          </OptionsMenuItem>

          <OptionsMenuItem onClick={() => handleClick("/games")}>
            <CgGames /> Jogos
          </OptionsMenuItem>

          <OptionsMenuItem onClick={() => handleClick("/score")}>
            <VscActivateBreakpoints /> Pontuação
          </OptionsMenuItem>

          <OptionsMenuItem onClick={() => handleClick("/vouchers")}>
           <IoIosCard /> Vouchers
          </OptionsMenuItem>

          <OptionsMenuItem onClick={() => handleClick("/partners")}>
            <FiUsers /> Empresas parceiras
          </OptionsMenuItem>

          <OptionsMenuItem onClick={() => handleClick("/")}>
            <GrLogout /> Sair
          </OptionsMenuItem>
        </MenuOptionsList>
      </Menu>
    </>
  );
};

export default SidebarMenu;
