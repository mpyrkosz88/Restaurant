//libraries
import React, { Component } from 'react';
import { Route} from 'react-router-dom'

//components
import Home from '../../components/Aside/Home/Home';
import Restaurant from '../../components/Aside/Restaurant/Restaurant';
import Bar from '../../components/Aside/Bar/Bar';
import Menu from '../../components/Aside/Menu/Menu';
import Order from '../../components/Aside/Order/Order';
import Footer from '../../components/Aside/Footer/Footer';

//styles
import classes from './AsideMenu.scss';


//hoc 
import ReactAux from '../ReactAux/ReactAux';

class AsideMenu extends Component {
  render() {
      return (
          <ReactAux>
            <div className={classes.AsideMenu}>
              <Route path={'/home'} component={Home}/>
              <Route path={'/restaurant'} component={Restaurant}/>
              <Route path={'/bar'} component={Bar}/>
              <Route path={'/menu'} component={Menu}/>
              <Route path={'/order'} component={Order}/>
              <Footer />
            </div>
          </ReactAux>
      );
    }
  }
  
  export default AsideMenu;