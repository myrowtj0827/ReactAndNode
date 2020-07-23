import ListErrors from '../ListErrors';
import React from 'react';
import agent from '../../agent';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  ADD_TAG,
  EDITOR_PAGE_LOADED,
  REMOVE_TAG,
  ARTICLE_SUBMITTED,
  EDITOR_PAGE_UNLOADED,
  UPDATE_FIELD_EDITOR,
  DELETE_ARTICLE
} from '../../constants/actionTypes';
import Geosuggest from "react-geosuggest";
import $ from 'jquery';
import DatePicker from "react-datepicker";
import classNames from 'classnames';
import ImageGallery from 'react-image-gallery';


const mapStateToProps = state => ({
  ...state.editor,
  categories : state.common.categories
});

const mapDispatchToProps = dispatch => ({
  onAddTag: () =>
    dispatch({ type: ADD_TAG }),
  onLoad: payload =>
    dispatch({ type: EDITOR_PAGE_LOADED, payload }),
  onRemoveTag: tag =>
    dispatch({ type: REMOVE_TAG, tag }),
  onSubmit: payload =>
    dispatch({ type: ARTICLE_SUBMITTED, payload }),
  onClickDelete: payload =>
    dispatch({ type: DELETE_ARTICLE, payload }),
  onUnload: payload =>
    dispatch({ type: EDITOR_PAGE_UNLOADED }),
  onUpdateField: (key, value) =>
    dispatch({ type: UPDATE_FIELD_EDITOR, key, value })
});

class Editor extends React.Component {

