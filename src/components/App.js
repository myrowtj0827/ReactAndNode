import agent from '../agent';
import Header from './Header';
import Footer from './Footer';
import React from 'react';
import { connect } from 'react-redux';
import { APP_LOAD, REDIRECT, APPLY_TAG_FILTER, LOGOUT, LOGIN, SWITCH_LOADER,SET_ROLE_PERMISSION } from '../constants/actionTypes';
import { Route, Switch,Redirect, BrowserRouter as Router,useLocation } from 'react-router-dom';
import Article from '../components/Article';

// import Editor from '../components/Editor';
import Home from '../components/Home';
import Login from '../components/Login';
import Profile from '../components/Profile';
import ProfileFavorites from '../components/ProfileFavorites';
import Register from '../components/Register';
import Settings from '../components/Settings';
import Company from '../components/Company';
import SideBar from '../components/Company/SideBar';
import Dashboard from '../components/Company/Dashboard';
import Calendar from '../components/Company/Calendar';
import Editor from '../components/Company/Editor';
import Purchase from '../components/Purchase';
import EmailConfirmation from '../components/EmailConfirmation';
import { store } from '../store';
import { push } from 'react-router-redux';
import '../assets/scss/main.scss'
import ForgotPassword from './Forgot';
import Help from './Help';
import Search from './Search/index';
import User from './User/index';
import Notification from './Notification';
import Tickets from './User/tickets.js';
import About from './About'
import Blog from './Blog';
import BlogNews from './BlogNews';
import Investors from './Investors.js';
import Security from './Security.js';
import Career from './Career.js';
import CareerDetails from './CareerDetails.js';
import Cookies from './Cookies.js';
import Terms from './Terms.js';
import Privacy from './Privacy.js';
import Packages from './Packages.js';
import Organiser from './Organiser/index.js'
import LoadingOverlay from 'react-loading-overlay';
// Myroslav 05/05/2020
import Companies from '../components/CompanyDashboard/Company';
import RouteGuard from './RouteGuard'
import FAQ from './FAQ.js';
import { COMPANY, USER } from "../constants";
const mapStateToProps = state => {
  return {
    appLoaded: state.common.appLoaded,
    appName: state.common.appName,
    token: state.common.token,
    currentUser: state.common.currentUser,
    redirectTo: state.common.redirectTo,
    categories: state.common.categories,
    loaderState: state.common.loaderState,
    loaderText: state.common.loaderText,
    isCompany:state.common.isCompany
  }
};

const mapDispatchToProps = dispatch => ({
  onLoad: (payload, token) =>
    dispatch({ type: APP_LOAD, payload, token, skipTracking: true }),
  onRedirect: () =>
    dispatch({ type: REDIRECT }),
  onClickCategory: (tag, pager, payload) =>
    dispatch({ type: APPLY_TAG_FILTER, tag, pager, payload }),
  onClickLogout: () => dispatch({ type: LOGOUT }),
  getCurrentUser: (payload) => {
    dispatch({ type: LOGIN, payload })
  }
});
class App extends React.Component {

  constructor() {
    super();

    this.advancedSearch = (ev, askey) => {
      if (ev.key === 'Enter') {
        if (askey !== '')
          this.props.history.push('/a/' + askey);
        else
          this.props.history.push('/');
      }
    }
  }

  state = {
    headerFooterVisible: true
  };

  componentWillReceiveProps(nextProps) {
    console.log("sssssss",nextProps.redirectTo);
    if (nextProps.redirectTo) {
      // this.context.router.replace(nextProps.redirectTo);
      store.dispatch(push(nextProps.redirectTo));
      this.props.onRedirect();
    }
  }

  componentWillMount() {
    // const token = window.localStorage.getItem('jwt');
    const token = this.props.token;
    if (token) {
      agent.setToken(token);
    }
    //debugger;
    console.log('token', token);
    // this.props.onLoad(Promise.all([token ? agent.Auth.current() : null, agent.Articles.getAllCategories()]), token);
    
    this.props.onLoad(Promise.all([token ? agent.Auth.current() : null]),token);  
    
    //store.dispatch({ type: SET_ROLE_PERMISSION});
    // agent.Auth.current().then(res => {

    //   console.log('cu', res);
    //   this.props.getCurrentUser({ user: res  });
    // });

  }

  // Myroslav 05/05/2020
  setHeaderFooterVisible = (visible) => {
    this.setState({ headerFooterVisible: visible });
  };

