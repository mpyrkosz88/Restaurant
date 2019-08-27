//libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';

//components
import FullProduct from '../../components/Product/FullProduct/FullProduct'
import Spinner from '../../components/UI/Spinner/Spinner';

//hoc
import ReactAux from '../../hoc/ReactAux/ReactAux'

//styles
import classes from './Restaurant.scss'

//actions
import * as actions from '../../store/actions/dataBase';

class RestaurantContainer extends Component {

    componentDidMount() {
        this.props.loadData()
      }

    render() {
        return (
            <ReactAux>
                 {this.props.restaurantData ? <FullProduct data={this.props.restaurantData} match={this.props.match} /> : <div className={classes.Restaurant}><Spinner /></div>}
            </ReactAux>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        restaurantData: state.dataBase.restaurantData,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadData: () => dispatch(actions.initRestaurantData()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(RestaurantContainer)