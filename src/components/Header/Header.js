import React from 'react';
import sun from './img/Sun.png';

function Header (){
    return(
        <div className="header jumbotron">
            <h1 className="header"><span className="header">Dulaycious</span></h1>
            <img src={sun} alt='sun' />
            <hr />
        </div>
    )
}

export default Header;