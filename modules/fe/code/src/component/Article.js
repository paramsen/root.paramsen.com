import React from 'react';

export default function Article(props) {
    if(props.article) {
        return(
            <div dangerouslySetInnerHTML={{__html: props.articleBody}}/>
        );
    } else {
        return(
            <div>No article to display</div>
        );
    }
}