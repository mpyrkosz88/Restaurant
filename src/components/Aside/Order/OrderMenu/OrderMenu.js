import React, { Component } from 'react';

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
            <li className={classes.Dropdown + " " + showMenu} onClick={this.ShowMenu}>
                <div className={classes.DishesMenu}>
                    <p>{this.props.title} </p> <i className="fas fa-chevron-up"></i>
                </div>
                <ul className={classes.HiddenMenu}>
                    {this.props.dishes.map(data =>(
                            <li key={data}>{data}</li>
                            )
                        )
                    }
                </ul>
            </li>
        );
    }
}

export default OrderMenu