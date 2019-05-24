import React, { Component } from 'react';
import { Container, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import './login.css';
class register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user_Fname:'',
            user_Lname:'',
            user_username: '',
            user_email: '',
            user_password: '',
            user_Cpassword: '',
            gender: '',
            user_country: '',
            terms: false,
            touched: {

            }
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checkbox : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log("Current state is " + JSON.stringify(this.state));
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <div className="contact-form-section">
                    <Container className="container">
                        <header className="section-header">
                            <center><h2 className="section-title" id="heading">Sign Up</h2></center>
                        </header>
                        <Col className="" sm={{ size: 8, order: 2, offset: 2 }}>
                            <div className="ui attached message">
                                <div className="header">
                                    Welcome to SeaLinks!
                                </div>
                                <p>Fill out the form below to sign-up for a new account</p>
                            </div>
                            <form className="ui form attached fluid segment" onSubmit={this.handleSubmit}>
                                <div className="two fields">
                                    <div className="field">
                                        <label>First Name</label>
                                        <input placeholder="First Name" type="text" name="user_Fname" value={this.state.user_Fname} onChange={this.handleInputChange}/>
                                    </div>
                                    <div className="field">
                                        <label>Last Name</label>
                                        <input placeholder="Last Name" type="text" name="user_Lname" value={this.state.user_Lname} onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                                <div className="field">
                                    <label>Username</label>
                                    <input placeholder="Username" type="text" name="user_username" value={this.state.user_username} onChange={this.handleInputChange}/>
                                </div>
                                <div className="field">
                                    <label>Email</label>
                                    <input placeholder="Email" type="email" name="user_email" value={this.state.user_email} onChange={this.handleInputChange}/>
                                </div>
                                <div className="two fields">
                                    <div className="field">
                                        <label>Password</label>
                                        <input type="password" name="user_password" placeholder="Password" value={this.state.user_password} onChange={this.handleInputChange}/>
                                    </div>
                                    <div className="field">
                                        <label>Confirm Password</label>
                                        <input type="password" name="user_Cpassword" placeholder="Confirm Password" value={this.state.user_Cpassword} onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                                <div className="two fields">
                                    <div className="field">
                                        <label>Gender</label>
                                        <select type="select" className="ui dropdown" name="gender" value={this.state.gender} onChange={this.handleInputChange}>
                                            <option value="">Gender</option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                        </select>
                                    </div>
                                    <div className="field">
                                        <label>Country</label>
                                        <input type="text" name="user_country" placeholder="Country" value={this.state.user_country} onChange={this.handleInputChange}/>
                                    </div>
                                </div>
                                <div className="inline field">
                                    <div className="ui checkbox">
                                        <input type="checkbox" id="terms" value={this.state.terms} onChange={this.handleInputChange}/>
                                        <label>I agree to the terms and conditions</label>
                                    </div>
                                </div>
                                <center><input type="submit" className="ui blue submit button" value="Register" /></center>
                            </form>
                            <div className="ui error message"></div>
                            <div className="ui bottom attached warning message">
                                <i className="icon help"></i>
                                Already signed up? <Link to="/login">Login here</Link> instead.
                            </div>
                        </Col>
                    </Container>
                </div>
                <br></br><br></br>
            </React.Fragment>

                                )
                            }
                        }
export default register;