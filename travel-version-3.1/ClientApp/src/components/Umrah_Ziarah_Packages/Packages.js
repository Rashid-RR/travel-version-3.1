import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import image from './pic1.jpg';
import './Packages.css';

class Packages extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div>

                    <Row>
                        <Col sm="1"></Col>
                        <Col sm="10"><header className="page-header">
                            <h1 className="page-title">UMRAH PACKAGES 2018</h1>
                        </header></Col>
                        <Col sm="1"></Col>
                    </Row>

                    <div>
                        <Row>
                            <Col sm="1"></Col>
                            <Col sm="10"><img src={image} alt="pics" height="130%" width="100%" /></Col>
                            <Col sm="1"></Col>
                        </Row>

                    </div>
                    <br></br>
                    <br></br>
                    <br></br>



                    <Container>

                        <br></br>
                        <br></br>
                        <br></br>
                        <Row>
                            <Col sm=""></Col>
                            <Col sm="Auto"><p className="font">Take a look at our extensive list of economical Umrah packages of 2018 by clicking HERE.<br></br><br></br>

                                Find the perfect package which best suits your need and CONTACT US to book your Umrah package 2018 now!</p></Col>

                            <Col sm=""></Col>
                        </Row>
                        <br></br>


                        <Row>
                            <Col sm=""></Col>
                            <Col sm="Auto"><h1 className="Rang"><strong>UMRAH AND ZIARAH PACKAGES 2018</strong> </h1></Col>
                            <Col sm=""></Col>
                        </Row>
                        <br></br>
                        <br></br>
                        <Row>
                            <Col sm=""></Col>
                            <Col sm="Auto"><h1 className="Rang">ECONOMY PACKAGE </h1></Col>
                            <Col sm=""></Col>
                        </Row>

                        {/* 

                    <Row className='hmara'>
                        <Col sm='4'>
                          <table class="table table-bordered">
                            <tr class="table-dark">
                                <td class="table-active">15 DAYS UMRAH</td>
                            </tr>
                            <tr class="table-active">
                                <td class="table-active"><strong><sup>Rs</sup>19,200</strong></td>
                            </tr>
                            <tr class="table-dark">
                                <td class="table-active">Makkah Hotel => Abraj Al Mansi</td>
                            </tr>
                            <tr class="table-active">
                                <td class="table-active">Distance from Haram 1250 m</td>
                            </tr>
                            <tr class="table-dark">
                                <td class="table-active">Madina Hotel distance to Masjid Nabwi: 750 m</td>
                            </tr>
                            <tr class="table-active">
                                <td class="table-active">Shared Room = Rs19,200</td>
                            </tr>
                            <tr class="table-dark">
                                <td class="table-active">Quad Bed = Rs23,500</td>
                            </tr>
                            <tr class="table-active">
                                <td class="table-active">Tripple Bed = Rs28,500</td>
                            </tr>
                            <tr class="table-dark">
                                <td class="table-active">Double Bed = Rs44,200</td>
                            </tr>
                            <tr class="table-active">
                                <td class="table-active">Ticket not included</td>
                            </tr>
                         </table> 
                            
                        </Col>


                        <Col sm='4'>
                          <table class="table table-striped">
                            <tr class="table-active">
                                <td class="table-active">21 DAYS UMRAH</td>
                            </tr>
                            <tr class="table-dark">
                                <td class="table-active"><strong><sup>Rs</sup>23,500</strong></td>
                            </tr>
                            <tr class="table-active">
                                <td class="table-active">Makkah Hotel => Abraj Al Mansi</td>
                            </tr>
                            <tr class="table-active">
                                <td class="table-active">Distance from Haram 1250 m</td>
                            </tr>
                            <tr class="table-active">
                                <td class="table-active">Madina Hotel distance to Masjid Nabwi: 750 m</td>
                            </tr>
                            <tr class="table-active">
                                <td class="table-active">Shared Room = Rs23,500</td>
                            </tr>
                            <tr class="table-active">
                                <td class="table-active">Quad Bed = Rs29,500</td>
                            </tr>
                            <tr class="table-active">
                                <td class="table-active">Tripple Bed = Rs38,500</td>
                            </tr>
                            <tr class="table-active">
                                <td class="table-active">Double Bed = Rs59,000</td>
                            </tr>
                            <tr class="table-active">
                                <td class="table-active">Ticket not included</td>
                            </tr>
                         </table>
                        </Col>


                        <Col sm='4'>
                          <table class="table table-bordered table-dark">
                            <tr class="table-active">
                                <td class="table-active">27 DAYS UMRAH</td>
                            </tr>
                            <tr class="table-active">
                                <td class="table-active"><strong><sup>Rs</sup>28,500</strong></td>
                            </tr>
                            <tr class="table-active">
                                <td class="table-active">Makkah Hotel => Abraj Al Mansi</td>
                            </tr>
                            <tr class="table-active">
                                <td class="table-active">Distance from Haram 1250 m</td>
                            </tr>
                            <tr class="table-active">
                                <td class="table-active">Madina Hotel distance to Masjid Nabwi: 750 m</td>
                            </tr>
                            <tr class="table-active">
                                <td class="table-active">Shared Room = Rs28,500</td>
                            </tr>
                            <tr class="table-active">
                                <td class="table-active">Quad Bed = Rs36,500</td>
                            </tr>
                            <tr class="table-active">
                                <td class="table-active">Tripple Bed = Rs46,500</td>
                            </tr>
                            <tr class="table-active">
                                <td class="table-active">Double Bed = Rs74,200</td>
                            </tr>
                            <tr class="table-active">
                                <td class="table-active">Ticket not included</td>
                            </tr>
                         </table> 
                        </Col>
                    </Row> */}
                       <Row>
                        <Col sm=''><div class="pricing-table multicolor   no-pricing-offer">
                            <ul class="pricing-cols">
                                <li class="pricing-col three-table ">
                                    <div class="pricing-heading" >

                                        <div class="pricing-plan">15 Days Umrah</div>				<div class="pricing-price">
                                            <span>
                                                <sup>Rs</sup>19,200		<sub></sub>
                                            </span>
                                        </div>			</div>

                                    <div class="pricing-features"><ul>
                                        <li>
                                            <strong>Makkah Hotel</strong> =&gt; Abraj Al Mansi</li>
                                        <li>Distance from Haram 1250 m</li>
                                        <li>Madina Hotel distance to Masjid Nabwi: 750 m</li>
                                        <li>Shared Room = <strong>Rs19,200</strong>
                                        </li>
                                        <li>Quad Bed =&nbsp;<strong>Rs23,500</strong>
                                        </li>
                                        <li>Tripple Bed =&nbsp;<strong>Rs28,500</strong>
                                        </li>
                                        <li>Double Bed = <strong>Rs44,200</strong>
                                        </li>
                                        <li><strong>Ticket not included</strong></li>
                                    </ul></div>			<div class="pricing-button">

                                        <div id="mk-button-6" class="mk-button-container _ relative    block text-center ">


                                            <a href="http://sealinks.pk/contact/" target="_self" class="mk-button js-smooth-scroll mk-button--dimension-three mk-button--size-large mk-button--corner-pointed text-color-light _ relative text-center font-weight-700 no-backface  letter-spacing-2 inline"><span class="mk-button--text">BOOK NOW</span></a>


                                        </div>
                                        <div class="clearboth"></div>
                                    </div></li><li class="pricing-col three-table ">
                                    <div class="pricing-heading" >

                                        <div class="pricing-plan">21 Days Umrah </div>				<div class="pricing-price">
                                            <span>
                                                <sup>Rs</sup>23,500		<sub></sub>
                                            </span>
                                        </div>			</div>

                                    <div class="pricing-features"><ul>
                                        <li>
                                            <strong>Makkah Hotel</strong> =&gt; Abraj Al Mansi</li>
                                        <li>Distance from Haram 1250 m</li>
                                        <li>Madina Hotel distance to Masjid Nabwi: 750 m</li>
                                        <li>Shared Room = <strong>Rs23,500</strong>
                                        </li>
                                        <li>Quad Bed =&nbsp;<strong>Rs29,500</strong>
                                        </li>
                                        <li>Tripple Bed =&nbsp;<strong>Rs38,500</strong>
                                        </li>
                                        <li>Double Bed = <strong>Rs59,000</strong>
                                        </li>
                                        <li><strong>Ticket not included</strong></li>
                                    </ul></div>			<div class="pricing-button">

                                        <div id="mk-button-7" class="mk-button-container _ relative    block text-center ">


                                            <a href="http://sealinks.pk/contact/" target="_self" class="mk-button js-smooth-scroll mk-button--dimension-three mk-button--size-large mk-button--corner-pointed text-color-light _ relative text-center font-weight-700 no-backface  letter-spacing-2 inline"><span class="mk-button--text">BOOK NOW</span></a>


                                        </div>
                                        <div class="clearboth"></div>
                                    </div></li><li class="pricing-col three-table ">
                                    <div class="pricing-heading" >

                                        <div class="pricing-plan">27 Days Umrah </div>				<div class="pricing-price">
                                            <span>
                                                <sup>Rs</sup>28,500		<sub></sub>
                                            </span>
                                        </div>			</div>

                                    <div class="pricing-features"><ul>
                                        <li>
                                            <strong>Makkah Hotel</strong> =&gt; Abraj Al Mansi</li>
                                        <li>Distance from Haram 1250 m</li>
                                        <li>Madina Hotel distance to Masjid Nabwi: 750 m</li>
                                        <li>Shared Room = <strong>Rs28,500</strong>
                                        </li>
                                        <li>Quad Bed =&nbsp;<strong>Rs36,500</strong>
                                        </li>
                                        <li>Tripple Bed =&nbsp;<strong>Rs46,500</strong>
                                        </li>
                                        <li>Double Bed = <strong>Rs74,200</strong>
                                        </li>
                                        <li><strong>Ticket not included</strong></li>
                                    </ul></div>			<div class="pricing-button">

                                        <div id="mk-button-8" class="mk-button-container _ relative    block text-center ">


                                            <a href="http://sealinks.pk/contact/" target="_self" class="mk-button js-smooth-scroll mk-button--dimension-three mk-button--size-large mk-button--corner-pointed text-color-light _ relative text-center font-weight-700 no-backface  letter-spacing-2 inline"><span class="mk-button--text">BOOK NOW</span></a>


                                        </div>
                                        <div class="clearboth"></div>
                                    </div></li></ul>
                        </div></Col>
                        </Row>







                    </Container>
                </div>
            </React.Fragment>
        );
    }
}

export default Packages;