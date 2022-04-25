import React, { createContext, useContext, useState } from "react";
const SidebarContext = createContext(null);

const SidebarProvider = ({ children }) => {
  const [sidebarView, setSidebarView] = useState(false);
  return (
    <SidebarContext.Provider value={{ sidebarView, setSidebarView }}>
      {children}
    </SidebarContext.Provider>
  );
};

const useSidebar = () => {
  const contextReceived = useContext(SidebarContext);
  if (contextReceived === undefined) {
    throw new Error("useSidebar Hook must be used within a sidebar provider");
  }
  return contextReceived;
};

export { useSidebar, SidebarProvider };
