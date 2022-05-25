import mediaImg from "../assets/img/video.png";
import "../styles/media.css";
import DownloadButton from "../components/Button";
const Media = () => {
  return (
    <section id="media" className="purple-pink-background">
      <div className="container container-padding ">
        <div className="media-container">
          <img src={mediaImg} alt="" />
        </div>
        <div className="d-flex justify-content-center media-button-margin">
          <DownloadButton />
        </div>
      </div>
    </section>
  );
};
export default Media;
