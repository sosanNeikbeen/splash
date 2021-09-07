import React, { useState } from "react";
import AuthButtons from "./AuthButtons";
import SearchBar from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const SearchHeader = () => {
  const [isActive, setisActive] = useState(false);
  return (
    <header className="navbar is-black">
      <div className="container">
        <div className="navbar-brand">
          <div className="navbar-item">
            <Link to="/">
              <button className="button is-black ">
                <span className="icon">
                  <FontAwesomeIcon icon={faArrowLeft} />
                </span>
                <span>Go back </span>
              </button>
            </Link>
          </div>
          <div className="pt-2">
            <SearchBar />
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

export default SearchHeader;
