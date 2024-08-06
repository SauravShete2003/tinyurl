import "./LinkCard.css";
import viewIcon from "./views.png";
import linkIcon from "./link.png";
import shortLink from './short-link.png'
import copyIcon from './copy.png'
function linkCard({ title, target, slug, createdAt, view }) {
  return (
    <div className="link-card-container">
      <h3 className="link-card-heading">{title}</h3>

      <span className="link-card-view">{view}</span>
      <img src={viewIcon} className="view-icon" />

      <a href={target} className="link-card-target" target="_blank">
        <img src={linkIcon} className="link-icon" />
        {target.substring(0, 50)}
        {target.length > 50 ? "..." : null}
      </a>
      <br/>
      <a href={slug} className="link-card-target" target="_blank">
        <img src={shortLink} className="link-icon" />
        {slug}
      </a>
      <br />
      <img src={copyIcon} className="copy-icon"/>
      <span className="create-link-time">{new Date(createdAt).toLocaleString()}</span>
    </div>
  );
}

export default linkCard;
