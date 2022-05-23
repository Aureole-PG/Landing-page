import Img from "../assets/img/img1.svg";
import "../styles/main.css";
import Inicio from "../assets/img/inicio_.jpg";
import DownloadButton from "../components/Button";
const Main = () => {
  return (
    <section className="main-height main-background">
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
            <div className="main-height info d-flex align-content-between flex-wrap">
              <h1 className="text-center text-md-start">
                Conéctate y <br /> cambia tu vida
              </h1>
              <p className="text-center text-md-start">
                Utiliza esta app gratuita en la que puedes conectar con otras
                mujeres, aprender con ellas, compartir tus conocimientos y
                opiniones en un entorno amable y de comunidad. Un lugar donde
                abrazamos la imperfección, la diversión, la libertad y creamos
                este espacio para uir y conectar desde los valores de la
                amistad, el respeto y la sororidad.
              </p>
              <h4 className="text-center text-md-start">
                Permítete SER en todas tus facetas.
              </h4>
              <div className="w-100 d-flex justify-content-center">
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
