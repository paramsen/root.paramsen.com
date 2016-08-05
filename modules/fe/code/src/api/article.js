import 'whatwg-fetch';

export function getArticles(index, count) {
    function transform({id, title, body, excerpt, name, created, updated}) {
        return {
            id,
            title,
            body,
            excerpt,
            name,
            created: new Date(created),
            updated: new Date(updated)
        };
    }

    return fetch(`/api/article?index=${index}&count=${count}`)
        .then(response => {
            return response.json();
        })
        .then(json => {
            return json.article;
        })
        .then(articles => articles.map(transform));
}

export function getArticle(id) {
    return fetch(`/api/article/${id}`)
        .then(response => {
            return response.json();
        })
        .then(json => {
            return json.article;
        });
}