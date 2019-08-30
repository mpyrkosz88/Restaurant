//libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'
//styles
import classes from './NavMobile.scss';
//components
import NavItem from '../NavItem/NavItem';
import NavBtn from '../NavBtn//NavBtn';
import Logo from '../Logo/Logo';

//actions
import * as actionTypes from '../../../store/actions/actionTypes';
import * as actions from '../../../store/actions/auth';

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
    let showContainer = null;
    this.state.hide ? showMenu = classes.Hide : showMenu = classes.Show
    this.state.hide ? showContainer = null : showContainer = classes.ShowContainer
     return (
      <nav className={classes.NavMobile}>
        <Logo />
        <div className={classes.NavContainer + " " + showContainer}>
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
              {this.props.isLogin ?       
                <li className={classes.SignIn} onClick={() => {
                  this.props.logOut()
                  this.toggleMobile
                   }}> Log Out
                </li> 
              :
                <li className={classes.SignIn} onClick={() => {
                  this.props.showModal()
                  this.toggleMobile
                  }}>
                  Sign In
              </li>
              }

            </ul>
          </div>
          <NavBtn clicked={this.toggleMobile} active={this.state.active} />
        </div>
      </nav>
    )
  }
}


const mapStateToProps = (state, props) => {
  return {
    modalIsOpen: state.auth.modalIsOpen,
    isLogin:state.auth.isLogin
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showModal: () => dispatch({ type: actionTypes.OPEN_MODAL }),
    logOut: () => dispatch(actions.logout())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(NavMobile))