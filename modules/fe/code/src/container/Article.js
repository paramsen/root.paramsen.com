import React from 'react';
import {connect} from 'react-redux';
import Article from '../component/Article';
import {getArticle} from '../action/articleAction'
import {filterArticle} from '../reducer/articleReducer';

const ArticleContainer = React.createClass({
    componentWillMount: function() {
        console.log('componentWillMount', this.props);
        if(!this.props.articleBody) {
            this.props.getArticle(this.props.name);
        }
    },

    componentWillReceiveProps: function(nextProps) {
        console.log('componentWillReceiveProps', nextProps);
        if(nextProps.name !== this.props.name) {
            this.props.getArticle(nextProps.name);
        }
    },

    render: function() {
        return(
            <Article article={this.props.article} articleBody={this.props.articleBody}/>
        );
    }
});

const mapStateToProps = (state, ownProps) => {
    const {articleReducer: {articles, articleBodies}} = state;
    const {routeParams: {name}} = ownProps;
    console.log('state', state.articleReducer);

    return {
        name: name,
        article: articles.find(e => e.name === name ? e : undefined),
        articleBody: articleBodies[name]
    }
}

export default connect(mapStateToProps, getArticle)(ArticleContainer);