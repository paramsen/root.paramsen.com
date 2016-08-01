import {connect} from 'react-redux';
import ArticleList from '../component/ArticleList';
import reducer from '../reducer/articleReducer';

const ArticleListContainer = connect(mapStateToProps)(ArticleList);

export default ArticleListContainer;

const mapStateToProps = state => {
    return articleReducer.getArticles(state);
}