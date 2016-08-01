import 'whatwg-fetch';

const exampleData = [
    {id: 1, name: 'article-1', title: 'Title1', body: 'Body1', excerpt: 'Kort beskrivande text...', created: new Date(), updated: new Date()},
    {id: 2, name: 'article-2', title: 'Title2', body: 'Body2', excerpt: 'Excerpt2', created: new Date(), updated: new Date()},
    {id: 3, name: 'article-3', title: 'Title3', body: 'Body3', excerpt: 'Excerpt3', created: new Date(), updated: new Date()}
];

export function getArticles() {
    return Promise.resolve(exampleData);
}
