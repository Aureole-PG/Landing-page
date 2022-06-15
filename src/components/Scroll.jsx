/* eslint-disable jsx-a11y/anchor-has-content */
import "../styles/scroll.css";
import { useScrollSpy } from "./useScrollSpy";
const Scroll = () => {
  const { sliderStyle } = useScrollSpy();
  return (
    <div id="scroll-spy nav-pills" className="scroll">
      <div className="tabs w-100 h-100 d-flex flex-column justify-content-center align-items-center">
        <a className="tabs point nav-link" href="#home"></a>
        <a className="tabs point nav-link" href="#nosotras_hacemos"></a>
        <a className="tabs point nav-link" href="#categorias"></a>
        <a
          className="tabs point d-none d-sm-none d-md-block nav-link"
          href="#media"
        ></a>
        <a className="tabs point nav-link " href="#nuestra_historia"></a>
        <a className="tabs point nav-link " href="#preguntas_frecuentes"></a>
        <a className="tabs point nav-link" href="#contacto"></a>
      </div>
    </div>
  );
};

export default Scroll;
