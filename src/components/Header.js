import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Select, { components } from 'react-select';
import { slide as Menu } from 'react-burger-menu';
import logoImg from '../assets/images/logo.png';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    ...state.article,
    currentUser: state.common.currentUser,
    isCompany:state.common.isCompany
});

const mapDispatchToProps = dispatch => ({
    onLoad: (payload, state) =>
        dispatch(),
});

const CustomSelect = (props) => {
    var languages = [
        { value: 'english', label: <div><img src={require('../assets/images/english.png')} />English</div> },
        { value: 'spanish', label: 'Spanish' },
        { value: 'dutch', label: 'Dutch' },
        { value: 'italian', label: 'Italian' },
        { value: 'french', label: 'French' },
        { value: 'portuguese', label: 'Portuguese' },
        { value: 'russian', label: 'Russian' },
    ];

    const DropdownIndicator = (
        props: components.DropdownIndicator
    ) => {
        return (
            <components.DropdownIndicator {...props}>
                <div className='dropdown-icon'>
                    <img src={require('../assets/images/dropdown-icon.png')} />
                </div>
            </components.DropdownIndicator>
        );
    };

    return (
        <Select
            styles={props.customStylesForSelect}
            components={{ DropdownIndicator }}
            options={languages}
            defaultValue={[languages[0]]}
        />
    )
};


const LoggedOutView = props => {

    console.log('LoggedOutView cu', props, props.currentUser);
    if (!props.currentUser) {
        return (
            <ul className="nav navbar-nav">
                <li className="nav-item">
                    <div className="dropdown">
                        <div className="dropdown-toggle" data-toggle="dropdown">
                            Help <i className="fa fa-angle-down"></i>
                        </div>
                        <ul className="dropdown-menu user-dropdown">
                            {/* <li>Status : online</li> */}

                            <li className="d-flex align-items-start justify-content-start">
                                {/* <i className="fa fa-user mr-2" ></i> */}
                                <Link to=""><p>How does it work</p></Link>
                            </li>

                            <li className="d-flex align-items-start justify-content-start">
                                {/* <i className="fa fa-cog mr-2" ></i> */}
                                <Link to=""><p>Pricing</p></Link>
                            </li>
                            <li className="d-flex align-items-start justify-content-start">
                                {/* <i className="fa fa-bell mr-2" aria-hidden="true"></i> */}
                                <Link to=""><p>Companies</p></Link>
                            </li>
                            <li className="d-flex align-items-start justify-content-start">
                                {/* <i className="fa fa-sign-out  mr-2" aria-hidden="true"></i> */}
                                Users</li>
                            <li className="d-flex align-items-start justify-content-start">
                                {/* <i className="fa fa-sign-out  mr-2" aria-hidden="true"></i> */}
                                Help Center</li>
                        </ul>
                    </div>
                </li>

                <li className="nav-item">
                    <div className="dropdown">
                        <div className="dropdown-toggle" data-toggle="dropdown">
                            Company <i className="fa fa-angle-down"></i>
                        </div>
                        <ul className="dropdown-menu user-dropdown">
                            {/* <li>Status : online</li> */}

                            <li className="d-flex align-items-start justify-content-start">
                                {/* <i className="fa fa-user mr-2" ></i> */}

                                <Link to="/company/login"><p>Log in</p></Link>

                                {/*<Link to="/companies" onClick={() => props.setHeaderFooterVisible(false)}>*/}
                                {/*    Log in*/}
                                {/*</Link>*/}
                            </li>

                            <li className="d-flex align-items-start justify-content-start">
                                {/* <i className="fa fa-cog mr-2" ></i> */}
                                <Link to="/company/register"><p>Create Event</p></Link>
                            </li>
                            <li className="d-flex align-items-start justify-content-start">
                                {/* <i className="fa fa-bell mr-2" aria-hidden="true"></i> */}
                                <Link to=""><p>Pricing</p></Link>
                            </li>
                            <li className="d-flex align-items-start justify-content-start">
                                {/* <i className="fa fa-sign-out  mr-2" aria-hidden="true"></i> */}
                                How it works</li>
                        </ul>
                    </div>
                </li>

                <li className="nav-item">
                    <Link to='/login' className="nav-link">
                        Sign In
                    </Link>
                </li>

                <li id="menuRight" className='burger-menu'>
                    <Menu id="menuRight" right>
                        <div className="w3-dropdown-content">
                            <div id='signin'><a href='/login'>SIGN IN</a></div>
                            <div id='company'><a href='/company/register'>Companies</a></div>
                            <div id='help'><a href='/help'>HELP</a></div>
                        </div>
                    </Menu>
                </li>
            </ul>
        );
    }
    return null;
};

