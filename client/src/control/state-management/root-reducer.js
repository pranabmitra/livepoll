import { combineReducers } from 'redux-immutable';

import authReducer from "./reducers/auth-reducers/auth-reducer";
import viewReducer from "./reducers/view-reducers/view-reducer";

const reducerMap = {
    authState: authReducer,
    viewState: viewReducer,
};

const rootReducer = combineReducers(reducerMap)

export default rootReducer;