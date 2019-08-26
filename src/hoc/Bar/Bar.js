//libraries
import React, { Component } from 'react';

//components
import FullProduct from '../../components/Product/FullProduct/FullProduct'

//hoc
import ReactAux from '../ReactAux/ReactAux'

import dataBase from '../../assets/data/Bar/dataBase.json';

class BarContainer extends Component {

    render() {
        return (
            <ReactAux>
                 <FullProduct data={dataBase} match={this.props.match}/>
            </ReactAux>
        )
    }
}
 
  
  export default (BarContainer)