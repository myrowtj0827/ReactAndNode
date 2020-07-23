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
            <div className="security-font">Privacy Policy</div>
          </div>
        </div>

        <div className="d-flex">
          <div className="w3-row center-container-security pt-4">
            <div className="w3-col l3 m4 s12">
              <div className="mr-4 contact-us-container p-4">
                <div className="table-title-bold my-4">
                  Table of contents
                              </div>
                <div className="my-4 tiny-font-gray">1. What personal data is collected?</div>
                <div className="my-4 tiny-font-gray">2. Personal data collected from you</div>
                <div className="my-4 tiny-font-gray">3. Personal data collected about you</div>
                <div className="my-4 tiny-font-gray">4. How is your personal data used, and what is the legal basis for this use?</div>
                <div className="my-4 tiny-font-gray">5. Minors</div>
                <div className="my-4 tiny-font-gray">6. Who will your personal data be shared with, and where?</div>
                <div className="my-4 tiny-font-gray">7. Where we store your Personal Data</div>
                <div className="my-4 tiny-font-gray">8. Where we act as a data processor</div>
                <div className="my-4 tiny-font-gray">9. Background</div>
                <div className="my-4 tiny-font-gray">10. Legal Requirements</div>
                <div className="my-4 tiny-font-gray">11. Companies or Organizers</div>
                <div className="my-4 tiny-font-gray">12. Changes To This Privacy Policy</div>
              </div>
            </div>
            <div className="w3-col l9 m8 s12 phone-top">
              <div class="page">

                <h2 class="font-weight-bold">What does this policy cover?</h2>

                <p>This policy describes the processing of your personal data in relation to your use of the website <a href="https://www.glosfy.com">www.glosfy.com</a> or the Glosfy app on iOS and Android ("platform") ("we", "us" or "our"), as the owner and operator of the website and app.</p>


                <p>Where applicable, this policy should be read alongside Glosfy's terms and conditions which tell you about the terms on which you may use the platform.</p>

                <h2 class="font-weight-bold">What personal data is collected?</h2>

                <ol>
                  <li>
                    <h3 class="font-weight-bold">Personal data collected from you:</h3>

                    <p>The following categories of personal data will be collected about you in connection with your use of the platform and your interaction with us, including, but not limited to, when you fill in forms on the platform or provide us with information whilst in a bar or club, and submit user-generated reviews or ratings, engage in any social media functions on the platform, make transactions in a participating venue using a card linked to the Glosfy loyalty app:</p>

                    <ul>
                      <li>Personal Identification Information: such as, your name, date of birth, gender;</li>
                      <li>Contact Information: such as, email address and telephone number;</li>
                      <li>Demographic Information: such as, postcode;</li>
                      <li>Preference information: such as, favourite music, favourite venues, favourite drinks;</li>
                      <li>Spending habbits and drinking habbits based on transactional data;</li>
                      <li>Venues you visit and frequency of visit;</li>
                      <li>Social media identification information, such your Facebook page address, your Twitter handle, your Instagram handle and profile picture;</li>
                      <li>Photographs of you; and</li>
                      <li>Your marketing preferences, including any consents you have given us.</li>
                    </ul>

                    <p>In addition, if you contact us by phone, email or otherwise, we may keep a record of that correspondence.</p>

                    <p>Please note that Glosfy will not store credit or debit card information from payments made through our services other than where it is necessary for us to complete our obligations to you.</p>
                  </li>
                  <li>
                    <h3 class="font-weight-bold">Personal data collected about you:</h3>

                    <ul>
                      <li>From Others: Although we generally collect personal data directly from you, we also collect certain categories of personal data about you from other sources.</li>
                      <li>Automatically Collected Information: [such as, web browser type and version, operating system, the platform you came from and exit to, your IP (Internet Protocol) address, your browser settings, the date and time of your visits, and details regarding your interaction with the platform (including which pages or resources on the platform you access);]</li>
                      <li>Cookies Information: in accordance with the Cookies section below.</li>
                    </ul>

                    <p>We may collect information about you from other sources. This may include for example information you have shared publicly, including on social media.</p>

                    <p>In addition, you can also create your Glosfy account using, or connect your Glosfy account to, your accounts on third party services such as Facebook, Twitter or Instagram. In the event that this occurs, we may collect, use, disclose, transfer and store/retain information relating to your account with such third party services in accordance with this Privacy Policy. For example, if you connect with our platform using Facebook, we store your Facebook I.D., your first name, surname, email, location, pages you have "liked" and profile picture we can see which brands you have liked on Facebook and invite you to follow them on Glosfy.</p>

                    <p>This list is not exhaustive and, in specific instances, we may need to collect additional data for the purposes set out in this Policy.</p>

                    <p>Sometimes you will have given your consent for other websites, services or third parties to provide information to us.</p>

                    <p>For example, this could include information we receive about you if you follow a Promoter's or Venue's page/website we operate or any other services we provide, in which case we will have informed you when we collected this data that it may be shared. We will also have told you for what purpose we will share your data.</p>

                    <p>It could also include information from third parties that we work with to provide our products and services, such as payment processors, delivery companies, technical support companies and advertising companies. Whenever we receive information about you from these third parties, we will let you know what information we have received and how and why we intend to use it.</p>

                    <p>As a Customer we will collect additional Personal Data from you, sometimes for our own purposes and other times on behalf of a Promoter/Venue.</p>

                    <p>As a Customer we will collect additional Personal Data from you, sometimes for our own purposes and other times on behalf of a Promoter/Venue.</p>

                    <p>Also, Promoters and Venues can create event registration pages to collect information from Customers regarding their registration for a Promoter's/Venue's event listed on our Services. Glosfy does not control the Promoter's/Venues registration process nor any Personal Data that a Promoter/Venue collects. Personal Data collected on behalf of Promoter/Venue is provided to the Promoter/Venue of the applicable event in accordance with the provisions set out below.</p>
                  </li>
                </ol>

                <h2 class="font-weight-bold">How is your personal data used, and what is the legal basis for this use?</h2>

                <p>We process your personal data for the following purposes:</p>

                <ul>
                  <li>Contractual Necessity: As required to establish and fulfil a contract with you, for example: if you make a purchase from us (this will include taking payments); communicating with you and providing customer services; and in order to administer our loyalty programme.</li>
                  <li>
                    <p>Legitimate Interests: As required by us to pursue our own legitimate interests, in particular:</p>

                    <ul>
                      <li>facilitating the creation of, and securing, online registered accounts</li>
                      <li>managing, operating and improving online registered services (incl. enabling you to manage your marketing preferences), and customer journeys on the platform;</li>
                      <li>monitoring any online feedback/reviews to prevent, investigate and/or report fraud, terrorism, misrepresentation, security incidents or crime, in accordance with applicable law;</li>
                      <li>delivering tailored advertising (incl. via Facebook look-a-like and custom audience);</li>
                      <li>we will use data in connection with legal claims which concern our company, group or partners, compliance, regulatory and investigative purposes as necessary (including disclosure of such information in connection with legal process or litigation);</li>
                      <li>creating user / customer insights based on transactional behaviour segments to drive targeted direct marketing;</li>
                      <li>creating user / customer insights based on demographic segments to drive targeted email direct marketing and also carrying out market research and surveys;</li>
                      <li>communicating with you; and</li>
                      <li>investigating and handling any complaints received from you about our platform, or our services.</li>
                    </ul>
                  </li>
                </ul>

                <p>You can obtain further information on the legitimate interests balancing exercises which we have carried out by contacting us using the contact details provided below.</p>

                <ul>
                  <li><strong>Legal Compliance:</strong> To ensure compliance with applicable laws and legal processes including, but not limited to, use in connection with legal claims, compliance, regulatory, tax, investigative purposes (including disclosure of such information in connection with legal process or litigation and to law enforcement agencies).</li>
                  <li><strong>Consent:</strong> Subject to the following, we will send you direct marketing by email, SMS, push notifications, telephone, post, in-App and online about Glosfy services which we think may be of interest to you. This will only be sent where you have given your consent to Glosfy during the online sign-up process or verbally, or (where permissible) you have been given an opportunity to opt out. You will be able to opt-out of electronic direct marketing by clicking the unsubscribe link contained in the email itself and, in all other cases, by updating your preferences on the Glosfy platform.</li>
                </ul>

                <h2 class="font-weight-bold">Minors</h2>

                <p>[Visitors under 18 years of age are not permitted to Subscribe to our services use and/or submit their personal information on any of our website or applications. We do not knowingly solicit or collect information from visitors under 18 years of age.] We encourage parents and guardians to spend time online with their children and to participate and monitor the interactive activities of their children.</p>

                <h2 class="font-weight-bold">Who will your personal data be shared with, and where?</h2>

                <p>We will share your personal data with:</p>

                <ul>
                  <li>third party service providers, who will process it on our behalf for the purposes above. Such third parties include, but are not limited to, couriers for delivery of your orders, customer service operations, and marketing providers;</li>
                  <li>government authorities and/or law enforcement officials if required for the purposes above, if mandated by law or if required for the legal protection of our own legitimate interests in compliance with applicable laws; and</li>
                  <li>purchasers or prospective purchasers of all or part of our assets or our business, and their professional advisers, in connection with the purchase.</li>
                  <li>Glosfy partner venues for marketing campaigns providing the relevant consent has been given</li>
                  <li>We share the information that you provide to us with our staff so that we can provide our products and services to you.</li>
                </ul>

                <h2 class="font-weight-bold">Where we store your Personal Data</h2>

                <p>The data that we collect from you may be transferred to, and stored at, a destination outside the European Economic Area ("EEA"). It may also be processed by staff operating outside the EEA who work for us or for one of our suppliers. Such staff may be engaged in, among other things, the fulfilment of your order, the processing of your payment details and the provision of support services. By submitting your Personal Data, you agree to this transfer, storing or processing. Glosfy will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy, our terms of use and the applicable data protection legislation</p>

                <p>All information you provide to us is stored on our secure servers. Any payment transactions will be encrypted (using SSL technology). Where we have given you (or where you have chosen) a password which enables you to access certain parts of our site, you are responsible for keeping this password confidential. We ask you not to share a password with anyone.</p>

                <p>Unfortunately, the transmission of information via the internet is not completely secure. Although we will do our best to protect your Personal Data, we cannot guarantee the security of your data transmitted to our site; any transmission is at your own risk. Once we have received your information, we will use strict procedures and security features to try to prevent unauthorised access.</p>

                <p>In addition, where you are a Promoter/Venue and import your database of personal information into our system, your database is stored on our secure servers. We do not, under any circumstances, sell or give access to your database. If an individual whose information is on your database complains or contacts us, we might then contact that person. Only authorised employees of Glosfy have access to view this Personal Data. Please note that you may export (download) your database from us at any time.</p>

                <p>Please note, if we detect abusive or illegal behaviour related to your database, we may share your database or portions of it with affected ISPs or anti-spam organisations.</p>

                <h2 class="font-weight-bold">Where we act as a data processor</h2>

                <p>If a Venue/Promoter imports its own database or other contact information it has collected into the Server, that database shall remain owned by that Venue/Promoter. The Venue/Promoter shall be the Data Controller in relation to any Personal Data collected pursuant to this clause. Glosfy will be a Data Processor of this data and shall comply with its obligations as a Data Processor.</p>

                <p>Further to this, the Venue/Promoter warrants that, where it is a Data Controller, it shall provide each Data Subject with the required information as set out in Article 14 of the GDPR, including but not limited to the identity and contact details of the Venue/Promoter, the purposes for processing their information and the categories of personal data with which the Venue/Promoter is concerned.</p>

                <p>The Venue/Promoter warrants that it has all consents required to allow it to import its database referred to above into the Server and to allow Glosfy to process such Personal Data in accordance with these Terms and the terms of the Privacy Policy.</p>

                <p>If a Customer, or other User, creates an account on the Glosfy platform and follows a Venue/Promoter (including a Data Subject who was initially introduced to the Service through the importing of a database), that User's data shall become part of Glosfy's database.</p>

                <p>Where the above occurs, both Glosfy and the Venue/Promoter shall be referred to as a Data Controller in relation to any Personal Data provided by a User.</p>

                <p>Any questions you may have in this set of circumstances regarding the use of your data should be directed at the Venue/Promoter. Where you no longer wish to be contacted by a Venue/Promoter through our platform, you can unsubscribe from any communications you receive from Glosfy. In addition, in these circumstances, where you wish to update any inaccuracies in your Personal Data on our system, or wish for your Personal Data to be deleted from our system, you can contact either us or the Venue/Promoter.</p>

                <p>Venues/Promoters are allowed to use our system to contact Customers of their current and past events, so you may receive emails from our system that originate from such Venues/Promoters that we send on their behalf. If a Customer registered for an event using our platform, their email address is available to the Venue/Promoter of that event.</p>

                <p>Venues/Promoters may also import contact information they have from external sources and send communications through our platform to those individuals, we will deliver those communications to those individuals on the Venues/Promoter’s behalf. The Venue/Promoter and not Glosfy is responsible for sending these communications. The Customer has the right to opt out of such communications at any time.</p>

                <p>Venues/Promoters may also partner with other Venues/Promoters on the Glosfy platform to Co-Promote events whereby they recommend similar events by other Venues/Promoters to their Customers.</p>

                <p>In addition to the above, there are certain exceptional circumstances in which we may disclose your information to third parties. This would be where we believe that the disclosure is:</p>

                <ul>
                  <li>required by the law, or in order to comply with judicial proceedings, court orders or legal or regulatory proceedings;</li>
                  <li>necessary to protect the safety of our employees, our property or the public;</li>
                  <li>necessary for the prevention or detection of crime, including exchanging information with other companies or organisations for the purposes of fraud protection and credit risk reduction; and</li>
                  <li>proportionate as part of a merger, business or asset sale, in the event that this happens we will share your information with the prospective seller or buyer involved.</li>
                  <li>Sometimes, we share your information with our third-party providers, who help us provide and support our Services. Examples of third-party providers include payment processors, email marketing platforms, hosting services and content delivery services. We have contracts with each of these providers that specify that they will only use your data for the purposes of performing the services we have contracted them for. Anonymised data is also used for the purposes of website and app analytics.</li>
                </ul>
              </div>

              <h2 class="font-weight-bold">Background</h2>
              <p>
                We are not in the business of selling your Personal Data. We consider this information to be a vital part of our relationship with you. Therefore, we will not sell your Personal Data to third parties, including third party advertisers. There are certain circumstances in which we may disclose, transfer or share your Personal Data with certain third parties without further notice to you, as set forth in this Privacy Policy.
              </p>

              <h2 class="font-weight-bold">Legal Requirements </h2>
              <p>
                We may disclose your Personal Data if required to do so by law in order to (for example) respond to a subpoena or request from law enforcement, a court or a government agency (including in response to public authorities to meet national security or law enforcement requirements), or in the good faith belief that such action is necessary to (a) comply with a legal obligation, (b) protect or defend our rights, interests or property or that of third parties, (c) prevent or investigate possible wrongdoing in connection with the Services, (d) act in urgent circumstances to protect the personal safety of Users of the Services or the public, or (e) protect against legal liability.
              </p>
              <h2 class="font-weight-bold">Companies </h2>
              <p>
                In addition, when you register for an event, sign up for communications, enter a contest, or otherwise input your Personal Data (such as through a web form) to communicate with an Organizer or participate in an Organizer event, that Organizer will receive that information. For instance, if you input your name and email address into a web form for an Organizer offer, activity or event, the Organizer will receive that information. The Organizer may then send you marketing or other communications, which may be subject to its own, separate privacy policy. Likewise, if you provide your mobile phone number, you may receive information messages related to the service, event, activity or information in which you’ve expressed interest.<br></br>

                When you purchase tickets to, register for or donate to an event, transfer an event ticket or registration to another person, enter a contest, or otherwise input your Personal Data (such as through a web form), or otherwise communicate with an Organizer, or participate in or express interest in an Organizer or Organizer event or activity, that Organizer will receive the information you provide, including your Personal Data, and where a ticket or registration is transferred, the Personal Data of the transferee as well. Other third parties that are involved in or on whose behalf an event or activity is promoted, may receive that Personal Data as well.<br></br>

                We are not responsible for the actions of these Companies, or their Third Party Companies (or other downstream recipients of your Personal Data), with respect to your Personal Data. It is important that you review the applicable policies of the Companies, and if applicable and available, their appointed Third Party Companies, of an event (and the related fundraising page, if applicable) before providing Personal Data or other information in connection with that event or related fundraising page. <br></br>

                Similarly, if you are a member of an Organizer's organization within Glosfy, your Personal Data will be available to the Organizer and shared with those Third Party Companies granted permission by the Organizer to view all members of the Organizer's organization.
              </p>
              <h2 class="font-weight-bold">Changes To This Privacy Policy </h2>
              <p>
                The Services and our business may change from time to time. As a result, at times it may be necessary for us to make changes to this Privacy Policy. We reserve the right, in our sole discretion, to update or modify this Privacy Policy at any time (collectively, "Modifications"). Modifications to this Privacy Policy will be posted to the Site with a change to the "Updated" date at the top of this Privacy Policy. In certain circumstances Glosfy may, but need not, provide you with additional notice of such Modifications, such as via email or with in-Service notifications. Modifications will be effective thirty (30) days following the "Updated" date or such other date as communicated in any other notice to you.

                Please review this policy periodically, and especially before you provide any Personal Data. This Privacy Policy was updated on the date indicated above. Your continued use of the Services following the effectiveness of any Modifications to this Privacy Policy constitutes acceptance of those Modifications. If any Modification to this Privacy Policy is not acceptable to you, you should cease accessing, browsing and otherwise using the Services.
              </p>
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
