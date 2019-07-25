import React from 'react';
import Grid from '@material-ui/core/Grid';

import classes from './SideDrawer.scss';
import Backdrop from '../UI/Backdrop/Backdrop';
import ReactAux from '../../hoc/ReactAux/ReactAux';

import Input from '../UI/Input/Input';


const sideDrawer = (props) => {

    return (
        <ReactAux>
            <div className={classes.SideDrawer}>
                <Grid container justify="space-between" direction="row" style={{ height: "100%"}}>
                    <Grid item sm={5} xs={12} className={classes.OrderContainer}>
                        <div className={classes.OrderTitle}>
                            <h5>My Order</h5>
                            <span>5 items</span>
                        </div>
                        <ul className={classes.OrderList}>
                            <li>
                                <div>
                                    <span>2x</span>
                                    <p> product_name</p>
                                </div>
                                <p>10 zł</p>
                            </li>
                            <li>
                                <div>
                                    <span>2x</span>
                                    <p>product_name</p>
                                </div>
                                <p>10 zł</p>
                            </li>
                        </ul>
                        <div className={classes.OrderSummarize}>
                            <h5>Total</h5>
                            <span className={classes.OrderSummarizePrice}>10 zł</span>
                        </div>
                        
                    </Grid>
                    
                    <Grid item sm={5} xs={12} className={classes.OrderContainer}> 
                        <div>
                        formularz
                        </div>
                
                    </Grid>
                    <button className={classes.Button + " " + classes.Arrow}>Back to Menu</button>
                    <button className={classes.Button}>Order Now</button>
                </Grid>
            </div>
        </ReactAux>
    );
};

export default sideDrawer;





// <Backdrop show={props.open} clicked={props.closed}/>


// <ul className={classes.OrderList}>
// </ul>
// <li key={data.id + "_" + index} className={classes.OrderListItem} >
// <span className={classes.Quantity}>{data.quantity <= 1 ? null : "x" + data.quantity}</span><img src={data.imgUrl} alt="dish"/>
// <div className={classes.OrderDescription}>
//     <p><span>{data.product_name}</span></p>
//     <p>{data.price}zł</p>
// </div>
// </li>






