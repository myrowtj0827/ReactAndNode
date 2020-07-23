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

const ContactUs = props => {
    return (
        <div className="d-flex pt-5 contact-us-container">
            <div className=" w-60">
                <div className="text-bold my-4 text-center">Contact Us</div>
                <div className="row">
                    <div className="col-md-6 col-sm-12 col-xs-12 pr-5 py-4 pl-0">
                        <input
                            className="form-control custom-input"
                            type="email"
                            placeholder="First Name"
                            required />
                    </div>
                    <div className="col-md-6 col-sm-12 col-xs-12 p-0 py-4">
                        <input
                            className="form-control custom-input"
                            type="email"
                            placeholder="Last Name"
                            required />
                    </div>
                </div>
                <div className="row my-4">
                    <input
                        className="form-control custom-input"
                        type="email"
                        placeholder="Email"
                        required />
                </div>
                <div className="row my-4">
                   <textarea
                       className="form-control form-control-lg custom-message-input "
                       rows="8"
                       placeholder="Message"
                   >
                    </textarea>
                </div>
                <div className="d-flex mb-5">
                    <div className="blue-button-contact">CONTACT US</div>
                </div>
            </div>
        </div>
    );

};
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

        return (
            <div className="home-page blog-container">
                <div className="banner-bg">
                    <div className="">
                        <div className="investor-title">Lorem Ipsum is simply dummy text</div>
                        <div className="investor-description">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout
                        </div>
                    </div>
                </div>

                <div className="d-flex">
                    <div className="center-container-blog p-5">
                        <div className="text-bold fx-1 text-center investors-top">Lorem Ipsum</div>
                        <div className="row">

                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="help-card">
                                    <img className="investor-icon" src={require('../assets/images/inv1.png')} />
                                    <b className="mt-2 lorem-title-color">Lorem Ipsum </b>
                                    <div class="small-text text-center mt-2 small-font-responsive">Lorem Ipsum is simply dummy text</div>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="help-card">
                                    <img className="investor-icon" src={require('../assets/images/inv2.png')} />
                                    <b className="mt-2 lorem-title-color">Lorem Ipsum </b>
                                    <div class="small-text text-center mt-2 small-font-responsive">Lorem Ipsum is simply dummy text</div>
                                </div>
                            </div>

                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="help-card">
                                    <img className="investor-icon" src={require('../assets/images/inv3.png')} />
                                    <b className="mt-2 lorem-title-color">Lorem Ipsum </b>
                                    <div class="small-text text-center mt-2 small-font-responsive">Lorem Ipsum is simply dummy text</div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="help-card">
                                    <img className="investor-icon" src={require('../assets/images/inv4.png')} />
                                    <b className="mt-2 lorem-title-color">Lorem Ipsum </b>
                                    <div class="small-text text-center mt-2 small-font-responsive">Lorem Ipsum is simply dummy text</div>
                                </div>
                            </div>
                        </div>

                        <div className="help-container mb-5 text-center">
                            <div className="mb-2 mt-5 investor-large-font">
                                Lorem Ipsum is simply dummy
                            </div>

                            <div className="question-header mt-4 investor-small-font">
                                What is Lorem Ipsum?
                            </div>
                            <div className="question-body investor-tiny-font">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            </div>

                            <div className="question-header investor-small-font">
                                Why do we use it?
                            </div>
                            <div className="question-body investor-tiny-font">
                                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                            </div>

                            <div className="question-header investor-small-font">
                                Where does it come from?
                            </div>
                            <div className="question-body investor-tiny-font">
                                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC,
                                making it over 2000 years old.
                            </div>

                            <div className="question-header investor-small-font">
                                Where can I get some?
                            </div>
                            <div className="question-body investor-tiny-font">
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
                                by injected humour, or randomised words which don't look even slightly believable.
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lorem-container-img">
                    <div class="p-5 lorem-container d-flex">
                        <div className="w3-row">
                            <div className="w3-col card-width card-margin">
                                <div className="lorem-card">
                                    <div className="investor-small-font">
                                        <b>Lorem Ipsum </b>
                                    </div>

                                    <div className="small-text text-center mt-2 investor-tiny-font">
                                        There are many variations of passages of Lorem Ipsum available, but the
                                        majority have suffered alteration in some form,
                                        by injected humour
                                    </div>
                                </div>
                            </div>

                            <div className="w3-col card-width card-margin">
                                <div className="lorem-card">
                                    <div className="investor-small-font">
                                        <b>Lorem Ipsum </b>
                                    </div>

                                    <div className="small-text text-center mt-2 investor-tiny-font">
                                        There are many variations of passages of Lorem Ipsum available, but the
                                        majority have suffered alteration in some form,
                                        by injected humour
                                    </div>
                                </div>
                            </div>

                            <div className="w3-col card-width card-margin">
                                <div className="lorem-card">
                                    <div className="investor-small-font">
                                        <b>Lorem Ipsum </b>
                                    </div>

                                    <div className="small-text text-center mt-2 investor-tiny-font">
                                        There are many variations of passages of Lorem Ipsum available, but the
                                        majority have suffered alteration in some form,
                                        by injected humour
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex">
                    <div className="center-container-blog p-5 number-top">
                        <div className="text-bold fx-1 text-center investor-large-font">
                            Lorem Ipsum is simply dummy
                        </div>

                        <div className="row">
                            <div className="col-md-3 col-sm-6 col-xs-6">
                                <div className="help-card">
                                    <div className="fx-0 number-font">79</div>
                                    <b className="mt-2 investor-small-font lorem-align">Lorem Ipsum </b>
                                    <div class="small-text text-center mt-2 text-blue">Lorem Ipsum is simply dummy text</div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-6">
                                <div className="help-card">
                                    <div className="fx-0 number-font">119</div>
                                    <b className="mt-2 investor-small-font lorem-align">Lorem Ipsum </b>
                                    <div class="small-text text-center mt-2 text-blue">Lorem Ipsum is simply dummy text</div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-6">
                                <div className="help-card">
                                    <div className="fx-0 number-font">564</div>
                                    <b className="mt-2 investor-small-font lorem-align">Lorem Ipsum </b>
                                    <div class="small-text text-center mt-2 text-blue">Lorem Ipsum is simply dummy text</div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-6">
                                <div className="help-card">
                                    <div className="fx-0 number-font">64</div>
                                    <b className="mt-2 investor-small-font lorem-align">Lorem Ipsum </b>
                                    <div class="small-text text-center mt-2 text-blue">Lorem Ipsum is simply dummy text</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ContactUs/>
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Help);
