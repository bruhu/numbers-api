import React from "react";
import ReactDOM from "react-dom";

// import React bindings for Redux
import { Provider } from "react-redux";
// import the store
import { store } from "./store"
// import App
import "./index.css";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

