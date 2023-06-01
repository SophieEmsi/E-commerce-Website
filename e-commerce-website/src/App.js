import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Results from './components/pages/Results';
import NavBar from './components/NavBar';
import Home from './components/pages/Home'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
          <Route path="/navbar" element={<NavBar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


