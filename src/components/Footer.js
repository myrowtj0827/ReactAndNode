import React from 'react';
import agent from '../agent';
import { Link, withRouter } from 'react-router-dom';
import festivalsImg from '../assets/images/festivals.png';
import barsImg from '../assets/images/bars.png';
import beachclubImg from '../assets/images/beachclub.png';
import concertsImg from '../assets/images/concerts.png';
import livemusicImg from '../assets/images/livemusic.png';
import nightclubImg from '../assets/images/nightclub.png';
import pubsImg from '../assets/images/pubs.png';
import Select, { components } from 'react-select';

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
      menuPlacement="auto"
    />
  )
};
const LoggedOutView = props => {

  return (
    <ul> <li className="language-option">
      <CustomSelect customStylesForSelect={props.customStylesForSelect} />
    </li> </ul>
  );

};
class Footer extends React.Component {

  constructor() {
    super();
    this.state = {
      language: 'english',
      customStylesForSelect: {},
    }
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
        })

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
        })

        this.setState({ deviceType: 'mobile' })
      }
    }
  }
  componentWillMount() {
    window.addEventListener('resize', this.handleResize.bind(this));
    this.handleResize();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize.bind(this));
  }
  render() {
    var params = this.props.location.pathname;
    const { customStylesForSelect } = this.state
    // var isGrid = params.indexOf('/s/') > -1 || params.indexOf('/t/') > -1 || params === '/';
    var isGrid = true;

    var languages = [
      { value: 'english', label: 'English' },
      { value: 'spanish', label: 'Spanish' },
      { value: 'dutch', label: 'Dutch' },
      { value: 'italian', label: 'Italian' },
      { value: 'french', label: 'French' },
      { value: 'portuguese', label: 'Portuguese' },
      { value: 'russian', label: 'Russian' },
    ]

    if (isGrid)
      return (
        <div className="footer">
          <div className="footer-sides">
            <div className="footer-side-menu">
              <div className='logo-img'>
                <img className="logo-world" src={require('../assets/images/logo-white.png')} alt='logo' />
              </div>

              <div className="footer-side-panel social">
                <p>Connect with us</p>

                <ul>
                  <li className="footer-item">
                    <a href="mailto:info@worldsty.com" target="blank">
                      <i className='fa fa-envelope'></i>
                    </a>
                  </li>
                  <li className="footer-item">
                    <a href="https://facebook.com/Glosfy" target="blank">
                      <i className='fa fa-facebook-f'></i>
                    </a>
                  </li>
                  <li className="footer-item">
                    <a href="https://www.linkedin.com/company/Glosfy" target="blank">
                      <i className='fa fa-linkedin'></i>
                    </a>
                  </li>
                  <li className="footer-item">
                    <a href="https://instagram.com" target="blank">
                      <i className='fa fa-instagram'></i>
                    </a>
                  </li>
                  <li className="footer-item">
                    <a href="https://twitter.com/Glosfyapp" target="blank">
                      <i className='fa fa-twitter'></i>
                    </a>
                  </li>
                </ul>
              </div>

              <div className='download-app'>
                <div className='googleplay-btn'>
                  <img src={require('../assets/images/googleplay-white.png')} alt='googleplay' />
                </div>
                <div className='appstore-btn'>
                  <img src={require('../assets/images/appstore-white.png')} alt='appstore' />
                </div>
              </div>
            </div>
            <div className="footer-side-menu">
              <div className="footer-side-panel">
                <p>Join Glosfy</p>

                <ul>
                  <li className="footer-item">
                    How it works
                  </li>
                  <li className="footer-item">
                    For companies
                  </li>
                  <li className="footer-item" href="/packages">
                    <a href="/packages">  Pricing</a>
                  </li>
                  <li className="footer-item">
                    Discover our software, is free!
                  </li>
                  <li className="footer-item">
                    Mobile app for organisers
                  </li>
                  <li className="footer-item">
                    <a href="/faq">  FAQs</a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-side-menu">
              <div className="footer-side-panel">
                <p>Plan Events</p>

                <ul>
                  <li className="footer-item">
                    Ticketing software
                  </li>
                  <li className="footer-item">
                    Management software
                  </li>
                  <li className="footer-item">
                    Create experiences
                  </li>
                  <li className="footer-item">
                    #JoinTheFutureGlosfy
                  </li>
                  <li className="footer-item">
                    Works worldwide
                  </li>
                  <li className="footer-item">
                    Online & Offline events
                  </li>
                  <li className="footer-item">
                  </li>
                </ul>
              </div>
            </div>

            <div className="footer-side-menu">
              <div className="footer-side-panel">
                <p>Discover Events</p>

                <ul>
                  <li className="footer-item">
                    By location
                  </li>
                  <li className="footer-item">
                    <a href="/packages">  Pricing</a>

                  </li>
                  <li className="footer-item">
                    Night Clubs, Beach Clubs, Private parties
                  </li>
                  <li className="footer-item">
                    Live music, Festivals, Concerts
                  </li>
                  <li className="footer-item">
                    Bars, Pubs & Chillouts
                  </li>
                  <li className="footer-item">
                    <a href="/faq">  FAQs</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-company">
            <div className="footer-worldSty">
              <div className="w3-row-padding footer-link-padding">
                <div className="footer-title">@2020 Glosfy</div>

                <div>
                  <div className="footer-title">
                    <a className="w3-hover-text-orange footer-btn" href="/about">About</a>
                    <a className="w3-hover-text-orange footer-btn" href="/blog">Blog</a>
                    <a className="w3-hover-text-orange footer-btn" href="/investors">Investors</a>
                    <a className="w3-hover-text-orange footer-btn" href="/security">Security</a>
                  </div>
                  <div className="footer-title">
                    <a className="w3-hover-text-orange footer-btn" href="/careers">Careers</a>
                    <a className="w3-hover-text-orange footer-btn" href="/cookies">Cookies</a>
                    <a className="w3-hover-text-orange footer-btn" href="/privacy">Privacy</a>
                    <a className="w3-hover-text-orange footer-btn" href="/terms">Terms</a>
                  </div>
                </div>

                <div className="footer-title">
                  <a className="w3-dropdown-hover w3-border-black dropUp">
                    <a className="dropBtn">
                      <img className="icon" src={require('../assets/images/company/footer/ico.png')} />
                      <a className="w3-hover-text-orange language-dropdown">English</a>
                      <span className="main-menu-arrow" aria-hidden="true">▼</span>
                    </a>

                    <a className="w3-dropdown-content w3-bar-block dropdown-padding dropUp-content">
                      <a href="#" className="w3-bar-item w3-text-black w3-blue">
                        <img className="icon" src={require('../assets/images/company/footer/ico.png')} />
                        <span className="w3-hover-text-aqua language-dropdown">English</span>
                      </a>
                      <a href="#" className="w3-bar-item w3-text-black w3-hover-blue-grey w3-hover-text-aqua">Spanish</a>
                      <a href="#" className="w3-bar-item w3-text-black w3-hover-blue-grey w3-hover-text-aqua">Dutch</a>
                      <a href="#" className="w3-bar-item w3-text-black w3-hover-blue-grey w3-hover-text-aqua">Italian</a>
                      <a href="#" className="w3-bar-item w3-text-black w3-hover-blue-grey w3-hover-text-aqua">French</a>
                      <a href="#" className="w3-bar-item w3-text-black w3-hover-blue-grey w3-hover-text-aqua">Portuguese</a>
                      <a href="#" className="w3-bar-item w3-text-black w3-hover-blue-grey w3-hover-text-aqua">Russian</a>
                    </a>
                  </a>
                </div>
              </div>
            </div></div>
          {/* <div className="footer-center-menu">
            <div className="footer-menu">
              <p class="footer-left">@2020 Glosfy</p>
              <ul>
                <li className="footer-item">
                  About
                </li>
                <li className="footer-item">
                  Blog
                </li>
                <li className="footer-item">
                  Investors
                </li>
                <li className="footer-item">
                  Security
                </li>
                <li className="footer-item">
                  Careers
                </li>
                <li className="footer-item">
                  Cookies
                </li>
                <li className="footer-item">
                  Privacy
                </li>
                <li className="footer-item">
                  Terms
                </li>
                <li className="language-option">
                
        </li>
              </ul>
            
            </div>
            <LoggedOutView customStylesForSelect={customStylesForSelect}/>
          </div> */}
        </div>
      );
    else
      return (
        <div className="footer-company">
          <div className="footer-worldSty">
            <div className="w3-row-padding footer-link-padding">
              <div className="footer-title">@2020 Glosfy</div>

              <div>
                <div className="footer-title">
                  <a className="w3-hover-text-orange footer-btn" href="/about">About</a>
                  <a className="w3-hover-text-orange footer-btn" href="/blog">Blog</a>
                  <a className="w3-hover-text-orange footer-btn" href="/investors">Investors</a>
                  <a className="w3-hover-text-orange footer-btn" href="/security">Security</a>
                </div>
                <div className="footer-title">
                  <a className="w3-hover-text-orange footer-btn" href="/careers">Careers</a>
                  <a className="w3-hover-text-orange footer-btn" href="/cookies">Cookies</a>
                  <a className="w3-hover-text-orange footer-btn" href="/privacy">Privacy</a>
                  <a className="w3-hover-text-orange footer-btn" href="/terms">Terms</a>
                </div>
              </div>

              <div className="footer-title">
                <a className="w3-dropdown-hover w3-border-black dropUp">
                  <a className="dropBtn">
                    <img className="icon" src={require('../assets/images/company/footer/ico.png')} />
                    <a className="w3-hover-text-orange language-dropdown">English</a>
                    <span className="main-menu-arrow" aria-hidden="true">▼</span>
                  </a>

                  <a className="w3-dropdown-content w3-bar-block dropdown-padding dropUp-content">
                    <a href="#" className="w3-bar-item w3-text-black w3-blue">
                      <img className="icon" src={require('../assets/images/company/footer/ico.png')} />
                      <span className="w3-hover-text-aqua language-dropdown" >English</span>
                    </a>
                    <a href="#" className="w3-bar-item w3-text-black w3-hover-blue-grey w3-hover-text-aqua">Spanish</a>
                    <a href="#" className="w3-bar-item w3-text-black w3-hover-blue-grey w3-hover-text-aqua">Dutch</a>
                    <a href="#" className="w3-bar-item w3-text-black w3-hover-blue-grey w3-hover-text-aqua">Italian</a>
                    <a href="#" className="w3-bar-item w3-text-black w3-hover-blue-grey w3-hover-text-aqua">French</a>
                    <a href="#" className="w3-bar-item w3-text-black w3-hover-blue-grey w3-hover-text-aqua">Portuguese</a>
                    <a href="#" className="w3-bar-item w3-text-black w3-hover-blue-grey w3-hover-text-aqua">Russian</a>
                  </a>
                </a>
              </div>
            </div>
          </div></div>
        // <div className="footer over">
        //   <p class="footer-left">@2020 Worldsty</p>
        //   <ul>
        //     <li className="footer-item">
        //       About
        //     </li>
        //     <li className="footer-item">
        //       Blog
        //     </li>
        //     <li className="footer-item">
        //       Investors
        //     </li>
        //     <li className="footer-item">
        //       Security
        //     </li>
        //     <li className="footer-item">
        //       Careers
        //     </li>
        //     <li className="footer-item">
        //       Cookies
        //     </li>
        //     <li className="footer-item">
        //       Privacy
        //     </li>
        //     <li className="footer-item">
        //       Terms
        //     </li>
        //   </ul>
        //   <select className="language-selection"  onChange={ (e) => this.setState({ language : e.target.value }) } >
        //     { languages.map( language => (
        //       <option value={language.value} key={'language'+language.value} selected={this.state.language === language.value }>{language.label}</option>
        //     ))}
        //   </select>
        // </div>
      );
  }
}

export default withRouter(Footer);
