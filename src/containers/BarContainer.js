//libraries
import React, { Component } from 'react';

//components
import FullProduct from '../components/Product/FullProduct/FullProduct'

//hoc
import ReactAux from '../hoc/ReactAux/ReactAux'

//database
import dataBase from '../assets/data/Restaurant/dataBase';

class BarContainer extends Component {
    render() {
        return (
            <ReactAux>
                <FullProduct data={dataBase.Bar} match={this.props.match} />
            </ReactAux>
        )
    }
}

export default BarContainer;