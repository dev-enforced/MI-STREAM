import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { CombinedProvider } from "context";
import { Provider } from "react-redux";
import { storeGiven } from "reduxFiles";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeGiven}>
      <BrowserRouter>
        <CombinedProvider>
          <App />
        </CombinedProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
