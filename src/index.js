import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';

import configureStore from './configs/configureStore';

const store = configureStore();

ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./pages/App', () => {
        ReactDOM.render(
            <Provider store={ store }>
                <App />
            </Provider>,
            document.getElementById('root')
        );
    })
}

registerServiceWorker();
