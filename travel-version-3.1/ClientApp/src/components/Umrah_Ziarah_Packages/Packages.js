import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import image from './pic1.jpg';
import './Packages.css';
import {Link} from 'react-router-dom';
import image3 from './pic3.jpg';

class Packages extends Component {
    state = {}
    render() {
        return (
            <React.Fragment>
                <div>
                    <br></br><br></br>
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

                       
                       <Row>
                        <Col sm=''><div class="pricing-table1 multicolor   no-pricing-offer ">
                            <ul class="pricing-cols ul12">
                                <li class="pricing-col three-table li12">
                                    <div class="pricing-heading">

                                        <div class="pricing-plan">15 Days Umrah</div>				
                                           <div class="pricing-price">
                                            <span>
                                                <sup>Rs</sup>19,200		
                                            </span>
                                        </div>			</div>

                                    <div class="pricing-features"><ul className="ul12">
                                        <li className="li12">
                                            <strong>Makkah Hotel</strong> =&gt; Abraj Al Mansi</li>
                                        <li className="li12">Distance from Haram 1250 m</li>
                                        <li className="li12">Madina Hotel distance to Masjid Nabwi: 750 m</li>
                                        <li className="li12">Shared Room = <strong>Rs19,200</strong>
                                        </li>
                                        <li className="li12">Quad Bed =&nbsp;<strong>Rs23,500</strong>
                                        </li>
                                        <li className="li12">Tripple Bed =&nbsp;<strong>Rs28,500</strong>
                                        </li>
                                        <li className="li12">Double Bed = <strong>Rs44,200</strong>
                                        </li>
                                        <li className="li12"><strong>Ticket not included</strong></li>
                                    </ul></div>			<div class="pricing-button">

                                        <div id="mk-button-6" class="mk-button-container _ relative    block text-center ">


                                            {/* <a href="" target="_self" class="mk-button js-smooth-scroll mk-button--dimension-three mk-button--size-large mk-button--corner-pointed text-color-light _ relative text-center font-weight-700 no-backface  letter-spacing-2 inline"><span class="mk-button--text">BOOK NOW</span></a> */}
                                            <Link to="#" class="mk-button"><span class="mk-button--text">BOOK NOW</span></Link>

                                        </div>
                                        <div class="clearboth"></div>
                                    </div></li><li class="pricing-col three-table li12">
                                    <div class="pricing-heading" >

                                        <div class="pricing-plan">21 Days Umrah </div>				<div class="pricing-price">
                                            <span>
                                                <sup>Rs</sup>23,500		<sub></sub>
                                            </span>
                                        </div>			</div>

                                    <div class="pricing-features"><ul className="ul12">
                                        <li className="li12">
                                            <strong>Makkah Hotel</strong> =&gt; Abraj Al Mansi</li>
                                        <li className="li12">Distance from Haram 1250 m</li>
                                        <li className="li12">Madina Hotel distance to Masjid Nabwi: 750 m</li>
                                        <li className="li12">Shared Room = <strong>Rs23,500</strong>
                                        </li>
                                        <li className="li12">Quad Bed =&nbsp;<strong>Rs29,500</strong>
                                        </li>
                                        <li className="li12">Tripple Bed =&nbsp;<strong>Rs38,500</strong>
                                        </li>
                                        <li className="li12">Double Bed = <strong>Rs59,000</strong>
                                        </li>
                                        <li className="li12"><strong>Ticket not included</strong></li>
                                    </ul></div>			<div class="pricing-button">

                                        <div id="mk-button-7" class="mk-button-container _ relative    block text-center ">


                                            {/* <a href="http://sealinks.pk/contact/" target="_self" class="mk-button js-smooth-scroll mk-button--dimension-three mk-button--size-large mk-button--corner-pointed text-color-light _ relative text-center font-weight-700 no-backface  letter-spacing-2 inline"><span class="mk-button--text">BOOK NOW</span></a> */}
                                            <Link to="#" class="mk-button"><span class="mk-button--text">BOOK NOW</span></Link>

                                        </div>
                                        <div class="clearboth"></div>
                                    </div></li><li class="pricing-col three-table li12">
                                    <div class="pricing-heading" >

                                        <div class="pricing-plan">27 Days Umrah </div>				<div class="pricing-price">
                                            <span>
                                                <sup>Rs</sup>28,500		<sub></sub>
                                            </span>
                                        </div>			</div>

                                    <div class="pricing-features"><ul className="ul12">
                                        <li className="li12">
                                            <strong>Makkah Hotel</strong> =&gt; Abraj Al Mansi</li>
                                        <li className="li12">Distance from Haram 1250 m</li>
                                        <li className="li12">Madina Hotel distance to Masjid Nabwi: 750 m</li>
                                        <li className="li12">Shared Room = <strong>Rs28,500</strong>
                                        </li>
                                        <li className="li12">Quad Bed =&nbsp;<strong>Rs36,500</strong>
                                        </li>
                                        <li className="li12">Tripple Bed =&nbsp;<strong>Rs46,500</strong>
                                        </li>
                                        <li className="li12">Double Bed = <strong>Rs74,200</strong>
                                        </li>
                                        <li className="li12"><strong>Ticket not included</strong></li>
                                    </ul></div>			<div class="pricing-button">

                                        <div id="mk-button-8" class="mk-button-container _ relative    block text-center ">


                                            {/* <a href="http://sealinks.pk/contact/" target="_self" class="mk-button js-smooth-scroll mk-button--dimension-three mk-button--size-large mk-button--corner-pointed text-color-light _ relative text-center font-weight-700 no-backface  letter-spacing-2 inline"><span class="mk-button--text">BOOK NOW</span></a> */}
                                            <Link to="#" class="mk-button"><span class="mk-button--text">BOOK NOW</span></Link>

                                        </div>
                                        <div class="clearboth"></div>
                                    </div>
                                    </li>
                                    </ul>
                        </div></Col>
                        </Row>



                        <Row>
                            <Col sm=""></Col>
                            <Col sm="Auto"><h1 className="Rang">STANDARD PACKAGE </h1></Col>
                            <Col sm=""></Col>
                        </Row>


                        <Row>
                        <Col sm=''><div class="pricing-table1 multicolor   no-pricing-offer ">
                            <ul class="pricing-cols ul12">
                                <li class="pricing-col three-table li12">
                                    <div class="pricing-heading">

                                        <div class="pricing-plan">27 Days Umrah</div>				
                                           <div class="pricing-price">
                                            <span>
                                                <sup>Rs</sup>30,000		
                                            </span>
                                        </div>			</div>

                                    <div class="pricing-features"><ul className="ul12">
                                        <li className="li12"> Visa included</li>
                                        <li className="li12">Transport (Jed-Mak-Med-Mak-Jed)</li>
                                        <li className="li12">Accomodation</li>
                                        <li className="li12"><strong>Makkah Hotel</strong> =&gt;</li>
                                        <li className="li12">Land premium/Al-Ard Al Mutamaiz</li>
                                        <li className="li12">Shahra-e-Hijra near Kubri Misfillah </li>
                                        <li className="li12">Distance from Haram 1000m</li>
                                        <li className="li12">Madina Hotels =></li>
                                        <li className="li12">Wasai Al-Muhammadiya</li>
                                        <li className="li12">Burj ul Mukhtara</li>
                                        <li className="li12">Distance to Masjid Nabwi: 500 m</li>
                                        <li className="li12">Shared Room = <strong>Rs30,000</strong></li>
                                        <li className="li12">Quad Bed =&nbsp;<strong>Rs40,000</strong></li>
                                        <li className="li12">Tripple Bed =&nbsp;<strong>Rs49,000</strong></li>
                                        <li className="li12">Double Bed = <strong>Rs77,000</strong></li>
                                        <li className="li12"><strong>Ticket not included</strong></li>
                                    </ul></div>			<div class="pricing-button">

                                        <div id="mk-button-6" class="mk-button-container _ relative    block text-center ">


                                            {/* <a href="" target="_self" class="mk-button js-smooth-scroll mk-button--dimension-three mk-button--size-large mk-button--corner-pointed text-color-light _ relative text-center font-weight-700 no-backface  letter-spacing-2 inline"><span class="mk-button--text">BOOK NOW</span></a> */}
                                            <Link to="#" class="mk-button"><span class="mk-button--text">BOOK NOW</span></Link>

                                        </div>
                                        <div class="clearboth"></div>
                                    </div></li><li class="pricing-col three-table li12">
                                    <div class="pricing-heading" >

                                        <div class="pricing-plan">21 Days Umrah </div>				<div class="pricing-price">
                                            <span>
                                                <sup>Rs</sup>26,000		<sub></sub>
                                            </span>
                                        </div>			</div>

                                    <div class="pricing-features"><ul className="ul12">
                                    <li className="li12"> Visa included</li>
                                        <li className="li12">Transport (Jed-Mak-Med-Mak-Jed)</li>
                                        <li className="li12">Accomodation</li>
                                        <li className="li12"><strong>Makkah Hotel</strong> =&gt;</li>
                                        <li className="li12">Land premium/Al-Ard Al Mutamaiz</li>
                                        <li className="li12">Shahra-e-Hijra near Kubri Misfillah </li>
                                        <li className="li12">Distance from Haram 1000m</li>
                                        <li className="li12">Madina Hotels =></li>
                                        <li className="li12">Wasai Al-Muhammadiya</li>
                                        <li className="li12">Burj ul Mukhtara</li>
                                        <li className="li12">Distance to Masjid Nabwi: 500 m</li>
                                        <li className="li12">Shared Room = <strong>Rs26,000</strong></li>
                                        <li className="li12">Quad Bed =&nbsp;<strong>Rs32,000</strong></li>
                                        <li className="li12">Tripple Bed =&nbsp;<strong>Rs40,500</strong></li>
                                        <li className="li12">Double Bed = <strong>Rs61,500</strong></li>
                                        <li className="li12"><strong>Ticket not included</strong></li>
                                    </ul></div>			<div class="pricing-button">

                                        <div id="mk-button-7" class="mk-button-container _ relative    block text-center ">


                                            {/* <a href="http://sealinks.pk/contact/" target="_self" class="mk-button js-smooth-scroll mk-button--dimension-three mk-button--size-large mk-button--corner-pointed text-color-light _ relative text-center font-weight-700 no-backface  letter-spacing-2 inline"><span class="mk-button--text">BOOK NOW</span></a> */}
                                            <Link to="#" class="mk-button"><span class="mk-button--text">BOOK NOW</span></Link>

                                        </div>
                                        <div class="clearboth"></div>
                                    </div></li><li class="pricing-col three-table li12">
                                    <div class="pricing-heading" >

                                        <div class="pricing-plan">15 Days Umrah </div>				<div class="pricing-price">
                                            <span>
                                                <sup>Rs</sup>21,000		<sub></sub>
                                            </span>
                                        </div>			</div>

                                    <div class="pricing-features"><ul className="ul12">
                                    <li className="li12"> Visa included</li>
                                        <li className="li12">Transport (Jed-Mak-Med-Mak-Jed)</li>
                                        <li className="li12">Accomodation</li>
                                        <li className="li12"><strong>Makkah Hotel</strong> =&gt;</li>
                                        <li className="li12">Land premium/Al-Ard Al Mutamaiz</li>
                                        <li className="li12">Shahra-e-Hijra near Kubri Misfillah </li>
                                        <li className="li12">Distance from Haram 1000m</li>
                                        <li className="li12">Madina Hotels =></li>
                                        <li className="li12">Wasai Al-Muhammadiya</li>
                                        <li className="li12">Burj ul Mukhtara</li>
                                        <li className="li12">Distance to Masjid Nabwi: 500 m</li>
                                        <li className="li12">Shared Room = <strong>Rs21,000</strong></li>
                                        <li className="li12">Quad Bed =&nbsp;<strong>Rs26,500</strong></li>
                                        <li className="li12">Tripple Bed =&nbsp;<strong>Rs31,500</strong></li>
                                        <li className="li12">Double Bed = <strong>Rs46,500</strong></li>
                                        <li className="li12"><strong>Ticket not included</strong></li>
                                    </ul></div>			<div class="pricing-button">

                                        <div id="mk-button-8" class="mk-button-container _ relative    block text-center ">


                                            {/* <a href="http://sealinks.pk/contact/" target="_self" class="mk-button js-smooth-scroll mk-button--dimension-three mk-button--size-large mk-button--corner-pointed text-color-light _ relative text-center font-weight-700 no-backface  letter-spacing-2 inline"><span class="mk-button--text">BOOK NOW</span></a> */}
                                            <Link to="#" class="mk-button"><span class="mk-button--text">BOOK NOW</span></Link>

                                        </div>
                                        <div class="clearboth"></div>
                                    </div>
                                    </li>
                                    </ul>
                        </div></Col>
                        </Row>





                        <Row>
                            <Col sm=""></Col>
                            <Col sm="Auto"><h1 className="Rang">GOLDEN PACKAGE </h1></Col>
                            <Col sm=""></Col>
                        </Row>


                        <Row>
                        <Col sm=''><div class="pricing-table1 multicolor   no-pricing-offer ">
                            <ul class="pricing-cols ul12">
                                <li class="pricing-col three-table li12">
                                    <div class="pricing-heading">

                                        <div class="pricing-plan">27 Days Umrah</div>				
                                           <div class="pricing-price">
                                            <span>
                                                <sup>Rs</sup>36,500		
                                            </span>
                                        </div>			</div>

                                    <div class="pricing-features"><ul className="ul12">
                                        <li className="li12"> Visa included</li>
                                        <li className="li12">Transport (Jed-Mak-Med-Mak-Jed)</li>
                                        <li className="li12">Accomodation</li>
                                        <li className="li12"><strong>Makkah Hotel</strong> =&gt;Blora Al Taj Hotel</li>
                                        <li className="li12">Distance from Haram 400m</li>
                                        <li className="li12">Madina Hotels =>Burj Mukhtara Hotel</li>
                                        <li className="li12">Distance to Masjid Nabwi: 300 m</li>
                                        <li className="li12">Shared Room = <strong>Rs36,500</strong></li>
                                        <li className="li12">Quad Bed =&nbsp;<strong>Rs43,500</strong></li>
                                        <li className="li12">Tripple Bed =&nbsp;<strong>Rs52,000</strong></li>
                                        <li className="li12">Double Bed = <strong>Rs78,500</strong></li>
                                        <li className="li12"><strong>Ticket not included</strong></li>
                                    </ul></div>			<div class="pricing-button">

                                        <div id="mk-button-6" class="mk-button-container _ relative    block text-center ">


                                            {/* <a href="" target="_self" class="mk-button js-smooth-scroll mk-button--dimension-three mk-button--size-large mk-button--corner-pointed text-color-light _ relative text-center font-weight-700 no-backface  letter-spacing-2 inline"><span class="mk-button--text">BOOK NOW</span></a> */}
                                            <Link to="#" class="mk-button"><span class="mk-button--text">BOOK NOW</span></Link>

                                        </div>
                                        <div class="clearboth"></div>
                                    </div></li><li class="pricing-col three-table li12">
                                    <div class="pricing-heading" >

                                        <div class="pricing-plan">21 Days Umrah </div>				<div class="pricing-price">
                                            <span>
                                                <sup>Rs</sup>31,000		<sub></sub>
                                            </span>
                                        </div>			</div>

                                    <div class="pricing-features"><ul className="ul12">
                                    <li className="li12"> Visa included</li>
                                        <li className="li12">Transport (Jed-Mak-Med-Mak-Jed)</li>
                                        <li className="li12">Accomodation</li>
                                        <li className="li12"><strong>Makkah Hotel</strong> =&gt;Blora Al Taj Hotel</li>
                                        <li className="li12">Distance from Haram 400m</li>
                                        <li className="li12">Madina Hotels =>Burj Mukhtara Hotel</li>
                                        <li className="li12">Distance to Masjid Nabwi: 300 m</li>
                                        <li className="li12">Shared Room = <strong>Rs31,000</strong></li>
                                        <li className="li12">Quad Bed =&nbsp;<strong>Rs36,000</strong></li>
                                        <li className="li12">Tripple Bed =&nbsp;<strong>Rs43,500</strong></li>
                                        <li className="li12">Double Bed = <strong>Rs61,500</strong></li>
                                        <li className="li12"><strong>Ticket not included</strong></li>
                                    </ul></div>			<div class="pricing-button">

                                        <div id="mk-button-7" class="mk-button-container _ relative    block text-center ">


                                            {/* <a href="http://sealinks.pk/contact/" target="_self" class="mk-button js-smooth-scroll mk-button--dimension-three mk-button--size-large mk-button--corner-pointed text-color-light _ relative text-center font-weight-700 no-backface  letter-spacing-2 inline"><span class="mk-button--text">BOOK NOW</span></a> */}
                                            <Link to="#" class="mk-button"><span class="mk-button--text">BOOK NOW</span></Link>

                                        </div>
                                        <div class="clearboth"></div>
                                    </div></li><li class="pricing-col three-table li12">
                                    <div class="pricing-heading" >

                                        <div class="pricing-plan">15 Days Umrah </div>				<div class="pricing-price">
                                            <span>
                                                <sup>Rs</sup>27,000		<sub></sub>
                                            </span>
                                        </div>			</div>

                                    <div class="pricing-features"><ul className="ul12">
                                    <li className="li12"> Visa included</li>
                                        <li className="li12">Transport (Jed-Mak-Med-Mak-Jed)</li>
                                        <li className="li12">Accomodation</li>
                                        <li className="li12"><strong>Makkah Hotel</strong> =&gt;Blora Al Taj Hotel</li>
                                        <li className="li12">Distance from Haram 400m</li>
                                        <li className="li12">Madina Hotels =>Burj Mukhtara Hotel</li>
                                        <li className="li12">Distance to Masjid Nabwi: 300 m</li>
                                        <li className="li12">Shared Room = <strong>Rs27,000</strong></li>
                                        <li className="li12">Quad Bed =&nbsp;<strong>Rs30,300</strong></li>
                                        <li className="li12">Tripple Bed =&nbsp;<strong>Rs34,000</strong></li>
                                        <li className="li12">Double Bed = <strong>Rs48,000</strong></li>
                                        <li className="li12"><strong>Ticket not included</strong></li>
                                    </ul></div>			<div class="pricing-button">

                                        <div id="mk-button-8" class="mk-button-container _ relative    block text-center ">


                                            {/* <a href="http://sealinks.pk/contact/" target="_self" class="mk-button js-smooth-scroll mk-button--dimension-three mk-button--size-large mk-button--corner-pointed text-color-light _ relative text-center font-weight-700 no-backface  letter-spacing-2 inline"><span class="mk-button--text">BOOK NOW</span></a> */}
                                            <Link to="#" class="mk-button"><span class="mk-button--text">BOOK NOW</span></Link>

                                        </div>
                                        <div class="clearboth"></div>
                                    </div>
                                    </li>
                                    </ul>
                        </div></Col>
                        </Row>



                        <Row>
                            <Col sm=""></Col>
                            <Col sm="Auto"><h1 className="Rang">3 STAR PACKAGE </h1></Col>
                            <Col sm=""></Col>
                        </Row>


                        <Row>
                        <Col sm=''><div class="pricing-table1 multicolor   no-pricing-offer ">
                            <ul class="pricing-cols ul12">
                                <li class="pricing-col three-table li12">
                                    <div class="pricing-heading">

                                        <div class="pricing-plan">15 Days Umrah</div>				
                                           <div class="pricing-price">
                                            <span>
                                                <sup>Rs</sup>48,000		
                                            </span>
                                        </div>			</div>

                                    <div class="pricing-features"><ul className="ul12">
                                        <li className="li12"> Visa included</li>
                                        <li className="li12">Transport (Pvt Car)</li>
                                        <li className="li12">Accomodation</li>
                                        <li className="li12"><strong>Makkah Hotel</strong> =&gt;Riyadah Grand and Dar Al Eiman Jaziral</li>
                                        <li className="li12">Distance from Haram 500-550 m</li>
                                        <li className="li12">Madina Hotels => Al Wahah Al Rowdah and Mukhtara Group Hotel</li>
                                        <li className="li12">Distance to Masjid Nabwi: 100-200m</li>
                                        <li className="li12">Quad Bed =&nbsp;<strong>Rs48,000</strong></li>
                                        <li className="li12">Tripple Bed =&nbsp;<strong>Rs57,500</strong></li>
                                        <li className="li12">Double Bed = <strong>Rs68,500</strong></li>
                                        <li className="li12"><strong>Ticket not included</strong></li>
                                    </ul></div>			<div class="pricing-button">

                                        <div id="mk-button-6" class="mk-button-container _ relative    block text-center ">


                                            {/* <a href="" target="_self" class="mk-button js-smooth-scroll mk-button--dimension-three mk-button--size-large mk-button--corner-pointed text-color-light _ relative text-center font-weight-700 no-backface  letter-spacing-2 inline"><span class="mk-button--text">BOOK NOW</span></a> */}
                                            <Link to="#" class="mk-button"><span class="mk-button--text">BOOK NOW</span></Link>

                                        </div>
                                        <div class="clearboth"></div>
                                    </div></li>
                                    <li class="pricing-col three-table li12">
                                    <div class="pricing-heading" >

                                        <div class="pricing-plan">10 Days Umrah </div>				<div class="pricing-price">
                                            <span>
                                                <sup>Rs</sup>33,000		<sub></sub>
                                            </span>
                                        </div>			</div>

                                    <div class="pricing-features"><ul className="ul12">
                                    <li className="li12"> Visa included</li>
                                        <li className="li12">Transport (Pvt Car)</li>
                                        <li className="li12">Accomodation</li>
                                        <li className="li12"><strong>Makkah Hotel</strong> =&gt;Riyadah Grand and Dar Al Eiman Jaziral</li>
                                        <li className="li12">Distance from Haram 500-550 m</li>
                                        <li className="li12">Madina Hotels => Al Wahah Al Rowdah and Mukhtara Group Hotel</li>
                                        <li className="li12">Distance to Masjid Nabwi: 100-200m</li>
                                        <li className="li12">Quad Bed =&nbsp;<strong>Rs33,000</strong></li>
                                        <li className="li12">Tripple Bed =&nbsp;<strong>Rs37,500</strong></li>
                                        <li className="li12">Double Bed = <strong>Rs49,500</strong></li>
                                        <li className="li12"><strong>Ticket not included</strong></li>
                                    </ul></div>			<div class="pricing-button">

                                        <div id="mk-button-7" class="mk-button-container _ relative    block text-center ">


                                            {/* <a href="http://sealinks.pk/contact/" target="_self" class="mk-button js-smooth-scroll mk-button--dimension-three mk-button--size-large mk-button--corner-pointed text-color-light _ relative text-center font-weight-700 no-backface  letter-spacing-2 inline"><span class="mk-button--text">BOOK NOW</span></a> */}
                                            <Link to="#" class="mk-button"><span class="mk-button--text">BOOK NOW</span></Link>

                                        </div>
                                        <div class="clearboth"></div>
                                    </div></li>
                                    </ul>
                        </div></Col>
                        </Row>




                        <Row>
                            <Col sm=""></Col>
                            <Col sm="Auto"><h1 className="Rang">4 STAR PACKAGE </h1></Col>
                            <Col sm=""></Col>
                        </Row>


                        <Row>
                        <Col sm=''><div class="pricing-table1 multicolor   no-pricing-offer ">
                            <ul class="pricing-cols ul12">
                                <li class="pricing-col three-table li12">
                                    <div class="pricing-heading">

                                        <div class="pricing-plan">15 Days Umrah</div>				
                                           <div class="pricing-price">
                                            <span>
                                                <sup>Rs</sup>56,500		
                                            </span>
                                        </div>			</div>

                                    <div class="pricing-features"><ul className="ul12">
                                        <li className="li12"> Visa included</li>
                                        <li className="li12">Transport (Pvt Car)</li>
                                        <li className="li12">Daily Breakfast (Makkah only)</li>
                                        <li className="li12">Accomodation</li>
                                        <li className="li12"><strong>Makkah Hotel</strong> =&gt; Dar ul Eman Grand and Grand Makkah Hotel</li>
                                        <li className="li12">Distance from Haram 300-450 m</li>
                                        <li className="li12">Madina Hotels => Ramada Al Hamra, Al Eman Taiba and ODST Madina Hotel</li>
                                        <li className="li12">Distance to Masjid Nabwi: 100-150m</li>
                                        <li className="li12">Quad Bed =&nbsp;<strong>Rs56,500</strong></li>
                                        <li className="li12">Tripple Bed =&nbsp;<strong>Rs66,500</strong></li>
                                        <li className="li12">Double Bed = <strong>Rs77,500</strong></li>
                                        <li className="li12"><strong>Ticket not included</strong></li>
                                    </ul></div>			<div class="pricing-button">

                                        <div id="mk-button-6" class="mk-button-container _ relative    block text-center ">


                                            {/* <a href="" target="_self" class="mk-button js-smooth-scroll mk-button--dimension-three mk-button--size-large mk-button--corner-pointed text-color-light _ relative text-center font-weight-700 no-backface  letter-spacing-2 inline"><span class="mk-button--text">BOOK NOW</span></a> */}
                                            <Link to="#" class="mk-button"><span class="mk-button--text">BOOK NOW</span></Link>

                                        </div>
                                        <div class="clearboth"></div>
                                    </div></li>
                                    <li class="pricing-col three-table li12">
                                    <div class="pricing-heading" >

                                        <div class="pricing-plan">10 Days Umrah </div>				<div class="pricing-price">
                                            <span>
                                                <sup>Rs</sup>33,000		<sub></sub>
                                            </span>
                                        </div>			</div>

                                    <div class="pricing-features"><ul className="ul12">
                                    <li className="li12"> Visa included</li>
                                        <li className="li12">Transport (Pvt Car)</li>
                                        <li className="li12">Daily Breakfast (Makkah only)</li>
                                        <li className="li12">Accomodation</li>
                                        <li className="li12"><strong>Makkah Hotel</strong> =&gt; Dar ul Eman Grand and Grand Makkah Hotel</li>
                                        <li className="li12">Distance from Haram 300-450 m</li>
                                        <li className="li12">Madina Hotels => Ramada Al Hamra, Al Eman Taiba and ODST Madina Hotel</li>
                                        <li className="li12">Distance to Masjid Nabwi: 100-150m</li>
                                        <li className="li12">Quad Bed =&nbsp;<strong>Rs36,500</strong></li>
                                        <li className="li12">Tripple Bed =&nbsp;<strong>Rs46,500</strong></li>
                                        <li className="li12">Double Bed = <strong>Rs56,500</strong></li>
                                        <li className="li12"><strong>Ticket not included</strong></li>
                                    </ul></div>			
                                    <div class="pricing-button">

                                        <div id="mk-button-7" class="mk-button-container _ relative    block text-center ">


                                            {/* <a href="http://sealinks.pk/contact/" target="_self" class="mk-button js-smooth-scroll mk-button--dimension-three mk-button--size-large mk-button--corner-pointed text-color-light _ relative text-center font-weight-700 no-backface  letter-spacing-2 inline"><span class="mk-button--text">BOOK NOW</span></a> */}
                                            <Link to="#" class="mk-button"><span class="mk-button--text">BOOK NOW</span></Link>

                                        </div>
                                        <div class="clearboth"></div>
                                    </div></li>
                                    </ul>
                        </div></Col>
                        </Row>



                        <Row>
                            <Col sm=""></Col>
                            <Col sm="Auto"><h1 className="Rang">5 STAR PACKAGE </h1></Col>
                            <Col sm=""></Col>
                        </Row>


                        <Row>
                        <Col sm=''><div class="pricing-table1 multicolor   no-pricing-offer ">
                            <ul class="pricing-cols ul12">
                                <li class="pricing-col three-table li12">
                                    <div class="pricing-heading">

                                        <div class="pricing-plan">15 Days Umrah</div>				
                                           <div class="pricing-price">
                                            <span>
                                                <sup>Rs</sup>94,000		
                                            </span>
                                        </div>			</div>

                                    <div class="pricing-features"><ul className="ul12">
                                        <li className="li12"> Visa included</li>
                                        <li className="li12">Transport (Pvt Car)</li>
                                        <li className="li12">Daily Breakfast (Makkah only)</li>
                                        <li className="li12">Accomodation</li>
                                        <li className="li12"><strong>Makkah Hotels</strong> =&gt;Zam Zam Grand, Marriot-Hilton Convention Tower,Swissotel, Marwa Rihana and Royal Dar ul Eman Hotel</li>
                                        <li className="li12">Directly facing Haram</li>
                                        <li className="li12">Madina Hotels => ZamZam Millenium Hotel, Crown Plaza,Al haram Al Eiman and Royal Diyar Hotel</li>
                                        <li className="li12">Facing Masjid Nabwi</li>
                                        <li className="li12">Quad Bed =&nbsp;<strong>Rs94,500</strong></li>
                                        <li className="li12">Tripple Bed =&nbsp;<strong>Rs110,000</strong></li>
                                        <li className="li12">Double Bed = <strong>Rs136,000</strong></li>
                                        <li className="li12"><strong>Ticket not included</strong></li>
                                    </ul></div>			<div class="pricing-button">

                                        <div id="mk-button-6" class="mk-button-container _ relative    block text-center ">


                                            {/* <a href="" target="_self" class="mk-button js-smooth-scroll mk-button--dimension-three mk-button--size-large mk-button--corner-pointed text-color-light _ relative text-center font-weight-700 no-backface  letter-spacing-2 inline"><span class="mk-button--text">BOOK NOW</span></a> */}
                                            <Link to="#" class="mk-button"><span class="mk-button--text">BOOK NOW</span></Link>

                                        </div>
                                        <div class="clearboth"></div>
                                    </div></li><li class="pricing-col three-table li12">
                                    <div class="pricing-heading" >

                                        <div class="pricing-plan">10 Days Umrah </div>				<div class="pricing-price">
                                            <span>
                                                <sup>Rs</sup>31,000		<sub></sub>
                                            </span>
                                        </div>			</div>

                                    <div class="pricing-features"><ul className="ul12">
                                    <li className="li12"> Visa included</li>
                                        <li className="li12">Transport (Pvt Car)</li>
                                        <li className="li12">Daily Breakfast (Makkah only)</li>
                                        <li className="li12">Accomodation</li>
                                        <li className="li12"><strong>Makkah Hotels</strong> =&gt;Zam Zam Grand, Marriot-Hilton Convention Tower,Swissotel, Marwa Rihana and Royal Dar ul Eman Hotel</li>
                                        <li className="li12">Directly facing Haram</li>
                                        <li className="li12">Madina Hotels => ZamZam Millenium Hotel, Crown Plaza,Al haram Al Eiman and Royal Diyar Hotel</li>
                                        <li className="li12">Facing Masjid Nabwi</li>
                                        <li className="li12">Quad Bed =&nbsp;<strong>Rs60,000</strong></li>
                                        <li className="li12">Tripple Bed =&nbsp;<strong>Rs70,000</strong></li>
                                        <li className="li12">Double Bed = <strong>Rs90,000</strong></li>
                                        <li className="li12"><strong>Ticket not included</strong></li>
                                    </ul></div>			<div class="pricing-button">

                                        <div id="mk-button-7" class="mk-button-container _ relative    block text-center ">


                                            {/* <a href="http://sealinks.pk/contact/" target="_self" class="mk-button js-smooth-scroll mk-button--dimension-three mk-button--size-large mk-button--corner-pointed text-color-light _ relative text-center font-weight-700 no-backface  letter-spacing-2 inline"><span class="mk-button--text">BOOK NOW</span></a> */}
                                            <Link to="#" class="mk-button"><span class="mk-button--text">BOOK NOW</span></Link>

                                        </div>
                                        <div class="clearboth"></div>
                                    </div></li><li class="pricing-col three-table li12">
                                    <div class="pricing-heading" >

                                        <div class="pricing-plan">8 Days Umrah </div>				<div class="pricing-price">
                                            <span>
                                                <sup>Rs</sup>27,000		<sub></sub>
                                            </span>
                                        </div>			</div>

                                    <div class="pricing-features"><ul className="ul12">
                                    <li className="li12"> Visa included</li>
                                        <li className="li12">Transport (Pvt Car)</li>
                                        <li className="li12">Daily Breakfast (Makkah only)</li>
                                        <li className="li12">Accomodation</li>
                                        <li className="li12"><strong>Makkah Hotels</strong> =&gt;Zam Zam Grand, Marriot-Hilton Convention Tower,Swissotel, Marwa Rihana and Royal Dar ul Eman Hotel</li>
                                        <li className="li12">Directly facing Haram</li>
                                        <li className="li12">Madina Hotels => ZamZam Millenium Hotel, Crown Plaza,Al haram Al Eiman and Royal Diyar Hotel</li>
                                        <li className="li12">Facing Masjid Nabwi</li>
                                        <li className="li12">Quad Bed =&nbsp;<strong>Rs47,000</strong></li>
                                        <li className="li12">Tripple Bed =&nbsp;<strong>Rs49,000</strong></li>
                                        <li className="li12">Double Bed = <strong>Rs69,000</strong></li>
                                        <li className="li12"><strong>Ticket not included</strong></li>
                                    </ul></div>			<div class="pricing-button">

                                        <div id="mk-button-8" class="mk-button-container _ relative    block text-center ">


                                            {/* <a href="http://sealinks.pk/contact/" target="_self" class="mk-button js-smooth-scroll mk-button--dimension-three mk-button--size-large mk-button--corner-pointed text-color-light _ relative text-center font-weight-700 no-backface  letter-spacing-2 inline"><span class="mk-button--text">BOOK NOW</span></a> */}
                                            <Link to="#" class="mk-button"><span class="mk-button--text">BOOK NOW</span></Link>

                                        </div>
                                        <div class="clearboth"></div>
                                    </div>
                                    </li>
                                    </ul>
                        </div></Col>
                        </Row>
                       
                        <Row>
                            <Col sm=""></Col>
                            <Col sm="12"><img src={image3} alt="pics" height="100%" width="100%" /></Col>
                            <Col sm=""></Col>
                        </Row>
                        <Row>
                            <Col sm=""></Col>
                            <br></br>
                            <Col sm="Auto"><h1 className="Rang">CONTACT US: 0304-9992228 </h1></Col>
                            <Col sm=""></Col>
                        </Row>









                    </Container>
                </div>
                <br></br><br></br>
            </React.Fragment>
        );
    }
}

export default Packages;