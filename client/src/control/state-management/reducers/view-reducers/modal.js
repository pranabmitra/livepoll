export const reduceOpenModal = (state, modalData) => {
    return state.set('modalsOpened', state.get('modalsOpened').concat([modalData]));
}