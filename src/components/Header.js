import React, { useState } from "react";
import AuthButtons from "./AuthButtons";

const Header = () => {
  const [isActive, setisActive] = useState(false);
  return (
    <header className="navbar">
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <img
              src="https://bulma.io/images/bulma-type-white.png"
              alt="Logo"
            />
          </div>
          <span
            onClick={() => {
              setisActive(!isActive);
            }}
            style={{ color: "white" }}
            className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarMenuHeroC"
          >
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div
          id="navbarMenuHeroC"
          className={`navbar-menu ${isActive ? "is-active" : ""}`}
        >
          <div className="navbar-end">
            <AuthButtons />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
