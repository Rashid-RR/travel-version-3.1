import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../NavBar/NavBar.css';
import { Menu, Dropdown, Icon, Responsive, DropdownDivider, Segment } from 'semantic-ui-react';

export default class NavBar extends Component {

    render() {
        return (

            <React.Fragment>

                {/*
                 * 
                 * 
                 * For Desktops
                 * 
                 * 
                 * */}
                <Responsive minWidth={1350}>
                    <Menu borderless className="NavBar">
                        <Menu.Item as={Link} to="/" className="navText" name="Home" />
                        <Menu.Item as={Link} to="/About" className="navText" name="About" />
                        <Dropdown as={Link} to="/" className="navText" item trigger="Our Services" simple>
                            <Dropdown.Menu>
                                <Link to="/AirTicket"><Dropdown.Item>Air Ticketing</Dropdown.Item></Link>
                                <Dropdown.Item as={Link} to="/VisaConsultancy">Visa Consultancy</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/ImmConsultancy">Immigration Consultancy</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/packages">Umrah & Ziarah Packages</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown item as={Link} to="/AirTicket" className="navText" trigger="Air Ticketing" simple>
                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} to="/">Travel Insurance</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown as={Link} to="/VisaConsultancy" className="navText" item trigger="Visa Consultancy" simple>
                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} to="/VisaUK">Visit Visa United Kingdom (UK)</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/VisaUSA">Visit Visa USA</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/VisaEurope">Visit Visa Schengen/Europe</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/VisaCanada">Visit Visa Canada</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/VisaAustralia">Visit Visa Australia</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/VisaNewZealand">Visit Visa New Zealan</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/VisaIreland">Visit Visa Irеlаnd</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/VisaTurkey">Visit Visa Turkey</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/VisaMaxico">Visit Visa Mеxiсо</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/VisaSA">Visit Visa Sоuth Africa</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/">Visit Visa Brаzil</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown as={Link} to="/ImmConsultancy" className="navText" item trigger="Immigration Consultancy" simple>
                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} to="/unitedKingdom">
                                    <Icon name='dropdown' />
                                    <span >United Kingdom</span>

                                    <Dropdown.Menu>
                                        <Dropdown.Item> Tier 1 (Entrepreneur) Viѕа – Buѕinеѕѕ immigrаtiоn</Dropdown.Item>
                                        <Dropdown.Item>Representative of аn Ovеrѕеаѕ Buѕinеѕѕ Viѕа (Sоlе Representative)</Dropdown.Item>
                                        <Dropdown.Item>Spouse Settlement Viѕа UK (Fаmilу Visa)</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} to="/America">
                                    <Icon name='dropdown' />
                                    <span >United State of America</span>

                                    <Dropdown.Menu>
                                        <Dropdown.Item>K – 1 Viѕа – Nоnimmigrаnt Visa for a Fiance</Dropdown.Item>
                                        <Dropdown.Item>K – 3 Viѕа – Nоnimmigrаnt Viѕа fоr a Spouse (Sроuѕе Settlement) </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown.Item>
                                <Dropdown.Item as={Link} to="/canada">Canada</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/Schengen">Schengen</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/Ireland">Irеlаnd</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown as={Link} to="/packages" className="navText" item trigger="Umrah & Ziarah Packages" simple>
                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} to="/packages">Umrah Packages</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Dropdown as={Link} to="/travelAndTour" className="navText" item trigger="Travel & Tour" simple>
                            <Dropdown.Menu>
                                <Dropdown.Item as={Link} to="/travelDubai">Travel Dubai</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/travelMalaysia">Travel Malaysia</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/travelThailand">Travel Thailand</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/travelSingapore">Travel Singapore</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/travelSrilanka">Travel Srilanka</Dropdown.Item>
                                <Dropdown.Item as={Link} to="/travelMaldives">Travel Maldives</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Menu.Item as={Link} to="/businessInvitation" className="navText" name="Business Invitation" />
                        <Menu.Item as={Link} to="/contact" className="navText" name="Contect" />
                    </Menu>
                </Responsive>
                {/*
                 * 
                 * 
                 * For tabltes
                 * 
                 * 
                 * */}
                <Responsive maxWidth={1349} minWidth={749}>
                    <Segment textAlign="center">
                        <Menu borderless className="NavBar" compact>
                            <Menu.Item as={Link} to="/" className="navText" name="Home" />
                            <Menu.Item as={Link} to="/About" className="navText" name="About" />
                            <Dropdown as={Link} to="/" className="navText" item trigger="Our Services" simple>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to="/AirTicket">Air Ticketing</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/VisaConsultancy">Visa Consultancy</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/ImmConsultancy">Immigration Consultancy</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/packages">Umrah & Ziarah Packages</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown item as={Link} to="/AirTicket" className="navText" trigger="Air Ticketing" simple>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to="/">Travel Insurance</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown as={Link} to="/VisaConsultancy" className="navText" item trigger="Visa Consultancy" simple>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to="/VisaUK">Visit Visa United Kingdom (UK)</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/VisaUSA">Visit Visa USA</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/VisaEurope">Visit Visa Schengen/Europe</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/VisaCanada">Visit Visa Canada</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/VisaAustralia">Visit Visa Australia</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/VisaNewZealand">Visit Visa New Zealan</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/VisaIreland">Visit Visa Irеlаnd</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/VisaTurkey">Visit Visa Turkey</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/VisaMaxico">Visit Visa Mеxiсо</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/VisaSA">Visit Visa Sоuth Africa</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/">Visit Visa Brаzil</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown as={Link} to="/travelAndTour" className="navText" item trigger="Travel & Tour" simple>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to="/travelDubai">Travel Dubai</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/travelMalaysia">Travel Malaysia</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/travelThailand">Travel Thailand</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/travelSingapore">Travel Singapore</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/travelSrilanka">Travel Srilanka</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/travelMaldives">Travel Maldives</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>


                        </Menu>

                        <Menu borderless className="NavBar" compact>
                            <Dropdown as={Link} to="/ImmConsultancy" className="navText" item trigger="Immigration Consultancy" simple>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to="/unitedKingdom">
                                        <Icon name='dropdown' />
                                        <span >United Kingdom</span>

                                        <Dropdown.Menu>
                                            <Dropdown.Item> Tier 1 (Entrepreneur) Viѕа – Buѕinеѕѕ immigrаtiоn</Dropdown.Item>
                                            <Dropdown.Item>Representative of аn Ovеrѕеаѕ Buѕinеѕѕ Viѕа (Sоlе Representative)</Dropdown.Item>
                                            <Dropdown.Item>Spouse Settlement Viѕа UK (Fаmilу Visa)</Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/America">
                                        <Icon name='dropdown' />
                                        <span >United State of America</span>

                                        <Dropdown.Menu>
                                            <Dropdown.Item>K – 1 Viѕа – Nоnimmigrаnt Visa for a Fiance</Dropdown.Item>
                                            <Dropdown.Item>K – 3 Viѕа – Nоnimmigrаnt Viѕа fоr a Spouse (Sроuѕе Settlement) </Dropdown.Item>
                                        </Dropdown.Menu>
                                    </Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/canada">Canada</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/Schengen">Schengen</Dropdown.Item>
                                    <Dropdown.Item as={Link} to="/Ireland">Irеlаnd</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Dropdown as={Link} to="/packages" className="navText" item trigger="Umrah & Ziarah Packages" simple>
                                <Dropdown.Menu>
                                    <Dropdown.Item as={Link} to="/packages">Umrah Packages</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                            <Menu.Item as={Link} to="/businessInvitation" className="navText" name="Business Invitation" />
                            <Menu.Item as={Link} to="/contact" className="navText" name="Contect" />
                        </Menu>
                    </Segment>
                </Responsive>

                {/*For Mobile Phones*/}
                <Responsive as="div" maxWidth={750}>
                    <Menu borderless className="NavBar">
                        <Dropdown as={Link} to="/" className="navText" item icon="dropdown" trigger="Menu" simple>
                            <Dropdown.Menu>
                                {/*Home*/}
                                <Dropdown.Item as={Link} to="/" className="navText">
                                    <Icon name="home" />
                                    <span>Home</span>
                                </Dropdown.Item>
                                {/*About*/}
                                <Dropdown.Item as={Link} to="/About" className="navText">
                                    <Icon name="pencil" />
                                    <span>About</span>
                                </Dropdown.Item>
                                {/*Our Services*/}
                                <Dropdown.Item as={Link} to="/AirTicket">
                                    <Icon name='dropdown' />
                                    <span>Our Services</span>

                                    <Dropdown.Menu>
                                        <Dropdown.Item as={Link} to="/AirTicket">Air Ticketing</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/VisaConsultancy">Visa Consultancy</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/ImmConsultancy">Immigration Consultancy</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/packages">Umrah & Ziarah Packages</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown.Item>
                                {/*Air Tickting*/}
                                <Dropdown.Item as={Link} to="/AirTicket">
                                    <Icon name='dropdown' />
                                    <span>Air Ticket</span>

                                    <Dropdown.Menu>
                                        <Dropdown.Item>Travel Insurance</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown.Item>
                                {/*Visa*/}
                                <Dropdown.Item as={Link} to="/VisaConsultancy">
                                    <Icon name='dropdown' />
                                    <span>Visa Consultancy</span>

                                    <Dropdown.Menu>
                                        <Dropdown.Item as={Link} to="/VisaUK">Visit Visa United Kingdom (UK)</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/VisaUSA">Visit Visa USA</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/VisaEurope">Visit Visa Schengen/Europe</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/VisaCanada">Visit Visa Canada</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/VisaAustralia">Visit Visa Australia</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/VisaNewZealand">Visit Visa New Zealan</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/VisaIreland">Visit Visa Irеlаnd</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/VisaTurkey">Visit Visa Turkey</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/VisaMaxico">Visit Visa Mеxiсо</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/VisaSA">Visit Visa Sоuth Africa</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/">Visit Visa Brаzil</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown.Item>
                                {/*Immigration*/}
                                <Dropdown.Item as={Link} to="/ImmConsultancy">
                                    <Icon name='dropdown' />
                                    <span >Immigration Consultancy</span>

                                    <Dropdown.Menu>
                                        <Dropdown.Item as={Link} to="/canada">United Kingdom</Dropdown.Item>
                                        <DropdownDivider />
                                        <Dropdown.Item as={Link} to="/canada">United State of America</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/canada">Canada</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/Schengen">Schengen</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/Ireland">Irеlаnd</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown.Item>
                                {/*Umrah*/}
                                <Dropdown.Item as={Link} to="/packages">
                                    <Icon name='dropdown' />
                                    <span>Umrah & Ziarah Packages</span>

                                    <Dropdown.Menu>
                                        <Dropdown.Item as={Link} to="/packages">Umrah Packages</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown.Item>
                                {/*Travle*/}
                                <Dropdown.Item as={Link} to="/travelAndTour">
                                    <Icon name='dropdown' />
                                    <span>Travel & Tour</span>

                                    <Dropdown.Menu>
                                        <Dropdown.Item as={Link} to="/travelDubai">Travel Dubai</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/travelMalaysia">Travel Malaysia</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/travelThailand">Travel Thailand</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/travelSingapore">Travel Singapore</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/travelSrilanka">Travel Srilanka</Dropdown.Item>
                                        <Dropdown.Item as={Link} to="/travelMaldives">Travel Maldives</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown.Item>
                                {/*Business*/}
                                <Dropdown.Item as={Link} to="/businessInvitation" className="navText">
                                    <Icon name="talk" />
                                    <span>Business Invitation</span>
                                </Dropdown.Item>
                                {/*Contact*/}
                                <Dropdown.Item as={Link} to="/contact" className="navText">
                                    <Icon name="phone volume" />
                                    <span>Contact</span>
                                </Dropdown.Item>
                                {/*Footer*/}
                                <Dropdown.Header>
                                    Adventure awaits, go find it
                                </Dropdown.Header>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Menu>
                </Responsive>
            </React.Fragment>
        );
    }
}