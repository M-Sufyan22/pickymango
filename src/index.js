import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import LanguageProvider from "./hooks/useLanguage";

ReactDOM.render(
  <LanguageProvider>
    <App />
  </LanguageProvider>,
  document.getElementById("root")
);
