import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './js/components/container/App';
import registerServiceWorker from './js/services/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
