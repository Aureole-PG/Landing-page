import { useState } from "react";
import "../styles/contact.css";
import Image from "../assets/img/contacto.jpg";
const Contact = () => {
  const [submitValue, setSubmitValue] = useState(0);
  const handleSubmit = () => {
    if (submitValue == 100) {
      alert("enviado");
    }
    setSubmitValue(0);
  };
  return (
    <section id="contact" className="black-green-background contact-height">
      <div className="contact-image-container">
        <img src={Image} alt="" />
      </div>
      <div className="container container-padding">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="d-block">
              <p>¡Queremos saber de ti!</p>
              <p>Envíanos un mensaje y permítete SER. </p>
            </div>
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  aria-describedby="name"
                  placeholder="Nombre"
                />
              </div>
              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Correo"
                />
              </div>
              <div className="mb-3">
                <input
                  type="number"
                  className="form-control"
                  name="phone"
                  id="phone"
                  placeholder="Teléfono"
                />
              </div>
              <div className="mb-3">
                <select
                  id="select"
                  placeholder="--Selecione una opción--"
                  name="options"
                  className="form-select"
                >
                  <option></option>
                </select>
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="3"
                  placeholder="Mensaje"
                ></textarea>
              </div>
              <p>
                PROTECCIÓN DE DATOS: consectetuer adipiscing elit, sed diam
                nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
                erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                commodo consequat. Duis autem vel eum iriure dolor in hendrerit
                in vulputate en el apartado de Aviso Legal y Política de
                Privacidad.
              </p>
              <input
                className="submit-range"
                type="range"
                name="submit"
                value={submitValue}
                min="0"
                max="100"
                // step={1}
                onChange={(e) => setSubmitValue(e.target.value)}
                onMouseUp={handleSubmit}
                onTouchEnd={handleSubmit}
              />
              {/* <button type="submit" class="btn btn-primary">
                Submit
              </button> */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
