import React, { Component } from 'react';
import "./about.css";
import AboutUs from './aboutUS';
import Book from './bookwithus';
import Services from './Services';
import Team from './ourTeam';

class About extends Component {
    render() {
        return (
            <div>
                <AboutUs />
                <Services />
                <Book />
                <Team />
            </div>
        );
    }
}

export default About;