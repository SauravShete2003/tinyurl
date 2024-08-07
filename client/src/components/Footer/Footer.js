import "./Footer.css";
import linkIcon from "../LinkCard/link.png";
import { Link } from "react-router-dom";
function Footer() {
  const phoneNumber = "+918856962503";
  const email = "sauravshete72@gmail.com";
  return (
    <div className="footer-container">
      <img src={linkIcon} className="footer-icon" />
      <span className="footer-heading">Tiny URL</span>
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
        <span>© 2023 Tiny URL. All rights reserved.</span>
      </div>
      <div className="">
       <Link to={'/privacypolicy'} className="policy-item">PrivacyPolicy</Link>
       <Link to={'/termscondition'} className="policy-item">Terms&Condition</Link> 
       <Link to={'/contact'} className="policy-item">Contact</Link>
      </div>
    </div>
  );
}

export default Footer;
