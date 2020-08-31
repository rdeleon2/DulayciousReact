import React from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import Menu from './Menu';

function Main() {
    return (
        <React.Fragment>
            <Header />
            <Menu />
            <br />
            <Footer />
        </React.Fragment>
    )
}

export default Main;