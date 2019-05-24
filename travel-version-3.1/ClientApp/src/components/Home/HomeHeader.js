import React, { } from 'react';
import { Form, FormGroup, Input, Button, Row, Col, Container } from 'reactstrap';
import { } from 'semantic-ui-react';
import './HomeHeader.css';

const HomeHeader = () => {
    return (
        <div className="HomeArea">
            <div className="backGround">
                <div className="bannerForm">
                    <h2>Find Your Best Holiday</h2>
                    <p>Find great adventure holidays and activities around the planet.</p>
                    <Form inline className="mx-auto">
                        <FormGroup>
                            <Input type="text" className="seachInput" placeholder="Search ..." />
                        </FormGroup>
                        <Button type="submit" className="seachInputbtn ml-2"><i className="fa fa-search"></i>  SEARCH</Button>
                    </Form>
                </div>
            </div>
            <div className="trip-search">
                <Container>
                    <h4 className="text-white">Search for a trip</h4>
                    <form>
                        <div className="class-wte-advanced-search-wrapper">
                            <Row>
                                <Col md={3} className="advanced-search-field trip-destination">

                                    <p>Destination</p>
                                    <div className="customSelect">
                                        <select name="destination" id="destination">
                                            <option value="-1">Destination</option>
                                            <option value="bhutan">Bhutan</option>
                                            <option value="india">India</option>
                                            <option value="japan">Japan</option>
                                            <option value="london">London</option>
                                            <option value="maldives">Maldives</option>
                                            <option value="morroco">Morroco</option>
                                            <option value="nepal">Nepal</option>
                                            <option value="paris">Paris</option>
                                            <option value="prague">Prague</option>
                                            <option value="san-francisco">San Francisco</option>
                                            <option value="tibet">Tibet</option>
                                            <option value="venice">Venice</option></select>
                                    </div>
                                </Col>
                                
                                <Col md={3} className="advanced-search-field trip-destination">
                                    <p>Activities</p>
                                    <div className="customSelect">
                                        <select name="activities" id="activities">
                                            <option value="-1">Activities</option>
                                            <option value="cultur-tours">Cultural Tours</option>
                                            <option value="hiking">Hiking</option>
                                            <option value="jungle-safari">Jungle Safari</option>
                                            <option value="kayaking">Kayaking</option>
                                            <option value="paragliding">Paragliding</option>
                                            <option value="peak-climbing">Peak Climbing</option>
                                            <option value="river-rafting">River Rafting</option>
                                            <option value="road-cycling">Road Cycling</option>
                                            <option value="skiing">Skiing</option>
                                        </select>
                                    </div>
                                </Col>
                                <Col md={2} className="advanced-search-field trip-destination">
                                    <p>Duration</p>
                                    <div className="customSelect">
                                        <input type="text" placeholder="Duration" className="form-control" />
                                    </div>
                                </Col>
                                <Col md={2} className="advanced-search-field trip-destination">
                                    <p>Budget</p>
                                    <div className="customSelect">
                                        <input type="text" placeholder="Budget" className="form-control" />
                                    </div>
                                </Col>
                                <Col md={2} id="advanced-search-field-submit">
                                    <input type="submit" name="search" value="Search" />
                                </Col>
                            </Row>
                        </div>
                    </form>
                </Container>
            </div>
        </div>
    );
};
export default HomeHeader;