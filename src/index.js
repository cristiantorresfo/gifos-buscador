import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";
import { GifProvider } from "./Context/GifContext";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <GifProvider>
      <App />
    </GifProvider>
  </StrictMode>,
  rootElement
);
