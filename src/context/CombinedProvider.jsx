import React from "react";
import { SidebarProvider } from "context";

const CombinedProvider = ({ children }) => {
  return <SidebarProvider>{children}</SidebarProvider>;
};
export { CombinedProvider };
