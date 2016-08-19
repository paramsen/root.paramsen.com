import React from 'react';
import {Link} from 'react-router';
import {shortFormat} from '../util/dateFormat'

export default function ArticleList(props) {
    if(props.articles) {
        return (
            <div>
                {renderArticleItems(props.articles)}
            </div>
        );
    } else {
        return (
            <div>
                Nothing to see here!
            </div>
        );
    }
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
            <p>
                <Link to={'/article/' + item.name}>
                    {item.excerpt}
                </Link>
            </p>
            <p>{shortFormat(item.updated)}</p>
        </div>
    );
}