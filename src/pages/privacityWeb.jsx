import { ScrollToTopOnMount } from "../components/scrollToTop";
const PrivacityWeb = () => {
  return (
    <div className="height black-green-background nav-height">
      <ScrollToTopOnMount />
      <div className="container container-padding text-justify">
        <h2 className="t-title">Política de privacidad web</h2>
        <p className="t-sub-title">Aviso Legal</p>
        <p className="t-description">
          UnitedWom, S.L., en cumplimiento de la Ley 34/2002, de 11 de julio, de
          Servicios de la Sociedad de la Información y de Comercio Electrónico,
          le informa de que:
        </p>
        <p className="t-description">
          Su denominación social es UNITEDWOM, S.L. <br />
          Su NIF es B42780791. <br />
          Su domicilio se ubica en Calle Serafín Avendaño, 10 1º Ofc. D2 36211,
          Vigo (Pontevedra) España. Está inscrita en el Registro Mercantil de
          Pontevedra, Tomo 4299 libro 113, folio 75, hoja 65753 y dispone de la
          siguiente dirección de correo electrónico de contacto
          lopd@unitedwom.com
        </p>
        <p className="t-sub-title">Política de Privacidad</p>
        <p className="t-description">
          Los datos personales vinculados a esta página web respetan las
          exigencias del Reglamento (UE) 2016/679 del Parlamento Europeo y del
          Consejo de 27 de abril de 2016 relativo a la protección de las
          personas físicas en lo que respecta al tratamiento de datos personales
          y a la libre circulación de estos datos, la Ley Orgánica 3/2018, de 5
          de diciembre, de Protección de Datos Personales y garantía de los
          derechos digitales y demás legislación vigente en materia de
          protección de datos.
        </p>
        <p className="t-paragraph">
          ¿Quién es el responsable del tratamiento de sus datos?
        </p>
        <p className="t-description">
          UNITEDWOM, S.L., <br />
          NIF: B42780791 <br />
          Dirección: Calle Padre Ramón María Aller, 6, 36201, Vigo (Pontevedra)
          España. <br />
          Correo electrónico: lopd@unitedwom.com
        </p>
        <p className="t-paragraph">
          ¿Cuál es la finalidad y legitimación con las que tratamos sus datos y
          durante cuánto tiempo los conservamos?
        </p>
        <p className="t-description">
          Tratamos sus datos con la finalidad de atender las solicitudes de
          información, dudas, consultas, sugerencias o quejas que plantea a
          través del formulario del apartado de contacto. Podemos tratar sus
          datos porque tenemos un interés legítimo en atender a las
          comunicaciones necesarias para llevar a cabo nuestra actividad y los
          conservaremos durante el tiempo necesario para ello y/o hasta que nos
          solicite su supresión.
        </p>
        <p className="t-paragraph">¿A quiénes se comunicarán sus datos?</p>
        <p className="t-description">
          No se cederán sus datos a terceros. Se comunicarán a nuestras
          encargadas de tratamiento cuando sea necesario para la correcta
          prestación de los servicios contratados a las mismas.
        </p>
        <p className="t-paragraph">
          ¿Se realizarán transferencias de sus datos a terceros países?
        </p>
        <p className="t-description">
          No se van a realizar Transferencias Internacionales de sus datos.
        </p>
        <p className="t-paragraph">
          ¿Cuáles son sus derechos cuando nos facilita sus datos?
        </p>
        <p className="t-description">
          Acceso: derecho a obtener confirmación sobre si estamos tratando datos
          personales suyos o no, a saber, cuáles son, para que se usan, cuanto
          tiempo se van a guardar, el origen de los mismos y si se han
          comunicado o se van a comunicar a una tercera.
        </p>
        <p className="t-description">
          Rectificación: derecho a solicitar la rectificación de los datos
          inexactos y a que se completen los datos personales incompletos.
        </p>
        <p className="t-description">
          Supresión: derecho a solicitar la supresión de los datos de carácter
          personal cuando sean inadecuados, excesivos o ya no sean necesarios
          para los fines para los que fueron recogidos, incluido el derecho al
          olvido.
        </p>
        <p className="t-description">
          Oposición: derecho a oponerse, en determinadas circunstancias, a que
          se realice el tratamiento de sus datos personales o a solicitar que se
          cese en el tratamiento.
        </p>
        <p className="t-description">
          Limitación del Tratamiento: derecho a solicitar, en las circunstancias
          establecidas legalmente, que no se traten sus datos más allá de la
          mera conservación de los mismos.
        </p>
        <p className="t-description">
          Portabilidad: derecho a recibir los datos de carácter personal en un
          formato estructurado, de uso común y lectura mecánica, y poder
          transmitirlos a otra responsable, siempre que sea técnicamente
          posible.
        </p>
        <p className="t-paragraph">¿Dónde podrá ejercitar sus derechos?</p>
        <p className="t-description">
          El ejercicio de derechos deberá efectuarse por escrito, dirigiéndose a
          Calle Serafín Avendaño, 10 1º Ofc. D2 36211, Vigo (Pontevedra) España
          o al correo electrónico lopd@unitedwom.com. UNITEDWOM, S.L., pone a su
          disposición modelos para la realización del ejercicio de derechos que
          pueden obtenerse en la dirección o a través del correo electrónico
          indicado anteriormente. Para más información: www.agpd.es.
        </p>
        <p className="t-paragraph">
          ¿Tiene derecho a presentar una reclamación ante la Autoridad de
          Control?
        </p>
        <p className="t-description">
          En el caso de que no se hayan respetado sus derechos puede presentar
          una reclamación dirigiéndose por escrito a la Agencia Española de
          Protección de Datos sita en la calle Jorge Juan, 6-28001-Madrid o
          utilizar la sede electrónica:{" "}
          <a
            href="https://sedeagpd.gob"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://sedeagpd.gob
          </a>{" "}
          En ambos casos, deberá acompañar la documentación pertinente.
        </p>
      </div>
    </div>
  );
};

export default PrivacityWeb;
