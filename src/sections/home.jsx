import "../styles/main.css";
import Inicio from "../assets/img/inicio.png";
import DownloadButton from "../components/Button";
const Home = () => {
  return (
    <section id="home" className="main-height green-background">
      <div className="main-img">
        <img src={Inicio} alt="" />
      </div>
      <div className="container container-padding">
        <div className="row ">
          <div className="col-12 col-lg-6 ">
            <div className=" info d-flex align-content-between flex-wrap">
              <h1 className="text-center text-md-start t-main-title">
                UnitedWom es una aplicación <br /> para compartir
              </h1>
              <p className="text-center text-md-start t-paragraph main-margin">
                Atraer lo que necesitas en cada momento, unir fuerzas, conectar
                experiencias y fluir con tus emociones
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

export default Home;
