import React from "react";
import ReactDom from "react-dom";
import App from "./App";

const mount = (root) => {
  ReactDom.render(<App />, root);
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#dev-marketing-root");

  if (devRoot) mount(devRoot);
}

export { mount };
