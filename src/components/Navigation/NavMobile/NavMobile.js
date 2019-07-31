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
          <div className={classes.NavMenu + " " + showMenu}>
            <ul>
              <NavItem
                link={`/home`}
                active={classes.Active}
                clicked={this.toggleMobile}
                >
                Home
              </NavItem>
              <NavItem
                link={`/restaurant`}
                active={classes.Active}
                clicked={this.toggleMobile}
                >
                Restaurant
             </NavItem>
              <NavItem
                link={`/bar`}
                active={classes.Active}
                clicked={this.toggleMobile}
                >
                Bar
              </NavItem>
              <NavItem
                link={`/menu`}
                active={classes.Active}
                clicked={this.toggleMobile}
                >
                Menu
              </NavItem>
              <NavItem
                link={`/order`}
                active={classes.Active}
                clicked={this.toggleMobile}
                >
                Order Online
              </NavItem>
              <NavItem
                link={`/contact`}
                active={classes.Active}
                clicked={this.toggleMobile}
                >
                Contact
              </NavItem>
              <li className={classes.SignIn}
              onClick={this.toggleMobile}
              >
                Sign In
              </li>
            </ul>
          </div>
          <NavBtn clicked={this.toggleMobile} active={this.state.active} />
        </div>
      </nav>
    )
  }
}

export default NavMobile;



