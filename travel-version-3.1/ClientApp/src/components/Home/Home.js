import React, { Component } from 'react';
import HomeHeader from './HomeHeader';
import AboutUs from '../About/aboutUS';
import OurBestSeller from './ourBestSeller';
import Book from '../About/bookwithus';
import Team from '../About/ourTeam';
import Feature from "./FeatureTrip";

export class Home extends Component {
    static displayName = Home.name;
    render() {
        return (
            <div>
                <HomeHeader />
                <AboutUs />
                <Book />
                <Feature />
                <OurBestSeller />
                <Team />
            </div>
        );
    }
}