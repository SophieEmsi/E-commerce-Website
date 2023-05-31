import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Results from './components/pages/Results.js';
import Home from './components/pages/Home.js';
import Navbar from './components/pages/NavBar.js';
<<<<<<< HEAD
import Home from './components/pages/Home'
=======
import React from 'react';

>>>>>>> 95e287d1b2e8be63c8b20bb55786515c222bd2c4


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


