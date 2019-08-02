import React from 'react';
import ReactAux from '../../../../hoc/ReactAux/ReactAux';
import classes from './OrderCart.scss';

const orderCart = (props) => {
    let order = (<div className={classes.OrderItems}>
        <i className="fa fa-shopping-bag fa-4x"></i>
        <p>Browse our menu and start adding items to your order</p>
    </div>)


    if (props.cart.length === 0) {
        order = (<div className={classes.OrderItems}>
            <i className="fa fa-shopping-bag fa-4x"></i>
            <p>Browse our menu and start adding items to your order</p>
        </div>)
    }
    else {
        order = <ul className={classes.OrderList}>
            {
                props.cart.map((data, index) => {
                    return (
                        <li key={data.id + "_" + index} className={classes.OrderListItem} >
                            <span className={classes.Quantity}>{data.quantity <= 1 ? null : "x" + data.quantity}</span><img src={data.imgUrl} alt="dish" />
                            <div className={classes.OrderDescription}>
                                <p><span>{data.product_name}</span></p>
                                <p>{data.price}zł</p>
                            </div>
                            <i className="far fa-minus-square" onClick={() => props.clicked(data.id, data.price, data.quantity)}></i>
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

export default orderCart