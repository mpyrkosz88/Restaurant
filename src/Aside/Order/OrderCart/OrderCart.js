import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactAux from '../../../hoc/ReactAux/ReactAux';
import classes from './OrderCart.scss';

//actions
import * as actionTypes from '../../../store/actions/actionTypes';

class OrderCart extends Component {
    render() {
        let order = (<div className={classes.OrderItems}>
            <i className="fa fa-shopping-bag fa-4x"></i>
            <p>Browse our menu and start adding items to your order</p>
        </div>)


        if (this.props.cart.length === 0) {
            order = (<div className={classes.OrderItems}>
                <i className="fa fa-shopping-bag fa-4x"></i>
                <p>Browse our menu and start adding items to your order</p>
            </div>)
        }
        else {
            order = <ul className={classes.OrderList}>
                {
                    this.props.cart.map((data, index) => {
                        return (
                            <li key={data.id + "_" + index} className={classes.OrderListItem} >
                                <span className={classes.Quantity}>{data.quantity <= 1 ? null : "x" + data.quantity}</span><img src={data.imgUrl} alt="dish"/>
                                <div className={classes.OrderDescription}>
                                    <p><span>{data.product_name}</span></p>
                                    <p>{data.price}zł</p>
                                </div>
                                <i className="far fa-minus-square" onClick={() => this.props.removeFromCart(data.id, data.price, data.quantity)}></i>
                            </li>
                        )
                    })
                }
            </ul>
        }

        return (
            <ReactAux>
                {order}
            </ReactAux>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        cart: state.cart.cart_items
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeFromCart: (id, price, quantity) => dispatch({ type: actionTypes.CART_REMOVE, payload: { id, price, quantity } })
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(OrderCart)

