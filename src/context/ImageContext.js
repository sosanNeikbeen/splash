import React, { useContext, useState, createContext } from "react";
import unsplash from "../api/unsplash";

const ImageContext = createContext();

export const ImageStore = ({ children }) => {
  const [images, setImages] = useState([]);

  const onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term, per_page: 20 },
    });
    setImages(response.data.results);
  };

  return (
    <ImageContext.Provider value={{ images, onSearchSubmit: onSearchSubmit }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImage = () => {
  const context = useContext(ImageContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
};
