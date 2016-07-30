import {connect} from 'react-redux';
import ArticleList from '../component/ArticleList';

const mapStateToProps = state => {
    console.log('The state: ' + JSON.stringify(state));
    return {
        articles: state.articleReducer.articles
    }
}

const ArticleListContainer = connect(mapStateToProps)(ArticleList);

export default ArticleListContainer;