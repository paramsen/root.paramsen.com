import React from 'react';
import {shortFormat} from '../util/dateFormat'

export default function ArticleList() {
    return (
        <div>
            {renderArticleItems([
                    {id: 1, title: 'Title1', body: 'Body1', excerpt: 'Excerpt1', created: new Date(), updated: new Date()},
                    {id: 2, title: 'Title2', body: 'Body2', excerpt: 'Excerpt2', created: new Date(), updated: new Date()},
                    {id: 3, title: 'Title3', body: 'Body3', excerpt: 'Excerpt3', created: new Date(), updated: new Date()}
                ])}
        </div>
    );
}

function renderArticleItems(items) {
    return items.map(renderArticleItem);
}

function renderArticleItem(item) {
    return(
        <div key={item.id}>
            <h3>
                <a href="http://localhost:1337">
                    {item.title}
                </a>
            </h3>
            <p style={bodyStyle}>
                <a href="http://localhost:1337">
                    {item.excerpt}
                </a>
            </p>
            <p>{shortFormat(item.updated)}</p>
        </div>
    );
}

const bodyStyle = {whiteSpace: 'pre'};