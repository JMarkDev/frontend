// import { useAuth } from "../Contexts/AuthContext";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Style/Login.css";
import { AiOutlineUser } from "react-icons/ai";
import { FiUnlock } from "react-icons/fi";
import axios from "axios";


const Signup = () => {
  // const { register } = useAuth();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
  event.preventDefault();
  try {
    const userData = {
      username,
      email,
      password,
    };
    const response = await axios.post(
      "http://localhost:3001/api/user/register",
      userData,
      { responseType: "json" }
    );
    alert(response.data.message);
    console.log(response.data.success);
    if (response.data.success) {
      navigate("/chatbot");
    }
  } catch (err) {
    console.log(err);
    alert("Sign up failed. Please try again.");
  }
};


  return (
    <div className="signup">
      <div className="login_form_container signup_form_container">
        <div className="login_form">
          <h2>Sign Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="input_group">
              <AiOutlineUser className="fa" />
              <input
                type="text"
                placeholder="Username"
                className="input_text"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input_group">
              <AiOutlineUser className="fa" />
              <input
                type="email"
                placeholder="Email"
                className="input_text"
                autoComplete="off"
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
              <button type="submit">Sign Up</button>
            </div>
          </form>
          <div className="fotter">
            <span className="footer__text">Already have an account?</span>
            <Link to="/login" className="signup__link">
              Log In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
