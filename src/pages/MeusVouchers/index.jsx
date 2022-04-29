import Footer from "../../components/Footer";
import Header from "../../components/Header";
import "./style.css";
import VoucherIcon from "../../assets/img/voucherIcon.svg";

function MeusVouchers() {
  return (
    <div className="MyVouchers">
      <Header />
      <div className="MyVouchersContainer">
        <div className="leftContainer">
          <strong>Pontos Acumulados</strong>
          <div className="containerPoints"></div>
        </div>

        <div className="verticalLine"></div>

        <div className="rightContainer">
          <strong>Vouchers</strong>
          <div className="containerVouchers">
            <div className="voucher">
              <img src={VoucherIcon} alt="Icon" />
              <p>%&*$#</p>
              <button>Copiar voucher</button>
            </div>
            <div className="horizontalLine"></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MeusVouchers;
