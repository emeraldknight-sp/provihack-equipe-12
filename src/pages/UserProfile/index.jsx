import { Button } from "@mui/material";
import Header from "../../components/Header";
import Main from "../../components/Main";
import { StyledImage, StyledMenu, StyledSection } from "./styles";

const UserProfile = () => {
  return (
    <>
      <Header>
        <StyledMenu>
          <Button variant="outlined">Início</Button>
          <Button variant="outlined">O que é selo verde?</Button>
          <Button variant="outlined">Pontuação</Button>
          <Button variant="outlined">Meus vouchers</Button>
          <Button variant="outlined">Empresas parceiras</Button>
        </StyledMenu>
        <Button variant="contained" size="">Sair</Button>
      </Header>
      <Main>
        <StyledSection>
          <p>
            Esta é uma plataforma de interação, onde você descobrirá que no seu
            dia a dia é possível aprender e ao mesmo tempo contribuir com o
            Desenvolvimento Sustentável do nosso Planeta
          </p>
          <h3>Texto ou frase</h3>
        </StyledSection>
        <StyledSection>
          <p>
            Produto Amigo é um local onde você poderá conhecer e escolher
            consumir produtos amigos do meio ambiente, que carregam o selo com
            apelo sustentável. Ao escolher adquirir produtos com estes selos,
            você acumulará pontos e poderá convertê-los em vouchers que poderão
            ser utilizados em lojas parceiras.
          </p>
          <figure>
            <StyledImage src="https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/fd12ca2ea635c273d6b91dbd02b152a2.jpg" alt="imagem-1"></StyledImage>
          </figure>
        </StyledSection>
        <StyledSection>
          <p>
            Nossa plataforma conta também com jogos interativos, voltadas para
            asuntos relacionados ao meio ambiente equilibrado, onde crianças de
            todas as idades poderão se divertir e aprender ao mesmo tempo.
          </p>
          <figure>
            <StyledImage src="https://static.mundoeducacao.uol.com.br/mundoeducacao/conteudo_legenda/fd12ca2ea635c273d6b91dbd02b152a2.jpg" alt="imagem-2"></StyledImage>
          </figure>
        </StyledSection>
      </Main>
    </>
  );
};

export default UserProfile;
