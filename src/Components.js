import React from "react";
import logoHeader from "./img/Logo Header.svg";
import logoFooter from "./img/Logo Footer.svg";

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
      <h1 className="App-title">An Online Voting Platform</h1>
    </div>
  </header>
);

export const Footer = () => (
  <footer className="App-footer displayFlex">
    <div className="container hasura-logo">
        <img
          className="hasura-logo"
          alt="hasura logo"
          src={logoFooter}
        />
      &nbsp; | &nbsp;
      <a href="https://tohyo.hasura.app/console" target="_blank">
        Backend
      </a>
      &nbsp; | &nbsp;
      <a
        href="https://github.com/theanmolmalik/tohyo"
        target="_blank"
        rel="noopener noreferrer"
      >
        Source
      </a>
      <div className="footer-small-text">
        <span>(The database resets every 24 hours)</span>
      </div>
    </div>
  </footer>
);