import React from "react";
import logoHeader from "./img/Logo Header.svg";
import logoFooter from "./img/Logo Footer.svg";
import {Link} from "react-router-dom";
import "./App.css";
// State indicator components
export const Loading = () => <div>Loading...</div>;
export const Error = ({ message }) => (
  <div class="alert alert-danger" role="alert">
    <b>Error:</b> {message}
  </div>
);



// Layout components
export const Header = () => (
  <header className="App-header displayFlex">
    <div className="container displayFlex">
      <img src={logoHeader} className="App-logo" alt="logo" />
      <h3 className="App-title">An Online Voting Platform</h3>
    </div>
    <div className="container displayFlex navCustomMain">
      <div className="navCustom"><Link to="/" style={{color: "white",textDecoration:"none"}}>Home</Link></div>
      <div className="navCustom"><Link to="/info" style={{color: "white",textDecoration:"none"}}>Info</Link></div>
      <div className="navCustom"><Link to="/Vote" style={{color: "white",textDecoration:"none"}}>Vote</Link></div>
      <div className="navCustom"><Link to="/contact" style={{color: "white",textDecoration:"none"}}>Contact Us</Link></div>
    </div>
  </header>
);
const currentYear = new Date().getFullYear();
export const Footer = () => (
  <footer className="App-footer displayFlex footer-style">
    <div className="container hasura-logo">
        <img
          className="footer-logo"
          alt="hasura logo"
          src={logoFooter}
        />
      &nbsp; | &nbsp;
      <a
        href="https://github.com/theanmolmalik/tohyo"
        target="_blank"
        rel="noopener noreferrer"
      >
        Source
      </a>
      <div className="footer-small-text">
        <span>Copyright © {currentYear}</span>
      </div>
    </div>
  </footer>
);