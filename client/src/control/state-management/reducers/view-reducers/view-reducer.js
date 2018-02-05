import {ACTION_CLOSE_DRAWER, ACTION_TOGGLE_DRAWER} from "../../action-creators/view-state/drawer-actions";
import {reduceCloseDrawer, reduceToggleDrawer} from "./drawer";
import {initialViewState} from "../../initial-states";
import {ACTION_OPEN_MODAL} from "../../action-creators/view-state/modal-actions";
import {reduceOpenModal} from "./modal";


const viewReducer = (state = initialViewState, action) => {
    switch (action.type) {
        case ACTION_TOGGLE_DRAWER:
            return reduceToggleDrawer(state);

        case ACTION_CLOSE_DRAWER:
            return reduceCloseDrawer(state);

        case ACTION_OPEN_MODAL:
            return reduceOpenModal(state, action.modalData);

        default:
            return state;
    }
}

export default viewReducer;