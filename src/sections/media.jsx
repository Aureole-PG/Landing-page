/* eslint-disable jsx-a11y/iframe-has-title */
import "../styles/media.css";
import DownloadButton from "../components/Button";
const Media = () => {
  return (
    <section id="media" className="soft-green-background ">
      <div className="container container-padding ">
        <div className="media-container">
          <iframe
            src="https://player.vimeo.com/video/717273296?h=ea4d106e49"
            width="100%"
            height="500px"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
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
