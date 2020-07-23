import ListErrors from './ListErrors';
import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';
import {
  UPDATE_FIELD_AUTH,
  LOGIN,
  LOGIN_PAGE_UNLOADED,
  SWITCH_LOADER
} from '../constants/actionTypes';
import $ from 'jquery';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import { COMPANY, USER } from "../constants";
import { login, fblogin } from "../http/http-calls"
import { Link, withRouter } from 'react-router-dom';
import Alert from '../components/Alert';

const mapStateToProps = state => ({
  ...state.auth,
  currentUser: state.common.currentUser,
  token: state.common.token
});

const mapDispatchToProps = dispatch => ({
  switchLoader: (isActive, loaderText) =>
    dispatch({ type: SWITCH_LOADER, isActive: isActive, loaderText: loaderText }),
  onChangeEmail: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'email', value }),
  onChangePassword: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'password', value }),
  onSubmit: (payload) =>
    dispatch({ type: LOGIN, payload }),
  onUnload: () =>
    dispatch({ type: LOGIN_PAGE_UNLOADED })
});

class Login extends React.Component {
  constructor(props) {
    super(props);
    console.log(props,'--------------');
    this.state = {
      alertOpen: false,
      alertType: 'error'
    }
    var _self = this;

    this.changeEmail = ev => this.props.onChangeEmail(ev.target.value);
    this.changePassword = ev => this.props.onChangePassword(ev.target.value);
    this.register = () => {
      const { role } = this.props;
      if (role === USER) {
        _self.props.history.push({
          pathname: `/register`
        });
      }

      if (role === COMPANY) {
        this.props.history.push({
          pathname: '/company/register'
        });
      }
    };

    this.registerCompany = () => {
      this.props.history.push({
        pathname: '/company/register'
      });

      // const {role} = this.props;
      // if (role === USER) {
      //   _self.props.history.push({
      //     pathname: '/register/user'
      //   });
      // }
      // else
      // {
      //   this.props.history.push({
      //     pathname: '/register/company'
      //   });
      // }
    };

    this.submitForm = (email, password) => ev => {
      ev.preventDefault();
      let user = {
        'email': this.props.email,
        'password': this.props.password,
      };

      var payload = agent.Auth.login(email, password);
      payload.then(res => {
        if (res.errors) {
          _self.props.history.push({
            pathname: '/email-confirmation',
            state: { email: email }
          });
        }
        else {
          if (_self.props.location.state && _self.props.location.state.callback)
            _self.props.onSubmit(payload, _self.props.location.state.callback);
          else
            _self.props.onSubmit(payload);
        }
      }).catch(err => {
        _self.props.onSubmit(payload);
      })
    };

    this.responseFacebook = response => {

      const { role } = this.props;
      console.log('responseFacebook', role, response);
      if (response.id) {

        let user = {
          role: role,
          accessToken: response.accessToken
        };
        console.log('user', user);

        return fblogin(user)
          .then(response => {

            console.log('fblogin response', role, response);

            if (response.status == "success") {
              localStorage.setItem('role', response.role);
              if (role === COMPANY && (response.role === COMPANY || response.role === "company")) {
                this.props.onSubmit({ user: response });
                this.props.history.push("/companies/edit");
              } else if (role === USER && (response.role === USER || response.role === "customer")) {
                this.props.onSubmit({ user: response });
                this.props.history.push("/");
              } else {
                if ((response.role === COMPANY || response.role === "compnay") && role === USER)
                  this.handleOpenAlert('Please try login with user account!');
                else if ((response.role === USER || response.role === "customer") && role === COMPANY)
                  this.handleOpenAlert('Please try login with company account!');
              }
            } else if (response.error && response.error.status && response.error.status === 'failure') {
              this.handleOpenAlert(response.error.message);
            } else {
              this.handleOpenAlert('Failed Login. Please try the login again !');
            }

          }).catch(error => {

            console.log('error', error);
            this.props.switchLoader(false);
            this.handleOpenAlert('Failed Login. Please try the login again !');
          });
      }
    }
  }
  handleOpenAlert = (alertMessage) => {
    this.setState({ alertOpen: true, alertMessage: alertMessage })
  }

  handleCloseAlert = () => {
    this.setState({ alertOpen: false });
  }
  componentDidMount() {

  }

