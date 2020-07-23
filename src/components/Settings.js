import ListErrors from './ListErrors';
import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';
import {
  SETTINGS_SAVED,
  SETTINGS_PAGE_UNLOADED,
  RESET_PASSWORD,
  LOGOUT
} from '../constants/actionTypes';
import classNames from 'classnames';
import DatePicker from "react-datepicker";
import $ from 'jquery';
import Geosuggest from "react-geosuggest";
import { Fragment } from 'react';
import Purchase from './Purchase';
import ProgressBar from "bootstrap-progress-bar";
import Form from "react-bootstrap/Form";
import { Number, Cvc, Expiration } from "react-credit-card-primitives";

class SettingsForm extends React.Component {
  constructor() {
    super();

    this.state = {
      image: '',
      username: '',
      fullname: '',
      bio: '',
      email: '',
      phone: '',
      password: '',
      birthday: '',
      isCompany: '',
      locality: '',
      province: '',
      address: '',
      country: '',
      latitude: '',
      longitude: '',
      photos: '',
      category: '',
      facebookId: "",
      addPayment: false,
      categories: [
        {
          name: 'Debit Card',
          value: 'debit'
        }
      ],
      selectedCategory: 'Credit Card'
    };

    this.updateState = field => ev => {
      const state = this.state;
      const newState = Object.assign({}, state, { [field]: ev.target.value });
      this.setState(newState);
    };

    this.submitForm = ev => {
      ev.preventDefault();

      const user = Object.assign({}, this.state);
      if (!user.password) {
        delete user.password;
      }

      this.props.onSubmitForm(user);
      this.props.updateSettingsStatus();
    };

    this.changePassword = ev => {
      ev.preventDefault();

      const user = {
        email: this.state.email,
        password: this.state.password,
        newPassword: this.state.newPassword,
        confirmPassword: this.state.confirmPassword
      }

      this.props.onChangePassword(user);
    }

    this.handleSelectedFile = ev => {
      const fd = new FormData();
      const _self = this;
      let file = ev[0];
      if (ev.target) {
        file = ev.target.files[0];
      }
      fd.append('fname', 'comment');
      fd.append('data', file);
      agent.Auth.uploadPhoto(fd).then(res => {
        _self.setState({ image: res.data.photo })
      });
    }

    // this.handleSelectedFileCompany = ev => {
    //   const fd = new FormData();
    //   const _self = this;
    //   let file = ev[0];
    //   if (ev.target) {
    //     file = ev.target.files[0];
    //   }
    //   fd.append('fname', 'comment');
    //   fd.append('data', file);      
    //   agent.Auth.uploadPhoto(fd).then(res => {        
    //     let photos = _self.state.photos;
    //     photos.push(res.data.photo);        
    //     _self.setState({ photos : photos });
    //   });
    // }

    // this.deletePhoto = (photo) => {
    //   var photos = this.state.photos;
    //   photos = photos.filter(function(ele){
    //      return ele != photo;
    //   })      
    //   this.setState({ photos : photos })
    // }

    this.parseLocation = (s) => {
      var locality = '';
      var province = '';
      var country = '';
      if (s != undefined) {
        for (var i = 0; i < s.gmaps.address_components.length; i++) {
          var address = s.gmaps.address_components[i];
          switch (address.types[0]) {
            case 'locality':
              locality = address.long_name;
              break;
            case 'administrative_area_level_1':
              province = address.long_name;
              break;
            case 'country':
              country = address.long_name;
              break;
          }
        }
        this.setState({
          locality: locality,
          province: province,
          country: country
        })
      }
    }
    this.addPaymentMethod = () => {
      this.setState({ addPayment: true });
    }
    this.removePaymentMethod = () => {
      this.setState({ addPayment: false });
    }
    this.parseAddress = (s) => {
      if (s != undefined) {
        this.setState({
          latitude: (s ? s.location.lat : null),
          longitude: (s ? s.location.lng : null),
          address: (s.description : null)
      })
    }
  }

}

componentWillMount() {
  if (this.props.currentUser) {
    Object.assign(this.state, {
      image: this.props.currentUser.image || '',
      username: this.props.currentUser.username,
      fullname: this.props.currentUser.fullname,
      birthday: this.props.currentUser.birthday,
      bio: this.props.currentUser.bio,
      email: this.props.currentUser.email,
      phone: this.props.currentUser.phone,
      isCompany: this.props.isCompany,
      locality: this.props.currentUser.locality,
      province: this.props.currentUser.province,
      address: this.props.currentUser.address,
      country: this.props.currentUser.country,
      latitude: this.props.currentUser.latitude,
      longitude: this.props.currentUser.longitude,
      photos: this.props.currentUser.photos || [],
      category: this.props.currentUser.category,
      facebookId: this.props.facebookId || '',
      twitterId: this.props.twitterId || '',
      linkedInId: this.props.linkedInId || '',
      instaId: this.props.instaId || ''
    });
  }
  $("html, body").animate({ scrollTop: 0 }, 0);
}

componentWillReceiveProps(nextProps) {
  if (nextProps.currentUser) {
    this.setState(Object.assign({}, this.state, {
      image: nextProps.currentUser.image || '',
      username: nextProps.currentUser.username,
      fullname: nextProps.currentUser.fullname,
      birthday: nextProps.currentUser.birthday,
      bio: nextProps.currentUser.bio,
      email: nextProps.currentUser.email,
      phone: nextProps.currentUser.phone,
      isCompany: nextProps.isCompany,
      locality: nextProps.currentUser.locality,
      province: nextProps.currentUser.province,
      address: nextProps.currentUser.address,
      country: nextProps.currentUser.country,
      latitude: nextProps.currentUser.latitude,
      longitude: nextProps.currentUser.longitude,
      photos: nextProps.currentUser.photos || [],
      category: nextProps.currentUser.category,
      facebookId: this.props.facebookId || '',
      twitterId: this.props.twitterId || '',
      linkedInId: this.props.linkedInId || '',
      instaId: this.props.instaId || ''
    }));
  }
}

render() {
  var cLocation = (this.state.locality || '') + ', ' + (this.state.country || '');
  const cboxes = ["Updates about new Glosfy features and announcements", "Glosfy's weekly event guide: A digest of personalised event recommendations",
    "Requests for additional information on an event after you have attended", "Unsubscribe from all Glosfy newsletters and updates for attendees"];

  const cboxes2 = ["When friends buy tickets or register for events near me", 'When an organiser you follow announces a new event',
    "Receive updates on collections you follow ", "Reminders about event onsales", "Reminders about events I've liked"];
  if (cLocation === ', ')
    cLocation = '';

  if (this.props.tab === 'overview')
    return (
      <form onSubmit={this.submitForm} className="px-5 pt-4">
        {/*
            <h1 className="text-xs-center">Your Settings</h1>
          */}
        <ListErrors errors={this.props.errors}></ListErrors>
        <div className="settings-headings fx-1">Account email address</div>
        <div className="row">
          <div className="email-filed-width">
            <input
              className="form-control form-control-lg custom-input my-4"
              type="email"
              placeholder="Email address"
              value={this.state.email}
              onChange={this.updateState('email')}
              required
            />
          </div>
        </div>
        <div className="settings-headings fx-1 mt-4">Profile Photo</div>
        <div className="user-photo my-4">
          <img src={this.state.image} alt="" />
          <label htmlFor='add-user-photo' className={classNames("add-user-photo", this.state.image && "hide")}>
            <input type="file" id="add-user-photo" accept="image/*"
              onChange={(e) => this.handleSelectedFile(e)} />
          </label>
        </div>
        <div className="row">
          <div className="col-md-4"> <ProgressBar width="50%" message="50%" /></div></div>
        <div className="settings-headings fx-1 mt-4">Contact Information</div>
        <div className="user-form-width my-4">
          <div class="d-flex  mt-4 row">  <fieldset className="form-group col-md-6">
            <input
              className="form-control custom-input"
              type="email"
              placeholder="First Name"
              value={this.props.email}
              onChange={(e) => this.updateState('email', e.target.value)}
              required />
          </fieldset>

            <fieldset className="form-group col-md-6">
              <input
                className="form-control custom-input"
                type="text"
                placeholder="Last Name"
                value={this.props.fullname}
                onChange={(e) => this.updateState('fullname', e.target.value)}
                required />
            </fieldset>


          </div>

          <div class="d-flex row">
            <fieldset className="form-group col-md-6">
              <input
                className="form-control custom-input"
                type="email"
                placeholder="Email address"
                value={this.props.email}
                onChange={(e) => this.updateState('email', e.target.value)}
                required />
            </fieldset>

            <fieldset className="form-group col-md-6">
              <input
                className="form-control custom-input"
                type="password"
                placeholder="Password"
                value={this.props.password}
                onChange={(e) => this.updateState('password', e.target.value)}
                required />
            </fieldset>


          </div>
          <div class="d-flex  row">
            <fieldset className="form-group col-md-6">
              <input
                className="form-control custom-input"
                type="text"
                placeholder="Phone number"
                value={this.props.phone}
                onChange={(e) => this.updateState('phone', e.target.value)}
                required />
            </fieldset>

            <fieldset className="form-group col-md-6" >
              <input
                className="form-control custom-input "
                type="password"
                placeholder="Re-enter password"
                value={this.props.rePassword}
                onChange={(e) => this.updateState('rePassword', e.target.value)}
                required />
            </fieldset>

          </div>
          <div className="settings-headings fx-1 mt-4">Home Address</div>
          <div class="d-flex row">
            <fieldset className="form-group col-12">
              <input
                className="form-control custom-input"
                type="text"
                placeholder="Address 1"
                value={this.props.phone}
                onChange={(e) => this.updateState('phone', e.target.value)}
                required />
            </fieldset>


          </div>
          <div class="d-flex  row">
            <fieldset className="form-group col-12">
              <input
                className="form-control custom-input"
                type="text"
                placeholder="Address 2"
                value={this.props.phone}
                onChange={(e) => this.updateState('phone', e.target.value)}
                required />
            </fieldset>


          </div>
          <div class="d-flex  row">
            <fieldset className="form-group col-12">
              <Geosuggest
                placeholder="City, Country"
                inputClassName="form-control custom-input"
                skipSuggest={(s) => s.types.indexOf('locality') < 0 || s.types.indexOf('political') < 0}
                onSuggestSelect={s => this.parseLocation(s)}
              />
            </fieldset>


          </div>
          <div class="d-flex row">
            <fieldset className="form-group col-12">
              <input
                className="form-control custom-input"
                type="text"
                placeholder="Mobile Phone"
                value={this.props.phone}
                onChange={(e) => this.updateState('phone', e.target.value)}
                required />
            </fieldset>


          </div>
          <div class="d-flex mt-2 row">
            <fieldset className="form-group col-12">
              <input
                className="form-control custom-input"
                type="text"
                placeholder="Postalcode"
                value={this.props.phone}
                onChange={(e) => this.updateState('phone', e.target.value)}
                required />
            </fieldset>


          </div>
          <div className="settings-headings fx-1 mt-4">Social Networks</div>
          <div class="d-flex  row">
            <fieldset className="form-group col-12">
              <input
                className="form-control custom-input"
                type="text"
                placeholder="Paste Link"
                value={`Facebook.com/${this.state.facebookId}`}
                onChange={(e) => this.updateState('phone', e.target.value)}
                required />
            </fieldset>


          </div>
          <div class="d-flex  row">
            <fieldset className="form-group col-12">
              <input
                className="form-control custom-input"
                type="text"
                placeholder="Paste Link"
                value={`Twitter.com/${this.state.facebookId}`}
                onChange={(e) => this.updateState('phone', e.target.value)}
                required />
            </fieldset>


          </div>
          <div class="d-flex  row">
            <fieldset className="form-group col-12">
              <input
                className="form-control custom-input"
                type="text"
                placeholder="Paste Link"
                value={`Instagram.com/${this.state.facebookId}`}
                onChange={(e) => this.updateState('phone', e.target.value)}
                required />
            </fieldset>


          </div>
          <div class="d-flex  row">
            <fieldset className="form-group col-12">
              <input
                className="form-control custom-input"
                type="text"
                placeholder="Paste Link"
                value={`LinkedIn.com/${this.state.facebookId}`}
                onChange={(e) => this.updateState('phone', e.target.value)}
                required />
            </fieldset>


          </div>

          {/* <fieldset className="form-group">
                <i className="fa fa-user-o" aria-hidden="true"></i>
                <input
                  className="form-control form-control-lg custom-input"
                  type="text"
                  placeholder="Full name"
                  value={this.state.fullname}
                  onChange={this.updateState('fullname')} 
                  required />
              </fieldset>
              <fieldset className="form-group">
                <i className="fa fa-user-o" aria-hidden="true"></i>
                <input
                  className="form-control form-control-lg custom-input"
                  type="text"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.updateState('username')}
                  required />
              </fieldset>
              <fieldset className="form-group calendar-field">
                <i className="fa fa-calendar" aria-hidden="true"></i>
                <DatePicker
                    key="s-calendar"
                    className="form-control form-control-lg"
                    selected={this.state.birthday}
                    onChange={ (date) => { this.setState({ birthday : date })} }
                  />
                <input
                  className="form-control form-control-lg custom-input"
                  type="date"
                  placeholder="Birthday"
                  value={this.state.birthday}
                  onChange={ this.updateState('birthday')}
                />
              </fieldset>
              <fieldset className="form-group">
                <input
                  className="form-control form-control-lg custom-input"
                  type="text"
                  placeholder="Phone number"
                  value={this.state.phone}
                  onChange={this.updateState('phone')} 
                />
              </fieldset>
              <fieldset className="form-group">
                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                <input
                  className="form-control form-control-lg custom-input"
                  type="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={this.updateState('email')} 
                  required />
              </fieldset>

              <fieldset className="form-group">
                <textarea
                  className="form-control form-control-lg custom-input"
                  rows="8"
                  placeholder="Short bio about you"
                  value={this.state.bio}
                  onChange={this.updateState('bio')}>
                </textarea>
              </fieldset> 
               */}
          {this.props.currentUser && this.props.isCompany && (
            <Fragment>
              <fieldset className="form-group">
                <Geosuggest
                  placeholder="In which city your company located ?"
                  inputClassName="form-control form-control-lg custom-input"
                  initialValue={cLocation}
                  skipSuggest={(s) => s.types.indexOf('locality') < 0 || s.types.indexOf('political') < 0}
                  onSuggestSelect={s => this.parseLocation(s)}
                />
              </fieldset>
              <fieldset className="form-group">
                <Geosuggest
                  placeholder="Enter your company's full address"
                  inputClassName="form-control form-control-lg custom-input"
                  initialValue={this.state.address}
                  onChange={(s) => this.setState({ address: s })}
                  onSuggestSelect={s => this.parseAddress(s)}
                />
              </fieldset>
              <fieldset className="form-group">
                <select className="form-control form-control-lg custom-input" onChange={this.updateState('category')}>
                  <option value="">Category</option>
                  {this.props.categories && this.props.categories.map(category => (
                    <option value={category.name} selected={this.state.category === category.name}>{category.name}</option>
                  ))}
                </select>
              </fieldset>
            </Fragment>
          )}

        </div>

        <div className="row attending-width">
          <div className="w3-bar btn-paddings">
            <div className="btn-save" type="submit" disabled={this.state.inProgress}>Save</div>
          </div>
        </div>
      </form>
    );
  else if (this.props.tab === 'changePassword')
    return (
      <form onSubmit={this.changePassword} className="change-password mx-5">
        <div class="row"><div class="col-md-5 col-sm-12 col-xs-12">
          <div className="settings-headings fx-1 mt-4 psw-padding-add">Your Password</div>
          <ListErrors errors={this.props.warning}></ListErrors>
          <fieldset className="form-group">
            <input
              className="form-control form-control-lg custom-input"
              type="password"
              placeholder="Current password"
              value={this.state.password}
              onChange={this.updateState('password')}
              required />
          </fieldset>

          <fieldset className="form-group">
            <input
              className="form-control form-control-lg custom-input"
              type="password"
              placeholder="New password"
              value={this.state.newPassword}
              onChange={this.updateState('newPassword')}
              required />
          </fieldset>

          <fieldset className="form-group">
            <input
              className="form-control form-control-lg custom-input"
              type="password"
              placeholder="Confirm password"
              value={this.state.confirmPassword}
              onChange={this.updateState('confirmPassword')}
              required />
          </fieldset>

        </div>
        </div>
        <div className="row attending-width">
          <div className="w3-bar btn-paddings">
            <div className="btn-save" type="submit" disabled={this.state.inProgress}>Save</div>
          </div>
        </div>
      </form>
    );
  else if (this.props.tab === 'paymentMethod')
    return (
      <form onSubmit={this.changePassword} className="change-password mx-5">
        {this.state.addPayment && <div class="modal-overlay-password"></div>}
        {this.state.addPayment && <div className="article-page d-flex justify-center modal-container modal-container-payment">
          <div className=" container payment-container">

            <div className="buy__ticket__wrapper d-flex align-items-center flex-column ">
              <div className='cross-button'><i className="fa fa-times text-white" aria-hidden="true" onClick={this.removePaymentMethod}></i>   </div>
              <div className="settings-headings fx-1">Add payment method</div>
              <div className="">
                <div className="b__t__item row">
                  <div className="b__t__field col-md-12 mt-4">
                    <select className="form-control custom-input" onChange={(e) => this.props.onUpdateField('category', e.target.value)}>
                      <option value="credit">Credit Card</option>
                      {this.state.categories && this.state.categories.map(category => (
                        <option value={category.name}>{category.name}</option>
                      ))}
                    </select></div></div>
                <div className="b__t__item row">
                  <div className="b__t__field col-md-12">
                    {/* <p>Credit card holder name</p> */}
                    <input type="text" className="form-control custom-input" placeholder="Card holder name" required />
                  </div>
                </div>
                <div className="b__t__item row">
                  <Number
                    masked
                    onChange={console.log.bind(console, 'Number.onChange')}
                    cardTypes={this.state.restrictAmex ? ['americanExpress'] : []}
                    render={({ value, valid, type, getInputProps }) => (
                      <div className="b__t__field col-md-12">
                        {/* <p>Number</p> */}
                        <input {...getInputProps()} className="form-control custom-input" required />
                      </div>
                    )} />
                </div>
                <div className="b__t__item row">
                  <Expiration
                    onChange={console.log.bind(console, 'Expiration.onChange')}
                    render={({ getInputProps, value, valid, error, month, year }) => (
                      <div className="b__t__field col-md-6">
                        {/* <p>Expiration</p> */}
                        <input {...getInputProps()} className="form-control custom-input" required />
                      </div>
                    )} />
                  <Cvc
                    masked={this.state.maskedCvc}
                    onChange={console.log.bind(console, 'Cvc.onChange')}
                    cardType={this.state.restrictAmex ? 'americanExpress' : undefined}
                    render={({ getInputProps, value, valid }) => (
                      <div className="b__t__field col-md-6">
                        {/* <p>Cvc</p> */}
                        <input {...getInputProps()} className="form-control custom-input" rqeuired />
                      </div>
                    )} />
                  <p className="auth-sub-header3 mt-4 px-3 fx-3 bottom-adding">
                    I accept the Glosfy <a className="link-attribute">terms of service</a>,
                    <a className="link-attribute"> community guidelines </a>and have read the
                    <a className="link-attribute"> privacy policy</a>.
                  </p>
                  <button type="submit" className='continue-button'>Add method</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        }
        <div class="w3-row tablet-center">
          <div class="col-sm-12 col-xs-12">
            <div className="settings-headings fx-1 mt-4">Paymemt Method</div>
            <div class="my-4">
              <img className="mr-3" src={require('../assets/images/masterCard.png')} width="35" />
              <span class="fx-3">0000000000000 - Lorem Ipsum</span>
              <img className="ml-2" src={require('../assets/images/negative.png')} width="20" />
            </div>
            <div class="my-4">
              <img className="mr-3" src={require('../assets/images/visa.png')} width="35" />
              <span class="fx-3">0000000000000 - Lorem Ipsum</span>
              <img className="ml-2" src={require('../assets/images/negative.png')} width="20" />
            </div>

            <div class="payment-button-outline py-4 px-3 fx-3 text-center" onClick={this.addPaymentMethod}>Add Payment Method+</div>
          </div>
          <div className="billing-width">

            <div className="settings-headings fx-1 mt-5">Billing Address</div>
            <div class="d-flex row">
              <fieldset className="form-group col-12">
                <input
                  className="form-control custom-input"
                  type="text"
                  placeholder="Address 1"
                  value={this.props.phone}
                  onChange={(e) => this.updateState('phone', e.target.value)}
                  required
                />
            </fieldset>
            </div>
            <div class="d-flex  row">
              <fieldset className="form-group col-12">
                <input
                  className="form-control custom-input"
                  type="text"
                  placeholder="Address 2"
                  value={this.props.phone}
                  onChange={(e) => this.updateState('phone', e.target.value)}
                  required
                />
            </fieldset>
          </div>
          <div class="d-flex  row">
            <fieldset className="form-group col-12">
              <Geosuggest
                placeholder="City, Country"
                inputClassName="form-control custom-input"
                skipSuggest={(s) => s.types.indexOf('locality') < 0 || s.types.indexOf('political') < 0}
                onSuggestSelect={s => this.parseLocation(s)}
              />
            </fieldset>
          </div>

          <div class="d-flex row">
            <fieldset className="form-group col-12">
              <input
                className="form-control custom-input"
                type="text"
                placeholder="Mobile Phone"
                value={this.props.phone}
                onChange={(e) => this.updateState('phone', e.target.value)}
                required />
            </fieldset>
          </div>

          <div class="d-flex mt-2 row">
            <fieldset className="form-group col-12">
              <input
                className="form-control custom-input"
                type="text"
                placeholder="Postalcode"
                value={this.props.phone}
                onChange={(e) => this.updateState('phone', e.target.value)}
                required />
            </fieldset>
          </div>
          </div>
        </div>

        <div className="row attending-width">
          <div className="w3-bar btn-paddings">
            <div className="btn-save" type="submit" disabled={this.state.inProgress}>Save</div>
          </div>
        </div>
      </form>
    );
  else if (this.props.tab === 'email') {
    return (
      <form onSubmit={this.changePassword} className="change-password mx-5">
        <div class="row"><div class="col-md-12 col-sm-12 col-xs-12">
          <div className="settings-headings fx-1 mt-4">Attending Events</div>
          <div className="fx-3 mt-2">News and updates about events created by event organisers </div>
          <div className="fx-3 mt-4 ml-3">Email Me </div>
          <fieldset className="form-group d-flex fx-3 ml-3">
            {cboxes.map(
              k =>
                <div class="checkbox checkbox-primary">
                  <input id="checkbox2" class="styled" type="checkbox"></input>
                  <label for="checkbox2">
                    {k}
                  </label>
                </div>)}
          </fieldset>
          <div className="fx-3 mt-4 ml-3">Notifications </div>
          <fieldset className="form-group d-flex fx-3 ml-3">
            {cboxes2.map(
              k =>
                <div class="checkbox checkbox-primary">
                  <input id="checkbox2" class="styled" type="checkbox"></input>
                  <label for="checkbox2">
                    {k}
                  </label>
                </div>)}
          </fieldset>
        </div></div>
        <div class="row attending-width">
            <div className="w3-bar btn-paddings">
              <div className="btn-save" type="submit" disabled={this.state.inProgress}>Save</div>
            </div>
        </div>
      </form>
    )
  }
  else if (this.props.tab === 'close')
    return (
        <form onSubmit={this.changePassword} className="change-password rewards-width">
          <div className="point-rewards tablet-center">Close Account</div>

          <div className="tablet-center">
            Thank you for using Glosfy Events. If there is anything we can do to keep you with us, please let us know.
            Please take a moment to let us know why you are leaving:
          </div>

          <ListErrors errors={this.props.warning}></ListErrors>

          <fieldset className="form-group">
            <select className="reason-option">
              <option selected disabled>Choose the reason</option>
              <option>Spain</option>
              <option>Italy</option>
              <option>Russia</option>
              <option>Poland</option>
              <option>India</option>
              <option>South Africa</option>
            </select>

          </fieldset>

          <fieldset className="form-group">
             <input
                className="form-control form-control-lg custom-input left-padding"
                type="text"
                placeholder="Your reason"
                required
             />
          </fieldset>

          <div className="please-top tablet-center">Please enter your password below to confirm that you wish to close your account:</div>

          <fieldset className="form-group">
            <input
              className="form-control form-control-lg custom-input current-psw"
              type="password"
              placeholder="Current Password"

              onChange={this.updateState('newPassword')}
              required
            />
          </fieldset>

          <div className="w3-bar btn-padding">
            <div className="btn-save">Close account</div>
          </div>
        </form>
    );
  else if (this.props.tab === 'points')
    return (
      <div>
        <div className="w3-row rewards-width">
          <div className="point-rewards tablet-center">Points Rewards</div>
          <div className="tablet-center">You can redeem the points at the time you buy a ticket, if ticket value is equal as points it will be free.</div>
          <div className="w3-center">
            <div className="w3-row top-padding">
              <a className="text-bold">1 point</a> is equal to <a className="text-bold">0.1$</a>
            </div>

            <div className="w3-row top-padding">
              for <a className="text-bold">every 10$</a> you accumulate <a className="text-bold">2</a> points
            </div>
          </div>

          <div className="flex-grid-icon">
            <div className="w3-center">
              <img src={require('../assets/images/tickets.png')} width="35"></img>
              <div className="fx-1 text-bold my-2">Total tickets</div>
              <div className="fx-0 my-2 text-blue">10</div>
            </div>

            <div className="w3-center">
              <img src={require('../assets/images/value.png')} width="35"></img>
              <div className="fx-1 text-bold my-2">Value</div>
              <div className="fx-0 my-2 text-blue">$1000</div>
            </div>

            <div className="w3-center">
              <img src={require('../assets/images/points.png')} width="35"></img>
              <div className="fx-1 text-bold my-2">Points accumulated</div>
              <div className="fx-0  my-2 text-blue">100</div>
            </div>
          </div>
        </div>
      </div>
    );
  else
    return (
      <form>
        <h6>Not available yet.</h6>
      </form>
    )
}
}

