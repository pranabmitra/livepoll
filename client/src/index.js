import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './view/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('app-root'));
registerServiceWorker();
