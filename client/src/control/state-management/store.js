import { createStore, applyMiddleware } from 'redux';
import rootReducer from "./root-reducer";
import {Map} from 'immutable';
import thunkMiddleware from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'

import loggerMiddleware from "./middlewares/logger";

let store;

export const initAppStateStore = ()=>{
    let middlewares = [];

    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(loggerMiddleware);
    }

    middlewares.push(thunkMiddleware);
    middlewares.push(routerMiddleware(createHistory()));
    store = createStore(rootReducer, Map(), applyMiddleware(...middlewares));
}

export const getAppStateStore = () => {
    if (!store) throw new Error('Redux store not created yet!!!');
    return store;
}