import "../styles/footer.css";
import logo from "../assets/logo/logo2.png";
import SocialMedia from "../components/SocialMedia";
const Footer = () => {
  return (
    <footer>
      <div className="container container-padding">
        <div className="d-flex flex-column justify-content-center align-items-center footer">
          <img src={logo} alt="" />
          <SocialMedia />
          <p className="t-color">
            Términos y condiciones | Política de privacidad | Política de
            Gestión Ética | Política de cookies.
          </p>
          <p className="t-color">© 2022 UNITEDWOM All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
