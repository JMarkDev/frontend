import React from 'react';
import { Route, Routes, Navigate, useLocation } from 'react-router-dom';
import Navigation from './components/Chatbot/Navigation';
import Chatbot from './components/Chatbot/Chatbot';
import Login from './components/Chatbot/Login';
import Signup from './components/Chatbot/Signup';
import Pagenotfound from './components/Chatbot/Pagenotfound';

function App() {
  const location = useLocation();
  const validPaths = ['/', '/chatbot'];

  return (
    <>
      {validPaths.includes(location.pathname) && <Navigation />}
      {validPaths.includes(location.pathname) && <Chatbot />}
      
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />
        <Route path="/chatbot" element={<Chatbot />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
