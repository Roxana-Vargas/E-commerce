import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
  <nav style={{ background: "#3F3F3F" }} className="navbar navbar-expand-lg navbar-dark">
    <div className='container-fluid'>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon"></span>
        </button>
        <div
            className="collapse navbar-collapse"
            id="navbarNav"
            style={{ justifyContent: "end" }}
        >
            <ul className="navbar-nav">
                <li className='nav-item'><Link to="/productos">Productos</Link></li>
                <li className='nav-item'><Link to="/compra">Compra</Link></li>
                <li className='nav-item'><Link to="/">Log Out</Link></li>
            </ul>
        </div>
    </div>     
 </nav>
 )
}

export default Navigation