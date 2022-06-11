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
            <Badge
              title={"¿Qué es UnitedWom?"}
              description={`UnitedWom se presenta en una App gratuita en la que puedes conectar con otras mujeres, aprender con ellas y compartir tus conocimientos y opiniones en un entorno amable y de comunidad. 
                `}
            />
            <Badge
              title={"¿Qué puedo hacer aquí?"}
              description={`Puedes apuntarte de forma ilimitada a cualquier actividad que otra mujer o negocio han creado para ti. Ocio, deportes, autocuidado, networking, desarrollo personal o formación son algunas de los planes que podrás encontrar aquí. 
                También podrás, sugerir planes o bien proponer alguna charla de algo que te apetezca compartir. 
                ¡Si eres un negocio, puedes anunciarte proponiéndonos alguna actividad y así podamos conocerte! 
                Y si crees que todavía no es tu momento, nos puedes acompañar simplemente estando hasta que te apetezca participar.
              `}
            />
            <Badge
              title={"¿Cómo puedo ser una embajadora?"}
              description={`En UnitedWom no queremos ponernos límites. Queremos seguir sumando y aprendiendo. Por ello, si quieres estar y pertenecer de forma activa y frecuente a la comunidad, ahora puedes hacerte embajadora! Escríbenos contándonos cosas de ti y nos pondremos en contacto para facilitarte el proceso. 
                `}
            />
            <Badge
              title={"¿Qué hago si no encuentro lo que busco? "}
              description={`UnitedWom es una comunidad que crece con cada una de sus usuarias. Todas podemos aportar algo diferente y así hacernos más fuertes cuando compartimos. Por ello, si no encuentras lo que buscas/necesitas propónnoslo. Seguro que hay alguien que busca lo mismo que tú.
                `}
            />
            <Badge
              title={"¿Cómo puedo invitar a mis amigas a Unitedwom?"}
              description={`¡Estupendo! ¡Todas somos bienvenidas! 
                Es muy sencillo, comparte este enlace (Android - iOS) y le facilitarás el acceso.  
                `}
            />
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
            <p className="t-paragraph no-margin text-start">{title}</p>
            <div className="icon">
              <i className={`arrow ${active ? "up" : "down"}`}></i>
            </div>
          </div>
        </button>
      </div>
      <div className={`acordion-body ${active ? "acordion-body-active" : ""}`}>
        <p className="t-description text-justify">{description}</p>
      </div>
    </div>
  );
};

export default Questions;
