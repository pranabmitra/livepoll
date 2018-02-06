import {fromJS} from 'immutable'

export const reduceOpenModal = (state, modalData) => {
    return state.set('modalsOpened', state.get('modalsOpened').concat([modalData]));
}

export const reduceCloseLastModal = (state) => {
    return state.set('modalsOpened', state.get('modalsOpened').pop());
}

export const reduceCloseAllModals = (state) => {
    return state.set('modalsOpened', fromJS([]));
}

