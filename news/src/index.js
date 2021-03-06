import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import rootReducer from './features/store/root.reducer'


const store = createStore(
    rootReducer,
)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
