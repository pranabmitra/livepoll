export const ACTION_OPEN_MODAL = 'ACTION_OPEN_MODAL';
export const actionOpenModal = (modalData) => ({
    type: ACTION_OPEN_MODAL,
    modalData
})

export const ACTION_CLOSE_LAST_MODAL = 'ACTION_CLOSE_LAST_MODAL';
export const actionCloseLastModal = () => ({
    type: ACTION_CLOSE_LAST_MODAL
})

export const ACTION_CLOSE_ALL_MODALS = 'ACTION_CLOSE_ALL_MODALS';
export const actionCloseAllModals = () => ({
    type: ACTION_CLOSE_ALL_MODALS
})