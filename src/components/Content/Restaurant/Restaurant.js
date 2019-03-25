//libraries
import React, { Component } from 'react';
import classes from "./Restaurant.scss";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

//components
import ListItem from '../../ListItem/ListItem';

//images
import RestaurantImage from '../../../assets/images/Restaurant/Restaurant1.webp'
import data from './data';

class Restaurant extends Component {
  render() {
    return (
      <section className={classes.RestaurantContainer}>
        <div className={classes.TitleImg}>
          <img src={RestaurantImage} alt="Restaurant" />
        </div>
        <GridList cellHeight={'auto'} cols={2} spacing={16}>
          {data.map((index) => {
            return (
              <GridListTile key={index.id}>
                <ListItem
                  imgUrl={index.imgUrl}
                  key={index.id}
                  likes={index.likes}
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
