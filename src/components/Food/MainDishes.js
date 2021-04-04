import React from 'react';

function MainDishes(props) {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 text-center foods">
            <h2>{props.name}</h2>
            <img src={props.img} alt={props.name} />
                <p>{props.description}</p>
                <p>{props.type}
                <br></br>{props.price}
                <br></br>{props.secondaryPrice}
                <br></br>{props.thirdPrice}
                <br></br>{props.fourthPrice}
                <br></br>{props.fifthPrice}</p>
        </div>
    )
}

export default MainDishes;