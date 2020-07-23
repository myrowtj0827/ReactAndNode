import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import agent from '../agent';
import { connect } from 'react-redux';
import { ARTICLE_FAVORITED, ARTICLE_UNFAVORITED } from '../constants/actionTypes';
import SocialShare from './SocialShare';
import classNames from 'classnames';
import Clipboard from 'react-clipboard.js';
import * as moment from 'moment';

const FAVORITED_CLASS = 'fa fa-heart';
const NOT_FAVORITED_CLASS = 'fa fa-heart-o';


const mapStateToProps = state => ({
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  favorite: slug => dispatch({
    type: ARTICLE_FAVORITED,
    payload: agent.Articles.favorite(slug)
  }),
  unfavorite: slug => dispatch({
    type: ARTICLE_UNFAVORITED,
    payload: agent.Articles.unfavorite(slug)
  })
});

class ArticlePreview extends React.Component {
  
  constructor() {
    super();

    this.state = {
      share : false
    }

    this.handleClick = ev => {
      var article = this.props.article;
      ev.preventDefault();
      if(!this.props.currentUser){
        this.props.history.push('/login');
      }
      else{
        if (article.favorited) {
          this.props.unfavorite(article.slug);
        } else {
          this.props.favorite(article.slug);
        }
      }
    };

    this.wrapTitle = (title) => {
      if (title && title.length > 30)
        return title.substring(0,30);
      return title;
    }

    this.wrapDesc = (desc) => {
      if (desc && desc.length > 65)
        return desc.substring(0, 65) + '...';
      return desc;
    }
  }

  render() {

    var article = this.props.article;
    var favoriteButtonClass = article.favorited ?
      FAVORITED_CLASS :
      NOT_FAVORITED_CLASS;
    var previewPhoto = article.photos && article.photos.length > 0 && article.photos[0];

    var shareLink = 'https://worldsty.com/event/' + article.slug;

    return (
      <div className="col-md-4">
        <div className="article-preview">
          {/*
            <div className="article-meta">
              <Link to={`/@${article.author.username}`}>
                <img src={article.author.image} alt='' />
              </Link>

              <div className="info">
                <Link className="author" to={`/@${article.author.username}`}>
                  {article.author.username}
                </Link>
                <span className="date">
                  {new Date(article.createdAt).toDateString()}
                </span>
              </div>

              <div className="pull-xs-right">
              </div>
            </div>
          */}

          <Link to={`/event/${article.slug}`} className="preview-link">
            <img src={ previewPhoto } className="preview-photo" />
          </Link>
          <div className="preview-content">
            <div className="preview-ctrls">
              <label onClick={ () => this.setState({ share : true }) }>
                <i className="fa fa-share" aria-hidden="true"></i>
              </label>
              <label onClick={ this.handleClick }>
                <i className={favoriteButtonClass} aria-hidden="true"></i>
              </label>
            </div>
            <Link to={`/event/${article.slug}`} className="preview-link">
              <div className="p__date">
                <p className="p__month" >{ moment(this.props.article.eventDate).format("ddd, D MMM") }, { this.props.article.eventTimeFrom } - { this.props.article.eventTimeTo } </p>
              </div>
              <div className="p__desc">
                <h1>{this.wrapTitle(article.title)}</h1>
                <p>{this.wrapDesc(article.description)}</p>
              </div>
              {/*
                <span>Read more...</span>
                <ul className="tag-list">
                  {
                    article.tagList.map(tag => {
                      return (
                        <li className="tag-default tag-pill tag-outline" key={tag}>
                          {tag}
                        </li>
                      )
                    })
                  }
                </ul>
              */}
            </Link>
          </div>
        </div>
        <div className={ classNames("w__modal__wrapper", this.state.share && 'opened' )}>
          <div className="w__modal share__block">
            <div className="w__modal__header">
              <h3>Share with friends</h3>
              <i className="fa fa-times" aria-hidden="true" onClick = { () => this.setState({ share : false })}></i>
            </div>
            <div className="w__modal__content">
              <SocialShare 
                title={article.title}
                shareLink={shareLink}
              />
              <p className="share__text">
                <span>{shareLink}</span>
                <Clipboard data-clipboard-text={ shareLink }
                  button-title="Copy"
                  >
                  <i className="fa fa-clone" aria-hidden="true"></i>
                </Clipboard>
              </p>
            </div>
            <div className="w__modal__footer">
            </div>
          </div>
        </div>
      </div>
    );
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ArticlePreview));
