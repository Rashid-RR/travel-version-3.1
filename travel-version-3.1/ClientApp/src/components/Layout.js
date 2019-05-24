import React, { Component } from 'react';
import NavBar from './NavBar/NavBar';
import Header from './Header/Header';
import Footer from './Footer/Footer';

export class Layout extends Component {
    static displayName = Layout.name;

    render() {
        return (
            <div>
                <Header />
                <NavBar />
                <div>
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}
