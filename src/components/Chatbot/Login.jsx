import React from "react";
import {Link} from 'react-router-dom'
import "../Style/Login.css";
import {AiOutlineUser} from 'react-icons/ai'
import { FiUnlock } from "react-icons/fi";

const Login = () => {

  return (
    <div className="login">
    <div className="login_form_container">
      <div className="login_form">
        <h2>Log In</h2>
        <div className="input_group">
          <AiOutlineUser className="fa" />
          <input
            type="text"
            placeholder="Email"
            className="input_text"

          />
        </div>
        <div className="input_group">
          <FiUnlock className="fa" />
          <input
            type="password"
            placeholder="Password"
            className="input_text"

          />
        </div>
        <div className="button_group" id="login_button">
          <button>Log In</button>
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
