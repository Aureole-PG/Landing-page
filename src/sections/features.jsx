import Img2 from "../assets/img/img2.svg";
import Icono1 from "../assets/iconos/icono1.svg";
import "../styles/features.css";
const Features = () => {
  return (
    <section className="features-height features-background">
      <div className="container container-padding">
        <div className="row">
          <div className="col-12 col-md-4">
            <Feature image={Icono1} />
            <Feature image={Icono1} />
          </div>
          <div className="col-12 col-md-4">
            <div className="h-100 d-flex align-items-end">
              <img src={Img2} alt="" />
            </div>
          </div>
          <div className="col-12 col-md-4">
            <Feature image={Icono1} />
            <Feature image={Icono1} />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-4">
            <Feature image={Icono1} />
          </div>
          <div className="col-12 col-md-4 ">
            <Feature image={Icono1} className="float-end" />
          </div>
          <div className="col-12 col-md-4">
            <Feature image={Icono1} />
          </div>
        </div>
      </div>
    </section>
  );
};

const Feature = ({ image, title, text }) => (
  <div className="d-blok feature">
    <img src={image} alt="" />
    <p>title</p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aliquid
      ducimus maiores repellendus voluptatum non minima aut repellat itaque
      alias. Magni asperiores eveniet quia vitae voluptatum at ullam, sint quos.
    </p>
  </div>
);

export default Features;
