import { useNavigate } from "react-router-dom";


const SidebarMenu = () => {

  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link)
  }

  return(
    <>
      <nav>
        <ul>
          <li onClick={() => handleClick("/profile")}>Início</li>
          <li onClick={() => handleClick("/information")}>O que é o Selo Verde?</li>
          <li onClick={() => handleClick("/review")}>Avaliar</li>
          <li onClick={() => handleClick("/games")}>Jogos</li>
          <li onClick={() => handleClick("/score")}>Pontuação</li>
          <li onClick={() => handleClick("/vouchers")}>Vouchers</li>
          <li onClick={() => handleClick("/partners")}>Empresas parceiras</li>
          <li onClick={() => handleClick("/")}>Sair</li>
        </ul>
      </nav>
    </>
  )
}

export default SidebarMenu;