import React from 'react';

import classes from './Footer.scss';

import Twitter from "../../assets/images/twitter-logo.png";
import Facebook from "../../assets/images/facebook-logo.png";
import Pinterest from "../../assets/images/pinterest-logo.png";
import Instagram from "../../assets/images/instagram-logo.png";

const footer = () => {
    return (
        <div className={classes.Footer}>
            <p>500 Terry Francois Street</p>
            <p>SF , CA  94158 </p>
            <p>Open everyday 7am to 10pm</p>
            <div className={classes.Images}>
                <a href=""><img src={Facebook} alt="facebook" /></a>
                <a href=""><img src={Twitter} alt="Twitter" /></a>
                <a href=""><img src={Pinterest} alt="Pinterest" /></a>
                <a href=""><img src={Instagram} alt="Instagram" /></a>
            </div>
            <p className={classes.SecondText}>© 2023 Alex G. Restaurant. Proudly </p>
            <p className={classes.SecondText}>created with</p>
        </div>
    )
}

export default footer