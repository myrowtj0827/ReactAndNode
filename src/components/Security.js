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

    return (
      <div className="home-page">
        <div className="security-image-bg">
          <div className="security-div overlay-center">
            <div className="security-font">Security</div>
          </div>
        </div>

        <div className="d-flex">
          <div className="w3-row center-container-security pt-4">
            <div className="w3-col l3 m4 s12">
              <div className="mr-4 contact-us-container p-4">
                <div className="table-title-bold my-4">
                  Security guidance
                          </div>
                <div className="my-4 tiny-font-gray">1. Encryption of sensitive data and communication</div>
                <div className="my-4 tiny-font-gray">2. PCI Compliant</div>
                <div className="my-4 tiny-font-gray">3. HTTPS and HSTS for secure connections</div>
                <div className="my-4 tiny-font-gray">4. Privacy</div>
              </div>
            </div>
            <div className="w3-col l9 m8 s12 phone-top">
              <div className="table-title-bold">Encryption of sensitive data and communication</div>
              <div className="mb-5 small-font-gray">
                All card numbers are encrypted at rest with AES-256. Decryption keys are stored on separate machines. None of Glosfy’s internal servers and daemons are able to obtain plaintext card numbers; instead, they can just request that cards be sent to a service provider on a static whitelist. Glosfy’s infrastructure for storing, decrypting, and transmitting card numbers runs in separate hosting infrastructure, and doesn’t share any credentials with Glosfy’s primary services (API, website, etc.).
                      </div>

              <div className="table-title-bold">PCI Compliant</div>
              <div className="mb-5 small-font-gray">
                Glosfy complies with PCI-DSS 3.2.1 Level 1 as both a Merchant and a Service Provider.


                Registered with both Visa and MasterCard as a PCI-compliant Service Provider.
                Regularly audited by a Qualified Security Assessor (Coalfire, Inc.)
                Passes internal and external application and network penetration testing performed by independent security firms.
                Scanned monthly by an Approved Scanning Vendor (ASV).
                PCI Attestation of Compliance (AOC) is available for download.
                Glosfy employs a cross-functional team responsible for oversight of PCI Compliance.
                      </div>

              <div className="table-title-bold">HTTPS and HSTS for secure connections</div>
              <div className="mb-5 small-font-gray">
                Glosfy forces HTTPS for all services using TLS (SSL), including our public website and the Dashboard.

                Glosfy.js is served only over TLS
                Glosfy’s official libraries connect to Glosfy’s servers over TLS and verify TLS certificates on each connection
                We regularly audit the details of our implementation: the certificates we serve, the certificate authorities we use, and the ciphers we support. We use HSTS to ensure browsers interact with Glosfy only over HTTPS.
                      </div>

              <div className="table-title-bold">Privacy</div>
              <div className="mb-5 small-font-gray">
                We do not sell the personal information of our customers to third parties.
                <br></br>
                We have a full time legal and security team focused on privacy and security issues.
                <br></br>
                We participate in and comply with the EU-U.S. Privacy Shield Framework.
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
