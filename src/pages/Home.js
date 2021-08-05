import React, { useState } from "react";
import unsplash from "../api/unsplash";
import SearchBar from "../components/SearchBar";
import ImageList from "../components/ImageList";

const Home = () => {
  const [images, setImages] = useState([]);

  const onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    setImages(response.data.results);
  };
  return (
    <div>
      <SearchBar onSubmit={onSearchSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default Home;
