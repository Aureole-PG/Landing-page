import "../styles/footer.css";
import logo from "../assets/logo/logo2.png";
import { GreenSocialMedia } from "../components/SocialMedia";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
const style = {
  textDecoration: "none",
  color: "black",
};
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="d-flex flex-column justify-content-center align-items-center footer">
          <img src={logo} alt="" />
          <GreenSocialMedia />
          <p className="t-color">
            <Link style={style} to="/privacidadWeb#politica_de_Privacidad_web">
              Política de privacidad web
            </Link>{" "}
            |{" "}
            <Link style={style} to="/privacidadApp#politica_de_Privacidad_app">
              Política de privacidad app
            </Link>{" "}
            |{" "}
            <Link style={style} to="/cookies#cookies">
              Políticas de cookies
            </Link>{" "}
            |{" "}
            <Link style={style} to="/condiciones#condiciones_de_uso">
              Condiciones de uso
            </Link>
          </p>
          <p className="t-color">© 2022 UNITEDWOM All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
