import "../styles/weDo.css";
import Image from "../assets/img/features2.png";
import Copas from "../assets/iconos/copas.png";
import Femenino from "../assets/iconos/femenino.png";
import Globo from "../assets/iconos/globo.png";
import hacer from "../assets/iconos/hacer.png";
import infinito from "../assets/iconos/infinito.png";
const WeDo = () => {
  return (
    <section
      id="nosotras_hacemos"
      className="s-features-height blue-purple-background"
    >
      <div className="s-feature-container">
        <img src={Image} alt="" />
      </div>
      <div className="container container-padding h-100">
        <div className="h-100 d-flex  align-items-md-end">
          <div className="w-100">
            <p className="t-title text-center">
              ¿Cómo logramos que encuentres esto aquí?
            </p>
            <div className="cards-container w-100">
              <FeatureCard
                icon={infinito}
                text={"App de acceso gratuito e ilimitado"}
              />
              <FeatureCard
                icon={Femenino}
                text={"Acceso a una comunidad de mujeres"}
              />
              <FeatureCard
                icon={Copas}
                text={"Eventos exclusivos para nosotras"}
              />
              <FeatureCard
                icon={hacer}
                text={"Puedes crear lo que necesites"}
              />
              <FeatureCard
                icon={Globo}
                text={
                  "Ocio, deporte, cultura, tiempo para ti, formación, idiomas, networking"
                }
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FeatureCard = ({ icon, text }) => (
  <div className="feature-card">
    <div className="d-flex justify-content-center card-img-container">
      <img src={icon} alt="" />
    </div>
    <div className="d-flex align-items-center card-text-container">
      <p className="t-green text-center w-100">{text}</p>
    </div>
  </div>
);

export default WeDo;
