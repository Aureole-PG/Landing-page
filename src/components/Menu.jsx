import SocialMedia from "./SocialMedia";
import { HashLink as Link } from "react-router-hash-link";
const Menu = ({ open, setOpen }) => {
  return (
    <div
      className={`modal-container green-background ${open ? "modal-open" : ""}`}
    >
      <div className=" w-100 h-100 d-flex flex-column justify-content-center align-items-center">
        <Link to="/#main" onClick={setOpen}>
          <p className="t-sub-title">Home</p>
        </Link>
        <Link to="/#features" onClick={setOpen}>
          <p className="t-sub-title">Qué hacemos</p>
        </Link>
        <Link to={{ pathname: "/", hash: "#about" }} onClick={setOpen}>
          <p className="t-sub-title">Nuestra historia</p>
        </Link>
        <Link to="/#questions" onClick={setOpen}>
          <p className="t-sub-title">Preguntas frecuentes</p>
        </Link>
        <Link to="/#contact" onClick={setOpen}>
          <p className="t-sub-title">Contacto</p>
        </Link>
        <div className="d-block d-sm-none">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default Menu;
