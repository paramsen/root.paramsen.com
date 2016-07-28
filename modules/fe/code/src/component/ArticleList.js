import React from 'react';

export default function ArticleList() {
    return (
        <div>
            {renderArticleItems([
                    {id: 1, value: 1},
                    {id: 2, value: 2},
                    {id: 3, value: 3},
                    {id: 4, value: 4},
                    {id: 5, value: 5}
                ])}
        </div>
    );
}

function renderArticleItems(articleItems) {
    return articleItems.map(renderArticleItem);
}

function renderArticleItem(articleItem) {
    return(
        <div key={articleItem.id}>
            ArticleItem
        </div>
    );
}