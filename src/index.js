import { render } from "react-dom";
import App from "./App";
import TodoContextProvider from "./context/TodoContext";
import "./index.css";

render(
  <TodoContextProvider>
    <App />
  </TodoContextProvider>,
  document.getElementById("root")
);
