import React from "react";
import { Link } from "react-router-dom";
import './navBar.css'

const Navigation = () => {
  return (
  <nav className="navbar navbar-expand-lg">
    <div className='container-fluid d-flex justify-content-end'>
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span>☰</span>
        </button>
        <div
            className="collapse navbar-collapse"
            id="navbarNav"
            style={{ justifyContent: "end" }}
        >
            <ul className="navbar-nav">
                <li className='nav-item'><Link className='linkNav linkProducts' to="/productos">Productos</Link></li>
                <li className='nav-item'><Link className='linkNav' to="/">Log Out</Link></li>
            </ul>
        </div>
    </div>     
 </nav>
 )
}

export default Navigation