import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import './styles/appStyle.css';

function App() {
  const [cartVisible, setCartVisible] = useState(false);

  // Show or hide cart
  function toggleCart() {
    setCartVisible(!cartVisible);
  }

  // The opaque prop adds opacity to every other element when cart is shown
  return (
    <div className="App">
      <BrowserRouter>
        <Header showCartFunc={toggleCart} opaque={cartVisible} />
        <Routes>
          <Route path="/" element={<Home opaque={cartVisible} />} />
          <Route path="shop" element={<Shop opaque={cartVisible} />} />
        </Routes>
      </BrowserRouter>
      <Cart visible={cartVisible} hideCartFunc={toggleCart} />
      <Footer projectName="shopping-cart" opaque={cartVisible} />
    </div>
  );
}

export default App;
