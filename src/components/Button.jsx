import "../styles/button.css";
import AppStore from "../assets/redes/app_store.svg";
import AppleStore from "../assets/redes/apple.svg";
const DownloadButton = () => {
  return (
    <button className="btn color-1 ">
      <div className="d-flex justify-content-between">
        <p className="no-margin">Descarga la aplicacion</p>
        <img src={AppStore} alt="" />
        <img src={AppleStore} alt="" />
      </div>
    </button>
  );
};
export default DownloadButton;
