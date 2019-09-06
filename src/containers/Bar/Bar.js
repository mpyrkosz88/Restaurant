//libraries
import React, { Component } from 'react';
import { connect } from 'react-redux';

//components
import FullProduct from '../../components/Product/FullProduct/FullProduct'
import Spinner from '../../components/UI/Spinner/Spinner';

//hoc
import ReactAux from '../../components/ReactAux/ReactAux'

//styles
import classes from './Bar.scss'

//actions
import * as actions from '../../store/actions/dataBase';

class BarContainer extends Component {

    componentDidMount() {
        this.props.loadData()
    }

    render() {
        return (
            <ReactAux>
                {this.props.barData ? <FullProduct data={this.props.barData} match={this.props.match} /> : <div className={classes.Bar}><Spinner /></div>}
            </ReactAux>
        )
    }
}


const mapStateToProps = (state, props) => {
    return {
        barData: state.dataBase.barData,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loadData: () => dispatch(actions.initBarData()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(BarContainer)