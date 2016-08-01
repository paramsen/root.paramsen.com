import * as types from '../const';

export function getArticles() {
    return {
        type: types.GET_ARTICLES
    };
}

export function getArticlesSuccess(articles) {
    return {
        type: types.GET_ARTICLES_SUCCESS,
        articles
    };
}