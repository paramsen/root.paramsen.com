import React from 'react';
import {shortFormat} from '../util/dateFormat'
import './style/Article.css';

export default function Article(props) {
    if(props.article) {
        return(
            <div className="article-container">
                <h1>{props.article.title}</h1>
                <p className="time">{shortFormat(props.article.updated)}</p>
                <div dangerouslySetInnerHTML={{__html: props.articleBody}}/>
            </div>
        );
    } else {
        return(
            <div>No article to display</div>
        );
    }
}