  componentDidUpdate(prevProps): void {
    const { role } = this.props;
    if (prevProps.role !== role) {
    }
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
  _login = () => {
    const {
      role
    } = this.props;

    const {
      email,
      password
    } = this.props;

    const data = {
      email,
      password
    };

    console.log('role', role, data);
    this.props.switchLoader(true, 'LoginLoading');
    return login(data)
      .then(response => {

        console.log('response', response);
        this.props.switchLoader(false);

        if (response.status == "success") {
          localStorage.setItem('role', response.role);
          if (role === COMPANY && response.role === COMPANY) {
            this.props.onSubmit({ user: response });
            this.props.history.push("/companies/edit");
          } else if (role === USER && response.role === USER) {
            this.props.onSubmit({ user: response });
            this.props.history.push("/");
          } else {
            if (response.role === COMPANY && role === USER)
              this.handleOpenAlert('Please try login with user account!');
            else if (response.role === USER && role === COMPANY)
              this.handleOpenAlert('Please try login with company account!');
          }
        } else if (response.error && response.error.status && response.error.status === 'failure') {
          this.handleOpenAlert(response.error.message);
        } else {
          this.handleOpenAlert('Failed Login. Please try the login again !');
        }

      }).catch(error => {

        console.log('error', error);
        this.props.switchLoader(false);
        this.handleOpenAlert('Failed Login. Please try the login again !');
      });
  };
  render() {
    const { role } = this.props;
    let buttonText = role === USER ? "User Registration" : "Company Registration";

    // - Commented
    // if (this.props.currentUser)
    //   this.props.history.push({
    //     hash: '#ticket-info',
    //     pathname: this.props.location.state && this.props.location.state.callback ? this.props.location.state.callback : '/',
    //     state: this.props.location.state
    //   });

    const email = this.props.email || '';
    const password = this.props.password || '';
    var _self = this;
    this.forgotPassword = () => {
      _self.props.history.push({
        pathname: '/forgot'
      });
    };
    return (
      <div className="auth-page login">
        <Alert message={this.state.alertMessage}
          severity={this.state.alertType}
          open={this.state.alertOpen}
          handleclose={this.handleCloseAlert} />
        <div className="container page">
          <div className="auth-wrapper">

            <div className="auth-form">
              <h1 className="auth-sub-header1">
                {role} Log in or <span className="link-hover" onClick={this.register}>Sign up</span>
              </h1>
              {/* <p className="text-xs-center auth-sub-header2">
                Use Facebook or email to get started
              </p> */}
              {/* onSubmit={this.submitForm(email, password)} */}


              <div className="w3-row margin-top-30">

                <ListErrors errors={this.props.errors} />

                <fieldset className="w3-row form-group max-width100">
                  <input
                    className="form-control custom-input"
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={this.changeEmail} />
                </fieldset>
                <br/>

                <fieldset className="w3-row form-group max-width100">
                  <input
                    className="form-control custom-input"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={this.changePassword} />
                </fieldset>

                <br/>
                <div className="w3-row forgot-password max-width100" onClick={this.forgotPassword}>Forgot Password ?</div>

                <fieldset className="w3-row form-group max-width100">
                  <button
                    className="btn form-control submit-btn"
                    disabled={this.props.inProgress}
                    onClick={this._login}
                  >
                    Get Started
                  </button>
                </fieldset>
              </div>

              <p className="separator">or</p>

              <fieldset>
                <FacebookLogin
                  appId="3159176144135739"
                  callback={this.responseFacebook}
                  render={renderProps => (
                    <button onClick={renderProps.onClick} className="btn facebook">
                      <i className="fa fa-facebook-square" aria-hidden="true"></i>
                      <span>Continue with Facebook</span>
                    </button>
                  )}
                />
              </fieldset>

              <p className="auth-sub-header3">
                By continuing, I accept the Glosfy <a className="link-attribute">terms of service</a>,
                  <a className="link-attribute"> community guidelines </a>and have read the
                  <a className="link-attribute"> privacy policy</a>.
                </p>

              <div className="company-registration-text"><div >Want to create your own event?</div></div>

              <fieldset className="form-group">
                <button
                  className="btn submit-btn"
                  type="submit"
                  onClick={this.registerCompany}
                  disabled={this.props.inProgress}>
                  {/*{buttonText}*/}
                    Company Registration
                  </button>
              </fieldset>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
