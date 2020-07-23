import React from 'react';

import { connect } from 'react-redux';
import Select, { components } from 'react-select';
import Slider from 'react-slick';
import {
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  APPLY_TAG_FILTER
} from '../constants/actionTypes';
import Geosuggest from "react-geosuggest";
import * as moment from 'moment';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Trans } from 'react-i18next';

const Promise = global.Promise;
const google = window.google;

const mapStateToProps = state => ({
  ...state.home,
  articleListLoaded: state.articleList.articleListLoaded,
  appName: state.common.appName,
  token: state.common.token,
  categories: state.common.categories,
  currentUser: state.common.currentUser
});

const mapDispatchToProps = dispatch => ({
  onClickCategory: (tag, pager, payload) =>
    dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
  onLoad: (tab, pager, payload) =>
    dispatch({ type: HOME_PAGE_LOADED, tab, pager, payload }),
  onUnload: () =>
    dispatch({ type: HOME_PAGE_UNLOADED })
});

class Help extends React.Component {

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

    const careerDetails = (id) => {
      this.props.history.push(`/careerDetails/${id}`)
    };

    return (
      <div className="home-page career-container">
        <div className="career-bg">
          <div className="career-div career-center">
            <div className="w3-row">
              <div className="career-font">Search Jobs</div>
            </div>
            <div className="w3-row w3-bar search-align">
              <div className="w3-bar-item">
                <input
                  className="w3-input"
                  type="text"
                  value={this.state.askey}
                  onKeyPress={ev => this.props.advancedSearch(ev, this.state.askey)}
                  placeholder="I'm looking for"
                  required />
              </div>
              <div className="w3-bar-item">
                <select className="country-option">
                  <option selected disabled>Dublin, Ireland</option>
                  <option>Madrid,Spain</option>
                  <option>London, United Kingdom</option>
                  <option>Russia</option>
                  <option>Poland</option>
                  <option>India</option>
                  <option>South Africa</option>
                </select>
              </div>

              <div className="w3-bar-item">
                <img className="search-bg" src={require('../assets/images/search-btnn.png')} alt="" />
              </div>
            </div>
            {/*<div className="add-margin">*/}
            {/*    <div className="search__block text-black">*/}
            {/*        <input*/}
            {/*              className="form-control advanced-search-career"*/}
            {/*              type="text"*/}
            {/*              placeholder="I am looking for"*/}
            {/*              value={this.state.askey}*/}
            {/*              onChange={ (e) => this.setState({ askey : e.target.value }) }*/}
            {/*              onKeyPress={ ev => this.props.advancedSearch(ev, this.state.askey) }*/}
            {/*        />*/}
            {/*        <Geosuggest*/}
            {/*              placeholder="Location"*/}
            {/*              inputClassName="form-control advanced-search-location"*/}
            {/*              skipSuggest={(s) => s.types.indexOf('locality') < 0 || s.types.indexOf('political') < 0}*/}
            {/*              onSuggestSelect={s => this.parseLocation(s)}*/}
            {/*        />*/}

            {/*        <div className="career_search__btn">*/}
            {/*            <i className="fa fa-search" aria-hidden="true"></i>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
          </div>
        </div>

        <div class="mt-5 d-flex flex-column ">
          <div className="center-container-blog d-flex align-items-center justify-content-start">
            <div className="w3-row work-font-bold">
              Category <span className="text-blue">All</span> <span>in</span> <span className="text-blue">Dublin, Ireland</span>
            </div>
          </div>

          <div className="center-container-blog d-flex align-items-start justify-content-start flex-column mb-5">
            <div className="w3-row job-found-txt">
              <span className="text-blue">59</span> Jobs found
                  </div>

            <div onClick={() => careerDetails(1)} className="cursor-pointer"> <div className="fx-1 mt-4 text-bold add-padding">Software Engineer, Python backend</div>
              <div className="fx-2 mb-2">Dublin, Ireland</div>
              <div>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use...</div>
            </div>
            <div onClick={() => careerDetails(2)} className="cursor-pointer"> <div className="fx-1 mt-4 text-bold add-padding">Sales Manager</div>
              <div className="fx-2 mb-2">Dublin, Ireland</div>
              <div>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use...</div>
            </div>
            <div onClick={() => careerDetails(3)} className="cursor-pointer"> <div className="fx-1 mt-4 text-bold add-padding">Graphic Designer, UI UX</div>
              <div className="fx-2 mb-2">Dublin, Ireland</div>
              <div>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use...</div>
            </div>
            <div onClick={() => careerDetails(4)} className="cursor-pointer"> <div className="fx-1 mt-4 text-bold add-padding">Full stack developer Node.JS</div>
              <div className="fx-2 mb-2">Dublin, Ireland</div>
              <div>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use...</div>
            </div>
            <div onClick={() => careerDetails(5)} className="cursor-pointer"> <div className="fx-1 mt-4 text-bold add-padding">Devops, AWS</div>
              <div className="fx-2 mb-2">Dublin, Ireland</div>
              <div>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use...</div>
            </div>
            <div onClick={() => careerDetails(6)} className="cursor-pointer"> <div className="fx-1 mt-4 text-bold add-padding">HR Manager</div>
              <div className="fx-2 mb-2">Dublin, Ireland</div>
              <div>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use...</div>
            </div>
            <div onClick={() => careerDetails(7)} className="cursor-pointer"> <div className="fx-1 mt-4 text-bold add-padding">Business analyst</div>
              <div className="fx-2 mb-2">Dublin, Ireland</div>
              <div>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use...</div>
            </div>

            <div className="w3-bar arrow-align">
              <div className="w3-bar-item w3-center text-box-half">
                <img className="icon-size" src={require('../assets/images/back.png')} alt="" />
              </div>

              <div className="w3-bar-item">
                <a className="blue-font">2</a> ... 9999
                      </div>

              <div className="w3-bar-item w3-center text-box-half">
                <img className="icon-size" src={require('../assets/images/next.png')} alt="" />
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Help);
