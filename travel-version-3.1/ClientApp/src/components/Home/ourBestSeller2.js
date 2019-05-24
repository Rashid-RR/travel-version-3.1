import React, { Component } from 'react';
import "./ourBestSeller.css";
import { Link } from 'react-router-dom';
import { Col, Row, Container, Carousel, CarouselItem, CarouselControl, CarouselIndicators, CarouselCaption } from 'reactstrap';
const items = [
    {
        src: 'http://www.travelstart.co.za/blog/wp-content/uploads/2018/05/maldives-weather.jpg',
        altText: 'Slide 1',
        caption: 'Slide 1'
    },
    {
        src: 'https://media.travelbag.co.uk/Content/Images/Holiday/new/thailand/summary%20images/phuket-summary-image.jpg',
        altText: 'Slide 2',
        caption: 'Slide 2'
    },
    {
        src: 'https://news.bitcoin.com/wp-content/uploads/2016/11/Dubai-Legislation-Committee-Hosts-Bitcoin-Workshop.jpg',
        altText: 'Slide 3',
        caption: 'Slide 3'
    }
];



export default class OurBestSeller extends Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img src={item.src} alt={item.altText} />
                    <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
                </CarouselItem>
            );
        });
        return (<React.Fragment>

       
            <section className="popular-destination">
                <Container>

                    <header className="section-header wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" >
                        <h2 className="section-title">
                            Featured Trip
</h2>
                        <div className="section-content">
                            <p>This is the best place to show your most sold and popular travel packages. You can modify this section from Appearance &gt; Customize &gt; Home Page Settings &gt; Best Sellers Packages.
</p></div></header>
                    <div className="grid kayaking" data-id="1">
                        <Row>                      <div className="col_">
                            <div className="holder">
                                <div className="img-holder">
                                    <Link to="/travelDubai" className="Link_">                                                            <img src="https://demo.raratheme.com/travel-agency-pro/wp-content/uploads/sites/24/2017/10/big-ben-1-1-410x250.jpg" className="hoverZoomLink" width="100%" alt="" />
                                    </Link>
                                    <span className="price-holder" itemprop="priceRange"><span className="span1">$1,200</span></span>
                                </div>
                                <div className="text-holder">
                                    <h3 className="title"><Link to="/travelDubai" className="Link_">Tower Bridge, London</Link></h3>
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
                        </div>
                            <Col className="col_">
                                <div className="holder">
                                    <div className="img-holder">
                                        <Link to="/travelDubai" className="Link_">                                                            <img src="https://demo.raratheme.com/travel-agency-pro/wp-content/uploads/sites/24/2017/10/lake-louise-1761286_1920-1-410x250.jpg" className="hoverZoomLink" width="100%" alt="" />
                                        </Link>
                                        <span className="price-holder" itemprop="priceRange"><span className="span1">$1,300</span></span>
                                    </div>
                                    <div className="text-holder">
                                        <h3 className="title"><Link to="/travelDubai" className="Link_">Trishuli River Rafting</Link></h3>
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
                                        <Link to="/travelDubai" className="Link_">                                                            <img src="https://demo.raratheme.com/travel-agency-pro/wp-content/uploads/sites/24/2017/11/chalet-1005638_19201-1-410x250.jpg" className="hoverZoomLink" width="100%" alt="" />
                                        </Link>
                                        <span className="price-holder" itemprop="priceRange"><span className="span1">$1,700</span></span>
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
                                    <Link to="/travelDubai" className="Link_">                                                            <img src="https://demo.raratheme.com/travel-agency-pro/wp-content/uploads/sites/24/2017/10/kayak-1465191_19201-1-410x250.jpg" className="hoverZoomLink" width="100%" alt="" />
                                    </Link>
                                    <span className="price-holder" itemprop="priceRange"><span className="span1">$1,300</span></span>
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
                                        <Link to="/travelDubai" className="Link_">                                                            <img src="https://demo.raratheme.com/travel-agency-pro/wp-content/uploads/sites/24/2017/11/pexels-photo-23862211-1-410x250.jpeg" className="hoverZoomLink" width="100%" alt="" />
                                        </Link>
                                        <span className="price-holder" itemprop="priceRange"><span className="span1">$1,500</span></span>
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
                                        <Link to="/travelDubai" className="Link_">                                                            <img src="https://demo.raratheme.com/travel-agency-pro/wp-content/uploads/sites/24/2017/10/Vueling-2-410x250.jpg" className="hoverZoomLink" width="100%" alt="" />
                                        </Link>
                                        <span className="price-holder" itemprop="priceRange"><span className="span1">$1,200</span></span>
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


            <section className="popular-destination">
                <Container>

                    <header className="section-header wow fadeInUp" data-wow-duration="1s" data-wow-delay="0.1s" >
                        <h2 className="section-title">
                            Deals and Discounts
</h2>
                        <div className="section-content">
                            <p>how the special deals and discounts to your customers here. You can customize this section from Appearance > Customize > Home Page Settings > Deals Section.</p></div></header>
                    <div className="grid kayaking" data-id="1">
                        <Row>                      <div className="col_">
                            <div className="holder">
                                <div className="img-holder">
                                    <Link to="/travelDubai" className="Link_">                                                            <img src="https://demo.raratheme.com/travel-agency-pro/wp-content/uploads/sites/24/2017/10/big-ben-1-1-410x250.jpg" className="hoverZoomLink" width="100%" alt="" />
                                    </Link>
                                    <span className="price-holder" itemprop="priceRange"><span className="span1">$1,200</span></span>
                                </div>

                                <div className="text-holder">
                                    <h3 className="title"><Link to="/travelDubai" className="Link_">Tower Bridge, London</Link></h3>
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
                        </div>
                            <Col className="col_">
                                <div className="holder">
                                    <div className="img-holder">
                                        <Link to="/travelDubai" className="Link_">                                                            <img src="https://demo.raratheme.com/travel-agency-pro/wp-content/uploads/sites/24/2017/10/lake-louise-1761286_1920-1-410x250.jpg" className="hoverZoomLink" width="100%" alt="" />
                                        </Link>
                                        <span className="price-holder" itemprop="priceRange"><span className="span1">$1,300</span></span>
                                    </div>
                                    <div className="text-holder">
                                        <h3 className="title"><Link to="/travelDubai" className="Link_">Trishuli River Rafting</Link></h3>
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
                                        <Link to="/travelDubai" className="Link_">                                                            <img src="https://demo.raratheme.com/travel-agency-pro/wp-content/uploads/sites/24/2017/11/chalet-1005638_19201-1-410x250.jpg" className="hoverZoomLink" width="100%" alt="" />
                                        </Link>
                                        <span className="price-holder" itemprop="priceRange"><span className="span1">$1,700</span></span>
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
                        </Row> </div>
                    <p>




                    </p>
                </Container>

            </section>













        </React.Fragment>
        );

    }
}