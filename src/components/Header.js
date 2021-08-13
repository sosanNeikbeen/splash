import React, { useState } from "react";
import { Link } from "react-router-dom";

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
            <span className="navbar-item">
              <Link to="/signin">
                <button className="button is-white is-outlined">Login</button>
              </Link>
            </span>
            <span className="navbar-item">
              <Link to="/signup">
                <button className="button is-white is-outlined">Sign up</button>
              </Link>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
