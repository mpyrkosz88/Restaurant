import React, { Component } from 'react';
import { connect } from 'react-redux';

import classes from './Order.scss';
import OrderMenu from './OrderMenu/OrderMenu';
import OrderCart from './OrderCart/OrderCart';

import dataBase from '../../../assets/data/Menu/dataBase';

class Order extends Component {
    render() {
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
                    <OrderCart />
                    <div className={classes.OrderSummarize}>
                        <p>Subtotal</p>
                        <span>{this.props.price} zł</span>
                    </div>
                    <button>Order Now</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        price: state.cart.price,
        quantity: state.cart.cart_quantity,
    }
}

export default connect(mapStateToProps)(Order)

