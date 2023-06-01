import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Results from './components/pages/Results';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <NavBar />
    <Routes>
      <Route path="/results/:category" element={<Results />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);

reportWebVitals();



