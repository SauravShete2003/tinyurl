import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function Home() {
  const [user, setUser] = useState("");
  const [loadLink , setLoadLink] = useState([])
  const [linkData, setLinkData] = useState({
    title: "",
    target: "",
    slug: "",
  });
  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setUser(currentUser);
      loadLinks(currentUser._id);
    } else {
      window.location.href = "/login";
    }
  }, []);

  const loadLinks = async (userId) => {
    try {
      toast.loading("Links loading...");
      const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/links?userId=${userId}`
      );
      toast.dismiss();
      if (response.data.success) {
        setLoadLink(response.data.data);
      } else {
        toast.error("Failed to load links");
      }
    } catch (error) {
      toast.dismiss();
      toast.error("Error fetching links");
      console.error("Error fetching links:", error);
    }
  };

  const shortenURL = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/Link`,
        linkData
      );
      if (response.data.success) {
        toast.success("Link shortened successfully");
        setLinkData({
          title: "",
          target: "",
          slug: "",
        });
        loadLinks(user._id);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error("Error shortening link");
      console.error("Error shortening link:", error);
    }
  };

  return (
    <div>
      <p className="link-heading">
        Streamline Your URLs with Our Easy-to-Use Link Shortening Service
      </p>
      <div className="tiny-url-container">
        <form className="link-form">
          <h2 className="form-link-heading">Generate Shorten URL</h2>
          <input
            className="link-input"
            type="text"
            placeholder="Title"
            onChange={(e) => {
              setLinkData({ ...linkData, title: e.target.value });
            }}
            value={linkData.title}
          />
          <input
            className="link-input"
            type="text"
            placeholder="Target"
            value={linkData.target}
            onChange={(e) => {
              setLinkData({ ...linkData, target: e.target.value });
            }}
          />
          <input
            className="link-input"
            type="text"
            placeholder="Slug"
            value={linkData.slug}
            onChange={(e) => {
              setLinkData({ ...linkData, slug: e.target.value });
            }}
          />
          <button type="button" className="link-btn" onClick={shortenURL}>
            Generate
          </button>
        </form>
      </div>
      <Toaster />
    </div>
  );
}

export default Home;
