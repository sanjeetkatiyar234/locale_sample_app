import { registerLicense } from '@syncfusion/ej2-base';
import "bootstrap/dist/css/bootstrap.css"; // or include from a CDN
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const key = "ORg4AjUWIQA/Gnt2VVhjQlFaclhJXGFWfVJpTGpQdk5xdV9DaVZUTWY/P1ZhSXxRdkxgWX5edHVWRmlYV0M=";
registerLicense(key);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <App />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
