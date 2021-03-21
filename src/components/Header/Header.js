import React from 'react';
import sun from './img/Sun.png';
import emblem from './img/EmblemStarYellowShadow.png';

function Header (){
    return(
        <div className="header jumbotron">
            <h1 className="header"><span className="header"><img className="header" src={emblem} alt='Emblem' /></span></h1>
            <hr />
        </div>
    )
}

export default Header;