import "../Style/Navigation.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import Logo from "../image/pc-wizard-low-resolution-logo-color-on-transparent-background (1).png"
import Icon from "../image/brightness-and-contrast.png"


function Navigation() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();
  const firstLetter = location.state ? location.state.firstLetter : "";

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    // toggle the "dark-mode" class on the body element
    document.body.classList.toggle("dark-mode");
  };

  return (
    <div>
      <nav className="landing__page"> 
        <div className="navbar">
            <span className="logo__title"><img src={Logo} alt="PCAssistBot Logo"/></span>
          <ul>
            <li className="nav__link">
              <button onClick={toggleDarkMode}>
                    <img src={Icon} alt="mode__icon" className="icon" />
              </button>
          </li>
            <li className="nav__link"><a href="/" className="sign__up--link"><span className="first__name">{firstLetter}</span></a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}


export default Navigation;
