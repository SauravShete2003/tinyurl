import "./Footer.css";
import linkIcon from "../LinkCard/link.png";
import { Link } from "react-router-dom";
function Footer() {
  const phoneNumber = "+918856962503";
  const email = "sauravshete72@gmail.com";
  return (
    <div className="footer-container">
      <img src={linkIcon} className="footer-icon" />
      <span>Tiny URL</span>
      <div>
        <p>
          Phone :
          <a href={`tel: ${phoneNumber}`} className="persoanl-details">
            {phoneNumber}
          </a>
        </p>
        <p>
          Email :
          <a href={`mailto: ${email}`} className="persoanl-details">
            {email}
          </a>
        </p>
      </div>
      <div>
        <span>Privacy Policy</span>
        <span>Terms and Condition</span>
        <span>Contact</span>
      </div>
    </div>
  );
}

export default Footer;
