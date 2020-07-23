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
        <div className="terms-image-bg">
          <div className="security-div overlay-center">
            <div className="terms-font">Terms of Service</div>
          </div>
        </div>

        <div className="d-flex">
          <div className="w3-row center-container-security pt-4">
            <div className="w3-col l3 m4 s12">
              <div className="mr-4 contact-us-container p-4">
                <div className="table-title-bold my-4">
                  Table of contents
                              </div>
                <div className="my-4 tiny-font-gray">1. General Information And Consent</div>
                <div className="my-4 tiny-font-gray">2. Consent And Registration</div>
                <div className="my-4 tiny-font-gray">3. Membership And Access To The WebsiteWhat is Lorem Ipsum?</div>
                <div className="my-4 tiny-font-gray">4. Changes To The Terms</div>
                <div className="my-4 tiny-font-gray">5. Use Of The Website</div>
                <div className="my-4 tiny-font-gray">6. Your Liability And Risk</div>
                <div className="my-4 tiny-font-gray">7. Website Moderation, Reporting Abuse, And '3 Strikes And You Are Out'</div>
                <div className="my-4 tiny-font-gray">8. Data Protection And Privacy</div>
                <div className="my-4 tiny-font-gray">9. Cookies</div>
                <div className="my-4 tiny-font-gray">10. Sharing Content and Social Networks</div>
                <div className="my-4 tiny-font-gray">11. Links</div>
                <div className="my-4 tiny-font-gray">12. Intellectual Property Rights</div>
                <div className="my-4 tiny-font-gray">13. Content of the Website and General Exclusions of Liability</div>
                <div className="my-4 tiny-font-gray">14. Internet Communications</div>
                <div className="my-4 tiny-font-gray">15. Validity</div>
                <div className="my-4 tiny-font-gray">16. Governing Law And Jurisdiction</div>
              </div>
            </div>
            <div className="w3-col l9 m8 s12 phone-top">
              <div class="pageuniques">  <ol>
                <li>
                  <h3 class="font-weight-bold">General Information And Consent</h3>

                  <ol>
                    <li>This website, which is hosted at www.glosfy.com (the "Website"), is owned and operated by Glosfy Limited ("Glosfy", "we" or "us").</li>
                    <li>The Website and Glosfy are both based in, and operated from, Dublin, Ireland.</li>
                    <li>You should read these Terms &amp; Conditions (the "Terms") carefully before applying for membership.</li>
                    <li>If you do not wish to be bound by the Terms you should not register with us, or access, or use, the Website at all.</li>
                  </ol>
                </li>
                <li>
                  <h3 class="font-weight-bold">Consent And Registration</h3>

                  <ol>
                    <li>By completing our online registration forms (and ticking the mandatory boxes), and by registering as a Glosfy user, you indicate your acceptance of the Terms in their entirety and thereby agree to, and consent to be bound by, the Terms in full.</li>
                    <li>If you submit an application to access the user areas of the Website you thereby indicate that you have read our Privacy Policy (set out later in these Terms) and consent to us dealing with your personal information and data as set out in that policy, and as is further described in these Terms and on the relevant pages of the Website and in notifications that may be sent to you from time to time.</li>
                    <li>We are not obliged to approve your application for membership.</li>
                    <li>You are only entitled to hold one Website membership account (if granted) at any one time and multiple registrations under alternative or additional persona details are expressly prohibited.</li>
                    <li>You have the ability, as you register, to choose your username and you must select and keep a username that is appropriate.</li>
                    <li>In the course of the registration process, our software will place cookies on your computer, subject to you indicating your consent to our Cookie Policy (set out later in these Terms).</li>
                    <li>If and when your application for membership is accepted you will be invited to fill out a detailed online profile. It is your responsibility to present to other users information that is appropriate about yourself. Any profile information that you provide which we determine to be inappropriate will be removed at our absolute discretion and without prior reference or notice to you.</li>
                    <li>If you do not comply with your obligations set out in these Terms, or otherwise act in a way which we consider, at our sole and absolute discretion, to be inconsistent with our continued provision of Glosfy membership to you, we may revoke your membership and we reserve the right to take any further action which we consider to be appropriate.</li>
                  </ol>
                </li>
                <li>
                  <h3 class="font-weight-bold">Membership And Access To The Website</h3>

                  <ol>
                    <li>When you access and use the Website, it is your responsibility to comply at all times with both the Terms and with the applicable local laws of the jurisdiction from which access to, or use of, the Website is made by you.</li>
                    <li>You may only access the user areas of the Website by providing the information about yourself requested during the registration process.</li>
                    <li>If we grant you access to an otherwise restricted area of the Website, your login details are personal to you and they must be kept confidential to you and not disclosed by you to any other person so as to permit or enable others to gain access or to use the restricted user areas of the Website.</li>
                    <li>You must not use another user's account to access the Website for any reason.</li>
                    <li>All actions (including unauthorised actions, provided they are not through a fault of ours) conducted using your login details will be deemed to be actions conducted by you and you will therefore be responsible and liable for those actions to the fullest extent.</li>
                    <li>We do not warrant that the Website, or any part of it, will be available to you at all times or at any time.</li>
                    <li>Whilst it is our intention to ensure that access to the Website is uninterrupted to all users, we reserve the right to restrict, withdraw, revoke or block, temporarily or permanently, access to, or use of, all or any part of the Website by you at any time and without notice, at our absolute discretion and for any reason howsoever arising.</li>
                  </ol>
                </li>
                <li>
                  <h3 class="font-weight-bold">Changes To The Terms</h3>

                  <ol>
                    <li>We may alter these Terms at any time and without prior notice to you.</li>
                    <li>You acknowledge that each time you access and / or use the Website there may be changes to these Terms and that it is your duty to familiarise yourself with them.</li>
                    <li>If you do not agree with the version of the Terms that exists on any occasion when you access or use of the Website, you are not permitted thereafter to access or use the Website and your membership account and any pre-existing permitted use or access that you enjoyed in consequence of that membership will thereby be impliedly revoked.</li>
                  </ol>
                </li>
                <li>
                  <h3 class="font-weight-bold">Use Of The Website</h3>

                  <ol>
                    <li>By agreeing to our Terms, you are consenting to access and use the Website only in accordance with these Terms and, in particular, in compliance with our User Rules, Privacy Policy, and Cookie Policy (all of which being set out later in these Terms).</li>
                    <li>You are not required to provide any additional personal information in the user areas of the Website at all (beyond that already provided to us for the purposes of registration). However, if you choose to do so, in the way and for the reasons explained on the various pages of the Website, you acknowledge and accept that such information will be published on the Website in and to the following ways and extent:</li>
                    <li>The 'Who's Doing What' carousel - This feature is displayed as a carousel on every page on the desktop page of the Website. It also has its own dedicated page on the web app and native apps. It displays all users and their social activity, which can include: 'Going out'; 'Staying in'; and 'Undecided'. It will also display the date of this activity and, if the user is going out, the venues attended. This carousel will display this information to all users regardless of the individual user's privacy settings.</li>
                    <li>The 'Auto Checkin' facility - This is the name of a feature of our native app that is available for iPhone and Android. Using it, we monitor each user's location using the background location services on their phone. Your location will be checked periodically and sent to our server. The system will then check to see what venues are within 50 metres of your location. If the same venues are returned after two consecutive location checks, we prompt you to check in by displaying a list of potential venues nearby. There is also a settings menu whereby you can adjust various settings, which can be turned off. When you first download and open the app, the OS of the phone will ask for your permission to check your location. If you select 'no', your location will not be checked unless the settings are changed by you at some later point. However, by permitting use of the app you are necessarily consenting to the tracking of your location and to the disclosure to other users that you will be attending a given venue on a given occasion.</li>
                    <li>Geo Located Push Notifications - We allow venues to send this kind of notification to users. For example, it could be 11pm and a given nightclub is not at full capacity and wishes to attract more people. The venue can go on to Glosfy and send a geo-located push notification message to all people within a one mile radius of their venue. They can be even more specific e.g. notify all people within a one mile radius of their venue who are female, aged 18 - 25, and like House music. You have the ability to turn off this function entirely in your settings or to allow only notifications from selected venues. Again, when you first download and open the app, the OS of the phone will ask for your permission to send push notifications. If you select 'no', you will not be sent push notifications. You will also receive general push notifications for events such as friend requests, comments, review etc.. These can all be controlled in your settings menu. However, by permitting geo push notifications you are necessarily consenting to the tracking of your location and to being sent messages from participating venues based on that location.</li>
                    <li>The 'Open chat' facility - Every venue page has an open chat facility. In this way, venues can communicate directly to users, and users can speak with other users. In this area, all of this communication can take place regardless of the individual user's privacy settings. By participating in this area you are necessarily consenting to disclosure to other users of the information you chose to post and to permitting other users to message you regardless of your privacy settings.</li>
                    <li>Facebook importing - For all venues that have a Facebook page, we automatically extract the following information and display it on their Glosfy directory page: 'Status Updates'; 'Events'; 'Offers'; and 'Galleries'. We also import from the Facebook accounts of users posts that disclose that they are going to attend a particular event. By providing us with your Facebook details you are necessarily consenting to us importing your personal details from that source, including but not limited to events that you may attend, offers that you may have received, and galleries in which photographs of you may appear. We may also import from Facebook into our 'Who's Doing What Carousel' the identities of Facebook users who have said that they are going to a particular venue.
   <ol>
                        <li>Model release / license to use &amp; reproduce: By entering any venue / event as Glosfy Ltd. may attend you consent to interviews, audio recording, data gathering and the capture of your photographic likeness (both in stills and video) and the unstipulated release of such, for exploitation through any means and for any purpose by Glosfy Ltd. it’s affiliates and agents. You waive all rights and claims in entirety for payment or royalties in connection with any subsequent publication, distribution or sale of such. With due cause, you may request your photographic likeness be withdrawn from www.Glosfy.com and our retail archives; providing offending material is reported (using the ‘report’ button as appears next to each and every image on the Glosfy network) within 72 hrs. of original publication. Should no objection be raised within 72 hrs. of original publication, clause 7.1 shall from a legally binding contract between you (the ‘model’) &amp; Glosfy Ltd. (the ‘retailer’).</li>
                      </ol>
                    </li>
                    <li>If you do choose to upload personal information about yourself and your activities on to the Website this will be visible and thereby disclosed to other users, subject to our Terms. We may also collect the personally identifiable information that you choose to disclose voluntarily and we may also collect automatically certain website use information as you browse the Website, subject to our Privacy Policy and our Cookie Policy (set out later in these Terms).</li>
                    <li>By agreeing to our Terms, you are consenting to the collection, retention and disclosure to users of the Website of this personally identifiable information.</li>
                    <li>We will only use the information you provide to us on these pages for the purposes set out in these Terms.</li>
                    <li>During the currency of your usership, and subject always to the Terms, you are permitted to:</li>
                    <li>1 access and use the Website on a personal and non-commercial basis only; and</li>
                    <li>2 create links to the Website, whether via social networks or otherwise, provided that you do not create a frame, browser or other border environment around the Website.</li>
                    <li>You are permitted to access and use the Website only in accordance and compliance with our rules of on-line conduct for Glosfy users set out below ("User Rules").
   <p>User Rules</p>

                      <ol>
                        <li>You will not conduct any personal dispute with anyone on the Website.</li>
                        <li>You will not defame, insult, harass or victimise anyone on the Website.</li>
                        <li>You will not threaten anyone on the Website, whether with physical force, legal action or any other form of personal attack.</li>
                        <li>You will not use the Website in any other manner so as to offend or cause distress to other users.</li>
                        <li>You will not post, or permit others to post, any material on the Website that is: false; defamatory; abusive; offensive; degrading; hateful or discriminatory of race, religious belief, gender or sexual orientation; obscene; profane; threatening; in breach of confidence; invasive of any person's privacy; an infringement of any intellectual property rights or other rights of any third party; or otherwise is in violation of the laws of Dublin, Ireland or of any jurisdiction in or from which the Website is accessed or used by you.</li>
                        <li>You will not post, or permit others to post, on the Website any material that is subject to copyright protection unless you own the copyright subsisting in the material concerned or you have the express written consent from the owner of copyright in the material concerned to deal with it in this way.</li>
                        <li>You will not, and will not permit others to, offer for sale, or sell, any item, product or service on or through the Website.</li>
                        <li>You will not use, and will not permit others to use, the Website for any form of advertising whatsoever, whether connected with a commercial activity or howsoever otherwise.</li>
                        <li>You will not use, or permit others to use, the Website or any of its content or information, imagery or data from, or underlying, the Website, in order to engage in: spamming; flooding; chain letter writing; pyramid selling; any other form of unsolicited communication; or in any manner which is associated with or for the purposes of hosting, disseminating, or propagating malicious software or code, including but not limited to viruses, malicious script, spyware, Trojan Horses or worms.</li>
                      </ol>
                    </li>
                    <li>We reserve the right at our absolute discretion to determine whether and to what extent you may have breached the User Rules and to take such action as a consequence as we see fit, including but not limited to restricting your access to the user areas of the Website and / or revoking your Glosfy membership.</li>
                    <li>You may not use the Website, or any information, imagery or data from or underlying it, for or in connection with any unlawful or criminal purpose, including but not limited to hacking, phishing, or other intrusions or attempted intrusions or unlawful use of information or data.</li>
                    <li>You may not copy or make commercial use of any content of the Website including, but not limited to, information, text, imagery or data or other content from, or underlying, the Website, without first obtaining Glosfy's specific express written consent to do so.</li>
                    <li>You may not access or use any content, information, text, imagery or data published on, or underlying, the Website in such a way as to cause, or risk causing, harm or detriment to Glosfy or our business, intellectual property rights, or other activities, property or rights.</li>
                    <li>You may not remove, distort or otherwise alter any content, information, text, imagery or data published on, or underlying, the Website except that which has been posted by you in accordance with the Terms.</li>
                    <li>You may not access or use the Website in such a way to cause, or risk causing, the infringement or weakening of, or damage to, or our own or any other brand, intellectual property or business.</li>
                    <li>You may not access or use the Website in such a way as to cause, or risk causing, confusion or an association as between you or your activities (or a third party or their activities) and us and our activities, including but not limited to phishing.</li>
                    <li>You may not present, disseminate or make available any false or misleading information about us.</li>
                  </ol>
                </li>
                <li>
                  <h3 class="font-weight-bold">Your Liability And Risk</h3>

                  <ol>
                    <li>You access and use the Website and the information published on it at your own risk.</li>
                    <li>You remain solely and personally responsible and liable to the fullest extent for the content of any and all material that you may post or publish on the Website from time to time.</li>
                    <li>By accepting the Terms, you agree to indemnify and hold harmless to the fullest extent possible the owners of the Website, its staff, and its agents, subsidiaries and associates for any loss or damage suffered by us / them that arises out of or in connection with a breach by you of these Terms.</li>
                    <li>We reserve the right to reveal your identity, or any other personal information or data relating to you and collected by us in consequence of your registration, access and use of the Website, in the event of a formal complaint or legal action arising from your use of the Website.</li>
                  </ol>
                </li>
                <li>
                  <h3 class="font-weight-bold">Website Moderation, Reporting Abuse, And '3 Strikes And You Are Out'</h3>

                  <ol>
                    <li>We do not actively monitor the content published on the Website by users.</li>
                    <li>We are not responsible for the content published on the Website by users.</li>
                    <li>We do not warrant the accuracy, completeness, or usefulness of anything published on the Website by users.</li>
                    <li>The views expressed on the Website by users are the views of each such author and not the views of Glosfy, its staff, its subsidiaries, or the Website's proprietor.</li>
                    <li>If you feel that something published on the Website is offensive, defamatory, or otherwise objectionable and / or contrary to the Terms / User Rules, you must notify Glosfy immediately, explaining what has occurred. You may, if you wish, request that we remove or modify the post or publication concerned.</li>
                    <li>We reserve the right at our absolute discretion to remove any content posted or published on the Website, within a reasonable timeframe of becoming aware of the same, if and to the extent that we determine its removal is necessary.</li>
                    <li>With each post or publication on the Website, your IP address is recorded and in the event that your access to the Website has to be restricted by us your Internet Service Provider will be notified.</li>
                    <li>We operate a '3 Strikes And You Are Out' policy. What this means is that, if we have cause on three separate occasions to edit or remove any post or publication made by you, your membership will be revoked immediately. However, this policy is unencumbered by our absolute right to restrict your access to the Website and revoke your Glosfy membership at our absolute discretion and without prior notice to you.</li>
                  </ol>
                </li>
                <li><a name="privacy"></a>
                  <h3 class="font-weight-bold">Data Protection And Privacy</h3>

                  <ol>
                    <li>By agreeing to be bound by these Terms, you are agreeing also to be bound by our Privacy Policy and for your personal data and information to be treated by us accordingly.</li>
                    <li>If you have any questions about our Privacy Policy please contact the Glosfy team.</li>
                  </ol>

                  <h2>Privacy Policy</h2>

                  <ol>
                    <li>Glosfy respects your personal privacy and the sensitivity of your personal information and we are committed to safeguarding and protecting both.</li>
                    <li>Except as provided for under our Terms and in this Privacy Policy and pursuant to our Cookie Policy, we will not use or disclose your personal information, or any other information that you provide to us or upload or place on the Website, with any party unless required to do so by law.</li>
                    <li>We may share your personal information with other companies and individuals that perform supporting functions in connection with Glosfy products and services and the products and services that may be offered to you by our advertisers from time to time (e.g. credit card processing) and with maintaining the Website.</li>
                    <li>To improve your user experience we may share your data with venues and other appropriate business partners for marketing and mail campaign purposes.</li>
                    <li>We will only collect and use your personal information where we have lawful grounds and legitimate business reasons to do so.</li>
                    <li>We will be transparent in our dealings with you and we will tell you about how we will collect and use your personal information.</li>
                    <li>If we have collected your personal information for a particular purpose, we will not use it for any other purpose unless you have been informed and where relevant your permission obtained. Purposes include the following (providing the correct consent check boxes are ticked):
   <ol>
                        <li>Newsletters</li>
                        <li>Information regarding your profile</li>
                        <li>Information on venues and events you might be interested in</li>
                        <li>Direct correspondence from Glosfy partner venues</li>
                        <li>Updates on Glosfy business, website, app and features</li>
                      </ol>
                    </li>
                    <li>You are able to withdraw consent at anytime from your profile settings or by emailing <a href="mailto:privacy@Glosfy.com">privacy@Glosfy.com</a></li>
                    <li>We will not ask for more information than we need for the purposes for which we are collecting it.</li>
                    <li>We will update our records when you inform us that any information about you has changed.</li>
                    <li>We will continue to review and assess the quality and quantity of information held about you by us.</li>
                    <li>We will implement and adhere to information retention policies relating to your information and will ensure that your information is securely disposed of at the end of the appropriate retention period.</li>
                    <li>We will observe the rights granted to you under applicable privacy and data protection laws of Dublin, Ireland and will ensure that queries relating to privacy issues are promptly and transparently dealt with by us.</li>
                    <li>We will train our staff as to their privacy obligations to you.</li>
                    <li>We will ensure that we have appropriate physical and technological security measures in place from time to time to protect your information regardless of where it is held.</li>
                    <li>When we outsource any processes, we will ensure that any third party supplier has appropriate security measures in place and we will contractually require them to comply with this Privacy Policy.</li>
                    <li>We will ensure that suitable safeguards are in place before personal information is transferred to any other country.</li>
                    <li>Your data will be processed in line with the Principles and Rights of The General Data Protection regulation.</li>
                  </ol>
                </li>
                <li>
                  <h3 class="font-weight-bold">Cookies</h3>

                  <ol>
                    <li>Cookies are text files containing small amounts of information that a computer or mobile device may download when visiting websites. When you return to websites, or visit other websites that use the same cookies, they recognise these cookies and therefore your browsing device.</li>
                    <li>We use cookies on the Website, pursuant to and in accordance with our Cookie Policy (set out below)
   <p>Cookie Policy</p>

                      <ol>
                        <li>During the registration process, you will be asked to indicate that you accept our Cookie Policy. If you do not do so, your application for membership will not be approved.</li>
                        <li>You can manage all cookies through your web browser settings at any time. However, please be aware that restricting cookies may affect the functionality of the Website.</li>
                        <li>There are four broad categories of cookie used by us and by other website proprietors, namely: 'Strictly Necessary'; 'Performance'; 'Functionality'; and 'Targeting' cookies, each corresponding to the kind of use to which they are put.</li>
                        <li>We use 'Strictly Necessary' cookies. They are absolutely essential to using the Website because they enable you to move around and use all its features, including accessing secure areas. These cookies do not gather information about you and cannot be used to target you with online marketing. If you disable them you will lose all the user Website functionality.</li>
                        <li>We use 'Performance' cookies. These collect information about how you use the Website (for example, which pages of the Website you visit most often). All the information that they collect is anonymous and is only used to improve the Website's performance. These cookies do not gather information about you and cannot be used to target you with online marketing. Without using these cookies, we cannot learn how the Website is performing and make relevant improvements.</li>
                        <li>We use 'Functionality' cookies. These allow the Website to record choices you make (such as your user name, language, the region you are in, changes you have made to text size, font etc.) and tailor the Website to provide enhanced features and content for you. They may also be used to provide services you have asked for such as watching a video or commenting on a post. The information these cookies collect may, or may not, be anonymous. Without these cookies, the Website cannot record choices you've previously made or personalise your browsing experience.</li>
                        <li>We use 'Targeting' cookies. These are used to tailor marketing to you and your interests. They are also used to limit the number of times you see an advertisement as well as help measure the effectiveness of an advertising campaign. They record that you have visited the Website and this information may be shared with other organisations such as advertisers. Without these cookies, online advertisements you encounter will be less relevant to you and your interests.</li>
                      </ol>
                    </li>
                  </ol>
                </li>
                <li>
                  <h3 class="font-weight-bold">Sharing Content and Social Networks</h3>

                  <ol>
                    <li>Certain pages on the Website allow you to share content via your profile on various social networks and other shared-content platforms. When you share content in this manner you also become subject to terms, conditions and policies of those third parties. It is your sole responsibility to review and familiarise yourself with those terms and conditions.</li>
                    <li>We disclaim any liability, no matter how that may be caused, associated with your use of those services, or for your failure to view, comply or familiarise yourself with their terms, conditions and policies.</li>
                  </ol>
                </li>
                <li>
                  <h3 class="font-weight-bold">Links</h3>

                  <ol>
                    <li>The Website is designed to be accessed from its own pages. If you access pages of the Website directly, for example via search engines or via links provided by third parties, you may not see important information relevant to the page in question, or other announcements or information which may be important to you.</li>
                    <li>The content published on the Website from time to time may contain links that direct you to other websites or domains, for example to websites which offer you goods and services of our advertisers. We are not responsible for the accuracy or content of these third party websites or domains, and the provision of any links by us does not mean that we are in any way connected with or endorse the related website, domain or the information provided in them.</li>
                    <li>When you use these links and access other websites or domains you will become subject to the terms, conditions and policies which apply to those websites or domains and it is your sole responsibility to make sure that you are familiar with and willing to accept them. We accept no liability, no matter how such may be caused, for any failure on your part to view or comply with those third party terms, conditions and policies.</li>
                  </ol>
                </li>
                <li>
                  <h3 class="font-weight-bold">Intellectual Property Rights</h3>

                  <ol>
                    <li>Unless otherwise specified on the Website, we are the proprietors or licensees of all intellectual property rights in and to the Website and its content, including but not limited to copyright, design rights, and unregistered and registered trade mark rights.</li>
                    <li>All such rights are reserved by and to us and the benefit of any goodwill that arises through your use of the Website inures to us.</li>
                    <li>The trade marks that we own include, but are not limited to, Glosfy and the Glosfy and 'tongue' logo marks.</li>
                    <li>Reproduction in any form of any part of the content, information, text, imagery or data from, or underlying, the Website, save in strict compliance with the Terms, is prohibited without our specific prior written consent.</li>
                  </ol>
                </li>
                <li>
                  <h3 class="font-weight-bold">Content of the Website and General Exclusions of Liability</h3>

                  <ol>
                    <li>We reserve the right to alter amend or remove the content of the Website or any part thereof and to withdraw access to any or all such form, functionality and content from any user or all users, at any time and without notice and at our absolute discretion.</li>
                    <li>Save and to the extent as is provided for specifically in these Terms, Glosfy accepts no liability of any kind, howsoever arising:
   <ol>
                        <li>for the content of the Website or any part of it from time to time;</li>
                        <li>for any period of unavailability, interruption, defect or loss of access to, or use or function of, the Website or any part of it at any time; or</li>
                        <li>from any amendment or alteration to the form, functionality and content of the Website or any part of it at any time.</li>
                      </ol>
                    </li>
                    <li>Whilst we will endeavour to ensure that all the information included on the Website by us (as opposed to that posted by users or our advertisers) is correct, up to date and complete, we are not obliged to identify to you any content which is incorrect, out of date, superseded or incomplete, nor are we obliged to update, correct or complete such content. We hereby disclaim any express or implied warranties as to the completeness or accuracy of the Website or its content, including but not limited to information published about you on the Website, and we accept no liability, no matter how such may be caused, arising from any information which is not correct, up to date, complete, or which has been superseded.</li>
                    <li>The content published on the Website, and in particular the information, products and services that may be found and referred to there from time to time, is not an invitation to subscribe to or purchase any product or service unless such information appears within the context of a specific offer made to users by Glosfy or one of our advertisers.</li>
                    <li>Nothing published on the Website is intended to constitute advice. You should not rely on any information published on the Website, and we disclaim any liability for any purported reliance on such information to the fullest extent permitted by law.</li>
                    <li>We accept no liability, no matter how such may be caused, and whether directly or indirectly, for any loss or damage caused to you or another (including but not limited to loss of income, business, opportunity, data, reputation or goodwill) arising from your use of the Website.</li>
                    <li>We accept no liability for changes made to the Website or its content by users or by unauthorised third parties.</li>
                    <li>We hereby exclude any express or implied warranties that any material used or downloaded from the Website will not cause loss or damage to any data or property, such as software or hardware, including but not limited to loss or damage caused by malicious script, viruses, spyware, Trojan Horses or worms. We accept no liability for any such loss or damage suffered by you or another as a result of your use of the Website.</li>
                    <li>Whilst we maintain robust security mechanisms, we cannot guarantee the security of communications (whether by phone, internet or post). Accordingly we accept no liability for breach of security of any communications received from, or sent by you, to us using the Website or the information contained on it. Such communications are at your own risk.</li>
                    <li>If we choose to delay enforcing any of our rights relating to these Terms, or even not to enforce all or any part of them in a given circumstance, context or instance, we may do so at our absolute discretion. Any such delay or non-enforcement on our behalf will not be deemed to be a waiver of those rights or of any other provision or as our acquiescence in respect of the conduct or actions of any user, and will not in any way prejudice or limit our full legal rights and remedies under the Terms and generally.</li>
                    <li>Nothing in the exclusions contained in this clause or elsewhere in the Terms shall be interpreted as an attempt to exclude or limit statutory liabilities which cannot be excluded by law, nor our tortious liability for death or personal injury resulting from our negligence, fraud, fundamental misrepresentation, or any other liability which cannot be excluded or limited by law.</li>
                  </ol>
                </li>
                <li>
                  <h3 class="font-weight-bold">Internet Communications</h3>

                  <ol>
                    <li>We reserve the right to monitor all internet communications, including web and email traffic into and out of our domains, for the purposes of security, ensuring compliance with the Terms, and detecting fraud and other crimes.</li>
                  </ol>
                </li>
                <li>
                  <h3 class="font-weight-bold">Validity</h3>

                  <ol>
                    <li>If any of the Terms are declared to be unlawful, invalid, void or for any reason unenforceable, such fact will have no effect on the validity and enforceability of the remaining provisions of the Terms, and shall be replaced by an enforceable provision which reflects the closest position to that intended by the unlawful, invalid, void or unenforceable provision.</li>
                  </ol>
                </li>
                <li>
                  <h3 class="font-weight-bold">Governing Law And Jurisdiction</h3>

                  <ol>
                    <li>The Terms, and any non-contractual obligations arising out of or in connection with them, are governed by and shall be construed in accordance with European law.</li>
                    <li>Any dispute relating to or arising out of the Terms, and any non-contractual obligations arising out of or in connection with them, shall be subject to the exclusive jurisdiction of the European courts.</li>
                  </ol>
                </li>
              </ol>
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
