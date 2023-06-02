import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Results from './components/pages/Results';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Footer from './components/pages/Footer';



function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results/:category" element={<Results />} />
        </Routes>
        <Footer />
      </div>
    </Router>  

  );
}

export default App;