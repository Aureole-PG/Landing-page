import { useState } from "react";
import { MoreButton } from "../components/Button";
import "../styles/questions.css";
import Image from "../assets/img/FAQs.jpg";
const QAS = [
  {
    title: "¿Qué es UnitedWom?",
    description: `UnitedWom se presenta en una App gratuita en la que puedes conectar con otras mujeres, aprender con ellas y compartir tus conocimientos y opiniones en un entorno amable y de comunidad.`,
  },
  {
    title: "¿Qué puedo hacer aquí?",
    description: `Puedes apuntarte de forma ilimitada a cualquier actividad que otra mujer o negocio han creado para ti. Ocio, deportes, autocuidado, networking, desarrollo personal o formación son algunas de los planes que podrás encontrar aquí. 
      También podrás, sugerir planes o bien proponer alguna charla de algo que te apetezca compartir. 
      ¡Si eres un negocio, puedes anunciarte proponiéndonos alguna actividad y así podamos conocerte! 
      Y si crees que todavía no es tu momento, nos puedes acompañar simplemente estando hasta que te apetezca participar.
    `,
  },
  {
    title: "¿Cómo puedo ser una embajadora?",
    description: `En UnitedWom no queremos ponernos límites. Queremos seguir sumando y aprendiendo. Por ello, si quieres estar y pertenecer de forma activa y frecuente a la comunidad, ahora puedes hacerte embajadora! Escríbenos contándonos cosas de ti y nos pondremos en contacto para facilitarte el proceso. `,
  },
  {
    title: "¿Qué hago si no encuentro lo que busco? ",
    description: `UnitedWom es una comunidad que crece con cada una de sus usuarias. Todas podemos aportar algo diferente y así hacernos más fuertes cuando compartimos. Por ello, si no encuentras lo que buscas/necesitas propónnoslo. Seguro que hay alguien que busca lo mismo que tú.`,
  },
  {
    title: "¿Cómo puedo invitar a mis amigas a Unitedwom?",
    description: `¡Estupendo! ¡Todas somos bienvenidas! 
                Es muy sencillo, comparte este enlace (Android - iOS) y le facilitarás el acceso.`,
  },
];
const Questions = () => {
  const [selected, setSelected] = useState(null);
  return (
    <section
      id="preguntas_frecuentes"
      className=" questions-height green-background"
    >
      <div className="FAQs-image-container">
        <img src={Image} alt="" />
      </div>
      <div className="container container-padding">
        <div className="row">
          <div className="col-12 col-md-7">
            <p className="t-title">Preguntas frecuentes</p>
            <p className="t-paragraph">
              Si necesitas saber más, estas son algunas de las respuestas más
              comunes. Si tienes más preguntas, contáctanos.
            </p>
            {QAS.map((e, i) => (
              <Badge
                key={i}
                title={e.title}
                selected={setSelected}
                indexSelected={selected}
                description={e.description}
                index={i}
              />
            ))}
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

const Badge = ({ title, description, index, selected, indexSelected }) => {
  const activate = () => {
    if (index == indexSelected) {
      selected(null);
    } else {
      selected(index);
    }
  };
  return (
    <div className={`custom-acordion`}>
      <div
        className={`acordion-header acordion-h${
          index === indexSelected ? "-active" : ""
        }`}
      >
        <button className="" onClick={() => activate()}>
          <div className="d-flex justify-content-between">
            <p className="t-paragraph no-margin text-start">{title}</p>
            <div className="icon">
              <i
                className={`arrow ${index === indexSelected ? "up" : "down"}`}
              ></i>
            </div>
          </div>
        </button>
      </div>
      <div
        className={`acordion-body ${
          index === indexSelected ? "acordion-body-active" : ""
        }`}
      >
        <p className="t-description text-justify">{description}</p>
      </div>
    </div>
  );
};

export default Questions;
