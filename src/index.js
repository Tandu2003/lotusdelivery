import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import GlobalStyles from "./Components/GlobalStyles";

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyles>
        <App />
      </GlobalStyles>
    </Router>
  </React.StrictMode>
);
