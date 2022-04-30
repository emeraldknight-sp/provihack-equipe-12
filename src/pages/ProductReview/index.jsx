import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Main from "../../components/Main";
import { Options, StyledSection } from "./styles";

const ProductReview = () => {

  const navigate = useNavigate();

  return (
    <>
      <Header />
      <Main>
        <Options>
          <h2>Produto Amigo</h2>
          <li onClick={() => navigate("/navigate")}>Histórico de Compras</li>
          <li onClick={() => navigate("/asses")}>Avaliar</li>
          <li onClick={() => navigate("/search")}>Buscar</li>
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
