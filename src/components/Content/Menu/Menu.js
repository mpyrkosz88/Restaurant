//libraries
import React, { Component } from 'react';
import classes from "./Menu.scss";
import { connect } from 'react-redux';

//components
import Spinner from '../../UI/Spinner/Spinner';

//actions
import * as actions from '../../../store/actions/dataBase';

class Menu extends Component {

  componentDidMount () {
    this.props.loadData()
  }
  
  render() {
    return (
        <section className={classes.Menu}>
        {this.props.data ?
          Object.keys(this.props.data).map((header, index) => {
            return (
              <div key={index}>
                <h3 key={index}>{header}</h3>
                {
                  this.props.data[header].map((name) => {
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
          })
          : <Spinner />
        }
        </section>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
      data: state.dataBase.menuData
  }
}  

const mapDispatchToProps = dispatch => {
  return {
      loadData: () => dispatch(actions.initMenuData()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Menu)