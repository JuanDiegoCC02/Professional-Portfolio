import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Projects from '../pages/Projects';



function Routing() {
  return (
    <div>
     
      <Router >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/projects" element={<Projects/>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default Routing;
