import { combineReducers } from 'redux-immutable';
import {Record} from 'immutable';

import authReducer from "./reducers/auth-reducers";
import viewReducer from "./reducers/view-reducers/view-reducer";
import {initialViewState} from "./initial-states";

const reducerMap = {
    authState: authReducer,
    viewState: viewReducer,
};

const defaultStates = Record({
    viewState: initialViewState
});

const rootReducer = combineReducers(reducerMap, defaultStates)

export default rootReducer;