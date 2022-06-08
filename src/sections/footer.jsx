import "../styles/footer.css";
import logo from "../assets/logo/logo2.png";
import { GreenSocialMedia } from "../components/SocialMedia";
import { Link } from "react-router-dom";
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
            <Link
              style={style}
              to="/files/01-PoliticaDePrivacidadWeb.docx"
              target="_blank"
              download
            >
              Política de privacidad web
            </Link>{" "}
            |{" "}
            <Link
              style={style}
              to="/files/02-PoliticaDePrivacidadApp.docx"
              target="_blank"
              download
            >
              Política de privacidad app
            </Link>{" "}
            |{" "}
            <Link
              style={style}
              to="/files/03-PoliticasDeCookies.docx"
              target="_blank"
              download
            >
              Políticas de cookies
            </Link>{" "}
            |{" "}
            <Link
              style={style}
              to="/files/04-CondicionesDeUsoUnitedWom.docx"
              target="_blank"
              download
            >
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
