//libraries
import React from 'react';
import Grid from '@material-ui/core/Grid';
//styles
import classes from './TopNav.scss';
//components
import NavItem from '../NavItem/NavItem';
import Logo from '../Logo/Logo';

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
          link={`/team`} 
          active={classes.Active}>
          Team
        </NavItem>
        <NavItem
          link={`/contact`}
          active={classes.Active}>
        Contact
        </NavItem>
      </ul>
    </Grid>
  </nav>
)

export default top_navigation;
