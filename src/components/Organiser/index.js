import React from 'react';
import { connect } from 'react-redux';
import SocialShare from '../SocialShare';
import { Fade } from 'react-slideshow-image';

const mapStateToProps = state => ({
    ...state.article,
    articleListLoaded : state.articleList.articleListLoaded,
  });
class Organisor extends React.Component {
    constructor() {
        super();
    
        this.state = {
            showBlock: true,
            readMore: false,
            fadeImages: [
                require('../../assets/images/freeEvent.png'),
                require('../../assets/images/paidEvent.png'),
                require('../../assets/images/freeEvent.png'),
                require('../../assets/images/freeEvent.png'),
                require('../../assets/images/paidEvent.png'),
                require('../../assets/images/freeEvent.png')
            ]
        }
    }

    switchClick = (e) => {
        e.stopPropagation();
        const {showBlock} = this.state;
        this.setState({showBlock: !showBlock});
    };

  render() {
      const fadeProperties = {
          duration: 5000,
          // transitionDuration: 500,
          indicators: true,
          infinite: false,
          pauseOnHover: true,
          onChange: (oldIndex, newIndex) => {
              console.log(`Fade transition finished from ${oldIndex} to ${newIndex}`);
          }
      };

      const { fadeImages, showBlock } = this.state;

      return (
        <div className="org-container">
            <div className="d-flex align-items-start">
                <div className="w3-row">
                    <div className="w3-col half-width">
                        <div className="desktop-m-padding">
                            <div className="w3-row tablet-align">
                                <div className="w3-col l11">
                                    <div className="w3-row">
                                        <div className="w3-col img-width-follow">
                                            <div className="follow-img">
                                                <img src={require('../../assets/images/dummyOrg.png')} className="img-size"/>
                                            </div>
                                        </div>
                                        <div className="w3-col w3-rest img-width-txt padding-lightopia">
                                            <div className="bold-lightopia">
                                                Lightopia Festival London
                                            </div>

                                            <div className="icon-top-padding">
                                                <a><img className="icon-image-size" src={require('../../assets/images/icon-1.png')}/></a>
                                                Lorem ipsum dolor sit amet
                                            </div>

                                            <div className="icon-top-padding">
                                                <a><img className="icon-image-size" src={require('../../assets/images/icon-2.png')}/></a>
                                                Loremipsum@gmail.com
                                            </div>

                                            <div className="icon-top-padding">
                                                <a><img className="icon-image-size" src={require('../../assets/images/icon-3.png')}/></a>
                                                Loremipsum.com
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w3-row follow-top-padding">
                                        <div className="w3-col img-width-follow">
                                            <div className="follow-img">
                                                <div className="w3-center btn-follow-padding">
                                                    <div className="btn-follow">Follow</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w3-col img-width-txt">
                                            <span className="w3-display-container">
                                                <img className="add-image-size" src={require('../../assets/images/company/edit/facebook.png')}/>
                                            </span>
                                            <span className="w3-display-container">
                                                <img className="add-image-size" src={require('../../assets/images/company/edit/twitter.png')}/>
                                            </span>

                                            <span className="w3-display-container">
                                                <img className="add-image-size" src={require('../../assets/images/company/edit/instagram.png')}/>
                                            </span>

                                            <span className="w3-display-container">
                                                <img className="add-image-size" src={require('../../assets/images/company/edit/linkedin.png')}/>
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="w3-col l1 line-padding">
                                    <div className="vertical-line"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w3-col half-width follow-top-padding">
                        <div className="line-border">
                            <div className="w3-border-top w3-border-gray"></div>
                        </div>
                        <div className="desktop-width">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            </p>
                            <p className="txt-line-height">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Aliquet porttitor lacus luctus accumsan. Vitae auctor eu augue ut lectus. Adipiscing enim eu turpis egestas.
                                Turpis nunc eget lorem dolor sed. Donec et odio pellentesque diam volutpat commodo.
                                Lobortis feugiat vivamus at augue eget arcu dictum varius. Id eu nisl nunc mi.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w3-bar title-align-follow">
                <div className="w3-bar-item w3-left">
                    <div className="lighttopia-tablet">
                        <div className="bold-switch-title">Lightopia Festival London Events</div>
                    </div>
                </div>
                <div className="w3-bar-item w3-right">
                    <div className="large-normal">
                        <span>Show completed events:</span>
                        <span className="switch-padding-left">
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round" onClick={(e) => this.switchClick(e)}></span>
                            </label>
                        </span>
                    </div>
                </div>
            </div>
            <div className="d-flex">
                <div className="center-org-container">
                    {
                        showBlock ? (
                            <div id="activeEvent" className="d-flex my-4 row help-card">
                                <div className="slide-container">
                                    <Fade {...fadeProperties}>
                                        {fadeImages.map((each, index) => (
                                            <div className="each-fade">
                                                <div className="image-container">
                                                    <img key={index} src={each}/>
                                                    <div className="from-to-price">
                                                        Active
                                                    </div>
                                                </div>
                                                <div
                                                    className="col-md-6 d-flex flex-column justify-content-between align-items-start search-padding">
                                                    <div className="text-bold responsive-font">Biggest 90s 00s disco
                                                        outdoor festival
                                                    </div>
                                                    <div className="w-100">
                                                        <div className="fx-3 text-grey responsive-txt">Olympia London •
                                                            London
                                                        </div>
                                                        <div className="fx-3 text-blue responsive-txt">Wed, 11 Dec</div>
                                                        <div
                                                            className="d-flex align-items-start justify-content-between">
                                                            <div className="fx-3 text-blue responsive-txt">12:00 -
                                                                04:00
                                                            </div>
                                                            <div className='control-btns'>
                                                                <img src={require('../../assets/images/share.png')}
                                                                     className="mr-3 link-cursor" width="15"/>
                                                                <div className="fa fa-heart-o text-red"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </Fade>
                                </div>
                                <div className="row mt-4 position-relative">
                                    <div className="col-12 my-2">
                                        <div className="text-bold">About this event</div>
                                    </div>
                                    {!this.state.readMore &&
                                    <span>
                                        <div className="col-12 multi-line">
                                            Taking place at Chiswick House and Gardens, an 18th century villa with classical landscapes and 65 acres of gardens,
                                            Lightopia is an immersive and visually-dramatic lantern and light festival,
                                            that promises to fuse beautiful art installations with interactive experience.
                                            Lightopia is an exploration of light, movement and form,
                                            beautifully captivating the senses with unique interactive and immersive lights, lanterns,
                                            installations and incredible 3D mapping light show, destined to create unforgettable memories and provide alternative family fun.
                                            Installations include, The Love Gate, Tree of Life, Elysian Field, S-Harmony, The Flower Road, Happy Valley,
                                            Two Moons Eagle and many more, symbolising various experiences throughout life and humanity.
                                        </div>
                                        <div className="position-absolute right text-blue read-more"
                                             onClick={() => this.setState({readMore: !this.state.readMore})}>Read more...</div>
                                    </span>
                                    }
                                    {this.state.readMore &&
                                    <span>
                                        <div className="row">
                                            <div className="col-12 mb-4">
                                                Taking place at Chiswick House and Gardens, an 18th century villa with classical landscapes and 65 acres of gardens,
                                                Lightopia is an immersive and visually-dramatic lantern and light festival,
                                                that promises to fuse beautiful art installations with interactive experience.
                                            </div>
                                            <div className="col-12 mb-4">
                                                Lightopia is an exploration of light, movement and form,
                                                beautifully captivating the senses with unique interactive and immersive lights, lanterns,
                                                installations and incredible 3D mapping light show,
                                                destined to create unforgettable memories and provide alternative family fun.
                                            </div>
                                            <div className="col-12 mb-4">
                                                Lightopia will open to the public from the 22 January to the 1 March 2020.
                                                The ticketed event will also include live entertainment, such as acrobatic performances available to enjoy every night.
                                                There will also be a host of food and refreshment options available for all taste-buds to enjoy.
                                            </div>
                                            <div className="col-12 mb-4 d-flex text-blue"
                                                 onClick={() => this.setState({readMore: !this.state.readMore})}>Read less</div>
                                        </div>
                                    </span>
                                    }
                                </div>
                            </div>
                        ) : (
                            <div id="completedEvent" className="d-flex my-4 row help-card">
                                <div className="row">
                                    <div className="slide-container">
                                        <Fade {...fadeProperties}>
                                            {fadeImages.map((each, index) => (
                                                <div className="each-fade">
                                                    <div className="image-container">
                                                        <img key={index} src={each}/>

                                                        <div className="completed-padding">
                                                            Completed
                                                        </div>
                                                    </div>

                                                    <div
                                                        className="col-md-6 d-flex flex-column justify-content-between align-items-start search-padding">
                                                        <div className="text-bold responsive-font">Biggest 90s 00s disco
                                                            outdoor festival
                                                        </div>
                                                        <div className="w-100">
                                                            <div className="fx-3 text-grey responsive-txt">Olympia
                                                                London • London
                                                            </div>
                                                            <div className="fx-3 text-blue responsive-txt">Wed, 11 Dec
                                                            </div>
                                                            <div
                                                                className="d-flex align-items-start justify-content-between">
                                                                <div className="fx-3 text-blue responsive-txt">12:00 -
                                                                    04:00
                                                                </div>
                                                                <div className='control-btns'>
                                                                    <img src={require('../../assets/images/share.png')}
                                                                         className="mr-3 link-cursor" width="15"/>
                                                                    <div className="fa fa-heart-o text-red"></div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </Fade>
                                    </div>
                                </div>
                                <div className="row mt-4 position-relative">
                                    <div className="col-12 my-2">
                                        <div className="text-bold">About this event</div>
                                    </div>
                                    {!this.state.readMore &&
                                    <span>
                                        <div className="col-12 multi-line">
                                            Taking place at Chiswick House and Gardens, an 18th century villa with classical landscapes and 65 acres of gardens,
                                            Lightopia is an immersive and visually-dramatic lantern and light festival,
                                            that promises to fuse beautiful art installations with interactive experience.
                                            Lightopia is an exploration of light, movement and form,
                                            beautifully captivating the senses with unique interactive and immersive lights, lanterns,
                                            installations and incredible 3D mapping light show, destined to create unforgettable memories and provide alternative family fun.
                                            Installations include, The Love Gate, Tree of Life, Elysian Field, S-Harmony, The Flower Road, Happy Valley,
                                            Two Moons Eagle and many more, symbolising various experiences throughout life and humanity.
                                        </div>
                                        <div className="position-absolute right text-blue read-more"
                                             onClick={() => this.setState({readMore: !this.state.readMore})}>Read more...</div>
                                    </span>
                                    }
                                    {this.state.readMore &&
                                    <span>
                                        <div className="row">
                                            <div className="col-12 mb-4">
                                                Taking place at Chiswick House and Gardens, an 18th century villa with classical landscapes and 65 acres of gardens,
                                                Lightopia is an immersive and visually-dramatic lantern and light festival,
                                                that promises to fuse beautiful art installations with interactive experience.
                                            </div>
                                            <div className="col-12 mb-4">
                                                Lightopia is an exploration of light, movement and form, beautifully captivating the senses with unique interactive and immersive lights,
                                                lanterns, installations and incredible 3D mapping light show, destined to create unforgettable memories and provide alternative family fun.
                                            </div>
                                            <div className="col-12 mb-4">
                                                Lightopia will open to the public from the 22 January to the 1 March 2020.
                                                The ticketed event will also include live entertainment, such as acrobatic performances available to enjoy every night.
                                                There will also be a host of food and refreshment options available for all taste-buds to enjoy.
                                            </div>
                                            <div className="col-12 mb-4 d-flex text-blue"
                                                 onClick={() => this.setState({readMore: !this.state.readMore})}>Read less</div>
                                        </div>
                                    </span>
                                    }
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
      );
    }
}

export default connect(mapStateToProps)(Organisor);
