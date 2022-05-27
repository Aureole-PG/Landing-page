import instgram from "../assets/redes/instagram.svg";
import facebook from "../assets/redes/facebook.svg";
import tiktok from "../assets/redes/tiktok.svg";
import youtube from "../assets/redes/youtube.svg";
import vinstgram from "../assets/redes/v_instagram.png";
import vfacebook from "../assets/redes/v_facebook.png";
import vtiktok from "../assets/redes/v_tiktok.png";
import vyoutube from "../assets/redes/v_youtube.png";
const SocialMedia = () => {
  return (
    <div className="social  d-flex">
      <a href="">
        <img src={instgram} alt="" />
      </a>
      <a href="">
        <img src={facebook} alt="" />
      </a>
      <a href="">
        <img src={tiktok} alt="" />
      </a>
      <a href="">
        <img src={youtube} alt="" />
      </a>
    </div>
  );
};
export const GreenSocialMedia = () => {
  return (
    <div className="social green d-flex">
      <a href="">
        <img src={vinstgram} alt="" />
      </a>
      <a href="">
        <img src={vfacebook} alt="" />
      </a>
      <a href="">
        <img src={vtiktok} alt="" />
      </a>
      <a href="">
        <img src={vyoutube} alt="" />
      </a>
    </div>
  );
};
export default SocialMedia;
