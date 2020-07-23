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

class Blog extends React.Component {
    constructor() {
        super();

        this.state = {
            marginClass: '20px'
        }
    }

    componentDidMount() {
        if (this.refs.myImgContainer.clientHeight > 330) {
            this.setState({ marginClass: `${(this.refs.myImgContainer.clientHeight - 330) + 150}px` });
            this.setState({ state: this.state });
        }
    }

    render() {
        const openBlog = () => {
            this.props.history.push('/blogNews')
        };

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
            <div className="home-page blog-container">
                <div className="w3-row blog-banner-bg">
                    <div className="w3-col bg-width">
                        <div className="blog-align ">
                            <div className="">
                                <input className="w3-input" type="text" placeholder="Search on blog"
                                    value={this.state.askey}
                                    onChange={(e) => this.setState({ askey: e.target.value })}
                                    onKeyPress={ev => this.props.advancedSearch(ev, this.state.askey)}
                                    required />
                            </div>

                            <div className="lorem-txt-width">
                                <div className="blog-title">Lorem Ipsum</div>
                                <div className="blog-description">
                                    is simply dummy text of the printing and typesetting industry
                          </div>
                            </div>
                        </div>
                    </div>

                    <div className="w3-col bg-width">
                        <div className="image-padding">
                            <img src={require('../assets/images/event-img3.png')} className="blog-header-img" />
                        </div>
                    </div>
                </div>

                <div className="image-show">
                    <img src={require('../assets/images/event-img3.png')} className="blog-header-img" />
                </div>

                <div class="mt-5 d-flex flex-column align-center mb-5">
                    <div className="center-blog p-5">
                        <div className="show-img">
                            <img src={require('../assets/images/event-img3.png')} className="blog-article-img" />

                            <div className="white-overlay-div cursor-pointer" onClick={openBlog} ref="myImgContainer">
                                <div className="fx-2"><a className="w3-text-gray">by</a> Glosfy, <a className="w3-text-gray">4 days ago</a></div>
                                <div className="fx-0 text-bold">Lorem Ipsum</div>
                                <div className="fx-2 lorem-top">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book
                          </div>

                                <div class="d-flex align-items-end text-blue justify-content-end mt-5">
                                    Read more
                          </div>

                                <div className='control-btns d-flex align-items-end justify-content-end mt-4'>
                                    <img src={require('../assets/images/share.png')} class="mr-3" width="15" />

                                    <div className="fa fa-heart-o text-red"></div>
                                </div>
                            </div>
                        </div>

                        <div className="hidden-img">
                            <img src={require('../assets/images/event-img3.png')} className="blog-article-img" />

                            <div className="card-top">
                                <div className="white-overlay-div cursor-pointer" onClick={openBlog} ref="myImgContainer">
                                    <div className="fx-2"><a className="w3-text-gray">by</a> Glosfy, <a
                                        className="w3-text-gray">4 days ago</a></div>
                                    <div className="fx-0 text-bold">Lorem Ipsum</div>
                                    <div className="fx-2 lorem-top">
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                        when an unknown printer took a galley of type and scrambled it to make a type specimen
                                        book
                              </div>

                                    <div className="d-flex align-items-end text-blue justify-content-end mt-5">
                                        Read more
                              </div>

                                    <div className='control-btns d-flex align-items-end justify-content-end mt-4'>
                                        <img src={require('../assets/images/share.png')} className="mr-3" width="15" />

                                        <div className="fa fa-heart-o text-red"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="modal-top">
                            <div className="row mt-5 p-0 margin-left-img">
                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="help-card d-flex align-items-start p-0 " onClick={openBlog}>
                                        <img src={require('../assets/images/event-img3.png')} className="max-width" />

                                        <div className="fx-2 mt-2 mx-2 img-description">
                                            <a className="grey-txt">by</a> Glosfy<a className="grey-txt">, 4 days ago</a>
                                        </div>

                                        <div class="fx-2 mx-2 text-bold img-description-large">
                                            Lorem Ipsum is simply dummy text
                                  </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="help-card d-flex align-items-start p-0" onClick={openBlog}>
                                        <img src={require('../assets/images/event-img3.png')} className="max-width" />

                                        <div className="fx-2 mt-2 mx-2 img-description">
                                            <a className="grey-txt">by</a> Glosfy<a className="grey-txt">, 4 days ago</a>
                                        </div>

                                        <div className="fx-2 mx-2 text-bold img-description-large">
                                            Lorem Ipsum is simply dummy text
                                  </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="help-card d-flex align-items-start p-0" onClick={openBlog}>
                                        <img src={require('../assets/images/event-img3.png')} className="max-width" />

                                        <div className="fx-2 mt-2 mx-2 img-description">
                                            <a className="grey-txt">by</a> Glosfy<a className="grey-txt">, 4 days ago</a>
                                        </div>

                                        <div className="fx-2 mx-2 text-bold img-description-large">
                                            Lorem Ipsum is simply dummy text
                                  </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="help-card d-flex align-items-start p-0" onClick={openBlog}>
                                        <img src={require('../assets/images/event-img3.png')} className="max-width" />

                                        <div className="fx-2 mt-2 mx-2 img-description">
                                            <a className="grey-txt">by</a> Glosfy<a className="grey-txt">, 4 days ago</a>
                                        </div>

                                        <div className="fx-2 mx-2 text-bold img-description-large">
                                            Lorem Ipsum is simply dummy text
                                  </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="help-card d-flex align-items-start p-0 onClick={openBlog}">
                                        <img src={require('../assets/images/event-img3.png')} className="max-width" />

                                        <div className="fx-2 mt-2 mx-2 img-description">
                                            <a className="grey-txt">by</a> Glosfy<a className="grey-txt">, 4 days ago</a>
                                        </div>

                                        <div className="fx-2 mx-2 text-bold img-description-large">
                                            Lorem Ipsum is simply dummy text
                                  </div>
                                    </div>
                                </div>

                                <div className="col-lg-4 col-md-6 col-sm-6">
                                    <div className="help-card d-flex align-items-start p-0 onClick={openBlog}">
                                        <img src={require('../assets/images/event-img3.png')} className="max-width" />

                                        <div className="fx-2 mt-2 mx-2 img-description">
                                            <a className="grey-txt">by</a> Glosfy<a className="grey-txt">, 4 days ago</a>
                                        </div>

                                        <div className="fx-2 mx-2 text-bold img-description-large">
                                            Lorem Ipsum is simply dummy text
                                  </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="blue-div d-flex">
                        <div className="txt-large-bole">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                  </div>
                    </div>

                    <div className="center-blog p-5 margin-left-img">
                        <div className="row mt-5 p-0">
                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="help-card d-flex align-items-start p-0" onClick={openBlog}>
                                    <img src={require('../assets/images/event-img3.png')} className="max-width" />

                                    <div className="fx-2 mt-2 mx-2 img-description">
                                        <a className="grey-txt">by</a> Glosfy<a className="grey-txt">, 4 days ago</a>
                                    </div>

                                    <div className="fx-2 mx-2 text-bold img-description-large">
                                        Lorem Ipsum is simply dummy text
                              </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="help-card d-flex align-items-start p-0" onClick={openBlog}>
                                    <img src={require('../assets/images/event-img3.png')} className="max-width" />

                                    <div className="fx-2 mt-2 mx-2 img-description">
                                        <a className="grey-txt">by</a> Glosfy<a className="grey-txt">, 4 days ago</a>
                                    </div>

                                    <div className="fx-2 mx-2 text-bold img-description-large">
                                        Lorem Ipsum is simply dummy text
                              </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-6">
                                <div className="help-card d-flex align-items-start p-0" onClick={openBlog}>
                                    <img src={require('../assets/images/event-img3.png')} className="max-width" />

                                    <div className="fx-2 mt-2 mx-2 img-description">
                                        <a className="grey-txt">by</a> Glosfy<a className="grey-txt">, 4 days ago</a>
                                    </div>

                                    <div className="fx-2 mx-2 text-bold img-description-large">
                                        Lorem Ipsum is simply dummy text
                              </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Blog);
