import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Results from './components/pages/Results';
import NavBar from './components/NavBar';
import Home from './components/pages/Home';
import Footer from './components/pages/Footer';
import Cart from './components/pages/Cart';
import ReactDOM from 'react-dom';
import { CartProvider } from './components/pages/CartContext';

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/results/:category" element={<Results />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

export default App;
