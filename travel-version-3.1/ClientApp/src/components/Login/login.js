import React, { Component } from 'react';
import { Col, Container} from 'reactstrap';
import { Link } from 'react-router-dom';
class login extends Component {
    render() {
        return (
            <React.Fragment>
                <Container className="contact-form-section">
                    <header className="section-header">
                        <center>   <h2 className="section-title" id="heading">Login</h2></center>
                    </header>
                    <Col sm={{ size: 8, order: 2, offset: 2 }}>
                        <div className="ui attached message">
                            <div className="header">
                                Welcome to SeaLinks!
                            </div>
                        </div>
                        <form className="ui form attached fluid segment">
                            <div className="field">
                                <label>Username</label>
                                <input placeholder="Username" type="text" name="user_username" />
                            </div>
                            <div className="field">
                                <label>Password</label>
                                <input type="password" name="user_password" placeholder="Password" />
                            </div>
                            <center>
                                <div className="ui blue submit button">Log in</div>
                            </center>
                        </form>
                        <div className="ui bottom attached warning message">
                            <i className="icon help"></i>
                            Not have Account? <Link to="/signup">Register here</Link> instead.
                            </div>
                    </Col>
                </Container>
                <br></br><br></br>
            </React.Fragment>

        )
    }
}
export default login;