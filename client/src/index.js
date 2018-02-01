import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom'

import './index.css';
import App from './view/App';
import registerServiceWorker from './registerServiceWorker';
import initLivepollWebApp from "./control/app-init/init";
import {getAppStateStore} from "./control/state-management/store";


const renderLivepollWebApp = () => {
    ReactDOM.render(
        <Provider store={getAppStateStore()}>
            <BrowserRouter>
                <Route path='/' component={App}/>
            </BrowserRouter>
        </Provider>
        , document.getElementById('app-root'));

    registerServiceWorker();
}

initLivepollWebApp().then(renderLivepollWebApp);