const mapStateToProps = state => ({
  ...state.settings,
  currentUser: state.common.currentUser,
  isCompany:state.common.isCompany,
  categories: state.common.categories
});

const mapDispatchToProps = dispatch => ({
  onClickLogout: () => dispatch({ type: LOGOUT }),
  onSubmitForm: user =>
    dispatch({ type: SETTINGS_SAVED, payload: agent.Auth.save(user) }),
  onChangePassword: user =>
    dispatch({ type: RESET_PASSWORD, payload: agent.Auth.resetPassword(user) }),
  onUnload: () => dispatch({ type: SETTINGS_PAGE_UNLOADED })
});

class Settings extends React.Component {

  constructor() {
    super();
    this.state = {
      tab: 'overview',
      save: false
    }

    this.updateSettingsStatus = () => {
      this.setState({ save: true });
    }
  }

  render() {
    if (!this.props.currentUser)
      this.props.history.push('/')
    if (this.props.currentUser && this.props.isCompany)
      return (
        <div className="settings-page">
          <div className="">
            <div className="c__h__header">
              <h4>Settings</h4>
            </div>
            <div className="c__h__content container page">
              <div className="settings-sidebar">
                <div className={classNames("settings-sidebar-item", this.state.tab === "overview" && "active")} onClick={() => this.setState({ tab: 'overview' })} >Overview</div>
                <div className={classNames("settings-sidebar-item", this.state.tab === "changePassword" && "active")} onClick={() => this.setState({ tab: 'changePassword' })}>Password</div>
              </div>
              <div className="settings-content">
                <SettingsForm
                  currentUser={this.props.currentUser}
                  onSubmitForm={this.props.onSubmitForm}
                  onChangePassword={this.props.onChangePassword}
                  warning={this.props.warning}
                  errors={this.props.errors}
                  categories={this.props.categories}
                  tab={this.state.tab}
                  updateSettingsStatus={this.updateSettingsStatus}
                />
              </div>
            </div>
          </div>
          <div className={classNames("w__modal__wrapper", this.state.save && 'opened')}>
            <div className="w__modal delete__block">
              <div className="w__modal__header">
                <h3>Alert</h3>
                <i className="fa fa-times" aria-hidden="true" onClick={() => this.setState({ save: false })}></i>
              </div>
              <div className="w__modal__content">
                <p>Saved successfully.</p>
              </div>
              <div className="w__modal__footer">
                <button className="btn" onClick={() => this.setState({ save: false })} >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    return (
      <div className="settings-page">
        <div className="container page">
          <div className="settings-sidebar pt-4">
            <strong className="settings-headings px-3 py-3">My account</strong>
            <div className={classNames("settings-sidebar-item py-2 my-2 px-4", this.state.tab === "overview" && "active")} onClick={() => this.setState({ tab: 'overview' })} >Contact Info</div>
            <div className={classNames("settings-sidebar-item py-2 my-2 px-4", this.state.tab === "changePassword" && "active")} onClick={() => this.setState({ tab: 'changePassword' })}>Password</div>
            <div className={classNames("settings-sidebar-item py-2 my-2 px-4", this.state.tab === "paymentMethod" && "active")} onClick={() => this.setState({ tab: 'paymentMethod' })}>Payment method</div>
            {/* <div className={ classNames("settings-sidebar-item", this.state.tab === "notifications" && "active") } onClick={ () => this.setState({ tab : 'notifications'}) }>Notifications</div> */}
            {/*<div className={ classNames("settings-sidebar-item", this.state.tab === "rewardsPoints" && "active") } onClick={ () => this.setState({ tab : 'rewardsPoints'}) }>Rewards Points</div>*/}
            <div className={classNames("settings-sidebar-item py-2 my-2 px-4", this.state.tab === "email" && "active")} onClick={() => this.setState({ tab: 'email' })}>Email Preferences</div>
            {/* <div className={classNames("settings-sidebar-item py-2 my-2 px-4", this.state.tab === "followedCompanies" && "active")} onClick={() => this.setState({ tab: 'followedCompanies' })}>Affliate Programme</div> */}
            <div className={classNames("settings-sidebar-item py-2 my-2 px-4", this.state.tab === "close" && "active")} onClick={() => this.setState({ tab: 'close' })}>Close Account</div>
            <strong className=" settings-headings px-3 py-3">Points Rewards</strong>
            <div className={classNames("settings-sidebar-item py-2 my-2 px-4", this.state.tab === "points" && "active")} onClick={() => this.setState({ tab: 'points' })}>My points</div>

            {/* <div 
              className={ classNames("settings-sidebar-item", this.state.tab === "logout" && "active")}
              onClick={this.props.onClickLogout} >
              Logout
            </div> */}
          </div>
          <div className="settings-content">
            {/* <div className="rewards-block">
              <h4>Rewards <strong>${this.props.currentUser && Math.floor(this.props.currentUser.rewards)}</strong></h4>
            </div> */}
            <SettingsForm
              currentUser={this.props.currentUser}
              onSubmitForm={this.props.onSubmitForm}
              onChangePassword={this.props.onChangePassword}
              warning={this.props.warning}
              errors={this.props.errors}
              categories={this.props.categories}
              tab={this.state.tab}
              updateSettingsStatus={this.updateSettingsStatus}
            />
          </div>
          <div className={classNames("w__modal__wrapper", this.state.save && 'opened')}>
            <div className="w__modal delete__block">
              <div className="w__modal__header">
                <h3>Alert</h3>
                <i className="fa fa-times" aria-hidden="true" onClick={() => this.setState({ save: false })}></i>
              </div>
              <div className="w__modal__content">
                <p>Saved successfully.</p>
              </div>
              <div className="w__modal__footer">
                <button className="btn" onClick={() => this.setState({ save: false })} >
                  Ok
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
