import "./LinkCard.css";
function linkCard({ title, target, slug, createdAt , view}) {
  return (
    <div className="link-card-container">
      <h3 className="link-card-heading">{title}</h3>
      <a href={target} className="link-card-target" target="_blank">
        <span className="url-name">Target URL :</span>
        {target ? `${target.substring(0 , 40)}` : "Null"}
      </a><br/>
      <a href={slug} className="link-card-target" target="_blank">
        <span className="url-name">Shorten URL :</span>
        {slug}
      </a><br/>
      <span className="">{new Date (createdAt).toLocaleString()}</span>
    </div>
  );
}

export default linkCard;
