import { combineReducers } from 'redux-immutable';
import {routerReducer} from 'react-router-redux';

import authReducer from "./reducers/auth-reducers/auth-reducer";
import viewReducer from "./reducers/view-reducers/view-reducer";

const reducerMap = {
    authState: authReducer,
    viewState: viewReducer,
    routeState: routerReducer,
};

const rootReducer = combineReducers(reducerMap)

export default rootReducer;