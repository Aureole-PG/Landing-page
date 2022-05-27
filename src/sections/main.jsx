import Img from "../assets/img/img1.svg";
import "../styles/main.css";
import Inicio from "../assets/img/inicio_.jpg";
import DownloadButton from "../components/Button";
const Main = () => {
  return (
    <section id="main" className="main-height green-background">
      <div className="main-img">
        <img src={Inicio} alt="" />
      </div>
      <div className="container container-padding">
        <div className="row ">
          <div className="col-12 col-md-6 d-none d-sm-none d-md-block">
            <div className="img-container">
              <img src={Img} alt="" />
            </div>
          </div>
          <div className="col-12 col-md-6 ">
            <div className=" info d-flex align-content-between flex-wrap">
              <h1 className="text-center text-md-start t-main-title">
                Permítete SER <br /> en todas tus <br /> facetas
              </h1>
              <p className="text-center text-md-start t-paragraph main-margin">
                Utiliza esta app gratuita en la que puedes conectar con otras
                mujeres, aprender con ellas, compartir tus conocimientos y
                opiniones en un entorno amable y de comunidad.
              </p>
              <div className="w-100 d-flex justify-content-center main-margin">
                <DownloadButton />
              </div>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
