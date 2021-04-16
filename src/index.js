import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";

const store = {
  user: {
    firstName: "Andrew",
    lastName: "Hopkins",
  },
  avatar: {
    image: "https://images.app.goo.gl/14ogK1uvRPRMoA1o8",
    alt: "Avatar icon",
  },
};

ReactDOM.render(
  <React.StrictMode>
    <App userData={store} />
  </React.StrictMode>,
  document.getElementById("root")
);
