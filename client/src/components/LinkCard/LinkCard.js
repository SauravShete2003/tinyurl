import "./LinkCard.css";
import viewIcon from "./views.png";
import linkIcon from "./link.png";
import shortLink from "./short-link.png";
import copyIcon from "./copy.png";
function LinkCard({ title, target, slug, createdAt, view }) {

  const shortUrl =`${process.env.REACT_APP_API_URL}/${slug}`
  return (
    <div className="link-card-container">
      <h3 className="link-card-heading">{title || "No Title"}</h3>
      <span className="link-card-view">{view}</span>
      <img src={viewIcon} className="view-icon" alt="view-icon" />
      <a href={target} className="link-card-target" target="_blank">
        <img src={linkIcon} className="link-icon" alt="link-icon-target-url" />

        {target.substring(0, 50)}
        {target.length > 50 ? "..." : null}
      </a>
      <br /> <br />
      <a
        href={shortUrl}
        className="link-card-target"
        target="_blank">
        <img src={shortLink} className="link-icon" alt="link-icon-slug" />
        {shortUrl}
      </a>
      <br />
      <img src={copyIcon} className="copy-icon" alt="copy-icon" />
      <span className="create-link-time">
        {new Date(createdAt).toLocaleString()}
      </span>
    </div>
  );
}

export default LinkCard;
