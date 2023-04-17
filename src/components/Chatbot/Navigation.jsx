import "../Style/Navigation.css";
import Logo from "../image/troubleshootpcbot-high-resolution-logo-black-on-transparent-background.png"
import Icon from "../image/brightness-and-contrast.png"
function Navigation() {

  return (
    <div>
      <nav className="landing__page"> 
        <div className="navbar">
          <a href="/" className="logo">
            <span className="logo__title"><img src={Logo} alt="PCAssistBot Logo" /></span>
          </a>
          <ul>
            <li style={{marginRight: "20px"}}><a href="/" className="nav__link login__link"><img src={Icon} alt="mode__icon" className="icon"/></a></li>
            <li className="acc__first--letter"><a href="/" className="nav__link sign__up--link"><p className="first__name">J</p></a></li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
