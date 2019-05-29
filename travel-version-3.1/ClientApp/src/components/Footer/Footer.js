import React, { } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Footer.css';


const Footer = () => {
    return (
        <React.Fragment>
            <footer className="site-footer">
                <Container>
                    <Row>
                        <Col sm={12} md={6} lg={3}>
                            <section className="widgetSection">
                                <h2>Contact Info</h2>
                                <p>Phone: +977-1-47012454</p>
                                <p>Email: info@xyz-adventure.com</p>
                                <p>GPO Box : 5612, Thamel, Kathmandu</p>
                                <p>Fax Number: 503-555-1213</p>
                            </section>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <section className="widgetSection">
                                <h2>Destinations</h2>
                                <ul>
                                    <li>Nepal</li>
                                    <li>India</li>
                                    <li>Tibet</li>
                                    <li>Maldives</li>
                                </ul>
                            </section>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <section className="widgetSection">
                                <h2>Activities</h2>
                                <ul>
                                    <li>Road Cycling</li>
                                    <li>Cultural Tours</li>
                                    <li>Peak Climbing</li>
                                    <li>Jungle Safari</li>
                                </ul>
                            </section>
                        </Col>
                        <Col sm={12} md={6} lg={3}>
                            <section className="widgetSection">
                                <h2>Trip Types</h2>
                                <ul className="menu">
                                    <li>Nature Walk</li>
                                    <li>Child-friendly</li>
                                    <li>Dog-friendly</li>
                                    <li>Cultural</li>
                                </ul>
                            </section>
                        </Col>
                    </Row>
                    <div className="FootText">© Copyright 2019 Sea Links Powered by Holacia</div>
                </Container>
            </footer>
        </React.Fragment>

    );
};
export default Footer;