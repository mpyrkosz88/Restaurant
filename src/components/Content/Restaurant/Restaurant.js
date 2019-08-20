//libraries
import React, { Component } from 'react';
import classes from "./Restaurant.scss";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { connect } from 'react-redux';

//components
import ListItem from '../../ListItem/ListItem';

//images
import RestaurantImage from '../../../assets/images/Restaurant/Restaurant1.webp'
import * as actions from '../../../store/actions/dataBase';

class Restaurant extends Component {

  componentDidMount() {
    this.props.loadData()
  }

  render() {
    return (
      <section className={classes.RestaurantContainer}>
        <div className={classes.TitleImg}>
          <img src={RestaurantImage} alt="Restaurant" />
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
          : null}
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