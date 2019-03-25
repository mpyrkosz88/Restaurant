//libraries
import React, { Component } from 'react';
import classes from "./Menu.scss";

//components
import data from './data';
import ReactAux from '../../../hoc/ReactAux/ReactAux';


class Menu extends Component {
  render() {
    return (
      <ReactAux>
      <section className={classes.Menu}>
        {Object.keys(data).map(keyName =>{
          return (
            <div key={keyName}>
              <h3>{keyName}</h3>
              <ul>{data[keyName].map(itemData=>{
                return (
                  <li key={itemData.id}>
                    <div className={classes.Item}>
                      <h5>{itemData.special ? <i className="fas fa-certificate">&nbsp;</i> : null}{itemData.name}</h5>
                      <span>{itemData.price}</span>
                    </div>
                    <p>{itemData.description}</p>
                  </li>
                )
                })}</ul>
            </div>
          )
        })}
      </section>
      {/* </Grid> */}
      </ReactAux>
    )
  }
}

export default Menu;
