import React, { Component } from 'react';
import { connect } from 'react-redux';

import ReactAux from '../../hoc/ReactAux/ReactAux';

import classes from './Aside.scss';

import * as actions from '../../store/actions/dataBase';
import axios from '../../axios-orders';

class Aside extends Component {

    componentDidMount () {
        this.props.loadData();
    }
    render() {
            const url = this.props.match.path.split('/').slice(1).toString();
    return (
        <div className={classes.Aside}>
        {this.props.asideData ?
            this.props.asideData[url].map((data, index) => {
                let paragraphClass = data.paragraph.className;
                return (
                    <ReactAux key={index}>
                        {data.header ? <h4>{data.header}</h4> : null}   
                        <p className={classes[paragraphClass]}>{data.paragraph.text}</p>
                        {data.paragraphBold ? <p>{data.paragraphBold.text}</p> : null}
                    </ReactAux>
                )
            })
            : null}

    </div>
    )
    }
}

const mapStateToProps = (state, props) => {
    return {
        asideData: state.dataBase.asideData
    }
  }  

  const mapDispatchToProps = dispatch => {
    return {
        loadData: () => dispatch(actions.initAsideData()),
    }
  }
  

export default connect(mapStateToProps, mapDispatchToProps)(Aside, axios)