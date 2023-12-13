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

  useEffect(() => {
    handleChange();
  }, [mode]);

  const handleChange = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setMode("dark");
      document.documentElement.classList.add("dark");
    } else {
      setMode("light");
      document.documentElement.classList.remove("dark");
    }
  };

  // console.log("log from provider");

  return (
    <ThemeDataProvider.Provider value={{ mode, setMode }}>
      {children}
    </ThemeDataProvider.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeDataProvider);
  if (context === undefined) {
    throw new Error("context is undefined");
  }
  return context;
};
