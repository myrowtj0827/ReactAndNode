import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import ListErrors from './ListErrors';
import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';
import {
  UPDATE_FIELD_AUTH,
  REGISTER,
  REGISTER_PAGE_LOADED,
  REGISTER_PAGE_UNLOADED,
  SWITCH_LOADER
} from '../constants/actionTypes';
import Geosuggest from "react-geosuggest";
import DatePicker from "react-datepicker";
import $ from 'jquery';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { COMPANY, USER } from "../constants";
import { register } from "../http/http-calls";
import Alert from '../components/Alert';

const mapStateToProps = state => ({
  ...state.auth,
  currentUser: state.common.currentUser,
  categories: state.common.categories
});

const mapDispatchToProps = dispatch => ({
  switchLoader: (isActive, loaderText) =>
    dispatch({ type: SWITCH_LOADER, isActive: isActive, loaderText: loaderText }),
  onUpdateField: (key, value) =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: key, value }),
  onSubmit: (payload) => {
    dispatch({ type: REGISTER, payload })
  },
  onLoad: () => {
    const payload = agent.Articles.getAll();
    dispatch({ type: REGISTER_PAGE_LOADED, payload })
  },
  onUnload: () =>
    dispatch({ type: REGISTER_PAGE_UNLOADED })
});

class Register extends React.Component {

