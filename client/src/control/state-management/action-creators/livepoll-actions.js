export const ACTION_CREATE_LIVEPOLL = 'ACTION_CREATE_LIVEPOLL'

export const actionCreateLivepoll = formValues => ({
    type: ACTION_CREATE_LIVEPOLL,
    pollSettings: formValues.toJS()
})