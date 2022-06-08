import "../styles/media.css";
import DownloadButton from "../components/Button";
const Media = () => {
  return (
    <section
      id="media"
      className="purple-pink-background d-none d-sm-none d-md-block"
    >
      <div className="container container-padding ">
        <div className="media-container">
          <iframe
            src="https://player.vimeo.com/video/717273296?h=ea4d106e49"
            width="100%"
            height="500px"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
          />
        </div>
        <div className="d-flex justify-content-center media-button-margin">
          <DownloadButton secodary />
        </div>
      </div>
    </section>
  );
};
export default Media;
