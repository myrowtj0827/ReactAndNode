import ListErrors from './ListErrors';
import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';
import {
  ADD_TAG,
  EDITOR_PAGE_LOADED,
  REMOVE_TAG,
  ARTICLE_SUBMITTED,
  EDITOR_PAGE_UNLOADED,
  UPDATE_FIELD_EDITOR
} from '../constants/actionTypes';
import Geosuggest from "react-geosuggest";
import $ from 'jquery';
import DatePicker from "react-datepicker";


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
  onUnload: payload =>
    dispatch({ type: EDITOR_PAGE_UNLOADED }),
  onUpdateField: (key, value) =>
    dispatch({ type: UPDATE_FIELD_EDITOR, key, value })
});

class Editor extends React.Component {
  constructor() {
    super();

    const updateFieldEvent =
      key => ev => this.props.onUpdateField(key, ev.target.value);
    this.changeTitle = updateFieldEvent('title');
    this.changeDescription = updateFieldEvent('description');
    this.changeTagInput = updateFieldEvent('tagInput');
    this.changePrice = updateFieldEvent('price');
    this.changeVolumn = updateFieldEvent('volumn');
    this.changeEventHours = updateFieldEvent('eventHours');
    this.changeIsFree = updateFieldEvent('isFree');

    this.watchForEnter = ev => {
      if (ev.keyCode === 13) {
        ev.preventDefault();
        this.props.onAddTag();
      }
    };

    this.removeTagHandler = tag => () => {
      this.props.onRemoveTag(tag);
    };

    this.submitForm = ev => {
      ev.preventDefault();
      const article = {
        title: this.props.title,
        description: this.props.description,
        price: this.props.price,
        volumn: this.props.volumn,
        eventHours: this.props.eventHours,
        tagList: this.props.tagList,
        isFree : this.props.isFree,
        photos: this.props.photos
      };

      const slug = { slug: this.props.articleSlug };
      const promise = this.props.articleSlug ?
        agent.Articles.update(Object.assign(article, slug)) :
        agent.Articles.create(article);

      this.props.onSubmit(promise);
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

  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.slug !== nextProps.match.params.slug) {
      if (nextProps.match.params.slug) {
        this.props.onUnload();
        return this.props.onLoad(agent.Articles.get(this.props.match.params.slug));
      }
      this.props.onLoad(null);
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

    var cLocation = (this.props.locality || '') + ', ' + (this.props.country || '') ;
    if (cLocation === ', ')
      cLocation = '';

    return (
      <div className="editor-page">
        <div className="container page">
          <div className="row">
            <div className="col-md-8 offset-md-2 col-xs-12">

              <ListErrors errors={this.props.errors}></ListErrors>

              <form>
                <fieldset>

                  <fieldset className="form-group">
                    {/*<i className="fa fa-user-o" aria-hidden="true"></i>*/}
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Event summary"
                      value={this.props.title}
                      onChange={this.changeTitle} 
                      required />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      placeholder="Enter tags"
                      value={this.props.tagInput}
                      onChange={this.changeTagInput}
                      onKeyUp={this.watchForEnter} />

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
                  </fieldset>

                  <fieldset className="form-group">
                    <textarea
                      className="form-control"
                      rows="8"
                      placeholder="Description"
                      value={this.props.description}
                      onChange={this.changeDescription} >
                    </textarea>
                  </fieldset>

                  <fieldset className="form-group">
                    <span className="form-control-lg" id="free_checkbox">
                      <input type="checkbox" name="free" value="free" onChange={ () => this.props.onUpdateField('isFree', !this.props.isFree) } checked={ this.props.isFree }/> <span>Free</span>
                    </span>
                  </fieldset>

                  { !this.props.isFree && (
                      <fieldset className="form-group">                    
                        <input
                          className="form-control form-control-lg"
                          type="number"
                          placeholder="Price ($)"
                          value={this.props.price}
                          min="0" step="1" max="1000"
                          onChange={this.changePrice} />
                      </fieldset>
                  )}

                  <fieldset className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="number"
                      placeholder="Volumn"
                      value={this.props.volumn}
                      onChange={this.changeVolumn} />
                  </fieldset>

                  <fieldset className="form-group">                    
                    <input
                      className="form-control form-control-lg"
                      type="datetime-local"
                      placeholder="Event hours"
                      value={this.props.eventHours}
                      onChange={ this.changeEventHours }
                    />
                  </fieldset>

                  <fieldset>
                    <div className="company-photo-group row">
                      {this.props.photos && this.props.photos.map(photo => (
                        <div className="company-photo col-md-3">
                          <img src={photo} alt="" />
                          <label type="button" className="delete-photo" name="button" 
                            onClick={ () => this.deletePhoto(photo) }>
                          </label>
                        </div>
                      ))}
                      <div className="add-company-photo-wrapper col-md-3">
                        <label htmlFor='add-company-photo' className="add-company-photo">
                          <input type="file" id="add-company-photo" accept="image/*"
                            onChange={ (e) => this.handleSelectedFileCompany(e) } />
                        </label>
                      </div>
                    </div>
                  </fieldset>

                  <button
                    className="btn btn-lg btn-primary"
                    type="button"
                    disabled={this.props.inProgress}
                    onClick={this.submitForm}
                    style={{ margin : "auto 20px auto auto"}}>
                    Save
                  </button>

                </fieldset>
              </form>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Editor);
