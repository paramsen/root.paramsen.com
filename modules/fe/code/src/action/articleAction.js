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

export function getArticleSuccess(article) {
    return {
        type: types.GET_ARTICLE_SUCCESS,
        article
    };
}

export function getArticle(id) {
    return (dispatch) => {
        dispatch({
            type: types.GET_ARTICLE,
            id
        });
    }
}