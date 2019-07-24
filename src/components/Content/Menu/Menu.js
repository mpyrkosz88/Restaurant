//libraries
import React, { Component } from 'react';
import classes from "./Menu.scss";

//components
import data from '../../../assets/data/Menu/dataBase';
import ReactAux from '../../../hoc/ReactAux/ReactAux';

class Menu extends Component {
  render() {
    return (
      <ReactAux>
        <section className={classes.Menu}>
          {Object.keys(data).map((header, index) => {
            return (
              <div key={index}>
                <h3 key={index}>{header}</h3>
                {
                  data[header].map((name) => {
                    return (
                      Object.keys(name).map((header, index) => {
                        return <ul key={index}>
                          <li>
                            <h4>{header}</h4>
                            <ul>
                              {
                                name[header].map((product, index) => {
                                  return (
                                    <li key={index}>
                                      <div className={classes.Item}>
                                        <h5>{product.product_name}</h5>
                                        <span>{product.price} zł</span>
                                      </div>
                                      <p>{product.description}</p>
                                    </li>)
                                })
                              }
                            </ul>
                          </li>
                        </ul>
                      })
                    )
                  })}
              </div>
            )
          })}
        </section>
      </ReactAux>
    )
  }
}
export default Menu;