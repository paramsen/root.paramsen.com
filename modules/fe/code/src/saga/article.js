import {takeEvery} from 'redux-saga';
import {put, call, fork} from 'redux-saga/effects';
import * as actions from '../action/articleAction';
import * as api from '../api/article';
import {GET_ARTICLES, GET_ARTICLE} from '../const';

export function *getArticles(action) {
    const articles = yield call(api.getArticles, action.index, action.count);
    yield put(actions.getArticlesSuccess(articles));
}

export function *getArticle(action) {
    console.log('getArticle', action);
    const article = yield call(api.getArticle, action.name);
    console.log('getArticle article', article[0]);
    yield put(actions.getArticleSuccess(article[0]));
}

export function *watchGetArticles() {
    yield call(takeEvery, GET_ARTICLES, getArticles);
}

export function *watchGetArticle() {
    yield call(takeEvery, GET_ARTICLE, getArticle);
}

export default function *saga() {
    yield [
        fork(watchGetArticles),
        fork(watchGetArticle)
    ];
}