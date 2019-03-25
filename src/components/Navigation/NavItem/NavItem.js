//libraries
import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import classes from './NavItem.scss';

class NavItem extends Component {
  render() {
    let dropdown = null;
    let dropdownClass = null;
    if (this.props.dropdown) {
      dropdown = 
      <div className={classes.Dropdown_Menu}>
      <NavLink
          to={'/' + this.props.dropdown_link}
          onClick={this.props.clicked}
          activeClassName={this.props.active}
        >
          {this.props.dropdown_link}
        </NavLink>
      </div>;
      dropdownClass = classes.Dropdown;
    }

    return (
      <li className={dropdownClass}>
        <NavLink
          to={this.props.link}
          exact={this.props.exact}
          onClick={this.props.clicked}
          activeClassName={this.props.active}
        >
          {this.props.children}
        </NavLink>
        {dropdown}
      </li>
    )
  }
}

export default NavItem;