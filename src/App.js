//libraries
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'

//containers

//components
import Slider from './components/Content/Slider/Slider';
import Restaurant from './components/Content/Restaurant/Restaurant';
import Bar from './components/Content/Bar/Bar';
import Menu from './components/Content/Menu/Menu';
import Order from './components/Content/Order/Order';

import Layout from './hoc/Layout/Layout';

class App extends Component {

  render() {
    return (
      <Layout>
        <Switch>
          <Route path={'/home'} component={Slider}/>
          <Route path={'/restaurant'} component={Restaurant}/>
          <Route path={'/bar'} component={Bar}/>
          <Route path={'/menu'} component={Menu}/>
          <Route path={'/order'} component={Order}/>
        </Switch>
      </Layout>

      
    );
  }
}

export default App;