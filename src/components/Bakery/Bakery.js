import React from 'react';

const Bakery = (props) =>{
    return(
        <div className="col-sm-12 col-md-6 col-lg-4 foods">
            <h4>{props.name}</h4>
            <img src={props.img} alt={props.name}/>
            <p>{props.description}</p>
            <p>Price: {props.price}</p>
        </div>
    )
}

export default Bakery;