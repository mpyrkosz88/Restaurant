import React, { Component } from 'react';

//classes
import classes from './ModalProduct.scss';


class ModalProduct extends Component {
    state = {
        quantity: 1,
    }

    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.quantity === nextState.quantity && this.state.quantity > 1) {
            this.setState({
                quantity: 1
            })
        }
        return nextState
    }
    
    add = () => {
        this.setState({
            quantity: this.state.quantity + 1
        })
    }

    remove = () => {
        if (this.state.quantity > 1) {
            this.setState({
                quantity: this.state.quantity - 1
            })
        }
    }
    render() {
        return (
            <div className={classes.ModalProduct}>
                <figure><img src={this.props.imgUrl} alt="dish" /></figure>
                <div className={classes.Container}>
                    <h5>{this.props.name}</h5>
                    <p>{this.props.price} zł</p>
                    <p className={classes.Description}>{this.props.description}</p>
                    <div className={classes.QuantityContainer}>
                        <p> Quantity</p>
                        <div className={classes.Quantity}>
                            <i className="fa fa-minus-circle" aria-hidden="true" onClick={this.remove}></i>
                            <span>{this.state.quantity}</span>
                            <i className="fa fa-plus-circle" aria-hidden="true" onClick={this.add}></i>
                        </div>
                    </div>
                    <button className={classes.Button} onClick={() => this.props.clicked(this.state.quantity)}>+ Add to my order</button>
                </div>
            </div>
        )
    }
}

export default ModalProduct