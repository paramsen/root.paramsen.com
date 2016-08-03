import 'whatwg-fetch';

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

export function getArticles(index, count) {
    return fetch(`/api/article?index=${index}&count=${count}`)
        .then(response => {
            return response.json();
        })
        .then(json => {
            return json.article;
        })
        .then(articles => articles.map(transform));
}