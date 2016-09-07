import React from 'react';
import {Link} from 'react-router';
import {shortFormat} from '../util/dateFormat'
import {Card, CardMedia, CardTitle, CardText} from 'material-ui/Card'

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
    return items.map(renderArticleItemM);
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
        <Link to={'/article/' + item.name} key={item.id}>
          <Card className="card">
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