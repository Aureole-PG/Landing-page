import instgram from "../assets/redes/instagram.svg";
import facebook from "../assets/redes/facebook.svg";
import tiktok from "../assets/redes/tiktok.svg";
import youtube from "../assets/redes/youtube.svg";
const SocialMedia = () => {
  return (
    <div className="social  d-flex">
      <img src={instgram} alt="" />
      <img src={facebook} alt="" />
      <img src={tiktok} alt="" />
      <img src={youtube} alt="" />
    </div>
  );
};
export default SocialMedia;
