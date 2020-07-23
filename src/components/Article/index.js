import ArticleMeta from './ArticleMeta';
import ArticleActions from './ArticleActions';
import CommentInput from './CommentInput';
import CommentContainer from './CommentContainer';
import React from 'react';
import agent from '../../agent';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import marked from 'marked';
import { 
  ARTICLE_PAGE_LOADED, 
  ARTICLE_PAGE_UNLOADED,
  APPLY_TAG_FILTER,
  ARTICLE_FAVORITED_EACH,
  ARTICLE_UNFAVORITED_EACH,
  DELETE_ARTICLE,
  UPDATE_FIELD_TICKET,
  PURCHASE_TICKET
} from '../../constants/actionTypes';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import SocialShare from '../SocialShare';
import { QRCode } from "react-qr-svg";
import classNames from 'classnames';
import $ from 'jquery';
import {
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import * as moment from 'moment';
import { Number, Cvc, Expiration } from "react-credit-card-primitives";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import ReactDOMServer from "react-dom/server";

const mapStateToProps = state => ({
  ...state.article,
  currentUser: state.common.currentUser,
  isCompany:state.common.isCompany
});

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, state) =>
    dispatch({ type: ARTICLE_PAGE_LOADED, payload, state }),
  onUnload: () =>
    dispatch({ type: ARTICLE_PAGE_UNLOADED }),
  onClickTag: (tag, pager, payload) =>
    dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
  favorite: slug => dispatch({
    type: ARTICLE_FAVORITED_EACH,
    payload: agent.Articles.favorite(slug)
  }),
  unfavorite: slug => dispatch({
    type: ARTICLE_UNFAVORITED_EACH,
    payload: agent.Articles.unfavorite(slug)
  }),
  onClickDelete: payload =>
    dispatch({ type: DELETE_ARTICLE, payload }),
  onUpdateField: (key, value) =>
    dispatch({ type: UPDATE_FIELD_TICKET, key, value }),
  onPurchaseTicket: (payload) => 
    dispatch({ type : PURCHASE_TICKET, payload })
});

const FAVORITED_CLASS = 'fa fa-heart';
const NOT_FAVORITED_CLASS = 'fa fa-heart-o';

const MapWithAMarker = withGoogleMap(props =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: props.lat, lng: props.lng }}
  >
    <Marker
      position={{ lat: props.lat, lng: props.lng }}
    />
  </GoogleMap>
);

