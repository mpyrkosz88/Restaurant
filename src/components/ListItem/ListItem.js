//libraries
import React from 'react';
import { NavLink } from 'react-router-dom';

//styles
import classes from "./ListItem.scss";

const listItem = (props) => {
    return (
        <div className={classes.ListItem}>
            <NavLink to={props.match.url + '/' + props.id}>
                <img src={props.imgUrl} alt="Restaurant Gallery" />
                <div className={classes.ListItemBackground}>
                    <div className={classes.Likes}>
                        <i className="fas fa-heart fa-2x"></i>
                        <span>{props.likes}</span>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default listItem
