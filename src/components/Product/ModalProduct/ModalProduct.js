import React from 'react';

//classes
import classes from './ModalProduct.scss';

const modalProduct = (props) => {
    return (
        <div className={classes.ModalProduct}>
                <figure><img src={props.imgUrl} alt="dish"/></figure> 
                <div className={classes.Container}>
                    <h5>{props.name}</h5>
                    <p>{props.price} zł</p>
                    <p className={classes.Description}>{props.description}</p>
                    <button className={classes.Button} onClick={props.clicked}>+ Add to my order</button>
                </div>
        </div>
    )
}
export default modalProduct