import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducer';
import {browserHistory} from 'react-router';
import createSagaMiddleware from 'redux-saga';
import articleSaga from './saga/article';
import './reset.css';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin'; //for material-ui
import AppRouter from './container';

import {routeLocationChange} from './action/routeAction';
import {getArticles} from './action/articleAction';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(articleSaga);
browserHistory.listen(location => store.dispatch(routeLocationChange({location: {pathname: location.pathname}})));
store.dispatch(getArticles(0, 10)); //dispatch here, we're demanding the root data
//further data should be requested when needed in a reactive manner, i.e. when onClick-action for article is clicked, dispatch getArticle(id), navigate to /article/... when GET_ARTICLE_DETAIL_SUCCESS returns.

injectTapEventPlugin();

render(
    <Provider store={store}>
            <AppRouter/>
    </Provider>,
    document.getElementById('root')
);