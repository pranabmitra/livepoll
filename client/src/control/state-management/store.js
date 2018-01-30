import { createStore, applyMiddleware } from 'redux';
import rootReducer from "./root-reducer";
import loggerMiddleware from "./middlewares/logger";

let store;

export const initAppStateStore = (initialState)=>{
    const middlewares = applyMiddleware(loggerMiddleware);
    store = createStore(rootReducer, initialState, middlewares);
}

export const getAppStateStore = () => {
    if (!store) throw new Error('Redux store not created yet!!!');
    return store;
}