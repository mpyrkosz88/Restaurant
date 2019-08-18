import React from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';

import classes from './SideDrawer.scss';
import ReactAux from '../../hoc/ReactAux/ReactAux';

const sideDrawer = (props) => {
    let SideDrawerClasses = [classes.SideDrawer, classes.Close];
    if (props.show) {
        SideDrawerClasses = [classes.SideDrawer, classes.Open];
    }

    let summarize = null

    if (props.cart.length > 0) {
        summarize = props.cart.map((data, index) => {
            return (
                <li key={data.id + "_" + index}>
                <div>
                    <span>{data.quantity <= 1 ? null : "x" + data.quantity}</span>
                    <p>{data.product_name}</p>
                </div>
                <p>{data.price}zł</p>
                </li>
            )
        })}

let order =                 <Grid container justify="center" style={{ height: "100%"}}>
<Grid item sm={12} xs={12} className={classes.OrderContainer}>
    <div className={classes.OrderTitle}>
        <h5>My Order</h5>
        <span>{props.quantity}</span>
    </div>
    <ul className={classes.OrderList}>
        {summarize}
    </ul>
    <div className={classes.OrderSummarize}>
        <h5>Total</h5>
        <span className={classes.OrderSummarizePrice}>{props.price} zł</span>
    </div>
    
</Grid>
<Grid container justify="space-between">
 <button className={classes.Button + " " + classes.Arrow} onClick={props.clicked}>Back to Menu</button>
 <button className={classes.Button}>Order Now</button>
 
</Grid>
</Grid>

if (!props.isLogin) {
    order = 
    <Grid container justify="center" style={{ height: "100%"}}>
    <Grid item sm={12} xs={12} className={classes.OrderContainerNoLogin}>
            <p>You need to log In to continue </p>   
    </Grid>
     <button className={classes.Button + " " + classes.Arrow} onClick={props.clicked}>Back to Menu</button>
    </Grid>
}

    return (
        <ReactAux>
            <div className={SideDrawerClasses.join(' ')}>
                {order}
            </div>
        </ReactAux>
    );
};

const mapStateToProps = (state, props) => {
    return {
        price: state.cart.price,
        quantity: state.cart.cart_quantity,
        cart: state.cart.cart_items,
        isLogin: state.auth.isLogin,
        
    }
}

export default connect(mapStateToProps)(sideDrawer);


