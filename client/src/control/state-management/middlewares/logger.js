const loggerMiddleware = store => next => action => {
    console.log('-----Dispatching-----');
    console.log(action);
    console.log('--------------------');

    next(action);

    console.log('-----New State-----');
    console.log(store.getState().toJS())
    console.log('--------------------');
}

export default loggerMiddleware;