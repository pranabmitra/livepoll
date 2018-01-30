import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import './index.css';
import App from './view/App';
import registerServiceWorker from './registerServiceWorker';
import initLivepollWebApp from "./control/app-init/init";
import {getAppStateStore} from "./control/state-management/store";


const renderLivepollWebApp = () => {
    ReactDOM.render(
        <Provider store={getAppStateStore()}>
            <App/>
        </Provider>
        , document.getElementById('app-root'));

    registerServiceWorker();
}

initLivepollWebApp().then(renderLivepollWebApp);