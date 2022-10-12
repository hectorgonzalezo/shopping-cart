import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Shop from './components/Shop';
import Cart from './components/Cart';
import ItemDisplay from './components/ItemDisplay';
import './styles/appStyle.css';

function App() {
  const [cartVisible, setCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  // Show or hide cart
  function toggleCart() {
    setCartVisible(!cartVisible);
  }

  function isItemInCart(name) {
    return cartItems.some((item) => item.name === name);
  }

  function addToCart(e) {
    e.preventDefault();
    const name = e.target.getAttribute('data');
    const quantity = e.target.previousElementSibling.value;

    // If the items is already in card, add the quantity.
    if (isItemInCart(name)) {
      const itemsMinusChosen = cartItems.filter((item) => item.name !== name);
      setCartItems([...itemsMinusChosen, { name, quantity }]);
    } else {
      setCartItems([...cartItems, { name, quantity }]);
    }
  }

  // The opaque prop adds opacity to every other element when cart is shown
  return (
    <div className="App">
      <BrowserRouter>
        <Header showCartFunc={toggleCart} opaque={cartVisible} />
        <Routes>
          <Route path="/" element={<Home opaque={cartVisible} />} />
          <Route path="shop" element={<Shop opaque={cartVisible} />} />
          <Route path="shop/:id" element={<ItemDisplay items={cartItems} opaque={cartVisible} addToCart={addToCart}/>} />
        </Routes>
      </BrowserRouter>
      <Cart items={cartItems} visible={cartVisible} hideCartFunc={toggleCart} />
      <Footer projectName="shopping-cart" opaque={cartVisible} />
    </div>
  );
}

export default App;