import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowseRouter} from 'react-router-dom'


ReactDOM.render(<BrowseRouter>
    <App />
</BrowseRouter>, document.getElementById('root'));
registerServiceWorker();
