/* eslint-disable jsx-a11y/anchor-has-content */
import "../styles/scroll.css";
const Scroll = () => {
  return (
    // <div className="uwu">
    <div id="scroll-spy nav-pills" className="scroll">
      <div className=" w-100 h-100 d-flex flex-column justify-content-center align-items-center">
        <a className="point nav-link" href="#main"></a>
        <a className="point nav-link" href="#secodFeatures"></a>
        <a className="point nav-link" href="#features"></a>

        <a
          className="point d-none d-sm-none d-md-block nav-link"
          href="#media"
        ></a>
        <a className="point nav-link " href="#about"></a>
        <a className="point nav-link " href="#questions"></a>
        <a className="point nav-link" href="#aditional"></a>
        <a className="point nav-link" href="#contact"></a>
      </div>
    </div>
  );
};

export default Scroll;
