"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

interface ThemeContextType {
  mode: string;
  setMode: (mode: string) => void;
}

const ThemeDataProvider = createContext<ThemeContextType | undefined>(
  undefined
);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [mode, setMode] = useState("");
  const handleChange = () => {
    if (mode === "dark") {
      setMode("light");
      document.documentElement.classList.add("light");
    } else {
      setMode("dark");
      document.documentElement.classList.add("dark");
    }
  };
  // useEffect(() => {
  //   handleChange();
  // }, [mode]);
  // console.log('log from provider');
  
  return (
    <ThemeDataProvider.Provider value={{ mode, setMode }}>
      {children}
    </ThemeDataProvider.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeDataProvider);
  if (context === undefined) {
    throw new Error("context is undefined")
  }
  return context;
};