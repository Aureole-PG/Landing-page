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
              to="/files/politicas_app.docx"
              target="_blank"
              download
            >
              Términos y condiciones
            </Link>{" "}
            |{" "}
            <Link style={style} to="/privacidad">
              Política de privacidad
            </Link>{" "}
            | Política de Gestión Ética |{" "}
            <Link style={style} to="/cookies">
              Política de cookies.
            </Link>
          </p>
          <p className="t-color">© 2022 UNITEDWOM All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