  constructor() {
    super();

    this.state = {
      stage : 1,
      save : false,
      delete : false
    }

    const updateFieldEvent =
      key => ev => this.props.onUpdateField(key, ev.target.value);
    this.changeTitle = updateFieldEvent('title');
    this.changeDescription = updateFieldEvent('description');
    this.changeCategory = updateFieldEvent('category');
    this.changeTagInput = updateFieldEvent('tagInput');
    this.changeEventDate = updateFieldEvent('eventDate');
    this.changeEventTimeFrom = updateFieldEvent('eventTimeFrom');
    this.changeEventTimeTo = updateFieldEvent('eventTimeTo');    

    this.watchForEnter = ev => {      
      if (ev.keyCode === 13 && ev.target.value !== "") {
        ev.preventDefault();
        this.props.onAddTag();
      }
    };

    this.removeTagHandler = tag => () => {
      this.props.onRemoveTag(tag);
    };

    this.submitForm = (direct) => ev => {
      ev.preventDefault();      
      if(direct == 'previous'){
        if (this.state.stage == 1){
          this.setState({stage : 1})
        }
        else
          this.setState({stage : this.state.stage - 1});
      }
      else {
        if(this.state.stage == 1) {
          if (this.props.title === '' || this.props.eventDate === '') {
            alert('You should fill the forms.')
            return true;
          }
        }
        if(this.state.stage == 2) {
          if (this.props.tickets.length === 0) {
            alert('You should add 1 ticket at least.')
            return true;
          }
        }
        if (this.state.stage == 3) {
          const article = {
            title: this.props.title,
            description: this.props.description,
            eventDate: this.props.eventDate,
            eventTimeFrom: this.props.eventTimeFrom,
            eventTimeTo: this.props.eventTimeTo,
            category: this.props.category,
            tickets : this.props.tickets,
            tagList: this.props.tagList,
            photos: this.props.photos,
            locality : this.props.locality,
            province : this.props.province,
            country : this.props.country,
            address : this.props.address,
            latitude : this.props.latitude,
            longitude : this.props.longitude
          };
          if (this.props.tickets.length === 0) {
            alert('You should add 1 ticket at least.')
          }
          else {
            const slug = { slug: this.props.articleSlug };
            const promise = this.props.articleSlug ?
              agent.Articles.update(Object.assign(article, slug)) :
              agent.Articles.create(article);

            this.props.onSubmit(promise);
            this.setState({save : true});
          }
          // this.setState({ stage : 3})
        }
        else
          this.setState({stage : this.state.stage + 1});
      }
    };

    this.deletePhoto = (photo) => {
      var photos = this.props.photos;
      photos = photos.filter(function(ele){
         return ele != photo;
      })      
      this.props.onUpdateField('photos', photos)
    }

    this.handleSelectedFileCompany = ev => {
      const fd = new FormData();
      const _self = this;
      let file = ev[0];
      if (ev.target) {
        file = ev.target.files[0];
      }
      fd.append('fname', 'comment');
      fd.append('data', file);      
      agent.Articles.uploadPhoto(fd).then(res => {
        let photos = _self.props.photos || [];
        photos.push(res.data.photo);
        _self.props.onUpdateField('photos', photos);
        _self.setState({ pending: true })
      });
    }

    this.addMoreTicket = () => {
      var ticket = {
        name : '',
        price : 0,
        quantity : 0,
        isFree : false
      }
      var tickets = this.props.tickets;
      tickets.push(ticket);
      this.props.onUpdateField('tickets', tickets);
      this.setState({ tk : true});
    }

    this.removeTicket = (idx) => {
      var tickets = this.props.tickets.filter(function(ticket, index){         
        return idx !== index;
      });
      this.props.onUpdateField('tickets', tickets);
      this.setState({ tk : true});
    }

    this.updateTickets = (idx, key, value) => {
      var tickets = this.props.tickets.map( (ticket,index) => {
        if (idx == index){
          ticket[key] = value;
        }
        return ticket;
      });      
      this.props.onUpdateField('tickets', tickets);
      this.setState({ tk : true});
    }

    this.onClickDelete = (slug) => {
      this.props.onClickDelete(agent.Articles.del(slug));
    }

    this.parseLocation = (s) => {
      var locality = '';
      var province = '';
      var country = '';
      if (s != undefined ){
        for(var i=0;i<s.gmaps.address_components.length;i++){
          var address = s.gmaps.address_components[i];
          switch (address.types[0]) {
            case 'locality':
              locality = address.long_name;
              break;
            case 'administrative_area_level_1':
              province = address.long_name;
              break;
            case 'country':
              country = address.long_name;
              break;
          }
        }
        this.props.onUpdateField('locality', locality)
        this.props.onUpdateField('province', province)
        this.props.onUpdateField('country', country)
      }
    }

    this.parseAddress = (s) => {      
      if (s != undefined ){
        this.props.onUpdateField('latitude', (s ? s.location.lat : null))
        this.props.onUpdateField('longitude', (s ? s.location.lng : null))
        this.props.onUpdateField('address', (s ? s.description : null))        
      }
    }

  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.slug !== nextProps.match.params.slug) {
      if (nextProps.match.params.slug) {
        this.props.onLoad(agent.Articles.get(nextProps.match.params.slug));
      }
    }
  }

  componentWillMount() {
    if (this.props.match.params.slug) {
      return this.props.onLoad(agent.Articles.get(this.props.match.params.slug));
    }
    this.props.onLoad(null);
    $("html, body").animate({ scrollTop: 0 }, 0);
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {

    const photos = this.props.photos && this.props.photos.map((photo) => {
      return {
        original: photo,
        thumbnail: photo,
      }
    });


    var cLocation = (this.props.locality || '') + ', ' + (this.props.country || '') ;
    if (cLocation === ', ')
      cLocation = '';


    if (!this.props.editorPageLoaded)
      return null;

    return (
      <div className="company-editor-page">
        <div className="c__h__header">
          <i className="fa fa-chevron-left page__back" aria-hidden="true"
            onClick={ () => this.props.history.push('/settings/home')}>
          </i>
          <div>
            {
              this.props.articleSlug && (
                <React.Fragment>
                  <Link to={`/event/${this.props.articleSlug}`} className="btn btn-black" >
                    <i className="fa fa-eye" aria-hidden="true"></i>
                    View
                  </Link>
                  <button className="btn btn-danger" onClick={ () => this.setState({ delete : true}) } >
                    <i className="fa fa-minus-circle" aria-hidden="true"></i>
                    Delete
                  </button>
                </React.Fragment>
              )
            }
            {/*<button className="btn btn-black" onClick={ () => { 
                  this.props.history.push('/event')
                  this.setState({ stage : 1})
                }}>
                <i className="fa fa-plus-circle" aria-hidden="true"></i>
                New event
              </button>*/}
          </div>
        </div>
        <div className="c__h__content container page">            
            <ListErrors errors={this.props.errors}></ListErrors>
            { this.state.stage == 1 && (
                <div className="row event_stage">
                  <div className="col-md-7 col-xs-12">
                    <div className="form-group e__s__item">
                      {/*<i className="fa fa-user-o" aria-hidden="true"></i>*/}
                      <label for="title">Name of the Event *</label>
                      <input
                        id="title"
                        className="form-control"
                        type="text"
                        placeholder="Event name"
                        value={this.props.title}
                        onChange={this.changeTitle} 
                        required />
                    </div>

                    <div className="form-group e__s__item">
                      <label for="title">Description</label>
                      <textarea
                        className="form-control"
                        rows="8"
                        placeholder="Description"
                        value={this.props.description}
                        onChange={this.changeDescription} >
                      </textarea>
                    </div>

                    <div className="form-group e__s__item">
                      <label for="title">City and Country</label>
                      <Geosuggest
                        placeholder="Location"
                        inputClassName="form-control"
                        initialValue={ cLocation }
                        skipSuggest={(s) => s.types.indexOf('locality') < 0 || s.types.indexOf('political') < 0}
                        onSuggestSelect={s => this.parseLocation(s)}
                      />
                    </div>
                    <div className="form-group e__s__item">
                      <label for="title">Full Address</label>
                      <Geosuggest
                        placeholder="Address"
                        inputClassName="form-control"
                        initialValue={this.props.address}
                        onChange={ (s) => this.props.onUpdateField('address', s) }
                        onSuggestSelect={s => this.parseAddress(s)}
                      />
                    </div>

                    <div className="form-group e__s__item">  
                      <label for="title">Date of the Event *</label>
                      <input
                        className="form-control"
                        type="date"
                        placeholder="Event hours"
                        value={this.props.eventDate}
                        onChange={ this.changeEventDate }
                        required
                      />
                    </div>

                    <div className="form-group e__s__item">
                      <label for="title">Time Range</label>
                      <div className="event__time">
                        <span>From</span>
                        <input
                          className="form-control time-picker"
                          type="time"
                          placeholder=""
                          value={this.props.eventTimeFrom}
                          onChange={ this.changeEventTimeFrom }
                          required
                        />
                      </div>
                      <div className="event__time">
                        <span>To</span>
                        <input
                          className="form-control time-picker"
                          type="time"
                          placeholder=""
                          value={this.props.eventTimeTo}
                          onChange={ this.changeEventTimeTo }
                          required
                        />
                      </div>
                    </div>

                  </div>
                  <div className="col-md-4 col-xs-12">
                    <div className="form-group e__s__item">
                      <label for="title">Photos</label>
                    </div>
                    <div className="form-group e__s__item">  
                      <div className="company-photo-group row">
                        {this.props.photos && this.props.photos.map(photo => (
                          <div className="company-photo col-md-6">
                            <img src={photo} alt="" />
                            <label type="button" className="delete-photo" name="button" 
                              onClick={ () => this.deletePhoto(photo) }>
                            </label>
                          </div>
                        ))}
                        <div className="add-company-photo-wrapper col-md-6">
                          <label htmlFor='add-company-photo' className="add-company-photo">
                            <input type="file" id="add-company-photo" accept="image/*"
                              onChange={ (e) => this.handleSelectedFileCompany(e) } />
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="form-group e__s__item">
                      <label for="title">Category</label>
                      <select className="form-control" onChange={ this.changeCategory }>
                        <option value=""></option>
                        { this.props.categories && this.props.categories.map( category => (
                           <option value={category.name} selected={this.props.category === category.name }>{category.name}</option>
                          ))}
                      </select>
                    </div>
                    <div className="form-group e__s__item">
                      <label for="title">Tags</label>
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Enter tags"
                        value={this.props.tagInput}
                        onChange={this.changeTagInput}
                        onKeyUp={this.watchForEnter} />
                    </div>
                    <div className="form-group e__s__item">
                      <div className="tag-list">
                        {
                          (this.props.tagList || []).map(tag => {
                            return (
                              <span className="tag-default tag-pill tag-outline" key={tag}>
                                <i  className="ion-close-round"
                                    onClick={this.removeTagHandler(tag)}>
                                </i>
                                {tag}
                              </span>
                            );
                          })
                        }
                      </div>
                    </div>

                  </div>
                </div>
              )}
            { this.state.stage == 2 && (
                <div className="ticket_stage">
                  <div className="row t__s__header">
                    <div className="col-md-6 col-xs-12">Ticket list and prices</div>
                    <div className="col-md-1 col-xs-2">Free</div>
                    <div className="col-md-2 col-xs-4">Price</div>
                    <div className="col-md-2 col-xs-4">Quantity</div>
                    <div className="col-md-1 col-xs-2">Action</div>
                  </div>
                  <div className="t__s__content">
                    {
                      this.props.tickets && this.props.tickets.map((ticket, index) => (
                        <div className="row t__s__item" key={`event${index}`}>
                          <div className="col-md-2 col-xs-4"><span>Ticket { index+1 }</span></div>
                          <div className="col-md-4 col-xs-8">
                            <input 
                              type="text" 
                              className="form-control"
                              placeholder="Ticket name"
                              value={ticket.name}
                              onChange={ (ev) => this.updateTickets(index, 'name', ev.target.value) }
                            />
                          </div>
                          <div className="col-md-1 col-xs-2">
                            <input 
                              type="checkbox" 
                              id="free_checkbox" 
                              className="form-control"
                              name="free" 
                              value="free" 
                              onChange={ (ev) => this.updateTickets(index, 'isFree', !ticket.isFree) } 
                              checked={ ticket.isFree }
                            />
                          </div>
                          <div className="col-md-2 col-xs-4">
                            <input
                              className="form-control"
                              type="number"
                              placeholder="Price ($)"
                              value={ ticket.price }
                              min="0" step="1" max="1000"
                              disabled={ticket.isFree}
                              onChange={ (ev) => this.updateTickets(index, 'price', ev.target.value) } />
                          </div>
                          <div className="col-md-2 col-xs-4">
                            <input
                              className="form-control"
                              type="number"
                              placeholder="quantity"
                              value={ticket.quantity}
                              min="0" step="1" max="1000"
                              onChange={ (ev) => this.updateTickets(index, 'quantity', ev.target.value) } />
                          </div>
                          <div className="remove-ctrl col-md-1 col-xs-2">
                            <i 
                              className="fa fa-minus-circle" 
                              aria-hidden="true"
                              onClick={ () => this.removeTicket(index) }
                            ></i>
                          </div>
                        </div>

                      )
                    )}
                    <div className="row t__s__item">
                      <button 
                        type="button"
                        className="btn add-more-ticket"
                        onClick={ () => this.addMoreTicket() }
                      >
                        Add tickets
                      </button>
                    </div>
                  </div>
                </div>
              )}
            { this.state.stage == 3 && (
                <div className="row event_stage">
                  <div className="col-md-7 col-xs-12">
                    <div className="e__s__item e__h">
                      <label>Name of the Event</label>
                      <p>{this.props.title}</p>
                    </div>
                    <div className="e__s__item">
                      <label>Description</label>
                      <p>{this.props.description}</p>
                    </div>
                    <div className="e__s__item">
                      <label>Date of Event</label>
                      <p>{this.props.eventDate}</p>
                    </div>
                    <div className="e__s__item">
                      <label>Time Range</label>
                      <p>From {this.props.eventTimeFrom } To { this.props.eventTimeTo }</p>
                    </div>
                    <div className="e__s__item">
                      <label>Tickets list</label>
                      {
                        this.props.tickets && this.props.tickets.length > 0?
                          <ul>
                            { this.props.tickets.map(ticket => 
                                <li>{ ticket.name } ( { ticket.isFree? 'Free' : '$'+ticket.price } )</li>
                              )
                            }
                          </ul>
                        :
                          <p>no tickets yet</p>
                      }
                    </div>
                  </div>
                  <div className="col-md-4 col-xs-12">
                    <div className="e__s__item">
                      <label>Photos</label>
                    </div>
                    <div className="e__s__item">
                      <ImageGallery 
                        items={photos} 
                        autoPlay={true} 
                        slideInterval={5000}
                        showPlayButton={false}
                        slideDuration={500}
                        showBullets={true}
                        showThumbnails={false}
                        showFullscreenButton={false}
                      />
                    </div>
                    <div className="e__s__item">
                      <label>Category</label>
                      <p> { this.props.category }</p>
                    </div>
                    <div className="e__s__item">
                      <label>Tags</label>
                      <div className="tag-list">
                        {
                          (this.props.tagList || []).map(tag => {
                            return (
                              <span className="tag-default tag-pill tag-outline" key={tag}>
                                {tag}
                              </span>
                            );
                          })
                        }
                      </div>                      
                      </div>
                  </div>
                </div>
              )}
            <div className="stage_btn_wrapper">
              <ul className="stage_markers">
                <li 
                  className={ classNames(this.state.stage >=1 && 'passed') } 
                >
                  <label>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <span>1</span>
                  </label>
                  <p>Step1</p>
                </li>
                <li
                  className={ classNames(this.state.stage >=2  && 'passed') } 
                >
                  <label>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <span>2</span>
                  </label>
                  <p>Step2</p>
                </li>
                <li
                  className={ classNames(this.state.stage >= 3 && 'passed') } 
                > 
                  <label>
                    <i className="fa fa-check" aria-hidden="true"></i>
                    <span>3</span>
                  </label>
                  <p>Step3</p>
                </li>
                {/*<li
                    className={ classNames(this.state.stage > 4 && 'passed') } 
                  >
                    <label>
                      <i className="fa fa-check" aria-hidden="true"></i>
                      <span>4</span>
                    </label>
                    <p>Step4</p>
                  </li>*/}
              </ul>
              <div className="stage_btns">
                <button
                  type="button"
                  className="btn"
                  onClick={this.submitForm('previous') }
                >Previous</button>
                <button 
                  type="button"
                  className={ classNames('btn', this.state.stage == 3 && 'submit_ticket')}                    
                  onClick={this.submitForm('next')}
                >                  
                  { this.state.stage == 3 ? 'Save' : 'Next' }
                </button>
              </div>
            </div>            
        </div>
        <div className={ classNames("w__modal__wrapper", this.state.save && 'opened' )}>
          <div className="w__modal delete__block">
            <div className="w__modal__header">
              <h3>Alert</h3>
              <i className="fa fa-times" aria-hidden="true" onClick = { () => this.setState({ save : false })}></i>
            </div>
            <div className="w__modal__content">
              <p>Event has been { this.props.articleSlug? 'updated' : 'created'} successfully.</p>
            </div>
            <div className="w__modal__footer">
              <button className="btn" onClick={ () => this.setState({ save : false })} >
                Ok
              </button>
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
              <button className="btn btn-sm" onClick={ () => this.setState({ delete : false })} >
                No
              </button>
              <button className="btn btn-danger btn-sm" onClick={ () => this.onClickDelete(this.props.articleSlug) }>
                Yes
              </button>
            </div>
          </div>
        </div>        
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
