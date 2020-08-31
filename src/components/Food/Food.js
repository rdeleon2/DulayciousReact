import React from 'react';

function Foods(props) {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 text-center foods">
            <h2>{props.name}</h2>
            <img src={props.img} alt={props.name} />
            <p>{props.description}</p>
            <p>Price: {props.price}</p>
        </div>
    )
}

export default Foods;