import React from "react";
import { ImageStore } from "../context/ImageContext";
import SearchBar from "../components/SearchBar";
import ImageList from "../components/ImageList";

const home = () => {
  return (
    <div>
      <ImageStore>
        <SearchBar />
        <ImageList />
      </ImageStore>
    </div>
  );
};

export default home;
