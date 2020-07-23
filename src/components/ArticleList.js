import ArticlePreview from './ArticlePreview';
import ListPagination from './ListPagination';
import React from 'react';

const ArticleList = props => {
  if (!props.articles) {
    return (
      <div className="article-preview">No results.</div>
    );
  }

  if (props.articles.length === 0) {
    return (
      <div className="article-preview">
        <h5>No events.</h5>
      </div>
    );
  }

  return (
    <div className="row">
      {
        props.articles.map(article => {
          return (
            <ArticlePreview article={article} key={article.slug} />
          );
        })
      }

      {/*<ListPagination
              pager={props.pager}
              articlesCount={props.articlesCount}
              currentPage={props.currentPage} />*/}
    </div>
  );
};

export default ArticleList;
