import { useNavigate } from "react-router-dom";
import { Menu, MenuOptionsList, OptionsMenuItem } from "./styles";
import { MdOutlineVerified } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";
import { BsQuestionCircle } from "react-icons/bs";
import { CgGames } from "react-icons/cg";
import { VscActivateBreakpoints } from "react-icons/vsc";
import { IoIosCard } from "react-icons/io";
import { FiUsers, FiLogOut } from "react-icons/fi";
import toast from "react-hot-toast";

const SidebarMenu = ({ click, setClick }) => {
  const navigate = useNavigate();

  const handleClick = (link) => {
    setClick(false);
    navigate(link);
  };

  const Logout = (link) => {
    toast.success("Volte sempre!");
    navigate(link);
  }

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
            <MdOutlineVerified /> Avaliar
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

          <OptionsMenuItem onClick={() => Logout("/")}>
            <FiLogOut /> Sair
          </OptionsMenuItem>
        </MenuOptionsList>
      </Menu>
    </>
  );
};

export default SidebarMenu;
