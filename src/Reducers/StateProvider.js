import React, { createContext, useContext, useReducer } from "react";
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

// hook that allows us to pull info from the data layer
export const useStateValue = () => useContext(StateContext);
