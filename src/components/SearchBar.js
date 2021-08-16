import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useImageValue } from "../context/ImageContext";
import { actionTypes } from "../Reducers/reducer";

function SearchBar() {
  const [{ term }, dispatch] = useImageValue();
  const [input, setInput] = useState(term === null ? "" : term);
  const history = useHistory();
  const search = (e) => {
    e.preventDefault();
    dispatch({
      type: actionTypes.SET_SEARCH_TERM,
      term: input,
    });
    history.push("/search");
  };
  return (
    <form onSubmit={search}>
      <input
        className="input"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search free high resolution photos"
      />
    </form>
  );
}

export default SearchBar;
