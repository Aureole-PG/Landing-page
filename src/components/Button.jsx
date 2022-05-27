import "../styles/button.css";
import AppStore from "../assets/redes/app_store.svg";
import AppleStore from "../assets/redes/apple.svg";
const DownloadButton = ({ secodary = false }) => {
  return (
    <button className={`btn ${secodary ? "color-2" : "color-1"}`}>
      <div className="d-flex justify-content-between align-items-center">
        <p className="no-margin t-button">Descarga la aplicacion</p>
        <img src={AppStore} alt="" />
        <img src={AppleStore} alt="" />
      </div>
    </button>
  );
};
export const DownloadButtonText = () => {
  return (
    <button className="btn color-1 ">
      <div className="d-flex justify-content-between">
        <p className="no-margin">¡Descarga ya la app!</p>
      </div>
    </button>
  );
};
export const MoreButton = () => {
  return (
    <button className="btn-2 color-3">
      <div className="d-flex justify-content-between">
        <p className="no-margin">Saber más</p>
      </div>
    </button>
  );
};
export default DownloadButton;
