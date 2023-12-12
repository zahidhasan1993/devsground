"use client";

import React, { createContext, useEffect, useState } from "react";

interface ThemeContextType {
  mode: string;
  setMode: (mode: string) => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
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
  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
