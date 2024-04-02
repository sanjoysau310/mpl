import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/css/styles.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "yet-another-react-lightbox/styles.css";
// import "font-awesome/css/font-awesome.min.css";
// import "@fortawesome/fontawesome-svg-core/styles.css";
// import { config } from "@fortawesome/fontawesome-svg-core";
// config.autoAddCss = false;

import reportWebVitals from "./reportWebVitals";
import { FirebaseProvider } from "./context/firebase";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <FirebaseProvider>
  <App />
</FirebaseProvider> */}
    <Provider store={store}>
      <App />
    </Provider>
  </>
);

reportWebVitals();
