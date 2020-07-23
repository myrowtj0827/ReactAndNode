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
  REGISTER_PAGE_UNLOADED
} from '../constants/actionTypes';
import Geosuggest from "react-geosuggest";
import DatePicker from "react-datepicker";
import $ from 'jquery';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';


const mapStateToProps = state => ({
  ...state.auth,
  currentUser: state.common.currentUser,
  categories: state.common.categories
});

const mapDispatchToProps = dispatch => ({
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
      startDate: ''
    }

    this.submitForm = () => ev => {
      ev.preventDefault();
      var user = {
        'email': this.props.email,
        'fullname': this.props.fullname,
        'username': this.props.username,
        'birthday': this.props.birthday,
        'phone': this.props.phone,
        'password': this.props.password,
        'category': this.props.category,
        'role': this.props.match.params.role,
        'photos': this.props.photos,
        'locality': this.props.locality,
        'province': this.props.province,
        'country': this.props.country,
        'address': this.props.address,
        'latitude': this.props.latitude,
        'longitude': this.props.longitude,
        'description': this.props.companyDescription
      }
      const payload = agent.Auth.register(user);
      // this.props.onSubmit(payload);
      payload.then(res => {
        _self.props.history.push({
          pathname: '/email-confirmation',
          state: { email: this.props.email }
        });
      }).catch(err => {
        this.props.onSubmit(payload)
      });
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
      agent.Articles.uploadPhoto(fd).then(res => {
        var photos = _self.props.photos;
        if (photos === undefined)
          photos = [];
        photos.push(res.data.photo);
        _self.props.onUpdateField('photos', photos)
        _self.setState({ isUploadig: false })
      });
    }

    this.deletePhoto = (photo) => {
      var photos = this.props.photos;
      photos = photos.filter(function (ele) {
        return ele != photo;
      })
      this.props.onUpdateField('photos', photos);
    }

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
    }

    this.parseAddress = (s) => {
      if (s != undefined) {
        this.props.onUpdateField("latitude", s ? s.location.lat : null);
        this.props.onUpdateField("longitude", s ? s.location.lng : null);
        this.props.onUpdateField("address", s ? s.description : null);
      }
    }

    this.responseFacebook = response => {
      if (response.id) {
        const payload = agent.Auth.facebookAuth(response);
        this.props.onSubmit(payload);
      }
    }
  }

  componentWillMount() {
    // this.props.onLoad();
    $("html, body").animate({ scrollTop: 0 }, 0);
  }

  componentWillUnmount() {
    this.props.onUnload();
  }

  render() {

    if (this.props.currentUser)
      this.props.history.push('/')

    var role = this.props.match.params.role;

    return (
      <div className="auth-page register">
        <div className="container page">
          {/* <div className="auth-photos">
            <div className="auth-photo-1"></div>
            <div className="auth-photo-2"></div>
          </div> */}
          <div className="auth-wrapper">
            <div className="auth-form">
              <h2 className="auth-sub-header1">Sign up</h2>
              {/* <p className="auth-sub-header2">
                Sign up to see the best disccounts,
                places and get your tickets.
              </p> */}





              <form onSubmit={this.submitForm()}>
                <fieldset className="input-group">
                  <fieldset className="form-group">
                    <input
                      className="form-control custom-input"
                      type="email"
                      placeholder="Email address"
                      value={this.props.email}
                      onChange={(e) => this.props.onUpdateField('email', e.target.value)}
                      required />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control custom-input"
                      type="text"
                      placeholder={role === 'company' ? "Company name" : "Full name"}
                      value={this.props.fullname}
                      onChange={(e) => this.props.onUpdateField('fullname', e.target.value)}
                      required />
                  </fieldset>
                  <fieldset className="form-group">
                    <input
                      className="form-control custom-input"
                      type="text"
                      placeholder="Username"
                      value={this.props.username}
                      onChange={(e) => this.props.onUpdateField('username', e.target.value)}
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
                  {
                    role === 'company' && (
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
                        <fieldset className="form-group">
                          <Geosuggest
                            placeholder="City, Country"
                            inputClassName="form-control"
                            skipSuggest={(s) => s.types.indexOf('locality') < 0 || s.types.indexOf('political') < 0}
                            onSuggestSelect={s => this.parseLocation(s)}
                          />
                        </fieldset>
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
                      value={this.props.password}
                      onChange={(e) => this.props.onUpdateField('password', e.target.value)}
                      required />
                  </fieldset>

                  <fieldset className="form-group">
                    <input
                      className="form-control custom-input"
                      type="password"
                      placeholder="Re-enter password"
                      value={this.props.rePassword}
                      onChange={(e) => this.props.onUpdateField('rePassword', e.target.value)}
                      required />
                  </fieldset>
                  <fieldset className="form-group">
                    <button
                      className="btn submit-btn"
                      type="submit"
                      disabled={this.props.inProgress}>
                      Get Started
                    </button>
                  </fieldset>

                </fieldset>
                <div class="text-seperator">or</div>
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
              </form>


              <ListErrors errors={this.props.errors} />

              <p className="auth-sub-header3">
                By continuing, I accept the Glosfy <a className="link-attribute">terms of service</a>,
              <a className="link-attribute"> community guidelines </a>and have read the
              <a className="link-attribute"> privacy policy</a>.
              </p>
              <div className="extra-width"><div >Already have an account ?</div></div>
              <fieldset className="form-group">
                <button
                  className="btn submit-btn"
                  type="submit"
                  disabled={this.props.inProgress}>
                  Log In
                    </button>
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
