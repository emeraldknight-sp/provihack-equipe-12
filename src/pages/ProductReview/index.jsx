import { useHistory } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header/header";
import Main from "../../components/Main";
import { Options, StyledSection } from "./styles";

const ProductReview = () => {

  const history = useHistory();

  return (
    <>
      <Header />
      <Main>
        <Options>
          <h2>Produto Amigo</h2>
          <li onClick={() => history.push("/history")}>Histórico de Compras</li>
          <li onClick={() => history.push("/asses")}>Avaliar</li>
          <li onClick={() => history.push("/search")}>Buscar</li>
        </Options>
        <StyledSection>
          <p>
            Conhecer e escolher consumirs amigos do meio ambiente, que
            carregam o selo com apelo sustentável é estar consciente de que
            podemos fazer a nossa parte. 
          </p>
          <p>
            Optando pors com estes selos,
            você acumulará pontos e poderá convertê-los em vouchers que poderão
            ser utilizados em lojas parceiras.
          </p>
        </StyledSection>
      </Main>
      <Footer />
    </>
  );
};

export default ProductReview;
