import "./Footer.css";
import linkIcon from "../LinkCard/link.png";
import { Link } from "react-router-dom";
function Footer() {
  const phoneNumber = "+918856962503";
  const email = "sauravshete72@gmail.com";
  return (
    <div className="footer-container">
    <div className="footer-title-container">
      <div>
      <img src={linkIcon} className="footer-icon"  alt=""/>
      <span className="footer-heading">Tiny URL</span>
      </div>
      <div>
        <p>Phone :<a href={`tel: ${phoneNumber}`} className="persoanl-details">{phoneNumber}</a> </p>

        <p>Email :<a href={`mailto: ${email}`} className="persoanl-details"> {email}</a></p>
      </div>
      <div className="privacy-container">
       <Link to={'/privacypolicy'} className="policy-item">PrivacyPolicy</Link>
       <Link to={'/termscondition'} className="policy-item">Terms&Condition</Link> 
       <Link to={'/contact'} className="policy-item">Contact</Link>
      </div>
    </div>
    <span className="copy">© 2023 Tiny URL. All rights reserved.</span>
    </div>
  );
}

export default Footer;
