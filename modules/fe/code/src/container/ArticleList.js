import {connect} from 'react-redux';
import ArticleList from '../component/ArticleList';
import {filterArticles} from '../reducer/articleReducer';

const mapStateToProps = state => {
    return {
        articles: filterArticles(state)
    }
}

const ArticleListContainer = connect(mapStateToProps)(ArticleList);

export default ArticleListContainer;