import React from 'react';

import ReactAux from '../../hoc/ReactAux/ReactAux';

import classes from './Aside.scss';

import dataBase from '../../assets/data/Aside/dataBase';


const aside = (props) => {
    const url = props.match.path.split('/').slice(1).toString();
    return (
        <div className={classes.Aside}>
        {dataBase[url].map((data, index) => {
            let paragraphClass = data.paragraph.className;
            console.log(data);
            return (
                <ReactAux key={index}>
                    {data.header ? <h4>{data.header}</h4> : null}   
                    <p className={classes[paragraphClass]}>{data.paragraph.text}</p>
                    {data.paragraphBold ? <p>{data.paragraphBold.text}</p> : null}
                </ReactAux>
            )
        })
    }

    </div>
    )
}

   

export default aside

