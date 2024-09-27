import LinkCard from '../../components/LinkCard/LinkCard'
import { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Navbar from '../../components/Navbar/Navbar';

function MyLinks() {
  const [links, setLinks] = useState([]);

  const fetchLinks = async (userId) => {
    try {
      const response = await axios.get(
      `${process.env.REACT_APP_API_URL}/links?userId=${userId}`);
      console.log(response.data.data)
      setLinks(response.data.data);
    } catch (error) {
      toast.error("Failed to fetch links");
    }
  };

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      fetchLinks(currentUser._id);
    } else {
      window.location.href = "/login";
    }
  }, []);

  return (
    <div>
      <Navbar/>
      <h1 className='auth-heading' style={{textAlign:'center' , color : "#2ebf91"}}>My Links🔗</h1>
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

export default MyLinks;
