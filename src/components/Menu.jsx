import SocialMedia from "./SocialMedia";

const Menu = ({ open }) => {
  return (
    <div
      className={`modal-container green-background ${open ? "modal-open" : ""}`}
    >
      <div className=" w-100 h-100 d-flex flex-column justify-content-center align-items-center">
        <a href="#">
          <p className="t-sub-title">Home</p>
        </a>
        <a href="#">
          <p className="t-sub-title">Qué hacemos</p>
        </a>
        <a href="#">
          <p className="t-sub-title">Nuestra historia</p>
        </a>
        <a href="#">
          <p className="t-sub-title">Preguntas frecuentes</p>
        </a>
        <a href="#">
          <p className="t-sub-title">Contacto</p>
        </a>
        <div className="d-block d-sm-none">
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default Menu;