const LoggedInView = props => {

    console.log('LoggedInView cu', props, props.currentUser);
    if (props.currentUser) {
        return (
            <>
                <ul className="nav navbar-nav">
                <li className="nav-item">
                    <div className="dropdown">
                        <div className="dropdown-toggle" data-toggle="dropdown">
                            Help <i className="fa fa-angle-down"></i>
                        </div>
                        <ul className="dropdown-menu user-dropdown">
                            {/* <li>Status : online</li> */}

                            <li className="d-flex align-items-start justify-content-start">
                                {/* <i className="fa fa-user mr-2" ></i> */}
                                <Link to=""><p>How does it work</p></Link>
                            </li>

                            <li className="d-flex align-items-start justify-content-start">
                                {/* <i className="fa fa-cog mr-2" ></i> */}
                                <Link to=""><p>Pricing</p></Link>
                            </li>
                            <li className="d-flex align-items-start justify-content-start">
                                {/* <i className="fa fa-bell mr-2" aria-hidden="true"></i> */}
                                <Link to=""><p>Companies</p></Link>
                            </li>
                            <li className="d-flex align-items-start justify-content-start">
                                {/* <i className="fa fa-sign-out  mr-2" aria-hidden="true"></i> */}
                                Users</li>
                            <li className="d-flex align-items-start justify-content-start">
                                {/* <i className="fa fa-sign-out  mr-2" aria-hidden="true"></i> */}
                                Help Center</li>
                        </ul>
                    </div>
                </li>
                {
                    props.isCompany
                    ? <li className="nav-item">
                        <div className="dropdown">
                            <div className="dropdown-toggle" data-toggle="dropdown">
                                <span>{props.currentUser.companyName || props.currentUser.firstName}</span>
                                <img src={props.currentUser.image || require('../assets/images/company/header/header-account.png')} className="user-pic" alt="" />
                            </div>
                            <ul className="dropdown-menu user-dropdown">
                                <li className="d-flex align-items-start justify-content-start">
                                    <i className="fa fa-user mr-2" ></i>
                                    <Link to="/companies/manageMyEvents"><p>My events</p></Link>
                                </li>
                                <li className="d-flex align-items-start justify-content-start">
                                    <i className="fa fa-cog mr-2" ></i>
                                    <Link to="/companies/edit"><p>Create event</p></Link>
                                </li>
                                <li className="d-flex align-items-start justify-content-start">
                                    <i className="fa fa-bell mr-2" aria-hidden="true"></i>
                                    <Link to="/companies/companySetting"><p>Settings</p></Link>
                                </li>
                                <li className="d-flex align-items-start justify-content-start" onClick={props.onClickLogout}>
                                    <i className="fa fa-sign-out  mr-2" aria-hidden="true"></i>
                                    Logout
                                </li>
                            </ul>
                        </div>
                    </li>
                    :<li className="nav-item">
                        <div className="dropdown">
                            <div className="dropdown-toggle" data-toggle="dropdown">
                                <span>{props.currentUser && (props.currentUser.fullName || props.currentUser.firstName)}</span>
                                <img src={props.currentUser.image || require('../assets/images/company/header/header-account.png')} className="user-pic" alt="" />
                            </div>
                            <ul className="dropdown-menu user-dropdown">
                                <li className="d-flex align-items-start justify-content-start">
                                    <i className="fa fa-user mr-2" ></i>
                                    <Link to="/user"><p>My Account</p></Link>
                                </li>

                                <li className="d-flex align-items-start justify-content-start">
                                    <i className="fa fa-cog mr-2" ></i>
                                    <Link to="/settings/info"><p>Settings</p></Link>
                                </li>
                                <li className="d-flex align-items-start justify-content-start">
                                    <i className="fa fa-bell mr-2" aria-hidden="true"></i>
                                    <Link to="/settings/notification"><p>Notifications</p></Link>
                                </li>
                                <li className="d-flex align-items-start justify-content-start" onClick={props.onClickLogout}>
                                    <i className="fa fa-sign-out  mr-2" aria-hidden="true"></i>
                                    <Link to="/">Logout</Link>
                                </li>
                            </ul>
                        </div>
                    </li>
                }
            </ul>

                <li id="afterLoginMenuRight" className='after-login-menu'>
                    <Menu id="afterLoginMenuRight" right>
                        <div className="w3-dropdown-content">
                            <div className="w3-row menu-item-padding">
                                <div className="w3-col l2 m2 s2 w3-center"><i className="fa fa-user mr-2" ></i></div>
                                <div className="w3-col l10 m10 s10 w3-left"><Link to="/user">My Account</Link></div>
                            </div>

                            <div className="w3-row menu-item-padding">
                                <div className="w3-col l2 m2 s2 w3-center"><i className="fa fa-cog mr-2" ></i></div>
                                <div className="w3-col l10 m10 s10 w3-left"><Link to="/settings/info">Settings</Link></div>
                            </div>

                            <div className="w3-row menu-item-padding">
                                <div className="w3-col l2 m2 s2 w3-center"><i className="fa fa-bell mr-2" aria-hidden="true"></i></div>
                                <div className="w3-col l10 m10 s10 w3-left"><Link to="/settings/notification">Notifications</Link></div>
                            </div>

                            <div className="w3-row menu-item-padding" onClick={props.onClickLogout}>
                                <div className="w3-col l2 m2 s2 w3-center">
                                    <i className="fa fa-sign-out  mr-2" aria-hidden="true"></i>
                                </div>
                                <div className="w3-col l10 m10 s10 w3-left cursor-pointer"><Link to="/">Logout</Link></div>
                            </div>
                        </div>
                    </Menu>
                </li>
            </>
        );
    }

    return null;
};

