import React from "react";
import Header from "./Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./SearchBar";

const HomeContainer = () => {
  return (
    <section className="hero is-fullheight home-bg">
      <div className="hero-head">
        <Header />
      </div>

      <div className="hero-body">
        <div className="container ">
          <div className="columns ">
            <div className="column is-half is-offset-one-quarter">
              <h1 className="is-size-5 has-text-white">
                Search free high resolution photos
              </h1>
              <div className="field">
                <div className="control">
                  <div className="control has-icons-left">
                    <SearchBar />
                    <span className="icon  is-left">
                      <FontAwesomeIcon className="m-3" icon={faSearch} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
