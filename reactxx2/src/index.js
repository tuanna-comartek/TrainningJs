import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import MyInfo from "./MyInfo";
import Clock from "./Clock";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <MyInfo name="Tuan" age="18" country="Viet Nam" address="Ha Noi" />
    <Clock />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
