//libraries
import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import {connect} from 'react-redux';

//containers
import Layout from './containers/Layout/Layout';
import RestaurantContainer from './containers/Restaurant/Restaurant';
import BarContainer from './containers/Bar/Bar';

//components
import ReactAux from './components/ReactAux/ReactAux';
import Slider from './components/Content/Slider/Slider';
import Restaurant from './components/Content/Restaurant/Restaurant';
import Bar from './components/Content/Bar/Bar';
import Menu from './components/Content/Menu/Menu';
import Order from './components/Content/Order/Order';
import Contact from './components/Content/Contact/Contact';

import * as actions from './store/actions/auth';

// import { AnimatedSwitch } from 'react-router-transition';

class App extends Component {
  componentDidMount () {
    this.props.onTryAutoSignup();
  }
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

const mapStateToProps = state => {
  return {
    isLogin: state.auth.isLogin
    }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));


// <Layout>
// <Switch>
//   <AnimatedSwitch
//   atEnter={{ opacity: 0 }}
//   atLeave={{ opacity: 0 }}
//   atActive={{ opacity: 1 }}
//   >
//     <Route path={'/'} exact render={() => <Redirect to="/home" />} />
//     <Route path={'/home'} component={Slider} />
//     <Route path={'/restaurant'} exact component={Restaurant} />
//     <Route path={'/bar'} component={Bar} />
//     <Route path={'/menu'} component={Menu} />
//     <Route path={'/order'} exact render={() => <Redirect to="/order/Breakfast_Mains" />} />
//     <Route path={'/order/:id'} component={Order} />
//     <Route path={'/contact'} component={Contact} />
//   </AnimatedSwitch>
// </Switch>
// </Layout>