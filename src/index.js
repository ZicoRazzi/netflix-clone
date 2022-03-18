import React from "react";
import { render } from "react-dom";
import { HashRouter as Router } from 'react-router-dom';

import App from "./App";
import { GlobalStyles } from "./GlobalStyles";
import 'normalize.css'

render(
  <Router>
    <GlobalStyles />

    <App />
  </Router>,
  document.getElementById("root")
);
