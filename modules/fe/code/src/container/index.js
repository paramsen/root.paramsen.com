import React from 'react';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
    
import App from '../component/App';
import Home from '../component/Home';
import Article from '../component/Article';
import About from '../component/About';

export default function AppRouter() {
    return(
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute  component={Home}/>
                <Route path="/article/:id" component={Article}/>
                <Route path="/about" component={About}/>
            </Route>
        </Router>
    );
}