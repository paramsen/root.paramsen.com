import React from 'react';
import {Link} from 'react-router';
import {shortFormat} from '../util/dateFormat'

export default function ArticleList() {
    return (
        <div>
            {renderArticleItems([
                    {id: 1, name: 'article-1', title: 'Title1', body: 'Body1', excerpt: 'Excerpt1', created: new Date(), updated: new Date()},
                    {id: 2, name: 'article-2', title: 'Title2', body: 'Body2', excerpt: 'Excerpt2', created: new Date(), updated: new Date()},
                    {id: 3, name: 'article-3', title: 'Title3', body: 'Body3', excerpt: 'Excerpt3', created: new Date(), updated: new Date()}
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
                <Link to={'/article/' + item.name}>
                    {item.title}
                </Link>
            </h3>
            <p style={bodyStyle}>
                <Link to={'/article/' + item.name}>
                    {item.excerpt}
                </Link>
            </p>
            <p>{shortFormat(item.updated)}</p>
        </div>
    );
}

const bodyStyle = {whiteSpace: 'pre'};