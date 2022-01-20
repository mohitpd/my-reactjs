import React from 'react';
import ReactDOM from 'react-dom';
import MyRoutes from './routes';

import {Provider} from 'react-redux';
import ReduxStore from './store';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={ReduxStore()}>
            <MyRoutes />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
