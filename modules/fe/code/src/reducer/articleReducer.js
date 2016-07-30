import {combineReducers} from 'redux';
import * as types from '../const';

function articles(state = [], action) {
    switch(action.type) {
        case  types.GET_ARTICLES:
            return [
                //...state
                {id: 1, name: 'article-1', title: 'Title1', body: 'Body1', excerpt: 'Kort beskrivande text...', created: new Date(), updated: new Date()},
                {id: 2, name: 'article-2', title: 'Title2', body: 'Body2', excerpt: 'Excerpt2', created: new Date(), updated: new Date()},
                {id: 3, name: 'article-3', title: 'Title3', body: 'Body3', excerpt: 'Excerpt3', created: new Date(), updated: new Date()}
            ];
        case types.GET_ARTICLES_SUCCESS:
            return [];
        default:
            return state;
    }
}

const reducer = combineReducers({
    articles
});

export function getArticles(state) {
    const reducer = state.articleReducer;
    if(reducer) {
        return reducer.articles;
    }
    return [];
}

export default reducer;