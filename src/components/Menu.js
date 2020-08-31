import React, { Component } from 'react';
import bakery, { cakes, pandesal, others } from '../shared/bakery';
import Bakery from './Bakery/Bakery';
import Food from './Food/Food';
import food from '../shared/food';


class Menu extends Component {
    state = {
        showPandesal: false,
        showPandesalInside: false,
        showCake: false,
        showOther: false,
        showBakeShop: false,
        showMenu: false
    }

    togglePandesalHandler = () => {
        const doesShow = this.state.showPandesal;
        this.setState({ showPandesal: !doesShow })
    }

    togglePandesalInsidesHandler = () => {
        const doesShow = this.state.showPandesalInside;
        this.setState({ showPandesalInside: !doesShow })
    }

    toggleCakeHandler = () => {
        const doesShow = this.state.showCake;
        this.setState({ showCake: !doesShow })
    }

    toggleOtherHandler = () => {
        const doesShow = this.state.showOther;
        this.setState({ showOther: !doesShow })
    }

    toggleBakeShopHandler = () => {
        const doesShow = this.state.showBakeShop;
        this.setState({ showBakeShop: !doesShow })
    }

    toggleMenuHandler = () => {
        const doesShow = this.state.showMenu;
        this.setState({ showMenu: !doesShow })
    }

    render() {
        let pandesals = null;
        let pandesalsInside = null;
        let cake = null;
        let other = null;
        let bakeShop = null;
        let menu = null;

        if (this.state.showPandesal) {
            pandesals = (
                <div className="row">
                    {bakery.map(list => {
                        return (
                            <Bakery
                                key={list.id}
                                name={list.name}
                                img={list.img}
                                description={list.description}
                                price={list.price}
                            />
                        )
                    })}
                </div>
            );

        }

        if (this.state.showPandesalInside) {
            pandesalsInside = (
                <div className="row">
                    {pandesal.map(list => {
                        return (
                            <Bakery
                                key={list.id}
                                name={list.name}
                                img={list.img}
                                description={list.description}
                                price={list.price}
                            />
                        )
                    })}
                </div>
            );

        }

        if (this.state.showCake) {
            cake = (
                <div className="row">
                    {cakes.map(list => {
                        return (
                            <Bakery
                                key={list.id}
                                name={list.name}
                                img={list.img}
                                description={list.description}
                                price={list.price}
                            />
                        )
                    })}

                </div>
            );

        }

        if (this.state.showOther) {
            other = (
                <div className="row">
                    {others.map(list => {
                        return (
                            <Bakery
                                key={list.id}
                                name={list.name}
                                img={list.img}
                                description={list.description}
                                price={list.price}
                            />
                        )
                    })}

                </div>
            );


        }
        if (this.state.showBakeShop) {
            bakeShop = (
                <div>
                    <div className="container">
                        <h3 onClick={this.togglePandesalHandler}>Dulaycious Pandesal</h3>
                        {pandesals}
                    </div>
                    <div className="container">
                        <h3 onClick={this.togglePandesalInsidesHandler}>Dulaycious Palaman</h3>
                        {pandesalsInside}
                    </div>
                    <div className="container">
                        <h3 onClick={this.toggleCakeHandler}>Dulaycious Cakes</h3>
                        {cake}
                    </div>
                    <div className="container">
                        <h3 onClick={this.toggleOtherHandler}>Dulaycious Others</h3>
                        {other}
                    </div>
                </div>
            );
        }

        if (this.state.showMenu) {
            menu = (
                <div>
                    <div className="container">
                        <div className="row">
                            {food.map((list) => {
                                return <Food
                                    key={list.id}
                                    name={list.name}
                                    img={list.img}
                                    description={list.description}
                                    price={list.price}
                                />
                            })}
                        </div>
                    </div>
                </div>
            );
        }

        return (
            <div>
                <h2 onClick={this.toggleMenuHandler}>Dulaycious Menu</h2>
                {menu}
                <h2 onClick={this.toggleBakeShopHandler}>Dulaycious Bakery</h2>
                {bakeShop}
                <h2>Catering</h2>
                <h2>Order</h2>
            </div>
        )
    }
}

export default Menu;