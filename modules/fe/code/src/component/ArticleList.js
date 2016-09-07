import React from 'react';
import {Link} from 'react-router';
import {shortFormat} from '../util/dateFormat'
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card'

export default function ArticleList(props) {
    if(props.articles) {
        return (
            <div className="article-list">
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
    return fillToMultipleOfThree(items.map(renderArticleItemM));
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

    function renderArticleItemM(item) {
    return(
        <Link to={'/article/' + item.name} key={item.id} className="card">
          <Card>
            <CardMedia className="card-media">
                <i className="card-icon fa fa-terminal" aria-hidden="true"></i>
            </CardMedia>
            <CardTitle
              title={item.title}
            />
            <CardText>
              {item.excerpt}

            <p className="card-time">{shortFormat(item.updated)}</p>
            </CardText>
          </Card>
      </Link>
    );
}

/**
 * Add fill divs to have an amount of divs that is dividable by three, as we have 3 columns in UI at most
 */
function fillToMultipleOfThree(items) {
    var multOfThree = items.length % 3;

    if(multOfThree == 0) {
        return items;
    }

    if(multOfThree == 1) {
        items.push(cardFill(items.length));
        items.push(cardFill(items.length));
    } else {
        items.push(cardFill(items.length));
    }

    return items;
}

function cardFill(id) {
    return (
        <div key={items.length+1} className="card card-fill"/>
    );
}