import { createStore, applyMiddleware } from 'redux';
import rootReducer from "./root-reducer";
import {Map} from 'immutable';
import loggerMiddleware from "./middlewares/logger";

let store;

export const initAppStateStore = ()=>{
    const middlewares = applyMiddleware(loggerMiddleware);
    store = createStore(rootReducer, Map(), middlewares);
}

export const getAppStateStore = () => {
    if (!store) throw new Error('Redux store not created yet!!!');
    return store;
}