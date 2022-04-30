// import Button from "../../components/Button";
// import { SolidSmallButton } from "../../components/Button/styles";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer";
import Main from "../../components/Main";
import { StyledImage, StyledSection } from "./styles";
import { useNavigate } from "react-router-dom";


const Games = () => {
  const navigate = useNavigate()

  function navegacao(link) {
    navigate(link)
  }
  return (
    <>
      <Header />
      <Main>
        <StyledSection>
          <h3>Selecione o seu jogo</h3>
          <div>
            <p onClick={() => navegacao("/games/hangman")}>Forca</p>
            <p onClick={() => navegacao("/games/quiz")}>Quiz</p>
          </div>
        </StyledSection>
        <StyledSection>
          <p>
            Jogos interativos, voltadas para asuntos relacionados ao meio ambiente equilibrado, onde crianças de todas as idades poderão se divertir e aprender ao mesmo tempo.
          </p>
          <figure>
            <StyledImage
              src="https://hospitalsantamonica.com.br/wp-content/uploads/2019/02/como-proceder-com-o-tratamento-para-vicio-em-jogos-online.jpg"
              alt="imagem-2"
            ></StyledImage>
          </figure>
        </StyledSection>
      </Main>
      <Footer />
    </>
  );
};

export default Games;
