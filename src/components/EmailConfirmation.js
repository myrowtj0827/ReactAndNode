import { Link } from 'react-router-dom';
import React from 'react';
import agent from '../agent';
import { connect } from 'react-redux';
import {
  UPDATE_FIELD_AUTH,
} from '../constants/actionTypes';
import { register, verification } from "../http/http-calls";
import { COMPANY, USER } from "../constants";
import _register from "./Register";
import Alert from '../components/Alert';

const mapStateToProps = state => ({ ...state.auth });

const mapDispatchToProps = dispatch => ({
  onChangeConfirmation: value =>
    dispatch({ type: UPDATE_FIELD_AUTH, key: 'confirmation', value }),
});

class EmailConfirmation extends React.Component {
  constructor() {
    super();
    this.state = {
      resend: '',
      alertOpen: false,
      alertType: ''
    };

    this.resend = () => {
      // agent.Auth.resend(this.props.location.state.email);
      // this.setState({resend: 'Resent at ' + new Date().toString() })
    }
  }

  componentDidMount() {
    this._verify();
  }

  handleOpenAlert = (msg, type) => {
    this.setState({ alertOpen: true, alertMessage: msg, alertType: type });
  }

  handleCloseAlert = () => {
    this.setState({ alertOpen: false });
  }

  _verify = () => {
    const role = localStorage.getItem('role');
    const email = localStorage.getItem('email');

    const str = this.props.location.search;
    const verificationKey = str.slice(7,);

    const data = {
      email,
      verificationKey
    };

    verification(data)
      .then(response => {

        if (role === COMPANY) {
          this.handleOpenAlert("Succeeded Verification as Company !", 'success');
          this.props.history.push("/company/login");
        } else if (role === USER) {
          this.handleOpenAlert("Succeeded Verification as Customer !", 'success');
          this.props.history.push("/login");
        }
      }, error => {
        this.handleOpenAlert("Failed Verification. Please resend Email !", 'error');
      });
  };

  componentWillUnmount() {
  }

  render() {
    return (
      <div className="auth-page confirmation">
        <Alert message={this.state.alertMessage}
          severity={this.state.alertType}
          open={this.state.alertOpen}
          handleclose={this.handleCloseAlert} />
        <div className="container page">
          <div className="row">
            <div className="col-md-12 col-xs-12 text-xs-center">
              <h1 className="auth-sub-header1">
                Verify email
              </h1>
              <p className="auth-sub-header2">
                {/*<Link to="/company/login" />*/}
                We have sent an e-mail to you for verification.
              </p>
              {this.props.location.state === undefined && (
                <React.Fragment>
                  <button onClick={this.resend} className="btn btn-black">
                    Resend
                </button>
                  <p className="auth-sub-header3">{this.state.resend && this.state.resend}</p>
                </React.Fragment>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailConfirmation);
