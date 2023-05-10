import React from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Navigation from './components/Chatbot/Navigation';
import Chatbot from './components/Chatbot/Chatbot';
import Login from './components/Chatbot/Login';
import Signup from './components/Chatbot/Signup';
import Pagenotfound from './components/Chatbot/Pagenotfound';
import { useAuth } from './components/Contexts/AuthContext';

function App() {
  const location = useLocation();
  const validPaths = ['/', '/chatbot'];
  const auth = useAuth();

  return (
    <>
      {validPaths.includes(location.pathname) && auth.user && <Navigation />}
      {validPaths.includes(location.pathname) && auth.user && <Chatbot />}
      
      <Routes>
        <Route
          path="/"
          element={auth.user ? <Navigate to="/chatbot" /> : <Navigate to="/signup" />}
        />
        <Route path="/chatbot" element={auth.user ? <Chatbot /> : <Navigate to="/signup" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
