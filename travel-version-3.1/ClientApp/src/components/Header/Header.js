import React from 'react';
import {} from 'reactstrap';
import "./Header.css";
import img from './Logo.jpg';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <React.Fragment>
            <div className="Header">
                <div className="upperbar">
                    <div className="header_bar container">
                        <i className="ml-3 fa fa-facebook-f text-white"></i>
                        <i className="ml-3 fa fa-twitter text-white"></i>
                        <i className="ml-3 fa fa-youtube text-white"></i>
                        <i className="ml-3 fa fa-google-plus text-white"></i>
                        <i className="ml-3 fa fa-instagram text-white"></i>
                        <div className="float-right btn-log">
                            <Link to="/signup" className="btn btn-sm btn-info" >Sign up</Link>
                            <Link to="/Login" className="ml-2 btn btn-sm btn-success">Log in</Link>
                        </div>
                    </div>
                    
                </div>
                <div className="header-b">
                    <div className="container">
                        <div className="site-branding">
                            <Link to="/" className="custom-logo-link" ><img width="230" height="76" src={img} className="custom-logo" alt="Sea Links" itemProp="logo" sizes="(max-width: 96px) 100vw, 96px" /></Link>
                        </div>
                        <div className="right">
                            <span className="phone-label">Call us, we are open 24/7</span>
                            <Link to="/" className="tel-link"><span className="phone">(888) 123-45678</span></Link>
                        </div>
                    </div>
                </div>
            </div>


        </React.Fragment>
    );
};
export default Header;