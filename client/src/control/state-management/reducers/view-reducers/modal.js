export const reduceOpenModal = (state, modalData) => {
    return state.set('modalsOpened', state.get('modalsOpened').concat([modalData]));
}

export const reduceCloseLastModal = (state) => {
    let modals = state.get('modalsOpened').toJS();
    modals.pop();
    return state.set('modalsOpened', modals);
}

export const reduceCloseAllModals = (state) => {
    return state.set('modalsOpened', []);
}

