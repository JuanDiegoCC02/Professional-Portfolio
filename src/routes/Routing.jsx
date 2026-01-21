import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Projects from '../pages/Projects';
import HomeTest from '../pages/HomeTest';



function Routing() {
  return (
    <div>
     
      <Router >
        <Routes>
          <Route path="/" element={<HomeTest />} />
          <Route path="/projects" element={<Projects/>} />
          
        </Routes>
      </Router>
    </div>
  );
}

export default Routing;
