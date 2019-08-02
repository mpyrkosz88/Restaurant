//libraries
import React, { Component } from 'react';
import { Route } from 'react-router-dom'

//components
import Order from '../../containers/Order/Order';
import Aside from '../../components/Aside/Aside';

//styles
import classes from './AsideMenu.scss';


//hoc 
import ReactAux from '../ReactAux/ReactAux';

class AsideMenu extends Component {
  render() {
    return (
      <ReactAux>
        <div className={classes.AsideMenu}>
          <Route path={'/home'} component={Aside} />
          <Route path={'/restaurant'} component={Aside} />
          <Route path={'/bar'} component={Aside} />
          <Route path={'/menu'} component={Aside} />
          <Route path={'/order'} component={Order} />
          <Route path={'/contact'} component={Aside} />
        </div>
      </ReactAux>
    );
  }
}

export default AsideMenu;