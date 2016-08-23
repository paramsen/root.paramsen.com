import {combineReducers} from 'redux';
import articleReducer from './articleReducer';
import routeReducer from './routeReducer';
import navigationReducer from './navigationReducer';

const rootReducer = combineReducers({
    routeReducer,
    articleReducer,
    navigationReducer
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