import React from 'react';

import classes from './Home.scss';

const home = () => (

    <div className={classes.Home + " text-center"}>
        <h4>
            Welcome!
        </h4>
        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, ad. Quaerat eligendi rem debitis aliquam necessitatibus. Adipisci deleniti nostrum ex sit alias neque, officia nesciunt asperiores necessitatibus. Quas, dolore labore?
        </p>
        <h4>
            Reservation
        </h4>
        <p className={classes.Reservation_Paragraph}>
        Please call us to book your reservation:
        </p>
        <span>
        (800)-800-0000
        </span>
    </div>
)

export default home