//libraries
import React from 'react';
import classes from "./SliderItem.scss";

// components

const sliderItem = (props) => {

let background
if (props.background) {
    background = classes.Background
}
else {
    background = classes.BackgroundHide
}

return (

<li className={classes.SliderItem + ' ' + background}>
    <img src={props.imgUrl} alt="Restaurant Gallery"/>
</li>
)}

export default sliderItem
