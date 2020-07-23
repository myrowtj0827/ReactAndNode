import React from 'react';

import { connect } from 'react-redux';
import Select, { components } from 'react-select';
import Slider from 'react-slick';
import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  APPLY_TAG_FILTER
} from '../../constants/actionTypes';
import Geosuggest from "react-geosuggest";
// import DatePicker from "react-datepicker";
// import DateRangePicker from '@wojtekmaj/react-daterange-picker';
import * as moment from 'moment';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Trans } from 'react-i18next';

const Promise = global.Promise;

const google = window.google;

const mapStateToProps = state => ({
  ...state.home,
  articleListLoaded : state.articleList.articleListLoaded,
  appName: state.common.appName,
  token: state.common.token,
  categories : state.common.categories,
  currentUser : state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onClickCategory: (tag, pager, payload) =>
    dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
  onLoad: (tab, pager, payload) =>
    dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),
  onUnload: () =>
    dispatch({  type: HOME_PAGE_UNLOADED })
});

class Event extends React.Component {

  constructor() {
    super();

    this.state = {

    }


  

   
 


  }


  render() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    

    return (
      <div className="home-page">
        <img className="banner-img" src={require('../../assets/images/help-bck.png')} alt='banner' />
       <div className="overlay-div"> <h2 className="mb-4">How can we help you ?</h2>
        <div className="search__block">
          <input
            className="form-control advanced-search"
            type="text"
            placeholder="Enter your question"
            value={this.state.askey}
            onChange={ (e) => this.setState({ askey : e.target.value }) }
            onKeyPress={ ev => this.props.advancedSearch(ev, this.state.askey) }
          />
          <div className="search__btn">
            <i className="fa fa-search" aria-hidden="true"></i>
          </div>
        </div></div>
        
        <div className="help-container">
            <h4 className="mb-2 mt-5">Choose a category</h4>
            <div className="row">
                <div className="col-md-3 col-sm-4 col-xs-6 "><div className="help-card">
                <b>Lorem Ipsum </b>
                <div class="small-text text-center mt-2">Lorem Ipsum is simply dummy text</div>
                    </div></div>
                <div className="col-md-3 col-sm-4 col-xs-6 "><div className="help-card">
                <b>Lorem Ipsum </b>
                <div class="small-text text-center mt-2">Lorem Ipsum is simply dummy text</div>
                    </div></div>
                <div className="col-md-3 col-sm-4 col-xs-6 "><div className="help-card">
                <b>Lorem Ipsum </b>
                <div class="small-text text-center mt-2">Lorem Ipsum is simply dummy text</div>
                    </div></div>
                <div className="col-md-3 col-sm-4 col-xs-6 "><div className="help-card">
                <b>Lorem Ipsum </b>
                <div class="small-text text-center mt-2">Lorem Ipsum is simply dummy text</div>
                    </div></div>
            </div>
            <div className="row">
                <div className="col-md-3 col-sm-4 col-xs-6 "><div className="help-card">
                <b>Lorem Ipsum </b>
                <div class="small-text text-center mt-2">Lorem Ipsum is simply dummy text</div>
                    </div></div>
                <div className="col-md-3 col-sm-4 col-xs-6 "><div className="help-card">
                <b>Lorem Ipsum </b>
                <div class="small-text text-center mt-2">Lorem Ipsum is simply dummy text</div>
                    </div></div>
                <div className="col-md-3 col-sm-4 col-xs-6 "><div className="help-card">
                <b>Lorem Ipsum </b>
                <div class="small-text text-center mt-2">Lorem Ipsum is simply dummy text</div>
                    </div></div>
                <div className="col-md-3 col-sm-4 col-xs-6 "><div className="help-card">
                <b>Lorem Ipsum </b>
                <div class="small-text text-center mt-2">Lorem Ipsum is simply dummy text</div>
                    </div></div>
            </div>
            <h4 className="mb-2 mt-5">Recommended Topics</h4>
            
        </div>
       <div class="pb-4 slick-container"> <Slider {...settings} className="">
           
          <div class="mx-2">  <div className="slick-card">
          <b>Lorem Ipsum </b>
                <div class="small-text text-center mt-2">Lorem Ipsum is simply dummy text</div>
              </div></div>
          
         
          <div class="mx-2">  <div className="slick-card">
          <b>Lorem Ipsum </b>
                <div class="small-text text-center mt-2">Lorem Ipsum is simply dummy text</div>
              </div></div>
          
          
          <div class="mx-2">  <div className="slick-card">
          <b>Lorem Ipsum </b>
                <div class="small-text text-center mt-2">Lorem Ipsum is simply dummy text</div>
              </div></div>
         
          <div class="mx-2">  <div className="slick-card">
          <b>Lorem Ipsum </b>
                <div class="small-text text-center mt-2">Lorem Ipsum is simply dummy text</div>
              </div></div>
         
           </Slider></div>
           <div className="help-container mb-5"> <h4 className="mb-2 mt-5">Popular Questions</h4>
           <div className="question-header mt-4">  What is Lorem Ipsum? </div>
           <div className="question-body">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </div>

           <div className="question-header">Why do we use it?</div>
           <div className="question-body">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </div>

           <div className="question-header">Where does it come from?</div>
           <div className="question-body">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. </div>

           <div className="question-header">Where can I get some?</div>
           <div className="question-body">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </div>
           </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Event);
