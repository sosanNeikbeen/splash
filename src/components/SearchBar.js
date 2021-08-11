import React, { useState } from "react";
import { useImage } from "../context/ImageContext";

const SearchBar = () => {
  const [term, setTerm] = useState("mac");
  const { onSearchSubmit } = useImage();

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSearchSubmit(term);
  };

  return (
    <div className="ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label>Image Search</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
