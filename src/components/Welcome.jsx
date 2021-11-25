import React from 'react'
import logo from '../assets/logo-ec.PNG'
import girlWelcome from '../assets/welcome.png'
import { Link } from 'react-router-dom'
import './welcome.css'

const Welcome = () => {
    return (
        <>
      <div className="bg-white">
        <div className="containerWelcome col">
          <div className="contentTextWelcome">
            <img className="logoWelcome" src={logo} alt="Logo" />
          </div>
          <div className="container-init">
            <img className="girlWelcome" src={girlWelcome} alt="girl" />
          </div>
          <div className="contentTextInformation">
            <p>Find here everything you need</p>
            <p>Make your purchases safely</p>
          </div>
          <div className="pt-5 d-flex justify-content-center">
            <Link type="button" className="btn bg-btn buttongGet" to="/login">
              Start
            </Link>
          </div>
        </div>
      </div>
    </>
    )
}

export default Welcome
