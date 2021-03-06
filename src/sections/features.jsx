import Img2 from "../assets/img/img2.png";
import Icono1 from "../assets/iconos/1tu_interior.png";
import cuerpo from "../assets/iconos/2tu_cuerpo.png";
import deporte from "../assets/iconos/3deporte.png";
import ocio from "../assets/iconos/4ocio.png";
import idiomas from "../assets/iconos/7idiomas.png";
import maternidad from "../assets/iconos/8maternidad.png";
import viajes from "../assets/iconos/9viajes.png";
import "../styles/features.css";
const Features = () => {
  return (
    <section id="categorias" className="features-height pink-background ">
      <div className="container container-padding">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3-5">
            <Feature
              image={Icono1}
              title="Cuida tu interior"
              text={`Tendrás acceso a espacios donde liberar tu mente y ampliar tus horizontes acompañada de mujeres con tus mismas inquietudes.`}
            />
            <Feature
              image={cuerpo}
              title="Cuida tu cuerpo"
              text={`El cuidado de nuestro cuerpo es fundamental en todas las facetas de nuestra vida y aquí te proponemos alternativas y soluciones para que lo puedas realizar.`}
            />
          </div>
          <div className="col-12 col-md-4 col-lg-5">
            <div className="feature-img-container h-100 d-flex align-items-end">
              <div className="feature-img">
                <img src={Img2} alt="" />
              </div>
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-3-5">
            <Feature
              image={deporte}
              title="Deporte"
              text={`¿Te apetece probar algún deporte. Aquí puedes iniciarte en el deporte que quieras, por ejemplo, pádel, defensa personal, pilates, etc.`}
            />
            <Feature
              image={idiomas}
              title="Idiomas"
              text={`¿Quieres aprender, practicar otro idioma? Conecta con otras mujeres que te ayuden con ese idioma.`}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3-5">
            <Feature
              image={maternidad}
              title="Maternidad"
              text={`Tener apoyo y compartir experiencias en el embarazo, postparto o en la crianza es clave para sentirnos fuertes y seguras.`}
            />
          </div>
          <div className="col-12 col-md-4 col-lg-5">
            <Feature
              image={ocio}
              title="Ocio"
              text={`Acceso a actividades de ocio gratuitos y de pago, tú eliges.`}
              inLine
            />
          </div>
          <div className="col-12 col-md-4 col-lg-3-5">
            <Feature
              image={viajes}
              title="Viajes, cultura, formación"
              text={`Todo aquello que imagines en UnitedWom lo puedes hacer acompañada de mujeres con tus misma disponibilidad e intereses.`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Feature = ({ image, title, text, inLine = false }) => (
  <div className={`${inLine ? "d-md-flex feature-inline" : "d-blok"}  feature`}>
    <div className={`d-flex justify-content-center justify-content-md-start`}>
      <img src={image} alt="unitedWom-icon" />
    </div>
    <div className="d-block">
      <p className="t-sub-title no-margin text-center text-md-start">{title}</p>
      <p className="t-description text-center text-md-justify ">{text}</p>
    </div>
  </div>
);

export default Features;
