import {combineReducers} from 'redux';
import articleReducer from './articleReducer';
import routeReducer from './routeReducer';

const rootReducer = combineReducers({
    routeReducer,
    articleReducer
});

export default rootReducer;

/* sstorespec
{
    articles: [{id, title, excerpt...}],
    articleBodies: {
        id: body
    }
}
*/