import React, { useState, useContext, createContext } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BACKEND_API = "http://localhost:3001/api";

const AuthContext = createContext(null);

function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  const logout = () => {
    setUser(null);
  };

  async function login({ email, password }) {
    try {
      const userCredentials = {
        email: email,
        password: password,
      };

      const response = await axios.post(
        `${BACKEND_API}/user/login`,
        userCredentials,
        { responseType: "json" }
      );

      if (response.data.success) {
        const firstLetter = response.data.data.firstLetter;
        setUser({
          user: response.data.user,
        });
        navigate("/chatbot", { state: { firstLetter } });
        alert("Login Successfully");
      } else {
        console.log(response.data);
        alert("Invalid email/password");
      }
    } catch (err) {
      console.log(err);
      alert("Login failed. Please try again.");
    }
  }

  function register(userData) {
    const { username, email, password } = userData;

    fetch(`${BACKEND_API}/user/register`, {
      method: "POST",
      body: JSON.stringify({ username, email, password }),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUser({
            user: data.user,
          });
          const firstLetter = userData.username.charAt(0).toUpperCase();
          navigate("/chatbot", { state: { firstLetter, userData } });
          alert("Register Successfully");
          console.log("working");
        } else {
          alert("Error");
          console.log("error");
        }
      });
  }

  const value = {
    user,
    login,
    register,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, useAuth };
