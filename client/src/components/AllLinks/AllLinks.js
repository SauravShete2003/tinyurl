
import LinkCard from "../LinkCard/LinkCard";
import { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
function AllLinks() {
  const [links, setLinks] = useState([]);

  const allLinks = async () => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/links`
      );
      setLinks(response.data.data);
    } catch (error) {
      toast.error("Failed to fetch links");
    }
  };
  useEffect(() => {
    allLinks();
  }, []);

  return (
    <div className="link-container">
      <h1 className="link-heading">My Links</h1>
      {links.map((link, i) => {
        const { title, target, slug, view, createdAt } = link;
        return (
          <LinkCard
            key={i}
            title={title}
            target={target}
            slug={slug}
            view={view}
            createdAt={createdAt}
          />
        );
      })}
      <Toaster />
    </div>
  );
}

export default AllLinks;
