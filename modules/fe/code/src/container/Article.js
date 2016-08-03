import {connect} from 'react-redux';
import Article from '../component/Article';
import {getArticle} from '../reducer/articleReducer';

const mapStateToProps = state => {
    return {
        article: getArticle(state) //reducer that handles the state we want must expose method for getting the thing we want from state
    }
}

const ArticleContainer = connect(mapStateToProps)(Article);

export default ArticleContainer;