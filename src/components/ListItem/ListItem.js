//libraries
import React from 'react';
import classes from "./ListItem.scss";

const listItem = (props) => {
return (
<div className={classes.ListItem}>
    <img src={props.imgUrl} alt="Restaurant Gallery" />
    <div className={classes.ListItemBackground}> 
        <div className={classes.Likes}>
            <i class="fas fa-heart fa-2x"></i> 
            <span>{props.likes}</span>
        </div>
    </div>
</div>
)}

export default listItem
