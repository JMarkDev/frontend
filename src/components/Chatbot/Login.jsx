import React, { useState } from "react";
import {Link} from 'react-router-dom'
import "../Style/Login.css";
import {AiOutlineUser} from 'react-icons/ai'
import { FiUnlock } from "react-icons/fi";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleFocus = (event) => {
    event.target.previousSibling.classList.add("glowIcon");
  };

  const handleBlur = (event) => {
    event.target.previousSibling.classList.remove("glowIcon");
  };

  return (
    <div className="login">
    <div className="login_form_container">
      <div className="login_form">
        <h2>Log In</h2>
        <div className="input_group">
          <AiOutlineUser className="fa" />
          <input
            type="text"
            placeholder="Username"
            className="input_text"
            value={username}
            onChange={handleUsernameChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            autoComplete="off"
          />
        </div>
        <div className="input_group">
          <FiUnlock className="fa" />
          <input
            type="password"
            placeholder="Password"
            className="input_text"
            value={password}
            onChange={handlePasswordChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            autoComplete="off"
          />
        </div>
        <div className="button_group" id="login_button">
          <button>Submit</button>
        </div>
        <div className="fotter">
          <span className="footer__text">Don't have an account?</span>
          <Link to="/signup" className="signup__link">Sign Up</Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
