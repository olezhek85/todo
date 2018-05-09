import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";

import TodoApp from "./components/TodoApp";

import store from "./store";

// styles
import "normalize.css";
import "./assets/main.css";

render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById("root")
);
