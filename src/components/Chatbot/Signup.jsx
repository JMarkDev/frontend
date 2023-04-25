import React from "react";
import {Link} from 'react-router-dom'
import "../Style/Login.css";
import {AiOutlineUser} from 'react-icons/ai'
import { FiUnlock } from "react-icons/fi";

const Login = () => { 

  return (
    <div className="signup">
    <div className="login_form_container signup_form_container">
      <div className="login_form">
        <h2>Sign Up</h2>
        <div className="input_group">
          <AiOutlineUser className="fa" />
          <input
            type="text"
            placeholder="Username"
            className="input_text"
          />
        </div>
        <div className="input_group">
          <AiOutlineUser className="fa" />
          <input
            type="text"
            placeholder="Email"
            className="input_text"
            autoComplete="off"
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
          <button>Sign Up</button>
        </div>
        <div className="fotter">
          <span className="footer__text">Already have an account?</span>
          <Link to="/login" className="signup__link">Log In</Link>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;
