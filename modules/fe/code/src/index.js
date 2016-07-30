import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducer';

import {getArticles} from './action/articleAction';

import App from './component/App';
import Home from './component/Home';
import Article from './component/Article';
import About from './component/About';

let store = createStore(rootReducer);

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute  component={Home}/>
                <Route path="/article/:id" component={Article}/>
                <Route path="/about" component={About}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);

store.dispatch(getArticles());