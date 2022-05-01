import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Score() {
  return (
    <div className="pontuacao">
      <Header />
      <div className="containerPoints">
        <div className="friendlyProductsPoints">
          <strong>Produtos amigos</strong>
          <span>50 pontos</span>
        </div>
        <div className="gamesPoints">
          <strong>Jogos</strong>
          <span>150 pontos</span>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Score;
