import React from 'react';
import {connect} from 'react-redux';
import Article from '../component/Article';
import {getArticle} from '../action/articleAction'
import {filterArticle} from '../reducer/articleReducer';

const ArticleContainer = React.createClass({
    componentWillMount: function() {
        this.props.getArticle(props.id);
    },

    componentWillReceiveProps(nextProps) {
        if(nextProps.id !== this.props.id) {
            this.props.getArticle(nextProps.id);
        }
    },

    render: function() {
        return(
            <Article article={this.props.article}/>
        );
    }
});

const mapStateToProps = (state, ownProps) => {
    const {articles, articleBodies} = state;

    return {
        id: ownProps.id,
        article: articles[id],
        articleBody: articleBodies[id]
    }
}

export default connect(mapStateToProps, getArticle)(ArticleContainer);