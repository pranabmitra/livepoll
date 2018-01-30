import { createStore } from 'redux';
import rootReducer from "./root-reducer";

let store;

export const initAppStateStore = (initialState)=>{
    store = createStore(rootReducer, initialState);
}

export const getAppStateStore = () => {
    if (!store) throw new Error('Redux store not created yet!!!');
    return store;
}