import {fromJS} from 'immutable';
import {MODAL_COMPONENT_TYPES} from "../../constants/popups";

export const initialAuthState = fromJS({
    isSignedIn: false,
    signInData: undefined,
});

export const initialViewState = fromJS({
    drawer: {
        isOpened: false
    },
    modalsOpened: [
        // {
        //     type: MODAL_COMPONENT_TYPES.TEST,
        //     options: { showClose: true },
        //     childProps: {a: 1}
        // }
    ]
});