  constructor() {
    super();

    var _self = this;

    this.state = {
      firstName: '',
      lastName: '',
      companyName: '',
      companyLocation: '',
      email: '',
      password: '',
      phoneNumber: '',
      confirmPassword: '',
      startDate: '',
      fullName: '',
      alertOpen: false,
      alertType: ''
    };

    this.submitForm = () => ev => {
      ev.preventDefault();
      let user = {
        'email': this.props.email,
        'firstName': this.props.firstName,
        'lastName': this.props.lastName,
        'companyName': this.props.companyName,
        'fullName': this.props.fullname,
        'birthday': this.props.birthday,
        'phone': this.props.phone,
        'password': this.props.password,
        'category': this.props.category,
        'role': this.props.role,
        'photos': this.props.photos,
        'locality': this.props.locality,
        'province': this.props.province,
        'country': this.props.country,
        'address': this.props.address,
        'latitude': this.props.latitude,
        'longitude': this.props.longitude,
        'description': this.props.companyDescription
      };

      const payload = agent.Auth.register(user);
      // this.props.onSubmit(payload);
      payload.then(res => {
        _self.props.history.push({
          pathname: '/email-verification',
          state: { email: this.props.email }
        });
      }).catch(err => {
        this.props.onSubmit(payload)
      });
    };

    this.handleSelectedFile = ev => {
      const fd = new FormData();
      const _self = this;
      let file = ev[0];
      if (ev.target) {
        file = ev.target.files[0];
      }
      fd.append('fname', 'comment');
      fd.append('data', file);
      agent.Articles.uploadPhoto(fd).then(res => {
        var photos = _self.props.photos;
        if (photos === undefined)
          photos = [];
        photos.push(res.data.photo);
        _self.props.onUpdateField('photos', photos)
        _self.setState({ isUploadig: false })
      });
    };

    this.deletePhoto = (photo) => {
      var photos = this.props.photos;
      photos = photos.filter(function (ele) {
        return ele != photo;
      });

      this.props.onUpdateField('photos', photos);
    };

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
        this.props.onUpdateField("locality", locality);
        this.props.onUpdateField("province", province);
        this.props.onUpdateField("country", country);
      }
    };

    this.parseAddress = (s) => {
      if (s != undefined) {
        this.props.onUpdateField("latitude", s ? s.location.lat : null);
        this.props.onUpdateField("longitude", s ? s.location.lng : null);
        this.props.onUpdateField("address", s ? s.description : null);
      }
    };

    this.responseFacebook = response => {
      if (response.id) {
        const payload = agent.Auth.facebookAuth(response);
        this.props.onSubmit(payload);
      }
    }
  }

  handleOpenAlert = (msg, type) => {
    this.setState({ alertOpen: true, alertMessage: msg, alertType: type });
  }

  handleCloseAlert = () => {
    this.setState({ alertOpen: false });
  }

  componentWillMount() {
    $("html, body").animate({ scrollTop: 0 }, 0);
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  /**
   * Make login api call and navigate to dashboard after login
   */
  _register = () => {

    const { role } = this.props;
    let data;

    const {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      companyName,
      companyLocation,
      fullName,
    } = this.state;

    if (role === COMPANY) {
      data = {
        email,
        password,
        role: "Company",
        company: {
          firstName,
          lastName,
          phone: phoneNumber,
          companyName,
          companyLocation: {
            line1: 'test',
            line2: '1st floor',
            city: 'Chennai',
            country: 'IN',
            state: 'TN',
            postal_code: '600050'
          }
        }
      };
    } else if (role === USER) {
      data = {
        email,
        password,
        role: "Customer",
        customer: {
          fullName
        }
      };
    }

    console.log('payload: ', data);
    this.props.switchLoader(true, 'Signing Up');

    register(data)
      .then(response => {

        console.log('response', response);
        this.props.switchLoader(false);
        localStorage.setItem('role', data.role);
        localStorage.setItem('email', data.email);

        if (response.status == "success") {

          this.handleOpenAlert('Register Successfully!', 'success');
          localStorage.setItem('role', response.role);
          let url = role === COMPANY && response.role === COMPANY ? "/company/login" : "/login";
          setTimeout(() => {
            this.props.history.push(url);
          }, 2000);
        } else if (response.error && response.error.status && response.error.status === 'failure') {
          // this.handleOpenAlert('Unable to Register! Try again!', 'error');
          this.handleOpenAlert(response.error.message, 'error');
        } else {
          this.handleOpenAlert('Unable to Register! Try again!', 'error');
        }

      }, error => {
        this.props.switchLoader(false);
        this.handleOpenAlert('Unable to Register! Try again!', 'error');
      });
  };

  onUpdateField = (key, value) => {
    this.setState({ [key]: value });
  };

  render() {

    if (this.props.currentUser)
      this.props.history.push('/');

    const role = this.props.role;
    const _self = this;

    this.login = () => {
      if (role === USER) {
        _self.props.history.push({
          pathname: '/login'
        });
      }
      else if (role === COMPANY) {
        _self.props.history.push({
          pathname: '/company/login'
        });
      }
    };

    const {
      firstName,
      lastName,
      fullName,
      companyName,
      email,
      companyLocation,
      phoneNumber,
      password,
      confirmPassword
    } = this.state;

    console.log('role', role);

    return (
      <div className="auth-page register">
        <Alert message={this.state.alertMessage}
          severity={this.state.alertType}
          open={this.state.alertOpen}
          handleclose={this.handleCloseAlert} />
        {role === COMPANY && <h2 className="auth-sub-header1 mt-4">Company Registration</h2>}

        {role === COMPANY && <div className="d-flex flex-column align-center ">

          <div className="reg-width">
            <div className="d-flex  mt-4 row">
              <fieldset className="form-group col-md-6">
                <input
                  className="form-control custom-input"
                  type="email"
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => this.onUpdateField('firstName', e.target.value)}
                  // value={this.props.firstName}
                  // onChange={ (e) => this.props.onUpdateField('firstName', e.target.value)}
                  required />
              </fieldset>

              <fieldset className="form-group col-md-6">
                <input
                  className="form-control custom-input"
                  type="text"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => this.onUpdateField('lastName', e.target.value)}
                  // value={this.props.lastName}
                  // onChange={ (e) => this.props.onUpdateField('lastName', e.target.value)}
                  required />
              </fieldset>
            </div>

            <div className="d-flex mt-2 row">
              <fieldset className="form-group  col-md-6">
                <input
                  className="form-control custom-input"
                  type="email"
                  placeholder="Company Name"
                  value={companyName}
                  onChange={(e) => this.onUpdateField('companyName', e.target.value)}
                  // value={this.props.companyName}
                  // onChange={ (e) => this.props.onUpdateField('companyName', e.target.value)}
                  required />
              </fieldset>

              <fieldset className="form-group col-md-6">
                <Geosuggest
                  placeholder="Company Location"
                  inputClassName="form-control custom-input"
                  skipSuggest={(s) => s.types.indexOf('locality') < 0 || s.types.indexOf('political') < 0}
                  onSuggestSelect={s => this.parseLocation(s)}
                />
              </fieldset>

            </div>
            <div className="d-flex  mt-2 row">
              <fieldset className="form-group col-md-6">
                <input
                  className="form-control custom-input"
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => this.onUpdateField('email', e.target.value)}
                  // value={this.props.email}
                  // onChange={ (e) => this.props.onUpdateField('email', e.target.value)}
                  required />
              </fieldset>

              <fieldset className="form-group col-md-6">
                <input
                  className="form-control custom-input"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => this.onUpdateField('password', e.target.value)}
                  // value={this.props.password}
                  // onChange={ (e) => this.props.onUpdateField('password', e.target.value)}
                  required />
              </fieldset>

            </div>
            <div className="d-flex mt-2 row">
              <fieldset className="form-group col-md-6">
                <input
                  className="form-control custom-input"
                  type="text"
                  placeholder="Phone number"
                  value={phoneNumber}
                  onChange={(e) => this.onUpdateField('phoneNumber', e.target.value)}
                  // value={this.props.phone}
                  // onChange={ (e) => this.props.onUpdateField('phone', e.target.value)}
                  required />
              </fieldset>

              <fieldset className="form-group col-md-6" >
                <input
                  className="form-control custom-input "
                  type="password"
                  placeholder="Re-enter password"
                  value={confirmPassword}
                  onChange={(e) => this.onUpdateField('confirmPassword', e.target.value)}
                  // value={this.props.rePassword}
                  // onChange={ (e) => this.props.onUpdateField('rePassword', e.target.value)}
                  required />
              </fieldset>

            </div>
          </div>

        </div>}
        <div className="container page">
          {/* <div className="auth-photos">
            <div className="auth-photo-1"></div>
            <div className="auth-photo-2"></div>
          </div> */}
          <div className="auth-wrapper">
            <div className="auth-form">
              {role === USER && <h2 className="auth-sub-header1">{role} Sign up</h2>}

              {/* <p className="auth-sub-header2">
                Sign up to see the best disccounts,
                places and get your tickets.
              </p> */}

              {/*<form onSubmit={this.submitForm()}>*/}
              <div>
                {role === USER && <fieldset className="input-group">
                  <fieldset className="form-group">
                    <input
                      className="form-control custom-input"
                      type="email"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => this.onUpdateField('email', e.target.value)}
                      // value={this.props.email}
                      // onChange={ (e) => this.props.onUpdateField('email', e.target.value)}
                      required />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control custom-input"
                      type="text"
                      placeholder={role === COMPANY ? "Company name" : "Full name"}
                      value={fullName}
                      onChange={(e) => this.onUpdateField('fullName', e.target.value)}
                      // value={this.props.fullname}
                      // onChange={ (e) => this.props.onUpdateField('fullname', e.target.value)}
                      required />
                  </fieldset>
                  {/*<fieldset className="form-group">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Phone number"
                        value={this.props.phone}
                        onChange={ (e) => this.props.onUpdateField('phone', e.target.value)}
                        />
                    </fieldset>*/}
                  {role === COMPANY && (
                    <Fragment>
                      {/*<fieldset className="form-group">
                            <select className="form-control" onChange={ (e) => this.props.onUpdateField('category', e.target.value) }>
                              <option value="">Category</option>
                              { this.props.categories && this.props.categories.map( category => (
                                 <option value={category.name}>{category.name}</option>
                                ))}
                            </select>
                          </fieldset>
                          <fieldset className="form-group">
                            <input
                              className="form-control"
                              type="text"
                              placeholder="Description"
                              value={this.props.companyDescription}
                              onChange={ (e) => this.props.onUpdateField('companyDescription', e.target.value)}
                              />
                          </fieldset>
                          <fieldset className="form-group">
                            <Geosuggest
                              placeholder="Enter your company's full address"
                              inputClassName="form-control"
                              onChange={ (s) => this.props.onUpdateField('address', s) }
                              onSuggestSelect={s => this.parseAddress(s)}
                          />
                        </fieldset>*/}

                    </Fragment>
                  )
                  }

                  {/*<fieldset className="form-group calendar-field">
                      <input
                        className="form-control"
                        type="date"
                        placeholder="Birthday"
                        value={this.props.birthday}
                        onChange={ (e) => this.props.onUpdateField('birthday', e.target.value)}
                      />
                    </fieldset>*/}

                  <fieldset className="form-group">
                    <input
                      className="form-control custom-input"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => this.onUpdateField('password', e.target.value)}
                      // value={this.props.password}
                      // onChange={ (e) => this.props.onUpdateField('password', e.target.value)}
                      required />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control custom-input"
                      type="password"
                      placeholder="Re-enter password"
                      value={confirmPassword}
                      onChange={(e) => this.onUpdateField('confirmPassword', e.target.value)}
                      // value={this.props.rePassword}
                      // onChange={ (e) => this.props.onUpdateField('rePassword', e.target.value)}
                      required />
                  </fieldset>
                </fieldset>}

                <fieldset className="form-group mt-4">
                  <button
                    className="btn submit-btn"
                    type="submit"
                    disabled={this.props.inProgress}
                    onClick={this._register}
                  >
                    Get Started
                    </button>

                </fieldset>
                <div className="text-seperator">or</div>
                <fieldset className="form-group">
                  <FacebookLogin
                    appId="2136840116623024"
                    callback={this.responseFacebook}
                    render={renderProps => (
                      <button onClick={renderProps.onClick} className="btn facebook">
                        <i className="fa fa-facebook-square" aria-hidden="true"></i>
                        <span>Continue with Facebook</span>
                      </button>
                    )}
                  />
                </fieldset>

              </div>

              <ListErrors errors={this.props.errors} />

              <p className="auth-sub-header3">
                By continuing, I accept the Glosfy <a className="link-attribute">terms of service</a>,
                  <a className="link-attribute"> community guidelines </a>and have read the
                  <a className="link-attribute"> privacy policy</a>.
                </p>
              <div className="extra-width"><div >Already have an account ?</div></div>
              <fieldset className="form-group">

                {/*<Link to="/companies" onClick={() => props.setHeaderFooterVisible(false)}><p>*/}

                <button
                  className="btn submit-btn"
                  type="submit"
                  onClick={this.login}
                  disabled={this.props.inProgress}>
                  Log In
                  </button>

                {/*</p></Link>*/}

              </fieldset>
            </div>

            {/* <div className="mobile-apps">
              <p>Get the app</p>
              <div className="mobile-photos">
                <div className="mobile-photo1"></div>
                <div className="mobile-photo2"></div>
              </div>
            </div> */}
          </div>

        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
