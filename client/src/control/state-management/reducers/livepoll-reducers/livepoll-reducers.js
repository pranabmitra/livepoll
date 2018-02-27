import {ACTION_CREATE_LIVEPOLL} from "../../action-creators/livepoll-actions";

export const reduceCreateLivepoll = (state, pollSettings) => {

}

const livepollReducer = (state, action) => {
    switch (action.type) {
        case ACTION_CREATE_LIVEPOLL:
            return reduceCreateLivepoll(state, action.pollSettings)

        default:
            return state;
    }
}

export default livepollReducer