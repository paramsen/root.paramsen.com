import {connect} from 'react-redux';
import ArticleList from '../component/ArticleList';
import {getArticles} from '../reducer/articleReducer';

const mapStateToProps = state => {
    return {
        articles: getArticles(state)
    }
}

const ArticleListContainer = connect(mapStateToProps)(ArticleList);

export default ArticleListContainer;