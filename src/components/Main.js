import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import profileIMG from '../images/Kids.JPG';
import Menu from './Menu';

function Main() {
    return (
        <React.Fragment>
            <Header />
            <img src={profileIMG} alt="Kids"/>
            <Menu />
            <br />
            <Footer />
        </React.Fragment>
    )
}

export default Main;