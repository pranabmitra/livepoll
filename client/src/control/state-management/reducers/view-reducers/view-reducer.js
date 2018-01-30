import {fromJS} from 'immutable';

import {ACTION_TOGGLE_DRAWER} from "../../action-creators/view-state/drawer-actions";

import {reduceToggleDrawer} from "./drawer";


const initialViewState = {
    drawer: {
        isOpened: false
    }
};

const viewReducer = (state = fromJS(initialViewState), action) => {
    switch (action.type) {
        case ACTION_TOGGLE_DRAWER:
            return reduceToggleDrawer(state);

        default:
            return state;
    }
}

export default viewReducer;