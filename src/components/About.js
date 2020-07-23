import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div class="mt-4 d-flex flex-column align-center">
                <div className="center-container-blog">
                    <div className="row">
                        <div className="col-lg-6">
                            <img className="max-width" src={require('../assets/images/blog1.png')} />
                        </div>

                        <div className="col-lg-6 d-flex flex-column align-items-start pl-5 title-align">
                            <div className="fx-0 my-4">
                                Glosfy
                        </div>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting
                    </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-lg-6 d-flex flex-column align-items-start pl-5 title-align">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                            but also the leap into electronic typesetting
                    </div>
                        <div className="col-lg-6">
                            <img className="max-width" src={require('../assets/images/blog2.png')} />
                        </div>
                    </div>

                    <div className="row mt-5 mx-5">
                        <div className="col-md-12 d-flex flex-column align-items-start pl-5 title-align">
                            <div className="fx-1 mb-4">
                                How do we use it ?
                        </div>
                            <div>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                                but also the leap into electronic typesetting
                        </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-lg-6">
                            <img className="max-width" src={require('../assets/images/blog2.png')} />
                        </div>

                        <div className="col-lg-6 d-flex flex-column align-items-start pl-5 title-align">
                            <div className="fx-0 my-4">
                                Glosfy
                        </div>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                        but also the leap into electronic typesetting
                    </div>
                    </div>

                    <div className="row mt-5 mx-5">
                        <div className="col-md-12 d-flex flex-column align-items-center pl-5 title-align">
                            <div className="fx-1 mb-4">
                                How do we use it ?
                       </div>
                            <div className="text-center">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                                but also the leap into electronic typesetting
                       </div>
                        </div>
                    </div>
                    <div className="row mt-5 m-5 pb-5 d-flex">
                        <div className="fx-0 text-bold">
                            Discover the world with
                   </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;
