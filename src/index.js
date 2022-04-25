import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { CombinedProvider } from "context";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CombinedProvider>
        <App />
      </CombinedProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
