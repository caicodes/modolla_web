import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import typography from "./utils/typography";

ReactDOM.render(
  <React.StrictMode>
    <App typography={typography} />
  </React.StrictMode>,
  document.getElementById("root")
);
