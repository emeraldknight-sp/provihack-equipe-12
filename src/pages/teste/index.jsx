import { useState } from "react";
import { useHistory } from "react-router-dom";

const Teste = () => {

  const [valor, setValor] = useState(0);

  const handleClick = (num) => {
    setValor(valor + num)
  }

  const history = useHistory();

  return(
    <>
      <header>
        Sou o header
      </header>
      <main>
        <p>
          Aqui sou o main
        </p> 
        <button onClick={() => handleClick(1)}>Aumentar</button>
        <span>{ valor }</span>
        <button onClick={() => handleClick(-1)}>Diminuir</button>
        <button onClick={() => history.push("/profile")}> Para página de perfil do usuário </button>
        
        
        <a href="/profile"> Perfil </a>
        
      </main>
    </>
  )
}

export default Teste;