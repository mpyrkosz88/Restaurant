//libraries
import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';

//components
import AsideMenu from '../AsideMenu/AsideMenu';
import Navigation from '../../components/Navigation/Navigation';
import Footer from '../../components/Footer/Footer';
import Auth from '../../components/Auth/Auth';

//styles
import classes from './Layout.scss';

class Layout extends Component {
  
render() {

    return (
      <div className={classes.Layout}>
        <Grid container justify="center" direction="row" style={{ maxWidth: "1024px", margin: "auto"}}>
          <Grid item sm={12} xs={12}>
            <Navigation />
          </Grid>
          <Grid item sm={4} xs={12} >
          <AsideMenu />
          </Grid>
          <Grid item sm={8} xs={12}>
            <div className={classes.Container}>
              {this.props.children}
            </div>
          </Grid>
          <Grid item sm={4} xs={12}>
          <Footer/>
          </Grid>
          <Grid item sm={8}></Grid>
        </Grid>
        <Auth />
       </div>  
       );
      }
    }
    
export default Layout;