import React, { Component } from 'react';

import classes from './Modal.scss';
import ReactAux from '../../ReactAux/ReactAux';

class Modal extends Component {

    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render () {
        return (
            <ReactAux> 
                <div className={classes.Modal}
                style={{
                    transform: this.props.show ? 'translateY(0)' : 'translateY(-150vh)',
                    opacity: this.props.show ? '1' : '0'
                }}>
                <i className={classes.Button + " fas fa-times-circle fa-2x"} onClick={this.props.clicked}></i>
                {this.props.children}
            </div>
            </ReactAux>
        )
    }
}

export default Modal;
