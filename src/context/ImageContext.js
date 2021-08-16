import React, { createContext, useContext, useReducer } from "react";
export const ImageContext = createContext();

export const ImageProvider = ({ reducer, initialState, children }) => {
  return (
    <ImageContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </ImageContext.Provider>
  );
};

// hook that allows us to pull info from the data layer
export const useImageValue = () => useContext(ImageContext);
