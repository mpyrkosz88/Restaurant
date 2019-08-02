import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { NavLink } from 'react-router-dom';

//classes
import classes from './FullProduct.scss';

//hoc
import ReactAux from '../../../hoc/ReactAux/ReactAux';

class FullProduct extends Component {

    state = {
        'fullscreen': false,
    }

    fullscreenClick = () => {
        this.setState({
            fullscreen: !this.state.fullscreen
        })
    }
    render() {
        const data = this.props.data
        const firstPage = 1;
        const lastPage = data.length;
        const match = this.props.match
        const productId = data.find(({ id }) => {
            return (
                id == match.params.id
            )
        })
        const path = match.path.substring(0, match.path.lastIndexOf("/"))

        let nextPage = productId.id + 1
        let previousPage = productId.id - 1
        let nextActive = true;
        let previousActive = true
        let fullscreenSize = 8
        this.state.fullscreen ? fullscreenSize = 12 : fullscreenSize = 8

        if (nextPage > lastPage) {
            nextPage = productId.id
            nextActive = false;
        }
        else if (previousPage < firstPage) {
            previousPage = productId.id
            previousActive = false;
        }

        return (
            <ReactAux>
                <div className={classes.FullProduct}>
                    <Grid container justify="center" direction="row" alignItems="center">
                        <Grid item sm={fullscreenSize} container justify="center" direction="row" alignItems="center">
                            <Grid item xs={2} justify="center" container>
                                {previousActive ?
                                    <NavLink
                                        to={path + "/" + previousPage}
                                    >
                                        <i className={classes.ActiveLink + " fas fa-chevron-left fa-3x"}></i>
                                    </NavLink>
                                    :
                                    <NavLink
                                        to={'/'}
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className={"fas fa-chevron-left fa-3x"}></i>
                                    </NavLink>
                                }
                            </Grid>
                            <Grid item xs={8}>
                                <figure className={classes.ProductImg}>
                                    <div className={classes.FullButton}
                                        onClick={this.fullscreenClick}
                                    >
                                        {this.state.fullscreen ?
                                            <i className={classes.ActiveLink + " fas fa-compress fa-3x"}></i> :
                                            <i className={classes.ActiveLink + " fas fa-expand fa-3x"}></i>}
                                    </div>
                                    <img src={productId.imgUrl} alt="Wine" />
                                </figure>
                            </Grid>
                            <Grid item xs={2} justify="center" container>
                                {nextActive ?
                                    <NavLink
                                        to={path + "/" + nextPage}
                                    >
                                        <i className={classes.ActiveLink + " fas fa-chevron-right fa-3x"}></i>
                                    </NavLink>
                                    :
                                    <NavLink
                                        to={'/'}
                                        onClick={(e) => e.preventDefault()}
                                    >
                                        <i className={"fas fa-chevron-right fa-3x"}></i>
                                    </NavLink>
                                }
                                <NavLink to={path}>
                                <i className={classes.CloseButton + " fas fa-times fa-3x"}></i>
                            </NavLink>
                            </Grid>
                        </Grid>
                        {!this.state.fullscreen ?
                            <Grid item sm={4}>
                                <div className={classes.ProductContent}>
                                    <NavLink to={path}>
                                        <i className={classes.CloseButton + " fas fa-times fa-3x"}></i>
                                    </NavLink>
                                    <h3>
                                        {productId.product_name}
                                    </h3>
                                    <div className={classes.ProductDescription}>
                                        {productId.description}
                                    </div>
                                </div>

                            </Grid>
                            :
                            null
                        }

                    </Grid>
                </div>
            </ReactAux>
        )
    }
}

export default FullProduct