import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'

import './index.css';
import App from './view/App';
import registerServiceWorker from './registerServiceWorker';
import initLivepollWebApp from "./control/app-init/init";
import {getAppStateStore} from "./control/state-management/store";


const renderLivepollWebApp = () => {
    ReactDOM.render(
        <Provider store={getAppStateStore()}>
            <ConnectedRouter history={createHistory()}>
                <Route path='/' component={App}/>
            </ConnectedRouter>
        </Provider>
        , document.getElementById('app-root'));

    registerServiceWorker();
}

initLivepollWebApp().then(renderLivepollWebApp);