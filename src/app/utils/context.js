"use client";

import React, { createContext, useReducer, useState } from "react";
import { reducer } from "./reducer";

export const StateContext = React.createContext();

export const ContextProvider = ({ children }) => {
  const defaultState = {
    navOpen: false,
    searchData: null,
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <>
      <StateContext.Provider value={{ state, dispatch }}>
        {children}
      </StateContext.Provider>
    </>
  );
};
