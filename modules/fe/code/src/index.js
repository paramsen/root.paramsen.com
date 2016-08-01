import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducer';
import {browserHistory} from 'react-router';
import createSagaMiddleware from 'redux-saga';
import articleSaga from './saga/article';
import AppRouter from './container';

import {routeLocationChange} from './action/routeAction';
import {getArticles} from './action/articleAction';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(articleSaga);
browserHistory.listen(location => store.dispatch(routeLocationChange({location: {pathname: location.pathname}})));
store.dispatch(getArticles());

render(
    <Provider store={store}>
        <AppRouter/>
    </Provider>,
    document.getElementById('root')
);