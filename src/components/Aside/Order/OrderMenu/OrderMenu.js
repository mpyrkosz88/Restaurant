import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

//hoc
import ReactAux from '../../../ReactAux/ReactAux';

//classes
import classes from './OrderMenu.scss';

class OrderMenu extends Component {
    state = {
        hide: true,
    }
    ShowMenu = () => {
        this.setState({
            hide: !this.state.hide
        })
    }
    render() {
        let showMenu = classes.HideMenu
        this.state.hide ? showMenu = classes.HideMenu : showMenu = classes.ShowMenu
        return (
            <ReactAux>
                <li className={classes.Dropdown + " " + showMenu}>
                    <div className={classes.DishesMenu} onClick={this.ShowMenu}>
                        <p>{this.props.title}</p> <i className="fas fa-chevron-up"></i>
                    </div>
                    <ul className={classes.HiddenMenu}>
                        {this.props.dishes.map((data) => {
                            return (
                                Object.keys(data).map((dish, index) => {
                                    return (
                                        <li key={index}><NavLink to={"/order/" + this.props.title + "_" + dish} activeClassName={classes.Active}>{dish}</NavLink></li>
                                    )
                                })
                            )
                        })}
                    </ul>
                </li>
            </ReactAux>
        );
    }
}


export default OrderMenu