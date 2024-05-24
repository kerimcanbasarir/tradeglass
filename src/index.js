import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./assets/css/style.css";

import { BrowserRouter } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import i18n from "./i18n";

import { ThemeProvider } from "./context/ThemeContext";

import { store } from "./redux/app/store";
import { Provider } from "react-redux";
import { SearchProvider } from "./context/SearchContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <SearchProvider>
      <ThemeProvider>
        <LanguageProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </LanguageProvider>
      </ThemeProvider>
    </SearchProvider>
  </Provider>
);