class Article extends React.Component {
  constructor(){
    super();

    this.state = {
      buy : false,
      delete : false,
      categories: [
        {
          name: 'Debit Card',
          value: 'debit'
        }
      ],
      selectedCategory: 'Credit Card'
    };

    this.handleClick = (tag) => {      
      this.props.history.push('/t/'+tag);
    };

    this.onScroll = () => {
      if($(window).scrollTop() > 540) {
        $('.article__top__ctrls__wrapper').addClass('jumper');
        $('.article__top__ctrls__wrapper .article__ctrls__wrapper').addClass('container');
      }
      else {
        $('.article__top__ctrls__wrapper').removeClass('jumper');
        $('.article__top__ctrls__wrapper .article__ctrls__wrapper').removeClass('container');
      }
    };

    this.handleClickFavorite = ev => {
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

    this.deleteArticle = () => {
      this.props.onClickDelete(agent.Articles.del(this.props.article.slug))
    };

    this.onPaypalResponse = (details, data) => {
      console.log('~~~~~~~~~~`', details, data)
    };

    this.onChangeVolumn = (ticket, volumn) => {
      var totalAmount = 0;
      var tickets = this.props.tickets.map( mt => {
        if(mt._id === ticket._id) {
          mt.volumn = parseFloat(volumn);
        }
        if ( mt.volumn && mt.volumn !== '')
          totalAmount += mt.price * mt.volumn;
        return mt;
      });
      this.props.onUpdateField('tickets', tickets);
      this.props.onUpdateField('totalAmount', totalAmount);
      this.setState({ pocket : true });
    };

    this.onChangeContact = (key, value) => {
      var contact = this.props.contact;
      contact[key] = value;
      this.props.onUpdateField(contact, value);
      this.setState({contact : true});
    };

    this.purchaseTicket = (baseUrl) => ev => {
      ev.preventDefault();
      var purchase = {
        tickets : this.props.tickets,
        contact : this.props.currentUser || this.props.contact,
        amount : this.props.totalAmount
      };

      var validate_tickets = false;
      purchase.tickets.map( mt => {
        if (mt.volumn && mt.volumn > 0)
          validate_tickets = true;
      });

      if(!validate_tickets){
        alert('please choose 1 ticket at least');
        this.props.history.push(baseUrl+'#ticket');
        return true;
      }

      if(purchase.contact == {}){
        this.props.history.push(baseUrl+'#ticket-auth');        
        return true;
      }
      this.props.onPurchaseTicket(agent.Articles.purchaseTicket(this.props.article.slug, purchase));
    };


    this.viewTicket = (purchase) => {
      var link = '/purchase/'+purchase.slug;
      this.props.history.push(link);
    };

    this.onClickContinueAsGuest = (baseUrl) => ev => {
      ev.preventDefault();     
      this.props.history.push(baseUrl+'#ticket-info');
    };

    this.onClickToAuth = (baseUrl) => {
      var validate = false;

      this.props.tickets.map( mt => {
        if (mt.volumn && mt.volumn > 0)
          validate = true;

      });
      if (validate)
        this.props.history.push(baseUrl+ (this.props.currentUser? '#ticket-info' : '#ticket-auth' ) )
      else
        alert('please choose 1 ticket at least');
    };

    this.exportPdf = () => {}
  }

  componentWillMount() {
    var state = null;
    if (this.props.location.state)
      state = this.props.location.state;
    this.props.onLoad(Promise.all([
      agent.Articles.get(this.props.match.params.id),
      agent.Comments.forArticle(this.props.match.params.id)
    ]), state);
    $("html, body").animate({ scrollTop: 0 }, 0);
    window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    this.props.onUnload();
    window.removeEventListener('scroll', this.onScroll);
  }

  componentDidUpdate(prevProps: Readonly<P>, prevState: Readonly<S>, snapshot: SS): void {
    $("div.checkout").click(function () {
      $("div.contact-panel-container").removeClass("modal-hide");
      $("div.right-panel-container").addClass("modal-hide");
    });
  }

  componentDidMount(): void {

  }

  render() {
    if (!this.props.article) {
      return null;
    }

    if (!this.props.articlePageLoaded){}
    this.login = () => {
      this.props.history.push({
        pathname: '/login'
      }); 
    };

    var article = this.props.article;

    const markup = { __html: marked(this.props.article.description || '', { sanitize: true }) };
    const canModify = this.props.currentUser &&
      ( this.props.currentUser.username === this.props.article.author.username || this.props.currentUser.username === 'supergsdev101');

    const photos = this.props.article.photos && this.props.article.photos.map((photo) => {
      return {
        original: photo,
        thumbnail: photo,
      }
    });

    var shareLink = window.location.href;

    var previewPhoto = this.props.article.photos && this.props.article.photos.length > 0 && this.props.article.photos[0];

    var favoriteButtonClass = article.favorited ?
      FAVORITED_CLASS :
      NOT_FAVORITED_CLASS;

    var baseUrl = '/event/'+this.props.article.slug;

    var contact = this.props.currentUser || this.props.contact;

    var isBTA = !this.props.currentUser || this.props.currentUser && !this.props.isCompany;
    var hash = this.props.location.hash;
    var purchase = this.props.purchase;
    const showCompany = (name) => {
      this.props.history.push(`/org/${name}`)
    };

    return (
        <div>
          {hash && <div class="modal-overlay"></div>}
         <div className="article-page d-flex justify-center">
          <div className="article-listing-header">
            <img src={ previewPhoto} />
          </div>
          <div className="container-event">
            <div className="banner">
              <div className="article__primary__info__wrapper">
              { photos && photos.length &&   <div className="photos__wrapper">
                <div class="image-gallery-image">
                  <img src={photos[0].original} class="w-100"/>
                </div>
              </div>
              }
                <div className="article__info">
                  <div>
                    <div class="blue-button">
                      { moment(this.props.article.eventDate).format("MMM, D") }
                    </div>
                    { this.props.currentUser && this.props.isCompany && (
                        <ArticleActions
                          canModify={canModify}
                          article={this.props.article}
                          onDelete={ () => this.setState({delete : true})}
                        />
                    )}
                    <div className="article-header">
                      <h1 className="text-bold">{this.props.article.title} </h1>
                      <h3>by <a  className="text-blue">{ this.props.article.author.fullname }</a></h3>
                    </div>
                  </div>

                  <div class="d-flex justify-content-between icon-top">
                   <p className="article__price">
                     $120-$150
                   </p>
                   <div className='control-btns'>
                     <i class="fa fa-share-alt mr-2"> </i>
                     <div className={favoriteButtonClass} onClick={ this.handleClick }></div>
                   </div>
                 </div>
                </div>
              </div>
            </div>

            <div className="article-content">
              <div className="detail-block-wrapper">
                <div className="detail-block-left">
                  <div className="desc-block block">
                    <div className="font-bold text-bold light-font">
                      Lightopia Festival London - Step Into An Experience Like No Other!
                    </div>
                    <div class="font-bold text-bold font-size other-font">About this event</div>
                    {/*<div dangerouslySetInnerHTML={markup} className="event-description"></div>*/}
                    <div className="event-description">
                      <div>
                        Taking place at Chiswick House and Gardens, an 18th century villa with classical landscapes and 65 acres of gardens,
                        Lightopia is an immersive and visually-dramatic lantern and light festival, that promises to fuse beautiful art installations with interactive experience.
                      </div>

                      <div className="more-details" data-toggle="collapse" data-target="#Options">
                        See More
                      </div>
                      <span id="Options" className="collapse">
                         <div className="padding-top-txt-font">
                            Lightopia is an exploration of light, movement and form, beautifully captivating the senses with unique interactive and immersive lights, lanterns, installations and incredible 3D mapping light show,
                            destined to create unforgettable memories and provide alternative family fun.
                          </div>
                          <div className="padding-top-txt-font padding-top-txt">
                            Installations include, The Love Gate, Tree of Life, Elysian Field, S-Harmony, The Flower Road, Happy Valley, Two moons Eagle and many mre,
                            symbolising various experiences throughout life and humanity.
                          </div>
                      </span>

                      <div className="hidden720">
                        <div>
                          Lightopia is an exploration of light, movement and form, beautifully captivating the senses with unique interactive and immersive lights, lanterns, installations and incredible 3D mapping light show,
                          destined to create unforgettable memories and provide alternative family fun.
                        </div>
                        <div className="padding-top-txt">
                          Installations include, The Love Gate, Tree of Life, Elysian Field, S-Harmony, The Flower Road, Happy Valley, Two moons Eagle and many mre,
                          symbolising various experiences throughout life and humanity.
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                <div className="detail-block-right">
                  <div className="event-time-block block">
                    <div class="blue-button-tickets cursor-pointer" onClick={ () => this.props.history.push(baseUrl+'#ticket')} >Tickets</div>
                    <div class="text-bold location-padding">Location</div>
                    <p className="align-center-media">{ this.props.article.address || this.props.article.author.address}</p>
                    <p class="text-blue align-center-media">View Maps</p>
                    <div class="text-bold location-padding">Date and time</div>
                    <div className="date-and-time">{ this.props.article.eventDate } From { this.props.article.eventTimeFrom } To { this.props.article.eventTimeTo }</div>
                  </div>

                  <div class="text-bold share-with-friends">Share with friends</div>

                  <div className="five-icon-width align-center-media">
                    <SocialShare
                        title={this.props.title}
                        shareLink={shareLink}
                    />
                  </div>
                  <div className="w3-row">
                    <div className="w3-col img-width">
                      <img src={this.props.article.author.image} className="mt-4 company-manager-img"/>
                    </div>
                    <div className="w3-col website-width">
                      <div className="">
                        <div className="text-hover-underline cursor-pointer" onClick={() => showCompany(this.props.article.author.fullname)}>{this.props.article.author.fullname}</div>
                      </div>
                      <div className="padding-website">
                        <div className="text-blue">website</div>
                      </div>
                      <div className="w3-row">
                        <div className="w3-col l6 m6 s6">
                          <div className="button-outline-small">Follow</div>
                        </div>
                        <div className="w3-col l6 m6 s6">
                          <div className="button-outline-small">Contact</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="photos__wrapper-bottom mb-4 margin-article">
                 { photos.map( photo =>
                     <div class="image-gallery-size py-4">
                     <img src={photo.original} class="w-100"/>
                   </div>
                 )}

                 <div className="tag-left-padding block">
                   <div className="tag-font-padding">Tags</div>
                   <ul className="tag-list">
                     {
                       this.props.article.tagList.map(tag => {
                         return (
                            <li
                              className="tag-default tag-pill tag-outline"
                              key={tag}
                              onClick={ () => this.handleClick(tag) }
                            >
                              {tag}
                            </li>
                          );
                        })
                      }
                   </ul>
                 </div>
              </div>

              <div class="d-flex row bottom-container w-100 m-0" >
                <div className="contact-block block col-4">
                  <div class="text-bold font-w600 light-font">{ this.props.article.author.fullname }</div>
                  <p>at</p>
                  <h5 class="grey-text">{ this.props.article.address || this.props.article.author.address}</h5>
                  <div class="button-outline">Follow</div>
                </div>

                <div className="google-map-block col-8 p-0">
                  <MapWithAMarker
                    containerElement={<div style={{ height: `360px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    lat={this.props.article.latitude || this.props.article.author.latitude || 0}
                    lng={this.props.article.longitude || this.props.article.author.longitude || 0}
                  />
                </div>
              </div>
            </div>
          </div>

           <div className={ classNames("w__modal__wrapper", this.state.delete && 'opened' )}>
             <div className="w__modal delete__block">
               <div className="w__modal__header">
                 <h3>Delete event</h3>
                 <i className="fa fa-times" aria-hidden="true" onClick = { () => this.setState({ delete : false })}></i>
               </div>
               <div className="w__modal__content">
                 <p>Are you sure?</p>
               </div>

               <div className="w__modal__footer">
                 <button className="btn btn-outline-primary btn-sm" onClick={ () => this.setState({ delete : false })}>
                   No
                </button>
                <button className="btn btn-outline-danger btn-sm" onClick={ () => this.deleteArticle() }>
                  Yes
                </button>
              </div>
            </div>
          </div>
        </div>

         {/*  Checkout Modal  */}
         { hash!=="" &&
         <div className="article-page d-flex justify-center modal-container">
           <div className="container">
             <div className="buy__ticket__wrapper d-flex align-items-start">
             <div className='cross-button'>
               <i className="fa fa-times text-white" aria-hidden="true" onClick = { () => this.props.history.push('/event/'+article.slug)}></i>
             </div>

             <div class="right-panel-container">
               { photos && photos.length &&   <div className="photos__wrapper">
                 <div class="">
                   <img src={photos[0].original} class="w-100"/>
                 </div>

                 {
                   hash==='#purchased' &&
                   <div class="bold-heading ml-4 mt-4">YOU'RE GOING TO
                   </div>
                 }

                 <h6 class="mt-3 mx-4 text-bold">{ article.title }</h6>
                 {
                   hash==='#purchased' &&
                   <div class="bold-heading ml-4 mt-2">
                     Date
                   </div>
                 }

                 <p class="grey-text mx-4">{ moment(this.props.article.eventDate).format("MMM, D, YYYY") } <br/>
                 {
                   this.props.article.eventTimeTo &&
                   this.props.article.eventTimeFrom &&
                   <p> From {this.props.article.eventTimeFrom } To { this.props.article.eventTimeTo }</p>
                 }

                 {
                   this.props.article.eventTimeFrom &&
                   !this.props.article.eventTimeTo &&
                   <p> Starting at {this.props.article.eventTimeFrom }</p>
                 }

                 </p>
               </div>
               }

               {
                 hash==='#purchased' &&
                 <div>
                   <div class="bold-heading ml-4 mt-2">Location</div>
                   <p class="grey-text mx-4">
                     { this.props.article.address || this.props.article.author.address}
                   </p>
                 </div>
              }

              {
                hash!=='#purchased' &&
                <div>
                  <div class="mt-4 ml-4 order-summary">Order Summary</div>
                  {
                    this.props.tickets.map( ticket =>
                        <div class="ticket-row grey-text mx-4 no-gutters">
                          <div className="b__t__desc col-md-9 col-sm-12 ticket-padding">
                            <span>{ticket.volumn || 0} x </span>
                            <span><strong>{ticket.name}</strong></span>
                          </div>

                          <div className="b__t__price col-md-3 col-sm-12 ticket-padding-right">
                            <span>{ ticket.isFree? 'Free' : '$'+ticket.price }</span>
                          </div>
                        </div>
                    )
                  }

                  <div className="b__t__item total row">
                    <div className="total-txt">Total A${ Math.floor(this.props.totalAmount) }</div>
                  </div>
                </div>
              }

              {
                hash == '#purchased' &&
                <div className="b__t__contact qr_code">
                    <QRCode
                        bgColor="#FFFFFF"
                        fgColor="#000000"
                        level="Q"
                        style={{ width: 100 }}
                        value={ 'https://worldsty.com/purchase/'+purchase.slug }
                    />
                </div>
              }
             </div>
             <div className="contact-panel-container modal-hide">
                 {photos && photos.length && <div className="photos__wrapper">
                   <div className="">
                     <img src={photos[0].original} className="w-100"/>
                   </div>

                   {
                     hash === '#purchased' &&
                     <div className="bold-heading ml-4 mt-4">YOU'RE GOING TO
                     </div>
                   }

                   <h6 className="mt-3 mx-4 text-bold">{article.title}</h6>
                   {
                     hash === '#purchased' &&
                     <div className="bold-heading ml-4 mt-2">
                       Date
                     </div>
                   }

                   <p className="grey-text mx-4">{moment(this.props.article.eventDate).format("MMM, D, YYYY")} <br/>
                     {
                       this.props.article.eventTimeTo &&
                       this.props.article.eventTimeFrom &&
                       <p> From {this.props.article.eventTimeFrom} To {this.props.article.eventTimeTo}</p>
                     }

                     {
                       this.props.article.eventTimeFrom &&
                       !this.props.article.eventTimeTo &&
                       <p> Starting at {this.props.article.eventTimeFrom}</p>
                     }

                   </p>
                 </div>
                 }

                 {
                   hash === '#purchased' &&
                   <div>
                     <div className="bold-heading ml-4 mt-2">Location</div>
                     <p className="grey-text mx-4">
                       {this.props.article.address || this.props.article.author.address}
                     </p>
                   </div>
                 }

                 {
                   hash !== '#purchased' &&
                   <div>
                     <div className="mt-4 ml-4 order-summary">Order Summary</div>
                     {
                       this.props.tickets.map(ticket =>
                           <div className="ticket-row grey-text mx-4 no-gutters">
                             <div className="b__t__desc col-md-9 col-sm-12 ticket-padding">
                               <span>{ticket.volumn || 0} x </span>
                               <span><strong>{ticket.name}</strong></span>
                             </div>

                             <div className="b__t__price col-md-3 col-sm-12 ticket-padding-right">
                               <span>{ticket.isFree ? 'Free' : '$' + ticket.price}</span>
                             </div>
                           </div>
                       )
                     }

                     <div className="b__t__item total row">
                       <div className="total-txt">Total A${Math.floor(this.props.totalAmount)}</div>
                     </div>
                   </div>
                 }

                 {
                   hash == '#purchased' &&
                   <div className="b__t__contact qr_code">
                     <QRCode
                         bgColor="#FFFFFF"
                         fgColor="#000000"
                         level="Q"
                         style={{width: 100}}
                         value={'https://worldsty.com/purchase/' + purchase.slug}
                     />
                   </div>
                 }
               </div>

             {
               hash == "#ticket" && (
                   <div className="ticket_right_content mt-5 pt-5">
                 { this.props.tickets.map( ticket =>
                     <div className="ticket-row b__t__item mx-4 mt-4">
                       <div className="b__t__desc col-md-8 col-sm-6 d-flex flex-column align-items-start justify-content-start">
                         <p><strong>{ticket.name}</strong></p>
                         <div className="b__t__price grey-text">
                           <span className="total-txt">{ ticket.isFree? 'Free' : '$'+ticket.price }</span>
                         </div>
                       </div>

                       <div className="b__t__quantity col-md-4 col-sm-6">
                         <input
                           className="form-control ticket-input"
                           type="number"
                           placeholder="0"
                           value={ticket.volumn}
                           min="0" step="1" max={ticket.quantity}
                           onChange={ (ev) => this.onChangeVolumn(ticket, ev.target.value) }
                         />
                       </div>
                     </div>
                 )}

                {
                  !this.props.currentUser &&
                  <div onClick={this.login} className="cursor-pointer mx-4 d-flex flex-column align-items-center justify-content-center login-text">
                    <div class="red-text">Login now</div>
                    <div class="gray-text">and accumulate points with this buy</div>
                  </div>
                }

                <div className="continue-button checkout" onClick={ () => this.onClickToAuth(baseUrl) }>
                  Checkout
                </div>
               </div>
               )
             }

             {/*  Contact Information  */}
             {
               hash == "#ticket-auth" && (
                   <div className="ticket_right_information-content mx-4 mb-5 pb-2">
                       <div className="modal-contact">Contact Information</div>
                       <form onSubmit={this.purchaseTicket(baseUrl)}>
                         <div className="b__t__item row input-width">
                           <div className="col-md-6 b__t__field">
                             <input
                               type="text"
                               className="form-control custom-input"
                               placeholder="First name *"
                               value={contact.fullname}
                               onChange={ (ev) => this.onChangeContact('fullname', ev.target.value)}
                               required
                             />
                           </div>

                           <div className="col-md-6 b__t__field">
                             <input
                               type="text"
                               className="form-control custom-input"
                               placeholder="Last name *"
                               value={contact.lastName}
                               onChange={ (ev) => this.onChangeContact('lastName', ev.target.value)}
                               required
                             />
                           </div>
                         </div>

                         <div className="b__t__item row input-width">
                           <div className="col-md-6 b__t__field">
                             <input
                               type="email"
                               className="form-control custom-input input-margin-top"
                               placeholder="Email *"
                               value={contact.email}
                               onChange={ (ev) => this.onChangeContact('email', ev.target.value)}
                               required
                             />
                           </div>

                           <div className="col-md-6 b__t__field">
                             <input
                               className="form-control custom-input input-margin-top"
                               type="date"
                               placeholder="Date of Birth"
                               value={contact.birthday}
                               onChange={ (ev) => this.onChangeContact('birthday', ev.target.value)}
                             />
                           </div>
                         </div>

                         <div className="b__t__item row input-width">
                           <div className="col-md-6 b__t__field">
                             <input
                               type="text"
                               className="form-control custom-input input-margin-top"
                               placeholder="Phone number"
                               value={contact.phone}
                               onChange={ (ev) => this.onChangeContact('phone', ev.target.value)}
                               required
                             />
                           </div>

                           <div className="col-md-6 b__t__field">
                             <input
                               className="form-control custom-input input-margin-top"
                               type="text"
                               placeholder="Discount Code"
                               value={contact.birthday}
                               onChange={ (ev) => this.onChangeContact('birthday', ev.target.value)}
                             />
                           </div>
                         </div>

                         <div className="modal-contact payment-top">Payment Information</div>
                         <div className="">
                           <div className="b__t__item row input-width">
                             <div className="b__t__field col-md-12 mt-4">
                               <select className="form-control custom-input" onChange={ (e) => this.props.onUpdateField('category', e.target.value) }>
                                 <option value="credit">Credit Card</option>
                                 {
                                   this.state.categories &&
                                   this.state.categories.map( category => (
                                       <option value={category.name}>{category.name}</option>
                                   ))
                                 }
                               </select>
                             </div>
                           </div>

                           <div className="b__t__item row input-width">
                             <div className="b__t__field col-md-12">
                               <input type="text" className="form-control custom-input input-margin-top" placeholder="Card holder name" required/>
                             </div>
                           </div>

                           <div className="b__t__item row input-width">
                             <Number
                               masked
                               onChange={console.log.bind(console, 'Number.onChange')}
                               cardTypes={this.state.restrictAmex ? ['americanExpress'] : []}
                               render={({ value, valid, type, getInputProps }) => (
                                   <div className="b__t__field col-md-12">
                                     <input {...getInputProps() } className="form-control custom-input input-margin-top" required />
                                   </div>
                               )}
                             />

                           </div>

                           <div className="b__t__item row input-width">
                             <Expiration
                               onChange={console.log.bind(console, 'Expiration.onChange')}
                               render={({ getInputProps, value, valid, error, month, year }) => (
                                   <div className="b__t__field col-md-6">
                                     <input {...getInputProps() } className="form-control custom-input input-margin-top" required />
                                   </div>
                               )}
                             />

                             <Cvc
                               masked={this.state.maskedCvc}
                               onChange={console.log.bind(console, 'Cvc.onChange')}
                               cardType={this.state.restrictAmex ? 'americanExpress' : undefined}
                               render={({ getInputProps, value, valid }) => (
                                 <div className="b__t__field col-md-6">
                                   <input {...getInputProps() } className="form-control custom-input input-margin-top" required />
                                 </div>
                               )}
                             />
                           </div>
                         </div>

                         <div className="w3-row btn_content description-top">
                           <button type="submit" className="continue-button-contact">Checkout</button>
                         </div>
                       </form>

                         {/*<div className="w3-col l6 m12">*/}
                         {/*  <div className="terms-service-description">*/}
                         {/*    I accept the <a className="text-blue">terms of service</a> and have read the <a className="text-blue">privacy policy</a>.*/}
                         {/*    I agree that Glosfy may <a className="text-blue">share my information</a> with the event organizer.*/}
                         {/*  </div>*/}
                         {/*</div>*/}
                         {/*<div className="w3-col l6 m12">*/}

                         {/*</div>*/}
                     </div>
               )
             }

             {
               hash === '#purchased' && (
                   <div className="b__t__content mx-4 d-flex flex-column align-items-center">
                     <img src={require('../../assets/images/tick.png')} />
                     <div className="b__t__item purchased mt-4">
                       <p class="text-bold">Thanks for your order! &nbsp; #{ purchase.slug }</p>
                     </div>
                     <div className="b__t__item">
                       <div className="b__t__contact">
                         <p>
                           <strong class="bold-heading">Tickets going to</strong>
                           <div class="grey-text">{ purchase.contact.email}</div>
                         </p>

                         <p><strong class="bold-heading">Name</strong>
                           <div class="grey-text">Lorem Ipsum</div>
                         </p>

                         <p>
                           <strong class="bold-heading">Payment method</strong>
                           <div class="grey-text">Visa</div>
                           <div class="grey-text">xxxxxxxxxxxx90</div>
                         </p>

                         <p>
                           <strong class="bold-heading">Ticket</strong>
                           <div className="grey-text">A${ Math.floor(this.props.totalAmount) }</div>
                         </p>
                       </div>
                     </div>

                     <div className="view-ticket-blur">
                       View tickets
                     </div>

                     <div className="align-center-media">
                       <SocialShare
                           title={this.props.title}
                           shareLink={shareLink}
                       />
                     </div>

                     <div className="b__t__ctrls">
                       {
                         this.props.currentUser && (
                             <button className="btn" onClick={ () => this.props.history.push('/purchase') }>My Tickets</button>
                         )
                       }
                     </div>
                   </div>
               )
             }
           </div>
           </div>
         </div>
         }
     </div>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Article);
