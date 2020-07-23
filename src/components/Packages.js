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

class Package extends React.Component {

  constructor() {
    super();

    this.state = {

    }
  }

  onClickByEssentials = (e) => {

  };

  onClickByPremium = (e) => {

  };

  onClickByProfessional = (e) => {

  };

  render() {
    let settings = {
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
        <div className="w3-row bg-width">
          <div className="w3-col bg-padding-packages">
            <div className="discover-bg">
              <div className="white-txt">
                Discover new ways to make easier your business
              </div>
            </div>
          </div>
          <div className="w3-col bg-padding-packages">
            <div className="enjoy-bg">
              <div className="white-txt">
                Enjoy the features of the new management tool and dashboard
              </div>
            </div>
          </div>
          <div className="w3-col bg-padding-packages">
            <div className="control-bg">
              <div className="white-txt">
                Control your earnings and spends
              </div>
            </div>
          </div>
          <div className="w3-col bg-padding-packages">
            <div className="money-bg">
              <div className="white-txt">
                Money directly going to your back 24-48H max
              </div>
            </div>
          </div>
        </div>

        <div className="blue-div-pricing">
          <div className="find-description">
            <div className="w3-row txt-white-bold">
              Find the solution that's right for you
            </div>

            <div className="txt-white-small">
              Avoid ticketing fes by passing them to attendees
            </div>

            <div className="flex-card">
              <div className="w3-card card-bg-padding">
                <div className="black-txt">Essentials</div>
                <div className="blue-txt">The essentials you need to start selling in minutes.</div>
                </div>
              <div className="blue-button1-get">Get Started</div>

              <div className="w3-card card-bg-padding">
                <div className="black-txt">Professional</div>
                <div className="blue-txt">A powerful solution to boost sales and grow your business.</div>
              </div>
              <div className="red-button-get">Get Started</div>

              <div className="w3-card card-bg-padding">
                <div className="black-txt">Premium</div>
                <div className="blue-txt">Tailored partnership for organisers with large and complex events.</div>
              </div>
              <div className="blue-button2-get">Get Started</div>
            </div>
          </div>
        </div>

        <div className="table-align">
          <div className="w3-container">

            <div className="justify-table-item">
              <span className="w3-left txt-hover" onClick={this.onClickByEssentials}>Essentials</span>
              <span className="w3-center txt-hover" onClick={this.onClickByPremium}>Premium</span>
              <span className="w3-right txt-hover" onClick={this.onClickByProfessional}>Professional</span>
            </div>

            <table className="w3-table w3-bordered">
              <tr>
                <td>Fee per free ticket</td>
                <td className="w3-center item1_show_hide" style={this.state.place_holder}>€0.49 + 4%</td>
                <td className="w3-center item2_show_hide">€0.69 + 5.5%</td>
                <td className="w3-center item3_show_hide">Custom</td>
              </tr>

              <tr>
                <td>Fee per free ticket</td>
                <td className="w3-center item1_show_hide">Free</td>
                <td className="w3-center item2_show_hide">Free</td>
                <td className="w3-center item3_show_hide">Free</td>
              </tr>

              <tr>
                <td>Customer Support</td>
                <td className="w3-center item1_show_hide">Online help centre</td>
                <td className="w3-center item2_show_hide phone-width">Phone, chat and email support for paid events</td>
                <td className="w3-center item3_show_hide">24/7 phone support</td>
              </tr>

              <tr>
                <td>Ticket types (e.g. "General Admission")</td>
                <td className="w3-center item1_show_hide">1</td>
                <td className="w3-center item2_show_hide">Unlimited</td>
                <td className="w3-center item3_show_hide">Unlimited</td>
              </tr>

              <tr>
                <td>Ticketing & registration essentials</td>
                <td className="w3-center item1_show_hide"><i className="fa fa-check text-blue" aria-hidden="true"></i></td>
                <td className="w3-center item2_show_hide"><i className="fa fa-check text-blue" aria-hidden="true"></i></td>
                <td className="w3-center item3_show_hide"><i className="fa fa-check text-blue" aria-hidden="true"></i></td>
              </tr>

              <tr>
                <td>Listing on Glosfy and partner sites</td>
                <td className="w3-center item1_show_hide"><i className="fa fa-check text-blue" aria-hidden="true"></i></td>
                <td className="w3-center item2_show_hide"><i className="fa fa-check text-blue" aria-hidden="true"></i></td>
                <td className="w3-center item3_show_hide"><i className="fa fa-check text-blue" aria-hidden="true"></i></td>
              </tr>

              <tr>
                <td>Ticket sales on your own site</td>
                <td className="w3-center item1_show_hide"><i className="fa fa-check text-blue" aria-hidden="true"></i></td>
                <td className="w3-center item2_show_hide"><i className="fa fa-check text-blue" aria-hidden="true"></i></td>
                <td className="w3-center item3_show_hide"><i className="fa fa-check text-blue" aria-hidden="true"></i></td>
              </tr>

              <tr>
                <td>Customisable checkout forms</td>
                <td className="w3-center item1_show_hide"><i className="fa fa-check text-blue" aria-hidden="true"></i></td>
                <td className="w3-center item2_show_hide"><i className="fa fa-check text-blue" aria-hidden="true"></i></td>
                <td className="w3-center item3_show_hide"><i className="fa fa-check text-blue" aria-hidden="true"></i></td>
              </tr>

              <tr>
                <td>Detailed sales analytics</td>
                <td className="w3-center item1_show_hide"><i className="fa fa-check text-blue" aria-hidden="true"></i></td>
                <td className="w3-center item2_show_hide"><i className="fa fa-check text-blue" aria-hidden="true"></i></td>
                <td className="w3-center item3_show_hide"><i className="fa fa-check text-blue" aria-hidden="true"></i></td>
              </tr>

              <tr>
                <td>On-site staffing support & rental equipment</td>
                <td className="w3-center item1_show_hide"><i className="fa fa-check text-blue" aria-hidden="true"></i></td>
                <td className="w3-center item2_show_hide"><i className="fa fa-check text-blue" aria-hidden="true"></i></td>
                <td className="w3-center item3_show_hide"><i className="fa fa-check text-blue" aria-hidden="true"></i></td>
              </tr>

              <tr>
                <td>Branded community pages</td>
                <td className="w3-center item1_show_hide">-</td>
                <td className="w3-center item2_show_hide">-</td>
                <td className="w3-center item3_show_hide">-</td>
              </tr>

              <tr>
                <td>Product training</td>
                <td className="w3-center item1_show_hide">-</td>
                <td className="w3-center item2_show_hide">-</td>
                <td className="w3-center item3_show_hide-hide">-</td>
              </tr>

              <tr>
                <td>Customer Success Manager</td>
                <td className="w3-center item1_show_hide">-</td>
                <td className="w3-center item2_show_hide">-</td>
                <td className="w3-center item3_show_hide">-</td>
              </tr>
            </table>
          </div>

          <div className="frequently-bold-txt">
            Frequently asked questions
          </div>

          <div className="text-left-padding">
            <div className="small-txt-bold">What are my payment processing options?</div>
            <div className="small-txt-normal">
              The vast majority of Glosfy organisers use Glosfy Payment Processing, our native payment processor that
              enables full access to all features in your selected package and has historically increased sales conversion by up to 20%.
              If you already have a PayPal or Auth.net payment processing account, you're welcome to use either of those providers as well.
            </div>

            <div className="small-txt-bold">What are my payment processing options?</div>
            <div className="small-txt-normal">
              The vast majority of Glosfy organisers use Glosfy Payment Processing, our native payment processor that
              enables full access to all features in your selected package and has historically increased sales conversion by up to 20%.
              If you already have a PayPal or Auth.net payment processing account, you're welcome to use either of those providers as well.
            </div>

            <div className="small-txt-bold">What are my payment processing options?</div>
            <div className="small-txt-normal">
              The vast majority of Glosfy organisers use Glosfy Payment Processing, our native payment processor that
              enables full access to all features in your selected package and has historically increased sales conversion by up to 20%.
              If you already have a PayPal or Auth.net payment processing account, you're welcome to use either of those providers as well.
            </div>

            <div className="small-txt-bold">What are my payment processing options?</div>
            <div className="small-txt-normal">
              The vast majority of Glosfy organisers use Glosfy Payment Processing, our native payment processor that
              enables full access to all features in your selected package and has historically increased sales conversion by up to 20%.
              If you already have a PayPal or Auth.net payment processing account, you're welcome to use either of those providers as well.
            </div>

            <div className="small-txt-bold">What are my payment processing options?</div>
            <div className="small-txt-normal">
              The vast majority of Glosfy organisers use Glosfy Payment Processing, our native payment processor that
              enables full access to all features in your selected package and has historically increased sales conversion by up to 20%.
              If you already have a PayPal or Auth.net payment processing account, you're welcome to use either of those providers as well.
            </div>

            <div className="small-txt-bold">What are my payment processing options?</div>
            <div className="small-txt-normal">
              The vast majority of Glosfy organisers use Glosfy Payment Processing, our native payment processor that
              enables full access to all features in your selected package and has historically increased sales conversion by up to 20%.
              If you already have a PayPal or Auth.net payment processing account, you're welcome to use either of those providers as well.
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Package);
