import React, { createContext, useContext, useReducer } from "react";

// prepare the data layer
export const StateContext = createContext();

export const StateProvider = ({ initialState, reducer, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const StateProviderValue = () => useContext(StateContext);