  render() {
    //debugger;
    const isCompany = this.props.token && this.props.isCompany;
    const isCustomer = this.props.token && !this.props.isCompany;
    const isAuth = this.props.token;

    const path = this.props.location.pathname;
    const isSetting = path.indexOf('/settings') > -1;

    if (this.props.appLoaded) {
      if (this.props.currentUser && this.props.isCompany)
        return (
          <div>
            <Header
              appName={this.props.appName}
              currentUser={this.props.currentUser}
              isCompany={this.props.isCompany}
              onClickLogout={this.props.onClickLogout}
              advancedSearch={this.advancedSearch} />
            <div className={isSetting && "company-board-container"}>
              {
                isSetting && (
                  <SideBar />
                )
              }
              <div className="content">
              <Router forceRefresh={true}>
                <Switch>
                  <Route exact path="/" component={Home} key="home" />
                  <Route path="/a/:askey" component={Home} key="advancedSearch" />
                  <Route path="/s/:search" component={Home} key="search" />
                  <Route path="/t/:tag" component={Home} key="tag" />
                  <Route path="/c/:category" component={Home} key="category" />
                  <Route path="/event/:id/" component={Article} />
                  <RouteGuard exact path='/login' isAuthenticated={!isAuth} component={Login} role={USER} />
                  <RouteGuard exact path='/company/login' isAuthenticated={!isAuth} component={Login} role={COMPANY} />
                  <RouteGuard exact path='/register' isAuthenticated={!isAuth} component={Register} role={USER} />
                  <RouteGuard exact path='/company/register' isAuthenticated={!isAuth} component={Register} role={COMPANY} />
                  {/*<Route path="/login" render={({ history }) => {
                                        return (
                                          <Login
                                            role="Customer"
                                            history={history}
                                          />
                                        )
                                      }}
                                    />
                                    <Route path="/company/login" render={({ history }) => {
                                        return (
                                          <Login
                                            role="Company"
                                            history={history}
                                          />
                                        )
                                      }}
                                    />
                                    <Route path="/register" render={({ history }) => (
                                        <Register
                                          role='Customer'
                                          history={history}
                                        />
                                      )}
                                    />
                                    <Route path="/company/register" render={({ history }) => (
                                        <Register
                                          role='Company'
                                          history={history}
                                        />
                                      )}
                                    />*/}
                  <Route path="/settings/event/:slug?" component={Editor} key="event" />
                  <Route path="/settings/calendar" component={Calendar} key="calendar" />
                  <Route path="/settings/dashboard" component={Dashboard} key="dashboard" />
                  <Route path="/settings/home" component={Company} key="shome" />
                  <Route path="/settings/info" component={Settings} />
                  <Route path="/forgot" component={ForgotPassword} />
                  <Route path="/search/:key" component={Search} />
                  <Route path="/about" component={About} />
                  <Route path="/blog" component={Blog} />
                  <Route path="/blogNews" component={BlogNews} />
                  <Route path="/investors" component={Investors} />
                  <Route path="/security" component={Security} />
                  <Route path="/careers" component={Career} />
                  <Route path="/careerDetails/:company" component={CareerDetails} />
                  <Route path="/cookies" component={Cookies} />
                  <Route path="/privacy" component={Privacy} />
                  <Route path="/terms" component={Terms} />
                  <Route path="/packages" component={Packages} />
                  <Route path="/faq" component={FAQ} />
                  <Route path="/org/:name" component={Organiser} />
                  <Route path="/companies" render={() => {
                      return (
                        <Companies
                          setHeaderFooterVisible={this.setHeaderFooterVisible}
                        />
                      )
                    }}
                  />
                  <Redirect to="/"/>
                </Switch>
                </Router>
              </div>
            </div>
            {!isSetting && (
              <Footer
                onClickCategory={this.props.onClickCategory}
              />
            )}
          </div>
        );

      // Myroslav 05/09/2020
      const { headerFooterVisible } = this.state;

      return (
        <LoadingOverlay
          active={this.props.loaderState}
          spinner
          text={this.props.loaderText}
          styles={{
            overlay: (base) => ({
              ...base,
              position: 'fixed'
            })
          }}
        >
          <div>
            {/*Myroslav 05/09/2020*/}
            {
              headerFooterVisible ? (
                <Header
                  appName={this.props.appName}
                  currentUser={this.props.currentUser}
                  isCompany={this.props.isCompany}
                  onClickLogout={this.props.onClickLogout}
                  advancedSearch={this.advancedSearch}
                  setHeaderFooterVisible={this.setHeaderFooterVisible}
                />
              ) : null
            }

            {/*<Header*/}
            {/*  appName={this.props.appName}*/}
            {/*  currentUser={this.props.currentUser}*/}
            {/*  onClickLogout={this.props.onClickLogout}*/}
            {/*  advancedSearch={this.advancedSearch} />*/}
            <div className="content">
            <Router forceRefresh={true}>
              <Switch>
                <Route exact path="/" component={Home} key="home" />
                <Route path="/a/:askey" component={Home} key="advancedSearch" />
                <Route path="/s/:search" component={Home} key="search" />
                <Route path="/t/:tag" component={Home} key="tag" />
                <Route path="/c/:category"  component={Home} key="category" />

                <RouteGuard exact path='/login' isAuthenticated={!isAuth} component={Login} role={USER} />
                <RouteGuard exact path='/company/login' isAuthenticated={!isAuth} component={Login} role={COMPANY} />
                <RouteGuard exact path='/register' isAuthenticated={!isAuth} component={Register} role={USER} />
                <RouteGuard exact path='/company/register' isAuthenticated={!isAuth} component={Register} role={COMPANY} />
                <RouteGuard exact isAuthenticated={!isAuth} path="/forgot" component={ForgotPassword} />
                <Route path="/email-verification" component={EmailConfirmation} />

                {/*<RouteGuard exact path='/companies' isAuthenticated={true} component={Companies} setHeaderFooterVisible={this.setHeaderFooterVisible} />*/}
                {/*<Route path="/login" render={({ history }) => {
                    return (
                      <Login
                        role="Customer"
                        history={history}
                      />
                    )
                  }}
                />
                <Route path="/company/login" render={({ history }) => {
                    return (
                      <Login
                        role="Company"
                        history={history}
                      />
                    )
                  }}
                />
                <Route path="/register" render={({ history }) => (
                    <Register
                      role='Customer'
                      history={history}
                    />
                  )}
                />
                <Route path="/company/register" render={({ history }) => (
                    <Register
                      role='Company'
                      history={history}
                    />
                  )}
                />*/}
                <RouteGuard exact path='/login' isAuthenticated={!isAuth} component={Login} role={USER} />
                <RouteGuard exact isAuthenticated={isCustomer} path="/editor/:slug" component={Editor} />
                <RouteGuard exact isAuthenticated={isCustomer} path="/editor" component={Editor} />
                <RouteGuard exact isAuthenticated={isCustomer} path="/purchase/:slug" component={Purchase} key="purchase" />
                <RouteGuard exact isAuthenticated={isCustomer} path="/purchase" component={Purchase} key="purchases" />
                <RouteGuard exact isAuthenticated={isCustomer} path="/event/:id/" component={Article} />
                <RouteGuard exact isAuthenticated={isCustomer} path="/settings/info" component={Settings} />
                <RouteGuard exact isAuthenticated={isCustomer} path="/@:username/favorites" component={ProfileFavorites} />
                <RouteGuard exact isAuthenticated={isCustomer} path="/@:username" component={Profile} />
                <RouteGuard exact isAuthenticated={isCustomer} path="/user" component={User} />
                <RouteGuard exact isAuthenticated={isCustomer} path="/settings/notification" component={Notification} />
                <Route path="/search/:key" component={Search} />
                <Route path="/tickets" component={Tickets} />
                <Route path="/org/:name" component={Organiser} />
                <Route path="/help" component={Help} />
                <Route path="/about" component={About} />
                <Route path="/blog" component={Blog} />
                <Route path="/blogNews" component={BlogNews} />
                <Route path="/investors" component={Investors} />
                <Route path="/security" component={Security} />
                <Route path="/careers" component={Career} />
                <Route path="/careerDetails/:company" component={CareerDetails} />
                <Route path="/cookies" component={Cookies} />
                <Route path="/privacy" component={Privacy} />
                <Route path="/terms" component={Terms} />
                <Route path="/packages" component={Packages} />
                <Route path="/faq" component={FAQ} />

                <Redirect to="/"/>
                {/*  Myroslav 05/05/2020*/}
                
              </Switch>
              </Router>
            </div>

            {/* Myroslav 05/05/2020*/}
            {
              headerFooterVisible ? (
                <Footer onClickCategory={this.props.onClickCategory} />
              ) : null
            }

            {/*<Footer */}
            {/*  onClickCategory={this.props.onClickCategory}*/}
            {/*/>*/}
          </div>
        </LoadingOverlay>
      );
    }
    return (
      <div>
        {/*<Header
              appName={this.props.appName}
              currentUser={this.props.currentUser} />*/}
      </div>
    );
  }
}

// App.contextTypes = {
//   router: PropTypes.object.isRequired
// };

export default connect(mapStateToProps, mapDispatchToProps)(App);
