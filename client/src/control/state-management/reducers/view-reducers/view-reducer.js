import {ACTION_CLOSE_DRAWER, ACTION_TOGGLE_DRAWER} from "../../action-creators/view-state/drawer-actions";
import {reduceCloseDrawer, reduceToggleDrawer} from "./drawer";
import {initialViewState} from "../../initial-states";


const viewReducer = (state = initialViewState, action) => {
    switch (action.type) {
        case ACTION_TOGGLE_DRAWER:
            return reduceToggleDrawer(state);

        case ACTION_CLOSE_DRAWER:
            return reduceCloseDrawer(state);

        default:
            return state;
    }
}

export default viewReducer;