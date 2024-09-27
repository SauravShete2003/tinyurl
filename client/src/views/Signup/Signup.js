import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
function Signup() {
  const [signup, setSignup] = useState({
    name: "",
    email: "",
    password: "",
  });
  const userSignup = async () => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/signup`,
      {
        name: signup.name,
        email: signup.email,
        password: signup.password,
      }
    );
    if (response.data.data) {
      toast.success("Signup Successful");
      setSignup({
        name: "",
        email: "",
        password: "",
      });
      setTimeout(() => {
        window.location.href = "/login";
      }, 2000);
    } else {
      toast.error(response.data.message);
    }
  };
  return (
    <>
      <Navbar />
      <div className="auth-container">
        <h1 className="auth-heading">Signup ✍️ </h1>
        <form className="auth-from">
          <input
            type="text"
            placeholder="username"
            className="input-box"
            value={signup.name}
            onChange={(e) => setSignup({ ...signup, name: e.target.value })}
          />
          <br />
          <input
            type="text"
            placeholder="email"
            className="input-box"
            value={signup.email}
            onChange={(e) => {
              setSignup({ ...signup, email: e.target.value });
            }}
          />
          <br />

          <input
            type="password"
            placeholder="password"
            className="input-box"
            value={signup.password}
            onChange={(e) => {
              setSignup({ ...signup, password: e.target.value });
            }}
          />
          <br />
          <button type="button" className="auth-btn" onClick={userSignup}>
            Signup
          </button>
          <Link to="/login" className="auth-link">
            Already have an account? Login
          </Link>
        </form>
        <Toaster />
      </div>
      <Footer />
    </>
  );
}

export default Signup;
