//libraries
import React, { Component } from 'react';

//components
import FullProduct from '../../components/Product/FullProduct/FullProduct'

//hoc
import ReactAux from '../../hoc/ReactAux/ReactAux'

import dataBase from '../../assets/data/Restaurant/dataBase.json';

class RestaurantContainer extends Component {
    render() {
        console.log(dataBase);
        return (
            <ReactAux>
                <FullProduct data={dataBase} match={this.props.match} />
            </ReactAux>
        )
    }
}

export default RestaurantContainer;