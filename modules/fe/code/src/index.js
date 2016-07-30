import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import App from './component/App';
import Home from './component/Home';
import Article from './component/Article';
import About from './component/About';

render(
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute  component={Home}/>
            <Route path="/article/:id" component={Article}/>
            <Route path="/about" component={About}/>
        </Route>
    </Router>,
    document.getElementById('root')
);

