import React from "react";
import {
  CategoriesProvider,
  SidebarProvider,
  ThemeProvider,
  VideosProvider,
} from "context";

const CombinedProvider = ({ children }) => {
  return (
    <ThemeProvider>
      <SidebarProvider>
        <VideosProvider>
          <CategoriesProvider>{children}</CategoriesProvider>
        </VideosProvider>
      </SidebarProvider>
    </ThemeProvider>
  );
};
export { CombinedProvider };
