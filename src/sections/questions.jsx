import "../styles/questions.css";
import Image from "../assets/img/FAQs.jpg";
const Questions = () => {
  return (
    <section className="questions-background questions-height">
      <div className="FAQs-image-container">
        <img src={Image} alt="" />
      </div>
      <div className="container container-padding">
        <p>Preguntas frecuentes</p>
        <p>
          Si necesitas saber más, estas son algunas de las respuestas más
          comunes. Si tienes más preguntas, contáctanos.
        </p>
      </div>
    </section>
  );
};

export default Questions;
