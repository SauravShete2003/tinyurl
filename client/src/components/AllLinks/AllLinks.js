import LinkCard from "../LinkCard/LinkCard";
import { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function AllLinks() {
  const [links, setLinks] = useState([]);
  const [user, setUser] = useState(null);

  const fetchLinks = async (userId) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/links?userId=${userId}`
      );
      console.log(response.data.data)
      setLinks(response.data.data);
    } catch (error) {
      toast.error("Failed to fetch links");
    }
  };

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setUser(currentUser);
      fetchLinks(currentUser._id);
    } else {
      window.location.href = "/login";
    }
  }, []);

  return (
    <div>
      <h1>My Links</h1>
      {links?.map((link, i) => {
        const { title, target, view, slug, createdAt } = link;
        return (
          <LinkCard
            key={i}
            title={title}
            target={target}
            view={view}
            slug={slug}
            createdAt={createdAt}
          />
        );
      })}
      <Toaster/>
    </div>
  );
}

export default AllLinks;
