import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../image/pc-wizard-low-resolution-logo-color-on-transparent-background (1).png";
import Icon from "../image/brightness-and-contrast.png";
import "../Style/Navigation.css";
import {FiLogOut}  from "react-icons/fi"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";

function Navigation(props) {
  const auth = useAuth();
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  const [firstLetter, setFirstLetter] = useState("");
  const navigate = useNavigate()

  const handleClick = (event) => {
    event.preventDefault();
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode");
  };

  const handleLogout = () => {
    auth.logout()
    navigate('/')
  }

  useEffect(() => {
    const storedFirstLetter = localStorage.getItem("firstLetter");
    setFirstLetter(storedFirstLetter || (location?.state?.firstLetter || ""));
  }, [location]);

  useEffect(() => {
    localStorage.setItem("firstLetter", firstLetter);
  }, [firstLetter]);

  return (
    <div>
      <nav className="landing__page">
        <div className="navbar">
          <span className="logo__title">
            <img src={Logo} alt="PCAssistBot Logo" />
          </span>
          <ul>
            <li className="nav__link">
              <button onClick={toggleDarkMode}>
                <img src={Icon} alt="mode__icon" className="icon" />
              </button>
            </li>
            <li className="nav__link">
              <a href="/" className="sign__up--link">
                <span className="first__name" onClick={handleClick}>{firstLetter}</span>
              </a>
            </li>
            <li className="nav__link">
              <button className="btn" onClick={handleLogout}><FiLogOut/></button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
