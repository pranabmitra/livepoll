export const reduceToggleDrawer = (state) => {
    var isOpened = state.getIn(['drawer', 'isOpened']);
    return state.setIn(['drawer', 'isOpened'], !isOpened);
}

export const reduceCloseDrawer = (state) => {
    return state.setIn(['drawer', 'isOpened'], false);
}