import toast , {Toaster} from "react-hot-toast";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

function Login() {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const login = async () => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_URL}/login`,
      {
        email: user.email,
        password: user.password,
      }
    );
    if (response.data.success) {
      setUser({
        email: "",
        password: "",
      });
      toast.success(response.data.message);
      localStorage.setItem("currentUser", JSON.stringify(response.data.data));
      setTimeout(() => {
        window.location.href = "/alllinks";
      }, 2000);
    } else {
      toast.error(response.data.message);
    }
    console.log(response);
  };

  return (
    <div className="auth-container">
      <div className="form-container">
        <h1 className="auth-heading">Login</h1>
        <form className="">
           <input
              type="text"
              name="email"
              placeholder="Enter Email"
              className="input-box"
              value={user.email}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
            />
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="input-box"
              value={user.password}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
            />
            <button type="button" onClick={login} className="auth-btn">
              Login
            </button>
            <Link to="/signup" className="auth-link">
              Don`t have a account ? Signup
            </Link>
 
        </form>
      </div>
      <Toaster />
    </div>
  )
}

export default Login
