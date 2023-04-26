import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const BACKEND_API = "http://localhost:3001/api";

const AuthContext = React.createContext();

function useAuth() {
    return useContext(AuthContext);
}

function AuthProvider({children}) {
    const [user, setUser] = useState();
    const value = {
        user, 
        login,
        register,
    };

    const navigate = useNavigate();
    function login({ email, password }) {
        fetch(`${BACKEND_API}/user/login`, {
            method: "POST",
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": "application/json" },
          })
        .then((res) => res.json())
        .then((data) => {
            if (data.success) {
                setUser({
                    user: data.user,
                })
                navigate("/chatbot");
                alert("Login Successfully");
            } else {
                console.log(data);
                alert("Invalid email/password");
            }
        });
    }

    function register(user_data) {
        const { username, email, password } = user_data;
        fetch(`${BACKEND_API}/user/register`, {
          method: "POST",
          body: JSON.stringify({ username, email, password }),
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            navigate("/chatbot");
            alert("Register Successfully");
            console.log("working")
          } else {
            alert('Error');
            console.log('error')
          }
        });
      }
      

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { AuthProvider, useAuth };
