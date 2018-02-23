import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import {createStore, compose, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';

import reducer from "./components/reducer";

const store = createStore(reducer, {data:[]});
ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>,
    document.getElementById('root')
);