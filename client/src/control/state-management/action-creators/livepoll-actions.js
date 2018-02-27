export const ACTION_REQUEST_CREATE_LIVEPOLL = 'ACTION_REQUEST_CREATE_LIVEPOLL'

export const actionRequestCreateLivepoll = formValues => ({
    type: ACTION_REQUEST_CREATE_LIVEPOLL,
    pollSettings: formValues.toJS()
})