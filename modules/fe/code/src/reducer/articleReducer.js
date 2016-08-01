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