import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.css';

import { createStore } from "redux";
import {Provider } from "react-redux";
import rootReducer from "./services/reducers/index";
const store = createStore(rootReducer)

console.warn("store data", store)

ReactDOM.render(
    <Provider store = {store}>
    <App />
    </Provider>,  
    document.getElementById('root')
);
