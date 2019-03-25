//libraries
import React, { Component } from 'react';
import classes from "./Bar.scss";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

//components
import ListItem from '../../ListItem/ListItem';

//images
import data from './data';

class Bar extends Component {
  render() {
    return (
      <section className={classes.Bar}>
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

export default Bar;
