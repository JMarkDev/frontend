import React, { useState } from "react";
import { Link , useNavigate} from "react-router-dom";
import axios from "axios";
import "../Style/Login.css";
import { AiOutlineUser } from "react-icons/ai";
import { FiUnlock } from "react-icons/fi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate()

  const onHandleLogin = async (event) => {
    event.preventDefault();
    try {
      const userCredentials = {
        email: email,
        password: password,
      };
      const response = await axios.post(
        "http://localhost:3001/api/user/login",
        userCredentials,
        { responseType: "json" }
      );
      alert(response.data.message);
      console.log(response.data.success);
      if (response.data.success) {
        navigate("/chatbot");
      }
    } catch (err) {
      console.log(err);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <div className="login">
      <div className="login_form_container">
        <div className="login_form">
          <h2>Log In</h2>
          <form onSubmit={onHandleLogin}>
            <div className="input_group">
              <AiOutlineUser className="fa" />
              <input
                type="text"
                placeholder="Email"
                className="input_text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="input_group">
              <FiUnlock className="fa" />
              <input
                type="password"
                placeholder="Password"
                className="input_text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="button_group" id="login_button">
              <button type="submit">Log In</button>
            </div>
          </form>
          <div className="fotter">
            <span className="footer__text">Don't have an account?</span>
            <Link to="/signup" className="signup__link">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
