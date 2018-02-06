import {ACTION_CLOSE_DRAWER, ACTION_TOGGLE_DRAWER} from "../../action-creators/view-actions/drawer-actions";
import {reduceCloseDrawer, reduceToggleDrawer} from "./drawer";
import {initialViewState} from "../../initial-states";
import {
    ACTION_CLOSE_ALL_MODALS, ACTION_CLOSE_LAST_MODAL,
    ACTION_OPEN_MODAL
} from "../../action-creators/view-actions/modal-actions";
import {reduceCloseAllModals, reduceCloseLastModal, reduceOpenModal} from "./modal";


const viewReducer = (state = initialViewState, action) => {
    switch (action.type) {
        case ACTION_TOGGLE_DRAWER:
            return reduceToggleDrawer(state);

        case ACTION_CLOSE_DRAWER:
            return reduceCloseDrawer(state);

        case ACTION_OPEN_MODAL:
            return reduceOpenModal(state, action.modalData);

        case ACTION_CLOSE_LAST_MODAL:
            return reduceCloseLastModal(state);

        case ACTION_CLOSE_ALL_MODALS:
            return reduceCloseAllModals(state);

        default:
            return state;
    }
}

export default viewReducer;