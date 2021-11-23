import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Products from "./components/Products";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/productos" element={<Products/>} />
          <Route path="/compra" element={<Cart />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
