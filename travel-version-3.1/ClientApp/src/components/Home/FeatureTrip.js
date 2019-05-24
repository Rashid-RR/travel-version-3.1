import React, { } from 'react';
import "./ourBestSeller.css";
import { Link } from 'react-router-dom';
import { Col, Row, Container } from 'reactstrap';
import img_1 from './our_featured_images/img_1.jpg';
import img_2 from './our_featured_images/img_2.jpg';
import img_3 from './our_featured_images/img_3.jpg';
import img_4 from './our_featured_images/img_4.jpg';
import img_5 from './our_featured_images/img_5.jpeg';
import img_6 from './our_featured_images/img_6.jpg';

const Feature = () => {
    return (
        <React.Fragment>
            <section className="popular-destination">
                <Container>
                    <header className="section-header wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" >
                        <h2 className="section-title"><b className="heading_">Featured Trip</b></h2>
                        <div className="section-content">
                            <p>
                                This is the best place to show your most sold and popular travel packages.
                                You can modify this section from Appearance &gt; Customize &gt; Home Page Settings &gt; Best Sellers Packages.
                                    </p>
                        </div>
                    </header>
                    <div className="grid kayaking" data-id="1">
                        <Row>
                            <div className="col_">
                                <div className="holder">
                                    <div className="img-holder">
                                        <Link to="/travelDubai" className="Link_">
                                            <img src={img_1} className="hoverZoomLink" width="100%" alt="" />
                                        </Link>
                                        <span className="price-holder">
                                            <span className="span1">$1,200</span>
                                        </span>
                                    </div>
                                    <div className="text-holder">
                                        <h3 className="title">
                                            <Link to="/travelDubai" className="Link_">Tower Bridge, London</Link>
                                        </h3>
                                        <div className="meta-info">
                                            <span className="time">
                                                <svg className="svg-inline--fa fa-clock fa-w-16" aria-hidden="true" data-prefix="far" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path></svg>
                                                15 days
                                                    </span>
                                        </div>

                                        <div className="btn-holder">
                                            <Link to="/travelDubai" className="btn-more">View Detail</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <Col className="col_">
                                <div className="holder">
                                    <div className="img-holder">
                                        <Link to="/travelDubai" className="Link_">
                                            <img src={img_2} className="hoverZoomLink" width="100%" alt="" />
                                        </Link>
                                        <span className="price-holder"><span className="span1">$1,300</span></span>
                                    </div>
                                    <div className="text-holder">
                                        <h3 className="title"><Link to="/travelDubai" className="Link_">Trishuli River Rafting</Link></h3>
                                        <div className="meta-info">
                                            <span className="time">
                                                <svg className="svg-inline--fa fa-clock fa-w-16" aria-hidden="true" data-prefix="far" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path></svg>
                                                15 days
                                                    </span>
                                        </div>
                                        <div className="btn-holder">
                                            <Link to="/travelDubai" className="btn-more">View Detail</Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col className="col_">
                                <div className="holder">
                                    <div className="img-holder">
                                        <Link to="/travelDubai" className="Link_">
                                            <img src={img_3} className="hoverZoomLink" width="100%" alt="" />
                                        </Link>
                                        <span className="price-holder"><span className="span1">$1,700</span></span>
                                    </div>
                                    <div className="text-holder">
                                        <h3 className="title"><Link to="/travelDubai" className="Link_">Elephant Ride</Link></h3>
                                        <div className="meta-info">
                                            <span className="time">
                                                <svg className="svg-inline--fa fa-clock fa-w-16" aria-hidden="true" data-prefix="far" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path></svg>
                                                15 days                                                                </span>
                                        </div>
                                        <div className="btn-holder">
                                            <Link to="/travelDubai" className="btn-more">View Detail</Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row> <Row><Col className="col_">
                            <div className="holder">
                                <div className="img-holder">
                                    <Link to="/travelDubai" className="Link_">                                                            <img src={img_4} className="hoverZoomLink" width="100%" alt="" />
                                    </Link>
                                    <span className="price-holder"><span className="span1">$1,300</span></span>
                                </div>
                                <div className="text-holder">
                                    <h3 className="title"><Link to="/travelDubai" className="Link_">Lake Kayaking</Link></h3>
                                    <div className="meta-info">
                                        <span className="time">
                                            <svg className="svg-inline--fa fa-clock fa-w-16" aria-hidden="true" data-prefix="far" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path></svg>
                                            15 days                                                                </span>
                                    </div>
                                    <div className="btn-holder">
                                        <Link to="/travelDubai" className="btn-more">View Detail</Link>
                                    </div>
                                </div>
                            </div>
                        </Col>
                            <Col className="col_">
                                <div className="holder">
                                    <div className="img-holder">
                                        <Link to="/travelDubai" className="Link_">                                                            <img src={img_5} className="hoverZoomLink" width="100%" alt="" />
                                        </Link>
                                        <span className="price-holder"><span className="span1">$1,500</span></span>
                                    </div>
                                    <div className="text-holder">
                                        <h3 className="title"><Link to="https://demo.raratheme.com/travel-agency-pro/trip/tilicho-lake-trek/" className="Link_">Tilicho lake Trek</Link></h3>
                                        <div className="meta-info">
                                            <span className="time">
                                                <svg className="svg-inline--fa fa-clock fa-w-16" aria-hidden="true" data-prefix="far" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path></svg>
                                                11 days                                                                </span>
                                        </div>
                                        <div className="btn-holder">
                                            <Link to="/travelDubai" className="btn-more">View Detail</Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col className="col_">
                                <div className="holder">
                                    <div className="img-holder">
                                        <Link to="/travelDubai" className="Link_">                                                            <img src={img_6} className="hoverZoomLink" width="100%" alt="" />
                                        </Link>
                                        <span className="price-holder"><span className="span1">$1,200</span></span>
                                    </div>
                                    <div className="text-holder">
                                        <h3 className="title"><Link to="/travelDubai" className="Link_">Greece Tour</Link></h3>
                                        <div className="meta-info">
                                            <span className="time">
                                                <svg className="svg-inline--fa fa-clock fa-w-16" aria-hidden="true" data-prefix="far" data-icon="clock" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z"></path></svg>
                                                8 days                                                                </span>
                                        </div>
                                        <div className="btn-holder">
                                            <Link to="/" className="btn-more">View Detail</Link>
                                        </div></div></div></Col>
                        </Row> </div>
                    <p>
                    </p>
                </Container>
            </section>
        </React.Fragment>
    );

};
export default Feature;