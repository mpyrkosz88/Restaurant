import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';

import Modal from '../../components/UI/Modal/Modal';
import ModalProduct from '../../components/Product/ModalProduct/ModalProduct';
import ReactAux from '../../components/ReactAux/ReactAux';
import Backdrop from '../../components/UI/Backdrop/Backdrop'

//classes
import classes from './Product.scss';

//actions
import * as actionTypes from '../../store/actions/actionTypes';

class Product extends Component {
    state = {
        show: false,
    }

    showModal = () => {
        this.setState({ show: true });
    }

    closeModal = () => {
        this.setState({ show: false });
    }
    shouldComponentUpdate(nextProps, nextState) {
        if(nextState.show === this.state.show && nextState.show === true) {
            this.setState({ show: false });
        }
        return nextState
    }
    render() {
        return (
            <ReactAux>
                <Grid container alignItems="center" className={classes.ItemContainer} onClick={this.showModal}>
                    <Grid item xs={3}>
                        <figure><img src={this.props.imgUrl} alt="Dish" className={classes.Img} /> </figure>
                    </Grid>
                    <Grid item xs={9} >
                        <div className={classes.Item}>
                            <h5>{this.props.name}</h5>
                            <span>{this.props.price} zł</span>
                        </div>
                        <p>{this.props.description}</p>
                    </Grid>

                </Grid>
                <Modal show={this.state.show} clicked={this.closeModal}>
                    <ModalProduct
                    imgUrl={this.props.imgUrl} name={this.props.name} price={this.props.price} description={this.props.description} clicked={(quantity) => this.props.addToCart(this.props.id, this.props.price, quantity)} />
                </Modal>
                <Backdrop show={this.state.show}/>
                </ReactAux>
                )
            }
        }
        
const mapStateToProps = (state, props) => {
    return {
        cart: state.cart.cart_items,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (id, price, quantity) => dispatch({ type: actionTypes.CART_ADD, payload: { id, price, quantity } })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product)
