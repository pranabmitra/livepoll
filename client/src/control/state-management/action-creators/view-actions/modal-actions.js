import {DEFAULT_MODAL_OPTIONS} from "../../../../constants/popups";

export const ACTION_OPEN_MODAL = 'ACTION_OPEN_MODAL';
export const actionOpenModal = (type, options = {}, childProps = {}, className) => ({
    type: ACTION_OPEN_MODAL,
    modalData: {
        type,
        options: Object.assign({}, DEFAULT_MODAL_OPTIONS, options),
        childProps,
        className
    }
})

export const ACTION_CLOSE_LAST_MODAL = 'ACTION_CLOSE_LAST_MODAL';
export const actionCloseLastModal = () => ({
    type: ACTION_CLOSE_LAST_MODAL
})

export const ACTION_CLOSE_ALL_MODALS = 'ACTION_CLOSE_ALL_MODALS';
export const actionCloseAllModals = () => ({
    type: ACTION_CLOSE_ALL_MODALS
})