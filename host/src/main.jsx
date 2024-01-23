import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { makeAutoObservable } from "mobx";

class Counter {
    value = 0;
    constructor() {
        makeAutoObservable(this);
    }

    inc = () => {
        this.value++;
    };
}

const counter = new Counter();

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App counter={counter} />
    </React.StrictMode>
);

import("remote/ButtonApp").then(({ default: init }) => {
    // console.log(buttonApp.default);
    const buttonApp = init({ counter });
    buttonApp.mount("#button-app-2");
    // buttonApp.default.mount("#button-app-2");
});
