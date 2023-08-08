import './App.css';
import React from 'react';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Products from './component/Products';
import Product from './component/Product';
import { Routes, Route } from 'react-router-dom';
import Cart from './component/Cart';
import About from "./component/About";
import Contact from './component/Contact';
import Login from './component/Login';
import Register from './component/Register';
import Checkout from './component/Checkout';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
     
    </>
  );
}

export default App;
