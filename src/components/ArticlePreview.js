import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import agent from '../agent';
import { connect } from 'react-redux';
import { ARTICLE_FAVORITED, ARTICLE_UNFAVORITED } from '../constants/actionTypes';
import SocialShare from './SocialShare';
import classNames from 'classnames';
import Clipboard from 'react-clipboard.js';
import * as moment from 'moment';

const FAVORITED_CLASS = 'control-like-btn liked';
const NOT_FAVORITED_CLASS = 'control-like-btn';

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
    };

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
    };

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
    var event = this.props.event;
    var photo = article.photos && article.photos.length > 0? article.photos[0] : '';
    console.log(article, 'hey');
    if (article && photo !== '')
      return (      
        <div className={ classNames('event-item', this.props.className )}>
          <img src={photo} />
          <div className='event-item-content'>
            <div className='item-header'>
              <div className='control-btns'>
                <div className='control-share-btn' onClick={ () => this.setState({ share : true }) }></div>
                <div className={favoriteButtonClass} onClick={ this.handleClick }></div>
              </div>
            </div>

            <div className='event-infos'>
              <Link to={`/event/${article.slug}`} className='event-title'>{article.title}</Link>
           
              <div className='event-date'>
                {moment(article.eventDate).format('MMMM Do YYYY')},
                <span className='event-time'>
                  {article.eventTimeFrom} - {article.eventTimeTo}</span>
              </div>
              <div className="two-line event-description">{article.description}</div>
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
                  <Clipboard data-clipboard-text={ shareLink } button-title="Copy" >
                    <i className="fa fa-clone" aria-hidden="true"></i>
                  </Clipboard>
                </p>
              </div>
              <div className="w__modal__footer"></div>
            </div>
          </div>      
        </div>
      );

    else
      return (
        <div>
          <div className={ classNames('event-item', this.props.className )}>
            <img src={require('../assets/images/event-img1.png')} />
            <div className='event-item-content'>
              <div className='item-header'>
                <div className='control-btns'>
                  <div className='control-share-btn'></div>
                  <div className='control-like-btn'></div>
                </div>
              </div>

              <div className='event-infos'>
                <div className='event-title'>Cyber Expo Ireland 2019</div>
                <div className='event-date'>
                  Thu, 16 Jan, <span className='event-time ml-2'>10:12 - 12:30</span>
                </div>
                <div className='event-description event-lapDeskTop'>
                  Our carvery is open Monday - Friday from 12pm- 2.30pm and we offer a €5 lunch for students (€7 regular price).
                </div>
              </div>
            </div>
          </div>

          { this.props.className==='slider-two' &&
          <div className={ classNames('event-item', this.props.className )}>
            <img src={require('../assets/images/event-img1.png')} />
            <div className='event-item-content'>
              <div className='item-header'>
                <div className='control-btns'>
                  <div className='control-share-btn'></div>
                  <div className='control-like-btn'></div>
                </div>
              </div>

              <div className='event-infos'>
                <div className='event-title'>Cyber Expo Ireland 2019</div>
                <div className='event-date'>Thu, 16 Jan, <span className='event-time ml-2'>10:12 - 12:30</span></div>
                <div className='event-description event-lapDeskTop'>
                  Our carvery is open Monday- Friday from 12pm- 2.30pm and we offer a €5 lunch for students (€7 regular price).
                </div>
              </div>
            </div>
          </div>
          }
        </div>
      )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ArticlePreview));
