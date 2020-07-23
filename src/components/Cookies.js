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


    return (
      <div className="home-page">
        <div className="security-image-bg">
          <div className="security-div overlay-center">
            <div className="security-font">Cookies</div>
          </div>
        </div>

        <div className="d-flex">
          <div className="w3-row center-container-security pt-4">
            <div className="w3-col l3 m4 s12">
              <div className="mr-4 contact-us-container p-4">
                <div className="table-title-bold my-4">
                  Cookies guidance
                              </div>
                <div className="my-4 tiny-font-gray">What are cookies?</div>
                <div className="my-4 tiny-font-gray">What cookies will be used on the platform?</div>
                <div className="my-4 tiny-font-gray">Strictly Necessary Cookies</div>
                <div className="my-4 tiny-font-gray">Performance Cookies</div>
                <div className="my-4 tiny-font-gray">Targeting Cookies</div>
                <div className="my-4 tiny-font-gray">Social Media Cookies</div>
                <div className="my-4 tiny-font-gray">Google Analytics</div>
                <div className="my-4 tiny-font-gray">Facebook Ads</div>
              </div>
            </div>
            <div className="w3-col l9 m8 s12 phone-top">
              <div className="table-title-bold">What are cookies?</div>
              <div className="mb-5 small-font-gray">
                Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners in order to make their websites work, or to work more efficiently, as well as to provide reporting information. Cookies set by the website owner(in this case, Glosfy) are called"first party cookies". Cookies set by parties other than the website owner are called"third party cookies". Third party cookies enable third party features or functionality to be provided on or through the website(e.g. advertising, interactive content and analytics). The parties that set these third party cookies can recognize your computer both when it visits the website in question and also when it visits certain other websites.                  </div>

              <div className="table-title-bold">What cookies will be used on the platform?</div>
              <div className="mb-5 small-font-gray">
                The platform uses (first party and third party) cookies (small files placed on platform users’ hard drive) to distinguish you from other users of the platform. This helps us to provide you with a high quality experience when you browse the platform and also allows us to improve the platform. We use cookies to analyse the flow of information; customize the services, content and advertising; measure promotional effectiveness; and promote trust and safety.

                We don't have access to the cookies which third parties place on the platform; other than allowing them to be served. Such companies have their own privacy policies which we encourage you to review.

More detail on how businesses use cookies is available  <a class="text-danger font-weight-bold" href="https://www.learn-about-cookies.com/">here</a>. We offer certain services that are available only through the use of cookies. Generally, there are the following categories of cookies:           </div>

              <div className="table-title-bold">Strictly Necessary Cookies
</div>
              <div className="mb-5 small-font-gray">
                Some cookies are essential for the operation of the platform. For example, some cookies allow us to identify registered users and ensure they can access the platform. If a registered user opts to disable these cookies, the user may not be able to access all of the content of the platform.
                          </div>

              <div className="table-title-bold">Performance Cookies
</div>
              <div className="mb-5 small-font-gray">
                Other cookies may be used to analyse how users use the site and to monitor site performance. This allows us to provide a high quality experience by customising the offering and quickly identifying and fixing any issues that arise. For example, performance cookies may be used to keep track of which pages are most popular and to determine why some pages are receiving error messages.
               <br></br> <strong>Functionality Cookies:</strong> Functionality cookies are used to allow us to remember users’ preferences and tailor the platform to provide enhanced features.


              </div>

              <div className="table-title-bold">Targeting Cookies

</div>
              <div className="mb-5 small-font-gray">
                Targeting cookies are used to serve users with adverts, and to collect information about users' browsing habits and usage of the platform in order to make adverts more relevant to users and their interests. We may use remarketing technologies to enable third parties to display relevant and personalised ads to users through their networks. They are also used to limit the number of times users see an advert as well as help measure the effectiveness of an advertising campaign.
                          </div>

              <div className="table-title-bold">Social Media Cookies
</div>
              <div className="mb-5 small-font-gray">
                These cookies allow users to share what they've been doing on the platform on social media such as Facebook and Instagram. These cookies are not within our control. Please refer to the respective privacy policies for how their cookies work.
                          </div>

              <div className="table-title-bold">Google Analytics
</div>
              <div className="mb-5 small-font-gray">
                Google Analytics is a web analysis service provided by Google, Inc. We use Google Analytics to monitor how visitors use our platform, to compile reports and to help us improve the platform. Please see Google’s privacy policy <a class="text-danger font-weight-bold" href="https://policies.google.com/privacy">here</a> for further information on the data Google collects and how it is processed. If you prefer to not have data reported by Google Analytics, you can install the Google Analytics Opt-Out Browser Add-On by following the instructions <a class="text-danger font-weight-bold" href="https://tools.google.com/dlpage/gaoptout">here</a>. You may opt out of Google's use of tracking technologies by visiting the Google advertising opt-out page <a class="text-danger font-weight-bold" href="https://policies.google.com/technologies/ads">here</a>. For more information on opting out of third party vendors' use of cookies please visit Glosfy Api <a class="text-danger font-weight-bold" href="https://www.glosfy.com/cookies">here</a>.                          </div>

              <div className="table-title-bold">Facebook Ads
</div>
              <div className="mb-5 small-font-gray">
                We use Facebook services to deliver our ads to you during your browsing experience whilst you are online. You can control how Facebook uses data to show you ads by turning off ads which may be based on interests and / or your relationship with specific advertisers, in your ad preference settings. For further information, please visit the various Facebook pages which allow you to learn more about Facebook ads and tracking technologies and to update your settings:
<br></br>
                <a class="text-danger font-weight-bold" href="https://www.facebook.com/policies/cookies">Facebook cookies policies</a>
                <br></br>
                <a class="text-danger font-weight-bold" href="https://www.facebook.com/about/ads">About facebook ads</a>
                <br></br>
                <a class="text-danger font-weight-bold" href="https://www.facebook.com/ads/preferences/edit">Facebook preferences</a>
              </div>

              <div className="table-title-bold">Changes to this policy</div>
              <div className="mb-5 small-font-gray">
                Any changes we may make to the policy in the future will be posted on the platform and, where appropriate, notified to you by email or otherwise. The changes will be also available in hard-copy at our premises.
                          </div>

              <div className="table-title-bold">Contact us</div>
              <div className="mb-5 small-font-gray">
                <p>If you have any questions about this policy and / or our processing of your personal data, please contact us at <a class="text-danger font-weight-bold" href="mailto:privacy@glosfy.com">privacy@glosfy.com</a></p>
              </div>

              <div className="d-flex mb-5 align-items-end justify-content-end">
                <div className="btn-support">
                  <div className="btn-save">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Help);
