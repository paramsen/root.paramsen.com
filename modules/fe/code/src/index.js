import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducer';
import {browserHistory} from 'react-router';
import AppRouter from './container';

import {getArticlesSuccess} from './action/articleAction';
import {routeLocationChange} from './action/routeAction';

let store = createStore(rootReducer);
browserHistory.listen(location => store.dispatch(routeLocationChange({location: {pathname: location.pathname}})));

render(
    <Provider store={store}>
        <AppRouter/>
    </Provider>,
    document.getElementById('root')
);

store.dispatch(getArticlesSuccess([
                {id: 1, name: 'article-1', title: 'Title1', body: 'Body1', excerpt: 'Kort beskrivande text...', created: new Date(), updated: new Date()},
                {id: 2, name: 'article-2', title: 'Title2', body: 'Body2', excerpt: 'Excerpt2', created: new Date(), updated: new Date()},
                {id: 3, name: 'article-3', title: 'Title3', body: 'Body3', excerpt: 'Excerpt3', created: new Date(), updated: new Date()}
]));