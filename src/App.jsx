import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* Add more routes as needed */}
          {/* Example:
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;