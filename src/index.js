import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/css/styles.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
// import "font-awesome/css/font-awesome.min.css";
// import "@fortawesome/fontawesome-svg-core/styles.css";
// import { config } from "@fortawesome/fontawesome-svg-core";
// config.autoAddCss = false;

import reportWebVitals from "./reportWebVitals";
import { FirebaseProvider } from "./context/firebase";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FirebaseProvider>
      <App />
    </FirebaseProvider>
  </React.StrictMode>
);

reportWebVitals();
