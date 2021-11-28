import React from "react";
import { Link } from "react-router-dom";
import "./styles/Navbar.css";
function Navbar() {
  return (
    <div>
      <div className="container-fluid px-0 ">
        <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top">
          <a className="navbar-brand" href="/">
            
              <i class="brand">MyRestro</i>
            
          </a>
          <button
            className="navbar-toggler mr-3"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>{" "}
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                {" "}
                <Link className="nav-link" to="/">
                  Home
                </Link>{" "}
              </li>
              <li className="nav-item">
                {" "}
                <Link className="nav-link" to="/about">
                  About
                </Link>{" "}
              </li>
              <li className="nav-item">
                {" "}
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>{" "}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