class Header extends React.Component {
    constructor() {
        super();
        this.state = {
            askey: '',
            customStylesForSelect: {}
        }
    }

    componentWillMount() {
        window.addEventListener('resize', this.handleResize.bind(this));
        this.handleResize();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize.bind(this));
    }

    handleResize() {
        const { deviceType } = this.state

        if (window.innerWidth > 1440) {
            if (deviceType !== 'desktop-l') {
                this.setState({
                    customStylesForSelect: {
                        container: (provided, state) => (
                            {
                                ...provided,
                                border: 'none',
                            }
                        ),
                        control: (provided, state) => (
                            {
                                ...provided,
                                fontSize: 16,
                                border: 'none',
                                outline: 'none',
                                minHeight: 20
                            }
                        ),
                        indicatorSeparator: (provided, state) => (
                            {
                                ...provided,
                                display: 'none'
                            }
                        ),
                        input: (provided, state) => (
                            {
                                ...provided,
                                fontSize: 16,
                            }
                        ),
                        option: (provided, state) => (
                            {
                                ...provided,
                                fontSize: 16,
                            }
                        ),
                        singleValue: (provided, state) => (
                            {
                                ...provided,
                                fontSize: 16,
                            }
                        ),
                    }
                });

                this.setState({ deviceType: 'desktop-l' })
            }
        } else if (window.innerWidth > 768) {
            if (deviceType !== 'tablet') {
                this.setState({
                    customStylesForSelect: {
                        container: (provided, state) => (
                            {
                                ...provided,
                                border: 'none',
                            }
                        ),
                        control: (provided, state) => (
                            {
                                ...provided,
                                fontSize: 14,
                                border: 'none',
                                outline: 'none',
                                minHeight: 20
                            }
                        ),
                        indicatorSeparator: (provided, state) => (
                            {
                                ...provided,
                                display: 'none'
                            }
                        ),
                        input: (provided, state) => (
                            {
                                ...provided,
                                fontSize: 14,
                            }
                        ),
                        option: (provided, state) => (
                            {
                                ...provided,
                                fontSize: 14,
                            }
                        ),
                        singleValue: (provided, state) => (
                            {
                                ...provided,
                                fontSize: 14,
                            }
                        ),
                    }
                });
                this.setState({ deviceType: 'tablet' })
            }
        } else if (window.innerWidth > 320) {
            if (deviceType !== 'mobile') {
                this.setState({
                    customStylesForSelect: {
                        container: (provided, state) => (
                            {
                                ...provided,
                                border: 'none',
                            }
                        ),

                        control: (provided, state) => (
                            {
                                ...provided,
                                fontSize: 14,
                                border: 'none',
                                outline: 'none',
                                minHeight: 20
                            }
                        ),

                        indicatorSeparator: (provided, state) => (
                            {
                                ...provided,
                                display: 'none'
                            }
                        ),

                        input: (provided, state) => (
                            {
                                ...provided,
                                fontSize: 14,
                            }
                        ),

                        option: (provided, state) => (
                            {
                                ...provided,
                                fontSize: 14,
                            }
                        ),

                        singleValue: (provided, state) => (
                            {
                                ...provided,
                                fontSize: 14,
                            }
                        ),
                    }
                });

                this.setState({ deviceType: 'mobile' })
            }
        }
    }

    render() {

        const { customStylesForSelect } = this.state;
        let isSearch = this.props.location.pathname === '/';
        const key = this.state.askey || 'dummy';
        const search = () => {
            this.props.history.push(`/search/${key}`);
        };

        return (
            <nav className="navbar">
                <div className="nav-left">
                    <Link to="/" className="navbar-brand">
                        <img src={logoImg} />
                    </Link>
                    {<div className="search__block">
                        <input
                            className="form-control advanced-search"
                            type="text"
                            placeholder="Search events"
                            value={this.state.askey}
                            onChange={(e) => this.setState({ askey: e.target.value })}
                            onKeyPress={ev => this.props.advancedSearch(ev, this.state.askey)}
                        />
                        <div className="search__btn" onClick={search}>
                            <i className="fa fa-search" aria-hidden="true"></i>
                        </div>
                    </div>}
                </div>

                <LoggedOutView
                    currentUser={this.props.currentUser}
                    customStylesForSelect={customStylesForSelect}
                />

                <LoggedInView currentUser={this.props.currentUser}
                    isCompany={this.props.isCompany}
                    onClickLogout={this.props.onClickLogout}
                    onClickSettting={() => this.props.history.push('/settings/info')}
                    customStylesForSelect={customStylesForSelect}
                />
            </nav>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
