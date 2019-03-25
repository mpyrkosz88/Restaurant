import React from 'react';
import Grid from '@material-ui/core/Grid';

//classes
import classes from './Product.scss';

import Img from '../../assets/images/Lunch/Lunch1.JPG'
const product = (props) => {
    return (
        <Grid container alignItems="center" className={classes.ItemContainer}>
            <Grid item xs={3}>
                <figure><img src={Img} alt="Watch" /> </figure>
            </Grid>
            <Grid item xs={9} >
                <div className={classes.Item}>
                    <h5>Jakieś danie</h5>
                    <span>3zł</span>
                </div>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia placeat corporis</p>
            </Grid>
        </Grid>
    )
}

export default product
{/* <div className={classes.Item}>
        <h5>{itemData.special ? <i className="fas fa-certificate">&nbsp;</i> : null}{itemData.name}</h5>
        <span>{itemData.price}</span>
        </div>
 <p>{itemData.description}</p> */}
 {/* <figure><img src={props.imgUrl} alt="Watch" /> </figure> */}