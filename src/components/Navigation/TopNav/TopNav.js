//libraries
import React from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

//styles
import classes from './TopNav.scss';
//components
import NavItem from '../NavItem/NavItem';
import Logo from '../Logo/Logo';

import * as actionTypes from '../../../store/actions/actionTypes';

const top_navigation = (props) => (
  <nav className={classes.Navigation}>
    <Grid item sm={4}>
      <Logo />
    </Grid>
    <Grid item sm={8}>
      <ul className={classes.NavigationMenu}>
        <NavItem
          link={`/home`}
          active={classes.Active}>
          Home
        </NavItem>
        <NavItem
          link={`/restaurant`}
          active={classes.Active}
          dropdown
          dropdown_link="bar"
        >
          Restaurant
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
        <li>
          <i className="fas fa-user-circle fa-2x" onClick={() => props.showModal()}></i>
        </li>
      </ul>
    </Grid>
  </nav>
)


const mapStateToProps = (state, props) => {
  return {
    modalIsOpen: state.auth.modalIsOpen
  }
}

const mapDispatchToProps = dispatch => {
  return {
    showModal: () => dispatch({ type: actionTypes.OPEN_MODAL })
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(top_navigation))





