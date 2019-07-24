//libraries
import React, { Component } from 'react';
//styles
import classes from './NavMobile.scss';
//components
import NavItem from '../NavItem/NavItem';
import NavBtn from '../NavBtn//NavBtn';
import Logo from '../Logo/Logo';


class NavMobile extends Component {

  state = {
    hide: true,
    active: false,
  }

  toggleMobile = () => {
    this.setState({
      hide: !this.state.hide,
      active: !this.state.active
    })
  }
  render() {

    let showMenu = classes.Hide;
    this.state.hide ? showMenu = classes.Hide : showMenu = classes.Show

    return (
      <nav className={classes.NavMobile}>
        <Logo />
        <div className={classes.NavContainer}>
          <NavBtn clicked={this.toggleMobile} active={this.state.active} />
          <div className={classes.NavMenu + " " + showMenu}>
            <ul>
              <NavItem
                link={`/home`}
                active={classes.Active}>
                Home
              </NavItem>
              <NavItem
                link={`/restaurant`}
                active={classes.Active}>
                Restaurant
              </NavItem>
              <NavItem
                link={`/bar`}
                active={classes.Active}>
                Bar
              </NavItem>
              <NavItem
                link={`/menu`}
                active={classes.Active}>
                Menu
              </NavItem>
              <NavItem
                link={`/order`}
                active={classes.Active}>
                Order Online
              </NavItem>
              <NavItem
                link={`/contact`}
                active={classes.Active}>
                Contact
              </NavItem>
              <li className={classes.SignIn}>
                Sign In
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavMobile;



