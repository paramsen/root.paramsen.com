import React from 'react';
import {Link} from 'react-router';
import {shortFormat} from '../util/dateFormat'

export default function ArticleList(props) {
    return (
        <div>
            {renderArticleItems(props.articles)}
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