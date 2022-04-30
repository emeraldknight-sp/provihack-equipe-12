// import Button from "../../components/Button";
// import { SolidSmallButton } from "../../components/Button/styles";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { StyledImage, StyledGames, StyledInfos, Content, BlockContent } from "./styles";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";


const Games = () => {
  const navigate = useNavigate()

  function navegacao(link) {
    navigate(link)
  }
  return (
    <>
      <Header />
      <Content>
        <h1>Jogos temáticos</h1>
        <BlockContent>
          <StyledGames>
            <h3>Selecione o seu jogo</h3>
            <div>
              <Button sx={{ mt: 1, mr: 1 }} type="submit" onClick={() => navegacao("/games/hangman")} variant="outlined"> Forca</Button>
              <Button sx={{ mt: 1, mr: 1 }} type="submit" onClick={() => navegacao("/games/quiz")} variant="outlined"> Quiz </Button>
              <Button sx={{ mt: 1, mr: 1 }} type="submit" onClick={() => navegacao("/games")} variant="outlined"> Jogo da Memória</Button>
            </div>
          </StyledGames>
          <StyledInfos>
            <p>
              Jogos interativos, voltadas para asuntos relacionados ao meio ambiente equilibrado, onde crianças de todas as idades poderão se divertir e aprender ao mesmo tempo.
            </p>
            <figure>
              <StyledImage
                src="https://hospitalsantamonica.com.br/wp-content/uploads/2019/02/como-proceder-com-o-tratamento-para-vicio-em-jogos-online.jpg"
                alt="imagem-2"
              ></StyledImage>
            </figure>
          </StyledInfos>
        </BlockContent>
      </Content>
      <Footer />
    </>
  );
};

export default Games;
