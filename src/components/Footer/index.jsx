/* eslint-disable jsx-a11y/anchor-is-valid */
import "./style.css";
import FacebookIcon from "../../assets/img/logoFacebook.svg";
import LinkedInIcon from "../../assets/img/logoLinkedIn.svg";
import TwitterIcon from "../../assets/img/logoTwitter.svg";
import InstagramIcon from "../../assets/img/logoInstagram.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="containerFooter">
        <div className="leftFooter">
          <div className="SocialMedia">
            <span> Siga-nos </span>
            <div className="socialMediaIcons">
              <img src={LinkedInIcon} alt="facebook" />
              <img src={FacebookIcon} alt="facebook" />
              <img src={TwitterIcon} alt="facebook" />
              <img src={InstagramIcon} alt="facebook" />
            </div>
          </div>
        </div>
        <div className="rightFooter">
          <h1>Contatos: </h1>
          <div className="contact">
            <span>Tel: (xx)xxxxx-xxxx</span> <br />
            <span>
              Email: <a href="#">plusleaf@algumemail.com </a>
            </span>
          </div>
          <div className="legalPolicts">
            <span>
              <a href="#">POLITICAS LEGAIS </a> |
            </span>

            <span>
              {" "}
              <a href="#">POLITICA DE COOKIES </a> |
            </span>

            <span>
              <a href="#">TRABALHE CONOSCO</a> |
            </span>

            <span>
              <a href="#">AJUDA</a>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
