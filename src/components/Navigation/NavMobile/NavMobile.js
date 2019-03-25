//libraries
import React, {Component} from 'react';
//styles
import classes from './NavMobile.scss';
//components
import NavItem from '../NavItem/NavItem';
import NavBtn from '../NavBtn//NavBtn';

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
      <NavBtn clicked={this.toggleMobile} active={this.state.active}/>
      <div className={classes.NavMenu + " " + showMenu}>
        <ul>    
          <NavItem
            link={`/home`}
            active={classes.Active}
            clicked={this.toggleMobile}>
            Strona główna
          </NavItem> 
          <NavItem
            link={`/fala_uderzeniowa`}
            active={classes.Active}
            clicked={this.toggleMobile}>
            Fala uderzeniowa
          </NavItem>
          <NavItem
            link={`/masaz_wodny`}
            active={classes.Active}
            clicked={this.toggleMobile}>
            Masaż wodny
          </NavItem>
          <NavItem
            link={`/hitop`}
            active={classes.Active}
            clicked={this.toggleMobile}>
            Hitop
          </NavItem>
          <NavItem
            link={`/tesla_stym`} 
            active={classes.Active}
            clicked={this.toggleMobile}>
            Tesla Stym
          </NavItem>
          <NavItem
            link={`/laser_wysokoenergetyczny`}
            active={classes.Active}
            clicked={this.toggleMobile}>
            Laser wysokoenergetyczny
          </NavItem>
          <NavItem
            link={`/hivamat`}
            active={classes.Active}
            clicked={this.toggleMobile}>
           Hivamat
          </NavItem>
          <NavItem
            link={`/cennik`}
            active={classes.Active}
            clicked={this.toggleMobile}>
          Cennik
          </NavItem>
          <NavItem
            link={`/kontakt`}
            active={classes.Active}
            clicked={this.toggleMobile}>
          Kontakt
          </NavItem>
        </ul>
      </div>
    </nav>
    )
  }
} 

export default NavMobile;
