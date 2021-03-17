import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from "redux";
import {Provider} from "react-redux";

const initialState = 0;

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "plus":
            return state + action.payload;

        case "minus":
            if (state > 0) {
                return state - action.payload;
            }
            return state;

        case "reset":
            return 0;

        default:
            return state;
    }
}

const store = createStore(reducer);



ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
