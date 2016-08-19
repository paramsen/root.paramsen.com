import {combineReducers} from 'redux';
import * as types from '../const';

function articles(state = [], action) {
    switch(action.type) {
        case  types.GET_ARTICLES:
            return state; //fetching and stuff
        case types.GET_ARTICLES_SUCCESS:
            return [
                ...state,
                ...action.articles
            ];
        default:
            return state;
    }
}

function articleBodies(state = {}, action) {
    switch(action.type) {
        case types.GET_ARTICLE:
            return state; //fetching and stuff (?)
        case types.GET_ARTICLE_SUCCESS:
            return Object.assign({}, state, {
                [action.article.name]: action.article.body
            });
        default:
            return state;
    }
}

const reducer = combineReducers({
    articles,
    articleBodies
});

export function filterArticles(state) {
    const reducer = state.articleReducer;
    if(reducer && reducer.articles) {
        return reducer.articles;
    }
    return [];
}

export function filterArticle(state) {
    const reducer = state.articleReducer;
    if(reducer && reducer.article) {
        return reducer.article;
    }
    return {};
}

export default reducer;