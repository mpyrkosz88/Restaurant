//libraries
import React, { Component } from 'react';
import classes from "./Order.scss";

//components
import Product from '../../../containers/Product/Product'
import dataBase from '../../../assets/data/Menu/dataBase';

class Order extends Component {

  render() {
    const url = this.props.match.params.id
    const dishesArray = url.split("_")
    const dishesName = dishesArray[0];
    const dishesMenuName = dishesArray[1]
    let dishesHours
    if (dishesName == "Breakfast") {
      dishesHours = "7-12"
    }
    else {
      dishesHours = "12-22"
    }

    const dishes = Object.keys(dataBase)
      .filter(key => {
        return (
          dishesName.includes(key))
      }
      )
      .reduce((obj, key) => {
        obj[key] = dataBase[key];
        return obj;
      }, {});

    const dishesMenu = Object.keys(dishes).map(data => {
      return dishes[data]
    })
      .reduce(obj => obj)
      .map(data => {
        if (Object.keys(data) == dishesMenuName) {
          return data
        }
      })
      .filter(key => key)
      .reduce(obj => obj)[dishesMenuName]
    return (
      <section className={classes.Order}>
        <div className={classes.MenuTitle}>
          <h3> {dishesName} Menu</h3>
          <p>Served daily between {dishesHours}</p>
        </div>
        <div className={classes.Dishes}>
          <h2>{dishesMenuName}</h2>
          {dishesMenu.map((data, index) => {
            return (
              <Product key={index}
                id={data.id}
                imgUrl={data.imgUrl}
                name={data.product_name}
                price={data.price}
                description={data.description} 
                />
            )
          })}
        </div>
      </section>
    )
  }
}

export default Order;
