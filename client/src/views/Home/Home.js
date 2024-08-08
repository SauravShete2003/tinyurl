import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
function Home() {
  const [linkData, setLinkData] = useState({
    title: "",
    target: "",
    slug: "",
    user : null
  });

  const shortenURL = async () => {
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/Link`, linkData);
    if (response.data.success) {
      toast.success("Link shortened successfully");

      setLinkData({
        title: "",
        target: "",
        slug: "",
        user: null
      });
      setTimeout(()=>{
        window.location.href ='/alllinks'
      } , 2000)
    } else {
      toast.error(response.data.message);
    }
  };

  useEffect(()=>{
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if(currentUser){
      setLinkData({...linkData, user:currentUser._id})
    }
    else{
     setTimeout(()=>{
       window.location.href ='/login'
     },1000)
    }
  }, [])
  return (

    <div>
      <Navbar/>
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
            onChange={(e) =>
              setLinkData({ ...linkData, title: e.target.value })
            }
            value={linkData.title}
          />
          <input
            className="link-input"
            type="text"
            placeholder="Target"
            value={linkData.target}
            onChange={(e) =>
              setLinkData({ ...linkData, target: e.target.value })
            }
          />
          <input
            className="link-input"
            type="text"
            placeholder="Slug"
            value={linkData.slug}
            onChange={(e) => setLinkData({ ...linkData, slug: e.target.value })}
          />
          <button type="button" className="link-btn" onClick={shortenURL}>
            Generate
          </button>
        </form>
      </div>
      <Toaster />
      <Footer/>
    </div>
  );
}

export default Home;
