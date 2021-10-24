import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ScrollToTop from "./Components/ScrollToTop";
import RouterContainer from "./Components/RouteContainer";

import "./index.css";

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <RouterContainer>
      <ScrollToTop>
        <App />
      </ScrollToTop>
    </RouterContainer>
  </BrowserRouter>,
  document.getElementById("root")
);

serviceWorker.unregister();
