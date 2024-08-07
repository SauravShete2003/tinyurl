import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./Navbar.css";
import { Link } from "react-router-dom";
import MenuIcon from "./menu.png";

function Navbar() {
  const [isMenu, setIsMenu] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };

  const handleLogout = () => {
    localStorage.clear();
    toast.success("User logout successfully");
    setTimeout(() => {
      window.location.href = "/login";
    }, 2000);
  };

  return (
    <div className="navbar-container">
      <h1 className="navbar-heading">Tiny URL</h1>
      <img src={MenuIcon} className="menu-icon" onClick={toggleMenu} alt="Menu" />
      <div className={`menu-icon-container ${isMenu ? "active" : ""}`}>
        <Link to="/" className="menu-navbar-item" onClick={toggleMenu}>
          Home
        </Link>
        <Link to="/" className="menu-navbar-item" onClick={toggleMenu}>
          Generate
        </Link>
        <Link to="/alllinks" className="menu-navbar-item" onClick={toggleMenu}>
          My Links
        </Link>
        <Link to="/login" className="menu-navbar-item" onClick={toggleMenu}>
          LogIn
        </Link>
        {user.name && <span className="logged-user">{user.name}</span>}
        {user.name && (
          <span className="logout-btn" onClick={handleLogout}>
            LogOut
          </span>
        )}
      </div>
      <div className="nav-item-container">
        <Link to="/" className="nav-item">
          Home
        </Link>
        <Link to="/" className="nav-item">
          Generate
        </Link>
        <Link to="/alllinks" className="nav-item">
          My Links
        </Link>
        <Link to="/login" className="nav-item">
          LogIn
        </Link>
        {user.name && <span className="nav-item logged-user">{user.name}</span>}
        {user.name && (
          <span className="nav-item logout-btn" onClick={handleLogout}>
            LogOut
          </span>
        )}
      </div>
      <Toaster />
    </div>
  );
}

export default Navbar;
