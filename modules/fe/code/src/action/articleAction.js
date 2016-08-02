import * as types from '../const';

export function getArticles(index, count) {
    return {
        type: types.GET_ARTICLES,
        index,
        count
    };
}

export function getArticlesSuccess(articles) {
    return {
        type: types.GET_ARTICLES_SUCCESS,
        articles
    };
}