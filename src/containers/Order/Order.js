import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Order.scss';
import OrderMenu from '../../components/Aside/Order/OrderMenu/OrderMenu';
import OrderCart from '../../components/Aside/Order/OrderCart/OrderCart';
import SideDrawer from '../SideDrawer/SideDrawer';

import dataBase from '../../assets/data/Menu/dataBase.json';
//actions
import * as actionTypes from '../../store/actions/actionTypes';
// import * as actions from '../../store/actions/dataBase';

class Order extends Component {

    // componentDidMount() {
    //     this.props.loadData()
    // }
    render() {
        let button = null

        if (this.props.quantity !== 0) {
            button = <button className={classes.Button} onClick={this.props.openSideDrawer}>Continue Order</button>
        }
        return (
            <div className={classes.OrderAside}>
                <div className={classes.DishesContainer}>
                    <ul>
                        {Object.keys(dataBase).map((title, index) => {
                            return (
                                <OrderMenu key={index} title={title} dishes={dataBase[title]} />
                            )
                        }
                        )}
                    </ul>
                </div>
                <div className={classes.OrderContainer}>
                    <div className={classes.OrderTitle}>
                        <p>My Order</p>
                        <span>{this.props.quantity} items</span>
                    </div>
                    <OrderCart cart={this.props.cart} clicked={this.props.removeFromCart}/>
                    <div className={classes.OrderSummarize}>
                        <p>Subtotal</p>
                        <span>{this.props.price} zł</span>
                    </div>
                    {button}
                </div>
                <SideDrawer show={this.props.sidedrawer} clicked={this.props.closeSideDrawer}/>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        cart: state.cart.cart_items,
        price: state.cart.price,
        quantity: state.cart.cart_quantity,
        sidedrawer: state.cart.sideDrawerIsOpen,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        openSideDrawer: () => dispatch({ type: actionTypes.OPEN_SIDEDRAWER}),
        closeSideDrawer: () => dispatch({type: actionTypes.CLOSE_SIDEDRAWER}),
        removeFromCart: (id, price, quantity) => dispatch({ type: actionTypes.CART_REMOVE, payload: { id, price, quantity } }),
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Order)