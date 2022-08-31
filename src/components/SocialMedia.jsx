import instgram from "../assets/redes/instagram.svg";
import facebook from "../assets/redes/facebook.svg";
import tiktok from "../assets/redes/tiktok.svg";
import youtube from "../assets/redes/youtube.svg";
import vinstgram from "../assets/redes/v_instagram.png";
import vfacebook from "../assets/redes/v_facebook.png";
import vtiktok from "../assets/redes/v_tiktok.png";
import vyoutube from "../assets/redes/v_youtube.png";

const links = {
  facebook: "https://www.facebook.com/UnitedWom",
  instagran: "https://www.instagram.com/unitedwom/",
  youtube: "https://www.youtube.com/channel/UCaUqPX8GABQZKMQgiX99cYw",
  tiktok: "https://www.tiktok.com/@unitedwom",
};
const SocialMedia = () => {
  return (
    <div className="social  d-flex">
      <a href={links.instagran} target="_blank" rel="noopener noreferrer">
        <img src={instgram} alt="" />
      </a>
      <a href={links.facebook} target="_blank" rel="noopener noreferrer">
        <img src={facebook} alt="" />
      </a>
      <a href={links.tiktok} target="_blank" rel="noopener noreferrer">
        <img src={tiktok} alt="" />
      </a>
      <a href={links.youtube} target="_blank" rel="noopener noreferrer">
        <img src={youtube} alt="" />
      </a>
    </div>
  );
};
export const GreenSocialMedia = () => {
  return (
    <div className="social green d-flex">
      <a href={links.instagran} target="_blank" rel="noopener noreferrer">
        <img src={vinstgram} alt="" />
      </a>
      <a href={links.facebook} target="_blank" rel="noopener noreferrer">
        <img src={vfacebook} alt="" />
      </a>
      <a href={links.tiktok} target="_blank" rel="noopener noreferrer">
        <img src={vtiktok} alt="" />
      </a>
      <a href={links.youtube} target="_blank" rel="noopener noreferrer">
        <img src={vyoutube} alt="" />
      </a>
    </div>
  );
};
export default SocialMedia;
