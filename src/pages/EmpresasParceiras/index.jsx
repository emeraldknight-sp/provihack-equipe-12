import "./style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CompanyLogo from "../../assets/img/companyPlaceHolder.jpg";

function EmpresasParceiras() {
  return (
    <div className="empresasParceiras">
      <Header />
      <div className="empresasParceirasContainer">
        <div className="containerContent">
          <div className="cardCompanyName">
            <img src={CompanyLogo} alt="Logo" />
            <strong>Nome fantasia da empresa</strong>
            <h4>Razão social da empresa</h4>
            <p>CNPJ da empresa</p>
          </div>
        </div>

        <div className="containerContent">
          <div className="cardCompanyName">
            <img src={CompanyLogo} alt="Logo" />
            <strong>Nome fantasia da empresa</strong>
            <h4>Razão social da empresa</h4>
            <p>CNPJ da empresa</p>
          </div>
        </div>

        <div className="containerContent">
          <div className="cardCompanyName">
            <img src={CompanyLogo} alt="Logo" />
            <strong>Nome fantasia da empresa</strong>
            <h4>Razão social da empresa</h4>
            <p>CNPJ da empresa</p>
          </div>
        </div>

        <div className="containerContent">
          <div className="cardCompanyName">
            <img src={CompanyLogo} alt="Logo" />
            <strong>Nome fantasia da empresa</strong>
            <h4>Razão social da empresa</h4>
            <p>CNPJ da empresa</p>
          </div>
        </div>

        <div className="containerContent">
          <div className="cardCompanyName">
            <img src={CompanyLogo} alt="Logo" />
            <strong>Nome fantasia da empresa</strong>
            <h4>Razão social da empresa</h4>
            <p>CNPJ da empresa</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EmpresasParceiras;
