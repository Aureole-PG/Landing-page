import { useState } from "react";
import { MoreButton } from "../components/Button";
import "../styles/questions.css";
import Image from "../assets/img/FAQs.jpg";
const Questions = () => {
  return (
    <section id="questions" className=" questions-height green-background">
      <div className="FAQs-image-container">
        <img src={Image} alt="" />
      </div>
      <div className="container container-padding">
        <div className="row">
          <div className="col-12 col-md-6">
            <p className="t-title">Preguntas frecuentes</p>
            <p className="t-paragraph">
              Si necesitas saber más, estas son algunas de las respuestas más
              comunes. Si tienes más preguntas, contáctanos.
            </p>
            <Badge title={"¿Qué es UnitedWom?"} />
            <Badge title={"¿Qué puedo hacer aquí?"} />
            <Badge title={"¿Qué hago si no encuentro lo que busco?"} />
            <Badge title={"¿Quiénes son las embajadoras?"} />
            <Badge title={"¿Cómo puedo ser una embajadora?"} />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="d-flex justify-content-center">
              <MoreButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Badge = ({ title, description }) => {
  const [active, setActive] = useState(false);
  return (
    <div className={`custom-acordion`}>
      <div className={`acordion-header acordion-h${active ? "-active" : ""}`}>
        <button className="" onClick={() => setActive(!active)}>
          <div className="d-flex justify-content-between">
            <p className="t-paragraph no-margin">{title}</p>
            <div className="icon">
              <i className={`arrow ${active ? "up" : "down"}`}></i>
            </div>
          </div>
        </button>
      </div>
      <div className={`acordion-body ${active ? "acordion-body-active" : ""}`}>
        <p className="t-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          dicta officia, voluptas alias nobis unde enim dolor nemo hic numquam
          ipsam, fuga amet mollitia saepe? Quia ea ad unde sapiente.
        </p>
      </div>
    </div>
  );
};

export default Questions;
