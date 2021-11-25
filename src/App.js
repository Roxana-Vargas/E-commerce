import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Products from "./components/Products";
import Welcome from "./components/Welcome";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcome />}  />
          <Route path="/login" element={<Login />}/>
          <Route path="/productos" element={<Products/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
