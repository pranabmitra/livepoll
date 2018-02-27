import {ACTION_REQUEST_CREATE_LIVEPOLL} from "../../action-creators/livepoll-actions";
import {initialLivepollState} from "../../initial-states";
import {requestCreateLivepoll} from "../../../livepoll/creation/livepoll-creation";

export const reduceRequestCreateLivepoll = (state, pollSettings) => dispatch => {
    requestCreateLivepoll(pollSettings)
}

const livepollReducer = (state = initialLivepollState, action) => {
    switch (action.type) {
        case ACTION_REQUEST_CREATE_LIVEPOLL:
            return reduceRequestCreateLivepoll(state, action.pollSettings)

        default:
            return state;
    }
}

export default livepollReducer