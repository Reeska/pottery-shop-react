import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './index.css';
import App from './App/App';
import { Provider as ReduxProvider } from 'react-redux';
import store from './store';
import { loadBooks } from './store/actions';

loadBooks(store.dispatch)

ReactDOM.render(
    <React.StrictMode>
      <ReduxProvider store={store}>
        <App/>
      </ReduxProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();