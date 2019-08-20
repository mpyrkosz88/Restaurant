//libraries
import React, { Component } from 'react';
import classes from "./Bar.scss";
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import { connect } from 'react-redux';

//components
import ListItem from '../../ListItem/ListItem';

import * as actions from '../../../store/actions/dataBase';

class Bar extends Component {
  componentDidMount () {
    this.props.loadData()
  }
  render() {
    return (
      <section className={classes.Bar}>
      {this.props.data ? 
        <GridList cellHeight={'auto'} cols={2} spacing={16}>
          {this.props.data.map((index) => {
            return (
              <GridListTile key={index.id}>
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
        :
        null
      }
      </section>
    )
  }
}

const mapStateToProps = (state, props) => {
  return {
      data: state.dataBase.barData
  }
}  

const mapDispatchToProps = dispatch => {
  return {
      loadData: () => dispatch(actions.initBarData()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Bar)