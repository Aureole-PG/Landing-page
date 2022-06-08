import { useState, useRef } from "react";
import "../styles/contact.css";
import Image from "../assets/img/contacto.jpg";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
const Contact = () => {
  const [submitValue, setSubmitValue] = useState(0);
  const formRef = useRef();
  const sendMessage = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validationSchema: yup.object(validationSchema()),
    onSubmit: (formData) => {
      console.log(formData);
    },
  });
  const _handleSubmit = () => {
    if (submitValue === "100") {
      sendMessage.handleSubmit();
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
              <p className="t-title no-margin">¡Queremos saber de ti!</p>
              <p className="t-description">
                ¿En qué te podemos ayudar? Con tus propuestas estás ayudando a
                otras mujeres
              </p>
            </div>

            <form ref={formRef} className="needs-validation">
              <div className="mb-3">
                <input
                  onChange={sendMessage.handleChange}
                  type="text"
                  className="form-control"
                  id="name"
                  aria-describedby="name"
                  placeholder="Nombre"
                />
                {sendMessage.errors.name && (
                  <div className="alert ">
                    <b>* Por favor ingrese su nombre</b>
                  </div>
                )}
              </div>
              <div className="mb-3">
                <input
                  onChange={sendMessage.handleChange}
                  type="email"
                  className="form-control"
                  name="email"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Correo"
                />
                {sendMessage.errors.email && (
                  <div className="alert ">
                    <b>* Por favor ingrese su correo</b>
                  </div>
                )}
              </div>
              <div className="mb-3">
                <input
                  onChange={sendMessage.handleChange}
                  type="text"
                  className="form-control"
                  name="phone"
                  id="phone"
                  placeholder="Teléfono"
                />
                {sendMessage.errors.phone && (
                  <div className="alert ">
                    <b>* Por favor ingrese su teléfonoe</b>
                  </div>
                )}
              </div>
              <div className="mb-3">
                <select
                  onChange={sendMessage.handleChange}
                  id="select"
                  placeholder="--Selecione una opción--"
                  name="subject"
                  className="form-select"
                >
                  <option></option>
                </select>
                {sendMessage.errors.subject && (
                  <div className="alert ">
                    <b>* Por favor seleccione el motivo del mensaje</b>
                  </div>
                )}
              </div>
              <div className="mb-3">
                <textarea
                  onChange={sendMessage.handleChange}
                  className="form-control"
                  id="message"
                  name="message"
                  rows="3"
                  placeholder="Mensaje"
                ></textarea>
                {sendMessage.errors.message && (
                  <div className="alert ">
                    <b>* Por favor ingrese un mensaje</b>
                  </div>
                )}
              </div>
              <p className="t-description">
                PROTECCIÓN DE DATOS: Reglamento (UE) 2016/679 RGPD y LOPDGDD
                3/2018. UnitedWom, S.L., como responsable del tratamiento,
                tratará sus datos para atender sus solicitudes de información,
                dudas, consultas, sugerencias o quejas. Podrá ejercitar los
                derechos de acceso, rectificación y supresión de los datos,
                entre otros, tal y como se explica en la información adicional
                que está a su disposición en el apartado de{" "}
                <Link to="/privacidad">
                  Aviso Legal y Política de Privacidad.
                </Link>
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
                onMouseUp={_handleSubmit}
                onTouchEnd={_handleSubmit}
              />
              <p className="t-color-blue">Desliza a la derecha para enviar</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
function validationSchema() {
  return {
    name: yup.string().required(true),
    email: yup.string().email().required(true),
    phone: yup.number().required(true),
    message: yup.string().required(true),
  };
}

export default Contact;
