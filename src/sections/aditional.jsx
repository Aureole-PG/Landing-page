import "../styles/aditional.css";
import Image from "../assets/img/imgFondo.jpg";
import { DownloadButtonText } from "../components/Button";
const Aditional = () => {
  return (
    <section id="aditional" className="aditional-height purple-background">
      <div className="aditional-image-container">
        <img src={Image} alt="" />
      </div>
      <div className="h-100 container container-padding ">
        <div className="h-100 d-flex flex-column  justify-content-center align-items-center">
          {/* <div> */}
          <p className="t-main-title">Encúentrate contigo misma</p>
          <DownloadButtonText />
          {/* </div> */}
        </div>
      </div>
    </section>
  );
};

export default Aditional;
