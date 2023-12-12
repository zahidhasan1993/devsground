import React from "react";
import { useContext } from "react";
import { ThemeDataProvider } from "@/context/ThemeProvider";

const useTheme = () => {
  const context = useContext(ThemeDataProvider);
  console.log(context);

  return context;
};

export default useTheme;
