import {ACTION_TOGGLE_DRAWER} from "../../action-creators/view-state/drawer-actions";
import {reduceToggleDrawer} from "./drawer";
import {initialViewState} from "../../initial-states";


const viewReducer = (state = initialViewState, action) => {
    switch (action.type) {
        case ACTION_TOGGLE_DRAWER:
            return reduceToggleDrawer(state);

        default:
            return state;
    }
}

export default viewReducer;