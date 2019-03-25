import React, { Component } from 'react';

import classes from './Order.scss';
import OrderMenu from './OrderMenu/OrderMenu';

import data from './data';

class Order extends Component {
     render() {
        //  console.log(data);
      return (
            <div className={classes.OrderAside}>
                <div className={classes.DishesContainer}>
                    <ul>
                        {data.map((data,index) =>
                        {return (
                        <OrderMenu key={index} title={data.title} dishes={data.dishes}/>
                        )}
                        )}
                    </ul>
                </div>
                <div className={classes.OrderContainer}>
                    <div className={classes.OrderTitle}>
                        <p>My Order</p>
                        <span>0 items</span>
                    </div>
                    <div className={classes.OrderItems}>
                            <i class="fa fa-shopping-bag fa-4x"></i>
                        <p>Browse our menu and start adding items to your order
                        </p>
                    </div>
                    <div className={classes.OrderSummarize}>
                        <p>Subtotal</p>
                        <span>0 zł</span>
                    </div>
                    <button>Order Now</button>
                </div>
            </div>
        );
      }
    }

export default Order