import { useState, useRef } from "react";
import "../styles/contact.css";
import Image from "../assets/img/contacto.jpg";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as yup from "yup";
const url = "/php/contact.php"; //"http://localhost:80/maildata/contacto.php"
const Contact = () => {
  const [submitValue, setSubmitValue] = useState(0);
  const [error, setError] = useState(false);
  const [send, setSend] = useState(false);
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
      fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
        },
        body:
          "name=" +
          formData.name +
          "&email=" +
          formData.email +
          "&phone=" +
          formData.phone +
          "&subject=" +
          formData.subject +
          "&message=" +
          formData.message,
      })
        .then((e) => {
          if (e.status === 422) {
            setError(true);
          }
        })
        .finally(() => setSend(true));
    },
  });
  const _handleSubmit = () => {
    if (submitValue === "100") {
      sendMessage.handleSubmit();
    }
    setSubmitValue(0);
  };

  return (
    <section id="contacto" className="black-green-background contact-height">
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
                  <div className="alert t-blue">
                    <b>* Por favor introduzca su nombre.</b>
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
                  <div className="alert t-blue">
                    <b>* Por favor introduzca su email.</b>
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
                  <div className="alert t-blue">
                    <b>* Por favor introduzca su teléfonoe</b>
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
                  <option disabled selected>
                    --Selecione una opción--
                  </option>
                  <option value="Dudas generales">Dudas generales</option>
                  <option value="Embajadoras">Embajadoras</option>
                  <option value="Partners">Partners</option>
                  <option value="Configuración">Configuración</option>
                  <option value="Otros motivos">Otros motivos</option>
                </select>
                {sendMessage.errors.subject && (
                  <div className="alert t-blue">
                    <b>* Por favor selecione una opción.</b>
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
                  <div className="alert t-blue ">
                    <b>* Por favor introduzca su mensaje.</b>
                  </div>
                )}
              </div>
              <p className="t-description text-justify">
                PROTECCIÓN DE DATOS: Reglamento (UE) 2016/679 RGPD y LOPDGDD
                3/2018. UnitedWom, S.L., como responsable del tratamiento,
                tratará sus datos para atender sus solicitudes de información,
                dudas, consultas, sugerencias o quejas. Podrá ejercitar los
                derechos de acceso, rectificación y supresión de los datos,
                entre otros, tal y como se explica en la información adicional
                que está a su disposición en el apartado de{" "}
                <Link to="/privacidadWeb">
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
          <div className="col-12 col-md-6">
            {send && (
              <>
                {error ? (
                  <div
                    className="alert alert-danger alert-dismissible fade show"
                    role="alert"
                  >
                    <h5>Se produjo un error al enviar su mensaje</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                      onClick={() => {
                        setError(false);
                        setSend(false);
                      }}
                    ></button>
                  </div>
                ) : (
                  <div
                    className="alert alert-warning alert-dismissible fade show"
                    role="alert"
                  >
                    <h5 className="">Mensaje enviado correctamente</h5>
                    <button
                      type="button"
                      className="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                      onClick={() => {
                        setError(false);
                        setSend(false);
                      }}
                    ></button>
                  </div>
                )}
              </>
            )}
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
    phone: yup.number(),
    subject: yup.string().required(true),
    message: yup.string().required(true),
  };
}

export default Contact;
