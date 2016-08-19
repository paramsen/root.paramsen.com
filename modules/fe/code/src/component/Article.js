import React from 'react';

export default function Article(props) {
    if(props.article) {
        return(
            <div>Article: {props.articleBody}</div>
        );
    } else {
        return(
            <div>No article to display</div>
        );
    }
}