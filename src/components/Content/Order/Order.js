//libraries
import React, { Component } from 'react';
import classes from "./Order.scss";

//components
import Product from '../../Product/Product'

class Order extends Component {
  render() {
    return (
      <section className={classes.Order}>
        <div className={classes.MenuTitle}>
          <h3>Lunch Menu</h3>
          <p>Served daily between 12-5pm</p>
        </div>
        <div className={classes.Dishes}>
          <h2>Starters</h2>
          <p>
          This is a section of your menu, customize it any way you want.
          </p>
          <Product/>
        </div>
      </section>
    )
  }
}

export default Order;
