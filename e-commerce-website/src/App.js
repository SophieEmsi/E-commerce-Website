import './App.css';
<<<<<<< HEAD
=======
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Results from './components/pages/Results.js';
import Home from './components/pages/Home.js';
import Navbar from './components/pages/NavBar.js';
<<<<<<< HEAD
>>>>>>> d4449944b2caeed0e65cc61cec015f94ec2d9efd
import Home from './components/pages/Home'
import React from 'react';
<<<<<<< HEAD
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
=======

>>>>>>> 95e287d1b2e8be63c8b20bb55786515c222bd2c4
>>>>>>> d4449944b2caeed0e65cc61cec015f94ec2d9efd


function App() {
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          {/* Your header content */}
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/results" element={<Results />} />
          <Route path="/navbar" element={<Navbar />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;


