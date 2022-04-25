import React from "react";
import { SidebarProvider, ThemeProvider } from "context";

const CombinedProvider = ({ children }) => {
  return (
    <ThemeProvider>
      <SidebarProvider>{children}</SidebarProvider>
    </ThemeProvider>
  );
};
export { CombinedProvider };
