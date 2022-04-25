import React, { createContext, useContext, useState } from "react";
const ThemeContext = createContext(null);
const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
const useTheme = () => {
  const contextReceived = useContext(ThemeContext);
  if (contextReceived === undefined) {
    throw new Error("useTheme Hook must be used within a sidebar provider");
  }
  return contextReceived;
};
export { useTheme, ThemeProvider };
