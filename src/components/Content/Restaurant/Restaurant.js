//libraries
import React, { Component } from 'react';
import classes from "./Restaurant.scss";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { connect } from 'react-redux';

//components
import ListItem from '../../ListItem/ListItem';
import Spinner from '../../UI/Spinner/Spinner';

//actions
import * as actions from '../../../store/actions/dataBase';

class Restaurant extends Component {

  componentDidMount() {
    this.props.loadData()
  }

  render() {
    return (
      <section className={classes.RestaurantContainer}>
        <div className={classes.TitleImg}>
          <img src="https://firebasestorage.googleapis.com/v0/b/restaurant-984e6.appspot.com/o/Restaurant%2FRestaurant1.webp?alt=media&token=4f2968f4-6675-4417-819d-79407eb8c065" alt="Restaurant" />
        </div>
        {this.props.data ?
          <GridList cellHeight={'auto'} cols={2} spacing={16}>
            {this.props.data.map((index) => {
              return (
                <GridListTile key={index.id} className={classes.RestaurantItem}>
                  <ListItem
                    imgUrl={index.imgUrl}
                    key={index.id}
                    likes={index.likes}
                    match={this.props.match}
                    id={index.id}
                  />
                </GridListTile>
              )
            }
            )
            }
          </GridList>
          : <Spinner/>}
      </section>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
    data: state.dataBase.restaurantData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadData: () => dispatch(actions.initRestaurantData()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Restaurant)