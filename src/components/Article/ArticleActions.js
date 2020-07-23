import { Link } from 'react-router-dom';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import { DELETE_ARTICLE } from '../../constants/actionTypes';

const mapDispatchToProps = dispatch => ({
  onClickDelete: payload =>
    dispatch({ type: DELETE_ARTICLE, payload })
});

const ArticleActions = props => {
  const article = props.article;
  const del = () => {
    props.onClickDelete(agent.Articles.del(article.slug))
  };
  if (props.canModify) {
    return ( 
      <div className="article-actions">
        <Link
            to={`/settings/event/${article.slug}`}
            className="btn btn-outline-secondary btn-sm">
               Edit
          </Link>
        {/*<button className="btn btn-outline-danger btn-sm" onClick={ () => props.onDelete() }>
                  <i className="ion-trash-a"></i> Delete
                </button>*/}
      </div>
    );
  }

  
  return (
    <span>
    </span>
  );
};

export default connect(() => ({}), mapDispatchToProps)(ArticleActions);
