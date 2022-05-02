import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import QualidadeAbnt from "../../assets/img/qualidadeAmbientalABNT.svg";
import FscIcon from "../../assets/img/fscIcon.svg";
import ProcelIcon from "../../assets/img/procelInfoIcon.svg";
import CerflorIcon from "../../assets/img/cerflorIcon.svg";
import RainForrestIcon from "../../assets/img/rainForrestAlliance.svg";

function GreenSeal() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <p>
          A rotulagem ambiental tem como objetivo criar a consciência para a
          importância dos aspectos ambientais de um produto ou serviço e também,
          influenciar a escolha do consumidor e uma possível mudança de
          comportamento do fabricante. Hoje, contamos com cerca de 400 selos
          amigo do meio ambiente sustentável no mundo. Conheça alguns:
        </p>
        <div className="seals">
          <img src={QualidadeAbnt} alt="logo" />
          <img src={FscIcon} alt="logo" />
          <img src={ProcelIcon} alt="logo" />
          <img src={CerflorIcon} alt="logo" />
          <img src={RainForrestIcon} alt="logo" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default GreenSeal;
