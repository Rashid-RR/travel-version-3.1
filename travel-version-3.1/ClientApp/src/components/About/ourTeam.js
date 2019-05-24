import React, { } from 'react';
import { Row, Col } from 'reactstrap';
import "./about.css";
import team_1 from './teamImages/team_1.jpg';
import team_2 from './teamImages/team_2.jpg';
import team_3 from './teamImages/team_3.jpg';
import team_4 from './teamImages/team_4.jpg';
import team_5 from './teamImages/team_5.jpg';
import team_6 from './teamImages/team_6.jpg';
import team_7 from './teamImages/team_7.jpg';
import team_8 from './teamImages/team_8.jpg';

const Team = () => {
    return (
        < section id = "about_team" className = "team-section" >
            <div className="container">
                <header className="section-header">
                    <h2 className="section-title"><b>Our Team</b></h2>
                    <div className="section-content">
                        <p>Show your teams to your customers here. You can customize this section from Appearance &gt; Customize &gt; About Page Settings &gt; Team Section.</p>
                    </div>
                </header>
                <div className="team-holder">
                    <Row>
                        <Col md="3">
                            <div className="item">
                                <div className="holder">
                                    <img width="280" height="350" src={team_1} className="attachment-travel-agency-team size-travel-agency-team wp-post-image" alt="" />
                                    <div className="text">
                                        <h2 className="name">Alice Mustaine</h2>
                                        <span className="designation"> Founder</span>
                                    </div>
                                    <div className="text-holder">
                                        <div className="holder">
                                            <p>In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present. Dummy data can be used as a placeholder for both testing and operational purposes. For testing, dummy data can also … </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md="3">
                            <div className="item">
                                <div className="holder">
                                    <img width="280" height="350" src={team_2} className="attachment-travel-agency-team size-travel-agency-team wp-post-image" alt="" />
                                    <div className="text">
                                        <h2 className="name">Willy Buckingham </h2>
                                        <span className="designation">Travel Guide</span>
                                    </div>
                                    <div className="text-holder">
                                        <div className="holder">
                                            <p>In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present. Dummy data can be used as a placeholder for both testing and operational purposes. For testing, dummy data can also … </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md="3">
                            <div className="item">
                                <div className="holder">
                                    <img width="280" height="350" src={team_3} className="attachment-travel-agency-team size-travel-agency-team wp-post-image" alt="" />
                                    <div className="text">
                                        <h2 className="name">Carl Watt </h2>
                                        <span className="designation">Manager</span>
                                    </div>
                                    <div className="text-holder">
                                        <div className="holder">
                                            <p>In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present. Dummy data can be used as a placeholder for both testing and operational purposes. For testing, dummy data can also … </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md="3">
                            <div className="item">
                                <div className="holder">
                                    <img width="280" height="350" src={team_4} className="attachment-travel-agency-team size-travel-agency-team wp-post-image" alt="" />
                                    <div className="text">
                                        <h2 className="name">Laura Gates </h2>
                                        <span className="designation">Office Secretary</span>
                                    </div>
                                    <div className="text-holder">
                                        <div className="holder">
                                            <p>In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present. Dummy data can be used as a placeholder for both testing and operational purposes. For testing, dummy data can also … </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md="3">
                            <div className="item">
                                <div className="holder">
                                    <img width="280" height="350" src={team_5} className="attachment-travel-agency-team size-travel-agency-team wp-post-image" alt="" />
                                    <div className="text">
                                        <h2 className="name">Anna Plant</h2>
                                        <span className="designation">Tour Guide</span>
                                    </div>
                                    <div className="text-holder">
                                        <div className="holder">
                                            <p>In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present. Dummy data can be used as a placeholder for both testing and operational purposes. For testing, dummy data can also … </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md="3">
                            <div className="item">
                                <div className="holder">
                                    <img width="280" height="350" src={team_6} className="attachment-travel-agency-team size-travel-agency-team wp-post-image" alt="" />
                                    <div className="text">
                                        <h2 className="name">Paul Miller</h2>
                                        <span className="designation">Chief Executive</span>
                                    </div>
                                    <div className="text-holder">
                                        <div className="holder">
                                            <p>In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present. Dummy data can be used as a placeholder for both testing and operational purposes. For testing, dummy data can also … </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md="3">
                            <div className="item">
                                <div className="holder">
                                    <img width="280" height="350" src={team_7} className="attachment-travel-agency-team size-travel-agency-team wp-post-image" alt="" />
                                    <div className="text">
                                        <h2 className="name">Henry Smith</h2>
                                        <span className="designation">CEO</span>
                                    </div>
                                    <div className="text-holder">
                                        <div className="holder">
                                            <p>In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present. Dummy data can be used as a placeholder for both testing and operational purposes. For testing, dummy data can also … </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col md="3">
                            <div className="item">
                                <div className="holder">
                                    <img width="280" height="350" src={team_8} className="attachment-travel-agency-team size-travel-agency-team wp-post-image" alt="" />
                                    <div className="text">
                                        <div className="name">David Johnson </div>
                                        <span className="designation">Guide</span>
                                    </div>
                                    <div className="text-holder">
                                        <div className="holder">
                                            <p>In Informatics, dummy data is benign information that does not contain any useful data, but serves to reserve space where real data is nominally present. Dummy data can be used as a placeholder for both testing and operational purposes. For testing, dummy data can also … </p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </section >

    );
};
export default Team;