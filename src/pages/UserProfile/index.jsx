import Header from "../../components/Header/header";
import Footer from "../../components/Footer";
import Main from "../../components/Main";
import Button from "../../components/Button";
import { StyledImage, StyledSection } from "./styles";
import { useHistory } from "react-router-dom";

const UserProfile = () => {

  const history = useHistory();

  const handleClick = (link) => {
    console.log(link)
    history.push(link)
  }

  return (
    <>
      <Header />
      <Main>
        <StyledSection>
          <h3>Produto Amigo</h3>
          <p>
            Conhecer e escolher consumir produtos amigos do meio ambiente, que
            carregam o selo com apelo sustentável é estar consciente de que
            podemos fazer a nossa parte. Optando por produtos com estes selos,
            você acumulará pontos e poderá convertê-los em vouchers que poderão
            ser utilizados em lojas parceiras.
          </p>
          <figure>
            <StyledImage
              src="https://controle.diarural.com.br/wp-content/uploads/2021/09/Selo-Nacional-da-Agricultura-Familiar-1.jpg"
              alt="imagem-1"
            ></StyledImage>
          </figure>
          <Button onClick={() => handleClick("/review-product")}> Saiba mais </Button>
          {/* <a href="/review-product"> Saiba mais </a> */}
        </StyledSection>
        <StyledSection>
          <h3>Jogos</h3>
          <p>
            Jogos interativos, voltadas para assuntos relacionados ao meio
            ambiente equilibrado, onde crianças de todas as idades poderão se
            divertir e aprender ao mesmo tempo.
          </p>
          <figure>
            <StyledImage
              src="https://hospitalsantamonica.com.br/wp-content/uploads/2019/02/como-proceder-com-o-tratamento-para-vicio-em-jogos-online.jpg"
              alt="imagem-2"
            ></StyledImage>
          </figure>
          {/* <Button onClick={() => handleClick("/games")}> Jogar </Button> */}
          <a href="/games"> Jogar </a>
        </StyledSection>
      </Main>
      <Footer />
    </>
  );
};

export default UserProfile;
