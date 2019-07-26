//libraries
import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'

//hoc
import ReactAux from './hoc/ReactAux/ReactAux';
import Layout from './hoc/Layout/Layout';

//components
import Slider from './components/Content/Slider/Slider';
import Restaurant from './components/Content/Restaurant/Restaurant';
import Bar from './components/Content/Bar/Bar';
import Menu from './components/Content/Menu/Menu';
import Order from './components/Content/Order/Order';
import Contact from './components/Content/Contact/Contact';

//containers
import RestaurantContainer from './containers/RestaurantContainer';
import BarContainer from './containers/BarContainer';

class App extends Component {

  render() {
    return (
      <ReactAux>
        <Layout>
          <Switch>
            <Route path={'/'} exact render={() => <Redirect to="/home" />} />
            <Route path={'/home'} component={Slider} />
            <Route path={'/restaurant'} exact component={Restaurant} />
            <Route path={'/bar'} component={Bar} />
            <Route path={'/menu'} component={Menu} />
            <Route path={'/order'} exact render={() => <Redirect to="/order/Breakfast_Mains" />} />
            <Route path={'/order/:id'} component={Order} />
            <Route path={'/contact'} component={Contact} />
          </Switch>
        </Layout>
        <Switch>
          <Route path={'/restaurant/:id'} component={RestaurantContainer} />
          <Route path={'/bar/:id'} component={BarContainer} />
        </Switch>
      </ReactAux>
    );
  }
}

export default App;