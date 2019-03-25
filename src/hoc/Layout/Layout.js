//libraries
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

//components
import AsideMenu from '../../hoc/AsideMenu/AsideMenu';
import Navigation from '../../components/Navigation/Navigation';

//styles
import classes from './Layout.scss';

class Layout extends Component {
  render() {
    return (
<div className={classes.Layout}>
  <Grid container justify="center" direction="row" style={{maxWidth:"1024px", margin:"auto"}}>
    <Grid item sm={12}>
     <Navigation />
    </Grid>
    <Grid item sm={4}>
          <AsideMenu/>
    </Grid> 
    <Grid item sm={8}>
      <div style={{margin: "0 20px 0 0"}}>
        {this.props.children}
      </div>
    </Grid>
  </Grid>
</div>
    );
  }
}

export default Layout;