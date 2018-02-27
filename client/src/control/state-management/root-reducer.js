import { combineReducers } from 'redux-immutable';
import {routerReducer} from 'react-router-redux';
import { reducer as formReducer } from 'redux-form/immutable'

import authReducer from "./reducers/auth-reducers/auth-reducer";
import viewReducer from "./reducers/view-reducers/view-reducer";
import livepollReducer from "./reducers/livepoll-reducers/livepoll-reducers";

const reducerMap = {
    authState: authReducer,
    viewState: viewReducer,
    livepollState: livepollReducer,

    routeState: routerReducer,
    form: formReducer
};

const rootReducer = combineReducers(reducerMap)

export default rootReducer;