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
    resetItemsToOne();
  }

  // This is in case a number of items field is left empty
  // Resets such items to have quantity 1
  function resetItemsToOne() {
    const itemsMinusChosen = cartItems.filter((item) => item.quantity !== '');

    // It has no quantity if its value is 0 or nothign
    let itemsWithNoQuantity = cartItems.filter((item) => Number(item.quantity) === '' || Number(item.quantity) <= 0);

    if (itemsWithNoQuantity.length > 0) {
      itemsWithNoQuantity = itemsWithNoQuantity.map((item) => {
        return { name: item.name, quantity: '1' };
      });
      setCartItems([...itemsMinusChosen, ...itemsWithNoQuantity]);
    }
  }

  function isItemInCart(name) {
    return cartItems.some((item) => item.name === name);
  }

  function addToCart(e) {
    e.preventDefault();
    const name = e.target.getAttribute('data');
    // the first one is used by cart and the second by the shop
    const quantity = Number(e.target.previousElementSibling.value) > 0 ? e.target.previousElementSibling.value : '1';

    // prevent the user from using a number less than one as input
    // If the items is already in card, add the quantity.
    if (isItemInCart(name)) {
      const itemsMinusChosen = cartItems.filter((item) => item.name !== name);
      setCartItems([...itemsMinusChosen, { name, quantity }]);
    } else {
      setCartItems([...cartItems, { name, quantity }]);
    }
    // Open cart when adding
    toggleCart();
  }

  // This function is used by Cart
  function updateQuantity(e) {
    const name = e.target.getAttribute('data');
    const quantity = Number(e.target.value) > 0 ? e.target.value : ''; 
    if (quantity === '' || Number(quantity) > 0) {
      const itemsMinusChosen = cartItems.filter((item) => item.name !== name);
      setCartItems([...itemsMinusChosen, { name, quantity }]);
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
      <Cart items={cartItems} visible={cartVisible} hideCartFunc={toggleCart} addToCart={updateQuantity} />
      <Footer projectName="shopping-cart" opaque={cartVisible} />
    </div>
  );
}

export default App;