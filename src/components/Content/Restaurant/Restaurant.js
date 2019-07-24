//libraries
import React, { Component } from 'react';
import classes from "./Restaurant.scss";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

//components
import ListItem from '../../ListItem/ListItem';

//images
import RestaurantImage from '../../../assets/images/Restaurant/Restaurant1.webp'
import dataBase from '../../../assets/data/Restaurant/dataBase';

class Restaurant extends Component {
  render() {
    const data = dataBase.Restaurant;
    return (
      <section className={classes.RestaurantContainer}>
        <div className={classes.TitleImg}>
          <img src={RestaurantImage} alt="Restaurant" />
        </div>
        <GridList cellHeight={'auto'} cols={2} spacing={16}>
          {data.map((index) => {
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
      </section>
    )
  }
}

export default Restaurant;
